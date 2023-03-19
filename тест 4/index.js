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
		props.maxNumber = props.remainder;
		props.carentNumber = props.newArray[i];
		props.remainder = props.maxNumber - props.carentNumber
	}



	if (!props.newArray) {
		props.newArray = filterMyArray(i, props)
	}
	else if (props.newArray) {
		props.newArray = filterMyArray(i, props)
	}
	console.log(props.newArray);
	if (props.newArray.length === 0) return false;
	else if (props.newArray === true) return true
	props.foundNumber = findMyRemainder(i, props)
	if (props.foundNumber) return props.foundNumber;
	//else if (remainder) return remainder

	//findRemainder(remainder, arr, maxNumber, theLastElement)

	for (let j = 0; j < props.newArray.length; j++) {
		console.log("second loop " + j);
		findSolutionFunction(j, props)
		if (props.foundNumber || props.newArray === true) return true
	}
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
		maxNumber: arr.pop(),
		reverseArray: [...arr].reverse(),
		newArray: null,
		remainder: null,
		foundNumber: null,
		carentNumber: null
	}


	for (let i = 0; i < props.reverseArray.length; i++) {
		console.log(i);
		foundNumber = findSolutionFunction(i, props);
		if (props.foundNumber || props.newArray === true) return true
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
