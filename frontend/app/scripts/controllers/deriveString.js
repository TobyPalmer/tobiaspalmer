
var vocals = ['a','e','i','o','u','y','å','ä','ö'];

var isVocal = function(theChar){
	for(var j=0; j<vocals.length; j++){
		if(theChar == vocals[j]){
			return j;
		}
	};
	return 100;
}

var derive = function(theString){

	var stringToReturn = "";

	for(var i = 0; i < theString.length; i++){
		var newVocalIndex = isVocal(theString[i]) - 1;
		if(newVocalIndex == -1){
			newVocalIndex = vocals.length-1;
		}

		if(newVocalIndex == 99){
			stringToReturn += theString[i];
		}
		else{
			stringToReturn += vocals[newVocalIndex];
		}
	};

	return stringToReturn;
};

var integrate = function(theString){

	var stringToReturn = "";

	for(var i = 0; i < theString.length; i++){
		var newVocalIndex = isVocal(theString[i]) + 1;
		if(newVocalIndex == vocals.length-1){
			newVocalIndex = 0;
		}

		if(newVocalIndex == 101){
			stringToReturn += theString[i];
		}
		else{
			stringToReturn += vocals[newVocalIndex];
		}
	};

	return stringToReturn;
};

console.log("derived: " + derive("love"));
console.log("integrated :" + integrate("love"));