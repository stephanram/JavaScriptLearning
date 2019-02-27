var arraySource = [
  { name: "Stephan", role: "SE" },
  { name: "Satkhi", role: "DB" },
  { name: "Azar", role: "QA" }
];

//Anonymous funciton
var isQA = function(item) { return item.role === "QA";};
//Explicit return
var isQAArrowFunction = (item) => { return item.role === "QA";};
//Implict return
var isQAArrowFunctionUpdated = item => item.role === "QA";

var result = arraySource.filter(isQAArrowFunctionUpdated);

//console.log(result);

//---------------------------------------------------------------
//Mapping Functions

var mapAsProfessional = (item) => { return { 'FirstName' : item.name, 'Role' : item.role }  } 
var mappedResult = arraySource.map(mapAsProfessional);
console.log(typeof(arraySource));
console.log(typeof(mappedResult));
console.log(mappedResult);
//---------------------------------------------------------------