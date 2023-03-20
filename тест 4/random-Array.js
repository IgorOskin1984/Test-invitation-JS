export function randomArray() {
	//debugger
	let array = []
	for (let i = 0; i < 3; i++) {
		array.push(Math.floor(Math.random() * 10))
		array.push(Math.floor(Math.random() * 25))
		//array.push(Math.floor(Math.random() * 30))
		//array.push(Math.floor(Math.random() * 40))
		array.push(Math.floor(Math.random() * 50))
	}

	//array.sort((a, b) => a - b)
	//console.log(array);
	return [0, 1, 1, 3, 3, 12, 18, 19, 43]
	//return array;
}