//Take in text stream of some sort
//This is _super_ inefficient, but general idea is to take in stream, check last five words, and return if a keyword
//is contained somewhere in there.
//TODO: Make this not break when multiple keywords are within the last five words
//Keep array of last five words
var lastFiveWords = [];
//Take in next word, add to lastFiveWords, and delete as needed
function addWord(input){
    lastFiveWords.push(input.toLowerCase().replace(/(^,)|(,$)/g, ""));
    if(lastFiveWords.size > 5)
        lastFiveWords.shift();
    return checkLastFiveWords();
}
//Check for keyword in last five words
//Return: trigger word, suggestion, and score - as an object
function checkLastFiveWords(){
    for(var key in aggressiveObjects)
    {
        if(lastFiveWords.indexOf(key) != -1)
            return {key:key, response: aggressiveObjects[key].response, score: aggressiveObjects[key].score}
    }
    for(var key in exemplaryObjects)
    {
        if(lastFiveWords.indexOf(exemplaryObjects) != -1)
            return {key:key, response: exemplaryObjects[key].response, score: exemplaryObjects[key].score}
    }
}


//True or false for whether or not it's aggressive
function isAggressive(input) {
    if(aggressiveObjects[input]) //This is if the object contains the key given from input.
        return true;
    return false;
}

//True or false for whether or not it's exemplary
function isExemplary(input) {
    if(exemplaryObjects[input])
        return true;
    return false;
}

//Check aggressive, return suggestions if found, null otherwise
function checkAggressive(input) {
    if(aggressiveObjects[input])
    {
        return aggressiveObjects[input].response;
    }
    return null;
}

//Check exemplary, return suggestions if found, null otherwise
function checkExemplary(input) {
    if(exemplaryObjects[input])
    {
        return exemplaryObjects[input].response;
    }
    return null;
}

//Assume everything is lowercase
const aggressiveObjects = {
    "guys": {response:"people, folks", score:-1},
    "dudes": {response:"people, folks", score:-1},
    "what she's trying to say": {response:"what I hear her saying", score:-1},
    "do you understand": {response:"(just don't say that)", score:-1},
    "take this offline": {response:"(Are you excluding people?)", score:-1}
    //"": {response:"", score:1},
    //"": {response:"", score:1},
    //"": {response:"", score:1}
};

const exemplaryObjects = {
    "thank you": {response:"Shows appreciation", score:1},
    "please continue your thought": {response:"Counters interruptions", score:1},
    //"": {response:"", score:-1}
};


console.log("guys");
console.log(isAggressive('guys'));
console.log("what she's trying to say");
console.log(isAggressive('what she\'s trying to say'));
console.log("do you understand");
console.log(isAggressive('do you understand'));
console.log("take this offline");
console.log(isAggressive('take this offline'));
console.log("neutral");
console.log(isAggressive('neutral'));
console.log("exemplary - thank you");
console.log(isExemplary('thank you'));
console.log("exemplary - please continue your thought");
console.log(isExemplary('please continue your thought'));
console.log("------------------------");
console.log("Now for responses/null");
console.log("guys");
console.log(checkAggressive('guys'));
console.log("what she's trying to say");
console.log(checkAggressive('what she\'s trying to say'));
console.log("do you understand");
console.log(checkAggressive('do you understand'));
console.log("take this offline");
console.log(checkAggressive('take this offline'));
console.log("neutral");
console.log(checkAggressive('neutral'));
console.log("exemplary - thank you");
console.log(checkExemplary('thank you'));
console.log("exemplary - please continue your thought");
console.log(checkExemplary('please continue your thought'));
console.log("------------------------");
console.log("Now for checkLastFiveWords");
console.log("Hey guys, did you see");
console.log(addWord("Hey"));
//console.log(addWord("guys,"));
console.log(addWord("did"));
console.log(addWord("you"));
console.log(addWord("see"));
console.log(addWord("thank"));
console.log(addWord("you"));
