export function randomArray() {
	let array = []
	for (let i = 0; i < 5; i++) {
		array.push(Math.floor(Math.random() * 15))
		for (let j = 0; j < 5; j++) {
			array.push(Math.floor(Math.random() * 100))
		}
	}
	//array.sort((a, b) => a - b)
	//console.log(array);
	//return [0, 2, 3, 10, 11, 14, 15, 16, 24]
	return [92, 91, 77, 76, 74, 74, 73, 56, 46, 40, 38, 38, 36, 36, 32, 32, 27, 24, 16, 15, 14, 14, 11, 10, 7, 7, 7, 6, 5]
	//[3, 3, 4, 7, 8, 9, 17, 22, 23, 24, 26, 26, 28, 30, 34, 44, 46, 49, 51, 58, 59, 68, 69, 71, 74, 79, 87, 89, 94]
	//return array;
}