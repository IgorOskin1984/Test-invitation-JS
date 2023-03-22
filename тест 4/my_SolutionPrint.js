export const solutionCheckAndPrint = (props) => {
	if (!props.solutionIsFound) {
		return console.log('solution is not found');
	}
	else {
		if (props.foundNumbersArray.length) {
			let sum = props.foundNumbersArray.reduce((acc, el) => { return acc + el })
			if (props.maxNumber === sum) {
				return console.log(`solution is ${props.maxNumber} = ${props.foundNumbersArray.join(' + ')}`);
			}
			else console.log('dont know');
		}
		else console.log('dont know');
	}
}