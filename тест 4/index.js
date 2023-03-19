function randomArray() {
	let array = []
	for (let i = 0; i < 2; i++) {
		array.push(Math.floor(Math.random() * 5))
		for (let j = 0; j < 4; j++) {
			array.push(Math.floor(Math.random() * 25))
		}
	}
	//array.sort((a, b) => a - b)
	//console.log(array);
	return [0, 2, 3, 7, 10, 11, 14, 15, 16, 24]
	//return array;
}

const filterMyArray = (i, props) => {
	const filterArray = (arrayItem) => {
		return arrayItem <= props.remainder
	}
	//debugger
	let newArr = props.reverseArray.filter(filterArray);
	let sum;
	if (newArr.length > 0) {
		sum = newArr.reduce((acc, val) => { return acc + val; })
	}

	if (sum === props.remainder) {
		solutionPrint(i, props)
		return true;
	}
	return newArr
}

const findMyRemainder = (i, props) => {
	const findRemainder = (arrayItem) => {
		//let sum = props.newArray.reduce((acc, val) => { return acc + val; })
		if (arrayItem === props.remainder) {
			solutionPrint(i, props)
			return true;
		}
	}
	return props.newArray.find(findRemainder);
}

const solutionPrint = (i, props, remainder) => {
	//debugger
	console.log(`${props.maxNumber} ${remainder} ${props.carentNumber} `);
	return true
}

const findSolutionFunction = (i, props) => {
	console.log(props);

	if (!props.newArray) {
		props.carentNumber = props.reverseArray[i];
		props.remainder = props.maxNumber - props.carentNumber;
	}
	else if (props.newArray) {
		if (props.arrayForSecondLoop && i > 0) {
			props.maxNumber = props.maxNumber;
			props.carentNumber = props.arrayForSecondLoop[i];
			props.remainder = props.maxNumber - props.carentNumber
		}
		else {
			props.maxNumber = props.remainder;
			props.carentNumber = props.newArray[i];
			props.remainder = props.maxNumber - props.carentNumber
		}
	}

	console.log(props);



	props.newArray = filterMyArray(i, props)


	console.log(props.newArray);


	if (props.newArray.length === 0) return false;
	else if (props.newArray === true) return true;

	props.foundNumber = findMyRemainder(i, props)
	if (props.foundNumber) return props.foundNumber;
	//else if (remainder) return remainder

	//findRemainder(remainder, arr, maxNumber, theLastElement)


	//const newRemaindner = remainder - newArray[0];
	//console.log(newRemaindner);
	//findRemainder(newRemaindner, reverseArray, maxNumber, newArray, theLastElement)
}

function ArrayChallenge(arr) {
	// code goes here  
	console.log('sdfsdfsdtrue');
	return true
}

function ArrayAdditionI(arr) {
	//debugger
	const props = {
		arr: arr.sort(function (a, b) { return a - b }),
		mainMaxNumber: arr.pop(),
		maxNumber: null,
		reverseArray: [...arr].reverse(),
		newArray: null,
		arrayForSecondLoop: null,
		remainder: null,
		foundNumber: null,
		carentNumber: null
	}

	props.maxNumber = props.mainMaxNumber


	for (let i = 0; i < props.reverseArray.length; i++) {
		//debugger
		console.log(i);
		foundNumber = findSolutionFunction(i, props);
		props.arrayForSecondLoop = props.newArray;
		if (props.foundNumber || props.newArray === true) return true
		else {
			for (let j = 0; j < props.arrayForSecondLoop.length; j++) {
				console.log("second loop " + j);
				findSolutionFunction(j, props)
				if (props.foundNumber || props.newArray === true) return true
			}
		}
	}

	console.log('true');
	return true

	//const findRemainder = (remainder, array, maxNumber, newArray, theLastElement) => {
	//	array.forEach(el => {
	//		if (remainder === el) {
	//			theLastElement = el
	//			return solutionPrint(newArray, maxNumber, theLastElement)
	//		}
	//	});
	//}

}


// keep this function call here 
console.log(ArrayChallenge(ArrayAdditionI(randomArray())));
