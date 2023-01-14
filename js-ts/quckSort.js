function quickSort(arr) { //define th function
	
	if (arr.length <= 1) return arr; //the terminate condition

	// pick up the middle one as basevalue
	const baseIndex = Math.floor(arr.length / 2);
	const baseVal = arr.splice(baseIndex, 1)[0];
	// divide into two sub array, left store values less than baseVal, right for greater ones
	const left = [];
	const right = [];

	for (let i = 0; i < arr.length; i++) {
		//left for less ones, right for greater ones
		if (arr[i] < baseVal) {
			left.push(arr[i]); 
		} else {
			right.push(arr[i]);
		}
	}
	// concat left, baseVal, right to a new array
	return quickSort(left).concat(baseVal, quickSort(right)); //the equatin of  relationship
}

console.log(quickSort([3,5,7,87,23,0,2,45,12]));
