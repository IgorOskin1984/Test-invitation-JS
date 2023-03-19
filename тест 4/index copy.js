function ArrayChallenge(arr) {
	// code goes here  
	return arr;
}

function ArrayAdditionI(arr) {
	arr.sort(function (a, b) { return a - b });
	console.log(arr);

	var maxNum = arr.pop();
	console.log(arr);
	console.log(maxNum);
	var tot = 0;

	for (var i = 0; i < arr.length; i++) {
		tot += arr[i];
		for (var j = 0; j < arr.length; j++) {
			if (i != j) {
				tot += arr[j];
				if (tot == maxNum) {
					return true;
				}
			}
		}

		for (var k = 0; k < arr.length; k++) {
			if (i != k) {
				tot -= arr[k];
				if (tot == maxNum) {
					return true;
				}
			}
		}
		tot = 0;
	}

	return false;

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
	return array
}


// keep this function call here 
console.log(ArrayChallenge(ArrayAdditionI(randomArray())));
