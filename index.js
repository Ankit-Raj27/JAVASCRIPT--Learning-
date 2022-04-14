// 1> ****WAYS TO WRITE IN JS******
//   console.log("Hello World!");
//   alert("ME");
//   document.write("This is doucument write!");

// 2> ****CONSOLE API IN JAVASCRIPT*********
// console.log("Hello World!", 4 + 4, "Another log");
// console.warn("This is warning!");
// console.error("This is an error!");


// 3> *****JAVASCRIPT VARIABLES*****
// What are variables?? --> Containers to store data values.

var number1 = 34;
var number2 = 89;
// console.log(number1+number2);

// 4> *****DATA TYPES IN JS *******
// String
var str1 = "This is a string";
var str2 = 'This is a string';

// Numbers
var num1 = 673;
var num2 = 849.23;

// OBJECTS
var marks = {
    ravi : 46,
    harry : 81,
    ankit : 100
}
// console.log(num1);
// console.log(marks);

// BOOLEANS
// var a = true;
// var b = false;
// console.log(a,b);

var und = undefined;
// console.log(undefined);

var n = null;
// console.log(n);

/* At a very high level, there are 2 types of datatypes in JS :- 
1> PRIMITIVE DATA TYPES  -- undefined, null, numbers, string, boolean, symbol

2> REFERENCE DATA TYPES  -- Arrays, Objects 
*/

var arr = [1,2,3,4,"ankit"];

// console.log(arr);
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[4]);

// ********** OPERATORS IN JS******

var a = 89;
var b = 69;
// console.log("The value of a + b = ", a+b);
// console.log("The value of a - b = ", a-b);
// console.log("The value of a * b = ", a*b);
// console.log("The value of a / b = ", a/b);

//*********ASSIGNMENT OPERATOR********* 
var c = b ;
// c += 2; // c = c+2
c -= 2; // c = c-2
// console.log(c);


// *******COMPARISON OPERATOR*****
var x = 34 ; 
var y = 67; 
// console.log(x==y);
// console.log(x>=y);
// console.log(x<=y);
// console.log(x<y);
// console.log(x>y);

// ****LOGICALL OPERATOR*****
        // LOGICAL AND
// console.log(true && false);
// console.log(true && true);
// console.log(false && false);
// console.log(false && true);
//     //LOGICAL OR
// console.log(true || false);
// console.log(true || true);
// console.log(false || false);
// console.log(false || true);
//     //    LOGICAL NOT
// console.log(!true);
// console.log(!false);


// *******FUNCTION IN JAVASCRIPT********
function avg(a,b)
{
    return (a+b)/2;
}

// DRY = DON'T REPEAT YOURSELF
c1 = avg(4,8);
c2 = avg(4,16);
// console.log(c1,c2);

// CONDITIONALS IN JS

age = 15;
// SINGLE if STATEMENT
// if (age > 17)
// {
//     console.log("You're not a kid!");
// }

// if - else statement
// if (age > 17)
// {
//     console.log("You're not a kid!");
// }
// else
// {
//     console.log("You're a kid!");
// }

// if-else LADDER
/*
if(age>32)
{
    console.log("You're not a kid");
}
else if(age > 26)
{
    console.log("Bachhe ni rhe");
}

else if(age > 22)
{
    console.log("Jwaan ni rhe");
}

else if(age > 18)
{
    console.log("Bachpna gya");
}
else
{
    console.log("Bachhe ho abhi");
}
console.log("End of ladder!");
*/


