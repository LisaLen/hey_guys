//Take in text stream of some sort

function isAggressive(input) {
    return true;              // The function returns the product of p1 and p2
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
};


console.log("guys\n");
console.log(isAggressive('guys'));
console.log("what she's trying to say\n");
console.log(isAggressive('what she\'s trying to say'));
console.log("do you understand\n");
console.log(isAggressive('do you understand'));
console.log("neutral\n");
console.log(isAggressive('neutral'));
console.log("good\n");
console.log(isAggressive('good'));