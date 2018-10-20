var string = `Hey guys, did you see the P1 Defect? 
\n We need to have a fix in the next hour. 
\n Rebecca, you realized the error. What is the root cause?
\n When the user click OK, they are not brought to the next page, as expected
\n What she's trying to say is there’s an error in HER code starting at line 45. I have the fix ready to send.
\n I think the root cause is actually a conflict starting at Line 50 that redirects after line 45 fires.
\n Guys, these are potential root causes.  Rebecca, please finish your thought.
\n I am in agreement with Lena, the root cause is the conflict on line 50. Here, I’m sharing my screen and we can trace it. A good fix could be ….”`

stringArr = string.split(' ');

////APRIL'S LOOKUP OBJ
//Take in text stream of some sort

function isAggressive(input) {
    if(aggressiveObjects[input]) {
        return aggressiveObjects[input];
    }
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

// console.log(isAggressive('guys'))

////JQUERY


$( document ).ready(function() {
    console.log( "ready!" );

    var appendWord = () => {
		let word = stringArr.shift(1);
		console.log(word);
		$("#mainbox").append(word + " ");
	}	

	var startConvo = () => {
		console.log('convo started');
		if (stringArr.length > 0) {
			window.setInterval(appendWord, 300);	
		} else {
			window.clearInterval();
		}
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