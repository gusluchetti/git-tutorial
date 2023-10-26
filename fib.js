console.log(fib(16));

function fib(pos) {
  if (pos == 1 || pos == 0) {
    return pos;
  } else {
    let result = fib(pos - 2) + fib(pos - 1);
    return result;
  }
}
