function add(n1: number, n2: number) {
  return n1 + n2;
  // return 'string';
}

function printResult() {
  return "Result";
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

// CombineValues is Function type with two 
// parameter of type number and who return a number type
let combineValues: (a: number, b:number) => number;

combineValues = add;
// combineValues = printResult;
// combineValues = 5;

console.log(combineValues(8, 8));

addAndHandle(10, 20, (result) => {
  console.log(result);
});