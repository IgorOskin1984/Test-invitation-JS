function StringChallenge(str) {

	// code goes here  
	return str;

}
const readline = (text) => {
	const regExpr = new RegExp("^.*[^A-z].*$");
	//debugger
	if (text.match(regExpr)) {
		console.warn('Only latins letters please. No spaces also.');
		return text
	}
	else {
		return textArray = text.split('').sort().join('')
	}
}

// keep this function call here 
console.log(StringChallenge(readline('sdjiashdv')));
//console.log(StringChallenge(readline()));