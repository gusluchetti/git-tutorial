// indice 9, queremos que o resultado seja 34!
console.log(fib(9));

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, ...
function fib(pos) {
    console.log(`início de fib(${pos})`);
    if (pos == 0 || pos == 1) {
        return pos;
    } else {
        let result = fib(pos - 3) + fib(pos - 1);
        return result;
    }
}
