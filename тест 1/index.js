function StringChallenge(str) {
	if (typeof str !== 'string') {
		return console.warn('not a srting');
	}
	const password = 'ct4asdfsdf';
	const passwordArray = password.split('');

	let strArray = str.split(' ');
	let capitaizedString = '';

	strArray.forEach(i => {
		capitaizedString += i.charAt(0).toUpperCase() + i.slice(1) + " "
	});

	const newArr = capitaizedString.slice(0, -1).split('');
	let totalResultString = ''
	newArr.forEach((element, index) => {
		passwordArray[index]
			? totalResultString += element + passwordArray[index]
			: totalResultString += element
	});

	// code goes here  
	return totalResultString;

}

// keep this function call here 
//console.log(StringChallenge(readline('hellow world')));
console.log(StringChallenge('hello world'));
