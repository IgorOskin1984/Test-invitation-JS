export function randomArray() {
	let array = []
	for (let i = 0; i < 2; i++) {
		array.push(Math.floor(Math.random() * 5))
		for (let j = 0; j < 4; j++) {
			array.push(Math.floor(Math.random() * 25))
		}
	}
	//array.sort((a, b) => a - b)
	//console.log(array);
	//return [0, 2, 3, 10, 11, 14, 15, 16, 24]
	return [2, 3, 8, 14, 24]
	//return array;
}