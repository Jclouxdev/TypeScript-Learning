function add(n1: number, n2: number) {
  return n1 + n2;
  // return 'string';
}

function printResult() {
  return "Result";
}

// CombineValues is Function type with two 
// parameter of type number and who return a number type
let combineValues: (a: number, b:number) => number;

combineValues = add;
// combineValues = printResult;
// combineValues = 5;

console.log(combineValues(8, 8));