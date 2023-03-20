export const solutionPrint = (props, text) => {
	//debugger
	if (!props.solutionIsFound) {
		return console.log('solution is not found');
	}
	else if (props.foundNumbersArray.length) {
		return console.log(`${props.maxNumber} = ${props.carentNumber} + ${props.foundNumbersArray.join(' + ')}`);
	}
	else return console.log(`${props.maxNumber} = ${props.carentNumber} + ${props.foundNumber}`);
	//return console.log(`${props.maxNumber} ${remainder} ${props.carentNumber} `);

}