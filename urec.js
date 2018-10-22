function search(arr, searchTerm) {
  let counter = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === searchTerm) {
      counter += 1;
    }
    if (Array.isArray(arr[i])) {
      counter += search(arr[i], searchTerm);
    }
  }
  return counter;
}

let myArr = ["tom", ["tom", ["tom"]], "tom"];

console.log(search(myArr, "tom"));

function sumDig(n) {
  let arr = n.toString().split("");
  let result = +arr[0];
  if (arr.length === 1) return result;
  return (result += sumDig(+arr.slice(1).join("")));
}

console.log(sumDig(1432));
