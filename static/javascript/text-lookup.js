//Take in text stream of some sort

function isAggressive(input) {
    if(aggressiveObjects[input]) //This is if the object contains the key given from input.
        return true;
    return false;
}

function isExemplary(input) {
    if(exemplaryObjects[input])
        return true;
    return false;
}

const aggressiveObjects = {
    "guys": {replacement:"people, folks", score:1},
    "what she's trying to say": {replacement:"what I hear her saying", score:1},
    "do you understand": {replacement:"(just don't say that)", score:1},
    "take this offline": {replacement:"(Are you excluding people?)", score:1}
    //"": {replacement:"", score:1},
    //"": {replacement:"", score:1},
    //"": {replacement:"", score:1}
};

const exemplaryObjects = {
    "thank you": {whyGood:"Shows appreciation", score:-1},
    "please continue your thought": {whyGood:"Counters interruptions", score:-1},
    //"": {replacement:"", score:-1}
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
