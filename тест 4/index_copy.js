function ArrayChallenge(arr) {
	// code goes here  
	return arr;
}

function ArrayAdditionI(arr) {

	arr.sort(function (a, b) { return a - b });
	var maxNum = arr.pop();
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
	for (let i = 0; i < 10; i++) {
		array.push(Math.floor(Math.random() * 10))
	}
	return array
}

console.log(randomArray());
// keep this function call here 
console.log(ArrayChallenge(ArrayAdditionI(randomArray())));

function ArrayAdditionI(arr) {

	// sort array ascending
	arr = arr.sort(function (a, b) { return a - b });

	var max = arr.pop();

	function lookForSolution() {
		function search(sum, i) {
			if (sum == max) {
				return true;
			}
			else if (sum > max || i == arr.length) {
				return null;
			}
			else {
				return search(sum + arr[i], i + 1) ||
					search(sum, i + 1);
			}
		}

		// start search with sum of zero in position zero:
		return search(0, 0);
	}

	return lookForSolution() || false;

}

// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
ArrayAdditionI(readline());  
