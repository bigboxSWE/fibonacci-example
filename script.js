// make it work

let i;
let fib = [0, 1];

for (i = 2; i <= 10; i++) {
  fib[i] = fib[i - 2] + fib[i - 1];
  console.log(fib[i]);
}

// make it good

function fibonacci(n) {
   return n < 1 ? 0
        : n <= 2 ? 1
        : fibonacci(n - 1) + fibonacci(n - 2)
}

console.log(fibonacci(4))

// make it fast

function fibonnaciFaster(n) {
    let phi = (1 + Math.sqrt(5))/2;
    let asymp = Math.pow(phi, n) / Math.sqrt(5);
    return Math.round(asymp);
}

