function add(n1, n2) {
    return n1 + n2;
    // return 'string';
}
function printResult() {
    return "Result";
}
function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
// CombineValues is Function type with two 
// parameter of type number and who return a number type
var combineValues;
combineValues = add;
// combineValues = printResult;
// combineValues = 5;
console.log(combineValues(8, 8));
addAndHandle(10, 20, function (result) {
    console.log(result);
});
