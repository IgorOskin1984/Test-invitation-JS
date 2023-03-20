export const bubleSort = (arr, remainder, props) => {

	const additionBreake = (sum, remainder, i) => {
		for (let j = 0; j < arr.length; j++) {
			if (j > i) {
				sum = sum + arr[j]
				if (sum > remainder) return false
				else if (sum === remainder) {
					props.foundNumber = sum

					return true
				}
			}
		}
	}
	debugger
	for (let i = 0; i < arr.length; i++) {
		let sum = 0;
		sum = arr[i];

		props.solutionIsFound = additionBreake(sum, remainder, i)

	}

	return console.log(props.solutionIsFound);

}