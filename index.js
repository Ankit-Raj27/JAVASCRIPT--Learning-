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
var str2 = "This is a string";

// Numbers
var num1 = 673;
var num2 = 849.23;

// OBJECTS
var marks = {
  ravi: 46,
  harry: 81,
  ankit: 100,
};
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

var arr = [1, 2, 3, 4, "ankit"];

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
var c = b;
// c += 2; // c = c+2
c -= 2; // c = c-2
// console.log(c);

// *******COMPARISON OPERATOR*****
var x = 34;
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
function avg(a, b) {
  return (a + b) / 2;
}

// DRY = DON'T REPEAT YOURSELF
c1 = avg(4, 8);
c2 = avg(4, 16);
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

var arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(arr);
// for(var i = 0; i<arr.length;i++)
// {
//     if(i==2)
//     {
//         // break;
//         continue;
//     }
//     console.log(arr[i]);
// }

// arr.forEach(function(element)
// {
//     console.log(element);
// })

// const ac =0;
// ac = ac+1;     //WONT CHANGE AS CONST VARIABLES ARE FIXED

// let j = 0;
// while(j<arr.length)
// {
//     console.log(arr[j]);
//     j++;
// }

// do {
//   console.log(arr[j]);
//   j++;
// } while (j < arr.length);
// {
// }

let myArr = ["fan","camera",69,null,true];
// ARRAY METHODS

// console.log(myArr.length);
// myArr.pop();                   //Removes last array
// myArr.push("Ankit");           //Adds an array from right
// myArr.shift();                 //Removes first array
// myArr.unshift("Harry");           //Adds an array from left
// console.log(myArr.unshift("Harry"));           //Adds an array from left

const newLen = myArr.unshift("Ankit")
// console.log(newLen);

// console.log(myArr);

// *******STRING METHODS********

let myLovelyString = "Ankit is is fuckin awesome awesome!";
// console.log(myLovelyString.length);
// console.log(myLovelyString.indexOf("is"));
// console.log(myLovelyString.lastIndexOf("is"));

// console.log(myLovelyString.slice(1,10));   // SLICE PRINTS FROM N to N-1 INDEX
// d=myLovelyString.replace("Ankit", "Raj")
// d = d.replace("awesome", "shit");
// console.log(d,myLovelyString);

// **********DATE*******
let myDate = new Date();
// console.log(myDate);
// console.log(myDate.getTime());
// console.log(myDate.getFullYear());
// console.log(myDate.getUTCDay());
// console.log(myDate.getHours());


// ***********DOM MANIPULATION*******

let elem =document.getElementById('click')
// console.log(elem);
let elemClass = document.getElementsByClassName("container")
// console.log(elemClass);
// elemClass[0].style.background = "yellow";
// elemClass[0].classList.add("bgprimary");
// elemClass[0].classList.add("text-success");
// console.log(elemClass[0].innerHTML);
// console.log(elemClass[0].innerHTML);

// console.log(elem.innerHTML);
// console.log(elem.innerText);

tn = document.getElementsByTagName("div");
// console.log(tn);
createElement = document.createElement("p");
createElement.innerText = "This is a crated para";
tn[0].appendChild(createElement);
createElement2 = document.createElement("b");
createElement2.innerText = "This is a crated bold";
tn[0].replaceChild(createElement2, createElement)

// removeChild(element)           ----> Removes Child

// ***** SELECTIGN USEING QUERY

sel = document.querySelector(".container");
// console.log(sel);
sel = document.querySelectorAll(".container");
// console.log(sel);

//  EVENTS IN JAS

function clicked()
{
    // console.log("The button was clicked");
}

window.onload = function()
{
    // console.log("The document was laoded.");
}

// firstContainer.addEventListener("click", function()
// {
//     document.querySelectorAll(".container")[1].innerHTML = "<b> We have clicked </b>"
//     console.log("Clicked on container");
// })

// firstContainer.addEventListener("mouseover", function()
// {
//     console.log("Mouse on container");
// })

// firstContainer.addEventListener("mouseout", function()
// {
//     console.log("Mouse out of container");
// })

// let prevHTML = document.querySelectorAll(".container")[1].innerHTML;
// firstContainer.addEventListener("mouseup", function()
// {
//     document.querySelectorAll(".container")[1].innerHTML = prevHTML;
//     console.log("Mouse up when clicked on container");
// })
// firstContainer.addEventListener("mousedown", function()
// {
//     document.querySelectorAll(".container")[1].innerHTML = "<b> We have clicked </b>";
//     console.log("Mouse down when clicked on container");
// })


// ***Arrow Function
// function sum(a,b){
//     return a+b;
// }

sum = (a,b) => {
    return a+b;
}

// *****SET TIMEOUT AND SET INTERVAL

logKaro = () =>
{
    document.querySelectorAll(".container")[1].innerHTML = "<b> SetTismout fired </b>"
    // console.log("I am your log.")
} 
clr = setTimeout(logKaro, 5000);
// setInterval(logKaro,2000); 
// clr = setInterval(logKaro,2000); 

// ********** use clearTimeOut/clearInterval to cancel setIntervals/setTimeOut

// LOCAL STORAGE

// localStorage.setItem("Name", "Ankit");
// localStorage.getItem("Name")
// localStorage.removeItem("Name")
// localStorage.clear();

// *******JSON********

// obj = {name:"Ankit", length:1, "a":{this : 'tha"t'}};
// jso =JSON.stringify(obj);
// console.log(typeof obj)
// console.log(typeof jso);
// console.log(jso);

// parsed = JSON.parse(`{"name":"Ankit","length":1,"a":{"this":"that"}}`);
// console.log(parsed);

/// Template Literals /  BACK TICKS

a = 34;
console.log(`this is my ${a}`)