//Currying 
function multiply_1(a) {
    return function multiply_2(b) {
        return function multiply_3(c) {
            return a * b * c;
        }
    }
}

//Anonymous version
function multiply(a) {
    return (b) => {
        return (c) => {
            return a * b * c;
        }
    }
}

//Anonymous Inline version
//As everything are implicit returns
var result = (a) =>
                (b) =>
                    (c) =>
                        a * b * c;
var AnonymousInlineImplictresult = result(5)(6)(7);

//currying
var result_1 = multiply_1(5);
console.log(result_1);
var result_2 = result_1(6);
console.log(result_2);
var curryResult = result_2(7);
console.log(curryResult);

var simplifiedCurryResult = multiply_1(5)(6)(7);


//Simplified version with anonymous function
var anonymousResult = multiply(5)(6)(7);


console.log('curryResult ' + curryResult);
console.log('simplifiedCurryResult ' + simplifiedCurryResult);
console.log('anonymousResult ' + anonymousResult);
console.log('AnonymousInlineImplictresult ' + AnonymousInlineImplictresult);

