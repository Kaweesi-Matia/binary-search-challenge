module.exports = sqrt;
function sqrt(number) {
	return sqrt_recursive(number, 0, number);
}

function sqrt_recursive(number, min_interval, max_interval) {
	// write your code here
	while (min_interval <= max_interval) {
		let mid_interval = Math.floor((min_interval + max_interval) / 2);
		const square = mid_interval * mid_interval;
		if (square === number) {
			return mid_interval;
		} else if (square < number) {
			min_interval = mid_interval + 1;
		} else max_interval = mid_interval - 1;
	}
	return -1;
}

console.log(sqrt(25));
console.log(sqrt(7056));
