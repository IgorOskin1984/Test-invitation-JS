export const firstIndexPlusNextIndexLoop = (j, arr, remainder, props) => {
	for (let i = 0; i < arr.length; i++) {
		let sum = 0;
		for (let j = 0; j < arr.length; j++) {
			if (j > i) {
				sum = arr[i] + arr[j]
				if (sum === remainder) {
					props.foundNumbersArray.push(props.carentValue, arr[i], arr[j])
					console.log(props.foundNumbersArray);
					props.foundNumber = sum;
					props.solutionIsFound = true
					return true
				}
			}
		}
	}
	return props.solutionIsFound;
}