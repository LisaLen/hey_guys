//Take in text stream of some sort

function isAggressive(input) {
    if(aggressiveObjects.contains(input))
        return true;
    return false;
}



const aggressiveObjects = {
    "guys": {replacement:"people, folks", score:1},
    "what she's trying to say": {replacement:"what I hear her saying", score:1},
    "do you understand": {replacement:"(just don't say that)", score:1},
    //"": {replacement:"", score:1},
    //"": {replacement:"", score:1},
    //"": {replacement:"", score:1}
};

const exemplaryObjects = {
    //"": {replacement:"", score:-1},
    //"": {replacement:"", score:-1},
    //"": {replacement:"", score:-1}
    //Adding to get changed file for commit.
};


console.log("guys");
console.log(isAggressive('guys'));
console.log("what she's trying to say");
console.log(isAggressive('what she\'s trying to say'));
console.log("do you understand");
console.log(isAggressive('do you understand'));
console.log("neutral");
console.log(isAggressive('neutral'));
console.log("good");
console.log(isAggressive('good'));