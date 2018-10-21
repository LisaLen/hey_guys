var string = `
Hey dudes, did you see the P1 Defect? 
We need to have a fix in the next hour. 
Thank you, Rebecca. You realized the error. What is the root cause? 
When the user click OK, they are not brought to the next page, as expected
What she's trying to say is there’s an error in HER code starting at line 45. I have the fix ready to send.
I think the root cause is actually a conflict starting at Line 50 that redirects after line 45 fires.
Guys, these are potential root causes.  Rebecca, please continue your thought
I am in agreement with Lena, the root cause is the conflict on line 50. Here, I’m sharing my screen and we can trace it. I recommend changing line 50 and 64.
Krish, are you ready for me to promote this fix? We can take this offline, if need be.`

stringArr = string.split(' ');

////APRIL'S LOOKUP OBJ
//Take in text stream of some sort

function isAggressive(input) {
    if(aggressiveObjects[input]) {
        return aggressiveObjects[input];
    }
    return false;
}
//Take in text stream of some sort
//This is _super_ inefficient, but general idea is to take in stream, check last five words, and return if a keyword
//is contained somewhere in there.
//TODO: Make this not break when multiple keywords are within the last five words
//Keep array of last five words



//Assume everything is lowercase
const aggressiveObjects = {
    "guys": {response:"people, folks", score:-1},
    "dudes": {response:"people, folks", score:-1},
    "what she's trying to say": {response:"what I hear her saying", score:-1},
    "do you understand": {response:"(just don't say that)", score:-1},
    "take this offline": {response:"(Are you excluding people?)", score:-1},
    "thank you": {response:"Shows appreciation", score:1},
    "please continue your thought": {response:"Counters interruptions", score:1},
};


////JQUERY
$( document ).ready(function() {
    var lastFiveWords = [];
    var green = 128;
    var red = 100;


    function addWord(input){
        lastFiveWords.push(input.toLowerCase().replace(/(^,)|(,$)/g, ""));
        if(lastFiveWords.length > 5) {
            lastFiveWords.shift();
        }
        return checkLastFiveWords();
    }
//Check for keyword in last five words
//Return: trigger word, suggestion, and score - as an object
    function checkLastFiveWords(){
        var fiveWordsString = lastFiveWords.join(' ');
            for(var key in aggressiveObjects) {
                console.log(key, fiveWordsString.indexOf(key));
                if(fiveWordsString.indexOf(key) !== -1) {
                    console.log('TRIGGERED',aggressiveObjects[key]);
                    $("#triggerbox").append(`<p> ${key} </p>`);
                    $("#suggestedbox").append(`<p> ${aggressiveObjects[key].response} </p>`);
                    if (aggressiveObjects[key].score === 1) {
                        $("#scorebox").attr('class', 'far fa-smile smiley');
                        $("#scorebox").css("color", `rgb(0,${green + 50},0)`);
                    } else {
                        $("#scorebox").attr('class', 'far fa-frown-open');
                        $("#scorebox").css("color", `rgb(${red + 20},0,0)`);
                    }

                    lastFiveWords = [];
                    return {key:key, response: aggressiveObjects[key].response, score: aggressiveObjects[key].score}
                }
            }
    }

    //True or false for whether or not it's aggressive
    function isAggressive(input) {
        if(aggressiveObjects[input]) //This is if the object contains the key given from input.
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


    var appendWord = () => {
    	if (stringArr.length > 0) {
    		let word = stringArr.shift(1);
			$("#mainbox").append(word + " ");
            addWord(word);
    	}
	}

	var startConvo = () => {
		var appendLoop = window.setInterval(appendWord, 300);	
	}

	$("#startbutton").click(startConvo);
});


// console.log(appendWord(stringArr))

// -Write function that pops first word off array
// -Appends it to main box
// -Check if in aggression obj
// 	-

// -appendStr
// 	-Appends first element in array to main box
// 	-Runs helper func check agreession

// checkAggression Func
// 	-Looks up word in obj
// 	-If found, then add to aggressive word array