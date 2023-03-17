function StringChallenge(str) {

	// code goes here  
	return str;

}
const readline = (text) => {
	const regExpr = /^\S*$/
	if (!text.match(regExpr)) {
		console.warn('No spaces please.');
		return text
	}
	else {
		let textArrey = text.split('*');
		const firstHalf = textArrey[0].split('');
		const secondHalf = textArrey[1].split('');

		if (firstHalf.length !== secondHalf.length) {
			console.warn('Amount letters before * not equal amount letters after *');
			return false
		}
		else {
			let totalString = '';
			for (let i = 0; i < firstHalf.length; i++) {
				totalString += firstHalf[i] + secondHalf[i]
			}
			return totalString
		}
	}
}

// keep this function call here 
console.log(StringChallenge(readline('a25*b&d')));
