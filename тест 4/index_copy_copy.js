function ArrayChallenge(arr) {
	// code goes here  
	return arr;
}



function ArrayAdditionI(arr) {
	console.log(arr);
	let muxValue = arr.pop()
	console.log(muxValue);
	let totalSum = arr.reduce((a, b) => a + b)
	console.log(arr);
	let sum = 0;

	firstLoop(arr, sum, muxValue)


}

function firstLoop(arr, sum, muxValue) {
	//debugger
	for (let i = 0; i < arr.length; i++) {
		sum += arr[i]
		for (let j = 0; j < arr.length; j++) {
			if (j > i) {
				sum += arr[j]
				if (sum === muxValue) {
					return true
				}
			}
		}
		sum = 0;
	}
}

function randomArray() {
	let array = []
	for (let i = 0; i < 2; i++) {
		array.push(Math.floor(Math.random() * 5))
		for (let j = 0; j < 2; j++) {
			array.push(Math.floor(Math.random() * 15))
		}
	}
	array.sort((a, b) => a - b)
	return array
}



// keep this function call here 
console.log(ArrayChallenge(ArrayAdditionI(randomArray())));

