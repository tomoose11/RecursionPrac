let arr1 = [
  "Jeff",
  "john",
  ["hank", ["simon"], "jamie"],
  "matt",
  ["ham", "cheese"]
];
let ind = "";
let bool2 = false;
function arRec(index, arr) {
  for (let i = 0; i < arr.length; i++) {
    ind += i.toString();
    let bool = false;
    if (Array.isArray(arr[i])) {
      ind += arRec(index, arr[i]).toString();

      bool = true;
      ind = ind
        .split("")
        .slice(2, -1)
        .join("");
    }
    if (!bool) {
      console.log(ind, arr[i]);
      ind = ind
        .split("")
        .slice(0, -1)
        .join("");
    }
  }

  return ind.toString();
}

arRec("ff", arr1);
