/*
var arraySource = [
  { name: "Stephan", role: "SE" },
  { name: "Satkhi", role: "DB" },
  { name: "Azar", role: "QA" }
];

//---------------------------------------------------------------
//Filter Functions
//Anonymous funciton
var isQA = function (item) { return item.role === "QA"; };
//Explicit return
var isQAArrowFunction = (item) => { return item.role === "QA"; };
//Implict return
var isQAArrowFunctionUpdated = item => item.role === "QA";
//---------------------------------------------------------------

var result = arraySource.filter(isQAArrowFunctionUpdated);

//console.log(result);

//---------------------------------------------------------------
//Mapping Functions

var mapAsProfessional = (item) => { return { 'FirstName': item.name, 'Role': item.role } }
var mappedResult = arraySource.map(mapAsProfessional);
console.log(typeof (arraySource));
console.log(typeof (mappedResult));
console.log(mappedResult);
//---------------------------------------------------------------


//---------------------------------------------------------------
//Reduce function
var orders = [
  { amount: 100 },
  { amount: 200 },
  { amount: 300 },
  { amount: 400 },
  { amount: 500 },
];

var totalAmount = orders.reduce(function (sum, order) {
  return sum + order.amount;
}, '');

var arrowTotalAmount = orders.reduce((sum, order) => { return sum + order.amount.toString(); }, '');
var arrowTotalAmountUpdated = orders.reduce((sumArray, order) => { sumArray.push(order.amount.toString()); return sumArray; }, []);

console.log(arrowTotalAmountUpdated);
//--------------------------
*/

var fs = require('fs');

var output = fs.readFileSync('SampleJson.txt', 'utf8')
  .trim()
  .split('\r\n')
  .map(line => line.split('\t'))
  .reduce((result, record) => {
    result[record[0]] = result[record[0]] || []
    result[record[0]].push(
      {
        name: record[0],
        Designation: record[1],
        Sarlary: record[2],
        ResourceCount: record[3]
      }
    )
    return result;
  }, {})
  ;


console.log(JSON.stringify(output, null, 2));



//---------------------------------------------------------------
