function fibonacci(num) {
	int a = 0;
	int b = 1;
	int c = 0;
	for(let i=0; i<num; i++) {
		c = a + b;
		a = b;
		b = c;
	}
	return c;
} 

module.exports = fibonacci;
