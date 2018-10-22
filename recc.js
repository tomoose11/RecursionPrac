function reverseString(str) {
  let arr = str.split("");
  let result = [];
  if (arr.length === 1) return arr;
  result.push(arr[arr.length - 1]);
  return result.concat(reverseString(str.slice(0, arr.length - 1))).join("");
}

function fib(n, a = 0, b = 1, res = 1) {
  if (n === 1) {
    return res;
  }
  n--;
  return fib(n, (a = b), (b = res), (res = b + a));
}

function fib2(n, a = 0, b = 1, res = 1) {
  if (n === 1) return res;
  n--;
  a = b;
  b = res;
  res = a + b;
  return fib2(n, a, b, res);
}

console.log(fib2(8));
