function fib(n) { // define the function 
	if ( n<= 2 )	{ return 1 }; // termination condition
	return fib(n - 1) + fib(n - 2); // equaltion of relation
}

const testVal = 8;
console.log(fib(testVal));

for (let i=0; i <= testVal; i++) {
	console.table(fib(i));
}

