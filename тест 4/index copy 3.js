function ArrayChallenge(arr) {
	// code goes here  
	return arr;
}

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
	return [0, 1, 3, 4, 4, 5, 7, 10, 12, 16, 21]
}

function ArrayAdditionI(arr) {
	//debugger
	arr.sort(function (a, b) { return a - b });
	const maxNumber = arr.pop();
	let theLastElement = 0;

	let reverseArray = [...arr].reverse()


	//const findRemainder = (remainder, array, maxNumber, newArray, theLastElement) => {
	//	array.forEach(el => {
	//		if (remainder === el) {
	//			theLastElement = el
	//			return solutionPrint(newArray, maxNumber, theLastElement)
	//		}
	//	});
	//}

	const filterMyArray = (arr, remainder) => {
		const filterArray = (arrayItem) => {
			//debugger
			return arrayItem <= remainder
		}
		let newArr = arr.filter(filterArray);
		return newArr
	}
	const findMyRemainder = (arr, remainder, i) => {
		const findRemainder = (arrayItem) => {
			//debugger
			if (arrayItem === remainder) {
				debugger
				return solutionPrint(maxNumber, remainder, arr, i)
			}
		}
		return arr.filter(findRemainder);

	}

	const solutionPrint = (maxNumber, remainder, arr, i) => {
		//debugger
		return console.log(`${maxNumber} ${remainder} ${arr[i]} `);
	}





	const findSolutionFunction = (i, arr) => {
		//debugger
		console.log(maxNumber);
		const remainder = maxNumber - arr[i];
		console.log(remainder);
		console.log(arr);

		//debugger
		let newArray = filterMyArray(arr, remainder)
		console.log(newArray);
		if (newArray.length === 0) return false;

		console.log(findMyRemainder(newArray, remainder, arr, i));

		//findRemainder(remainder, arr, maxNumber, theLastElement)

		for (let j = 0; j < newArray.length; j++) {
			findSolutionFunction(j)
		}
		//const newRemaindner = remainder - newArray[0];
		//console.log(newRemaindner);
		//findRemainder(newRemaindner, reverseArray, maxNumber, newArray, theLastElement)
	}



}


for (let i = 0; i < reverseArray.length; i++) {
	findSolutionFunction(i, reverseArray)
}




// keep this function call here 
console.log(ArrayChallenge(ArrayAdditionI(randomArray())));
