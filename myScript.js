var fiboNumber = [1, 1];
for (var i = fiboNumber.length; i <= 12; i++) {
    fiboNumber[i] = fiboNumber[i - 2] + fiboNumber[i - 1];
}
console.log(fiboNumber);



function fib(n) {

    const result = [1, 1];
    for (var i = 2; i <= n; i++) {
        const a = result[(i - 2)];
        const b = result[(i - 1)];
        result.push(a + b);
    }
    console.log(result);
    return result[n];

};

console.log(fib(7));