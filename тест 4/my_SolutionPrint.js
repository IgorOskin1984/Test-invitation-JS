export const solutionPrint = (props) => {
	//debugger
	if (!props.solutionIsFound) {
		return console.log('solution is not found');
	}
	else if (props.foundNumbersArray.length) {

		let sum = props.foundNumbersArray.reduce((acc, el) => { return acc + el })
		if (props.maxNumber === sum) {
			return console.log(`foundNumbersArray.length ${props.maxNumber} = ${props.foundNumbersArray.join(' + ')}`);
		}
		else return console.log(`foundNumbersArray.length ${props.maxNumber} = ${props.carentValue} + ${props.foundNumbersArray.join(' + ')}`);
	}
	else return console.log(`${props.maxNumber} = ${props.carentValue} + ${props.foundNumber}`);
	//return console.log(`${props.maxNumber} ${remainder} ${props.carentValue} `);

}