export function randomArray() {
	//debugger
	let array = []
	for (let i = 0; i < 3; i++) {
		array.push(Math.floor(Math.random() * 50))
		array.push(Math.floor(Math.random() * -50))

		//array.push(Math.floor(Math.random() * 25))
		//array.push(Math.floor(Math.random() * 30))
		//array.push(Math.floor(Math.random() * 40))
		//array.push(Math.floor(Math.random() * 50))
		array.push(Math.floor(Math.random() * 100))
		array.push(Math.floor(Math.random() * 10))
		array.push(Math.floor(Math.random() * 1000))
	}

	array.sort((a, b) => a - b)
	console.log(array);
	return array;
	//console.log([-30, -22, -20, 2, 2, 6, 6, 17, 19, 21, 24, 86, 243, 633, 850]);
	//return [-30, -22, -20, 2, 2, 6, 6, 17, 19, 21, 24, 86, 243, 633, 850]
}