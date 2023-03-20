export const firstIndexPlusNextIndaxLoop = (j, arr, remainder, props) => {
	//debugger

	//console.log(j);
	//console.log(arr);
	//console.log(remainder);
	//console.log(props);

	for (let i = 0; i < arr.length; i++) {
		let sum = 0;
		//sum = arr[i]
		for (let j = 0; j < arr.length; j++) {
			if (j > i) {
				sum = arr[i] + arr[j]
				if (sum === remainder) {
					props.foundNumbersArray.push(arr[i], arr[j])
					props.foundNumber = sum;
					props.solutionIsFound = true
					return true
				}
			}
		}

	}
	//props.foundNumber = sum


	return props.solutionIsFound;
}