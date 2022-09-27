//1. WAYS TO PRINT IN JS
console.log("hello world");
//alert("me");
//document.write("this is used to write insde of document write ");


//2. JS console API

// console.log("HELLO WORLD 1");
// console.warn("this is warning");
// console.error("this is an error");
//  console.clear();



// 3. JS Variables
// What are Variables? - Containers to store data values


// Numbers
var number1 = 34;
var number2 = 56;
//console.log(number1 + number2);
/*
multi 
line 
commment
*/


// 4. Data types in JavaScript
// Numbers
var num1 = 455;
var num2 = 56.76;

// String
var str1 = "This is a string";
var str2 = 'This is also a string';

// Objects
var marks = {
    ravi: 34,
    shubham: 78,
    harry: 99.977
}
// console.log(marks);

var a = true;
var b = false;

var und = undefined;
var und1;
 console.log(und,und1);

var n = null;        //null vs undefined : in null we define value
                      // as null bt in undefined we forgot to provide value


/*
At a very high level, there are two types of data types in JavaScript
1. Primitive data types: undefined, null, number, string, boolean, symbol
2. Reference data types: Arrays and Objects
*/
var arr = [1, 2, 3, 4, 5, 6, "stv", "bri"];


// Operators in JavaScript
// Arithmetic Operators
var a = 100;
var b = 10;
// console.log("The value of a + b is ", a+b);
// console.log("The value of a - b is ", a-b);
// console.log("The value of a * b is ", a*b);
// console.log("The value of a / b is ", a/b);


// Assignment Operators
var c = b;
// c += 2;
// c -= 2; // c = c - 2;
// c *= 2;
// c /= 2;
// console.log(c);

// Comparison Operators
var x = 34;
var y = 56;
// console.log(x == y);
// console.log(x >= y);
// console.log(x <= y);
// console.log(x > y);
// console.log(x < y);

// Logical Operators

// Logical and
// console.log(true && true)
// console.log(true && false)
// console.log(false && true)
// console.log(false && false)

// Logical or
// console.log(true || true)
// console.log(true || false)
// console.log(false || true)
// console.log(false || false)

// Logical not
// console.log(!false);
// console.log(!true);

// Function in JavaScript
function avg(a, b) {
    c = (a + b) / 2;
    return c;
}
// DRY = Do not repeat yourself
c1 = avg(4, 6);
c2 = avg(14, 16);
// console.log(c1, c2);

// Conditionals in JavaScript
/*
var age = 41;
// Single if statement
if(age > 18){
    console.log('You can drink rasna water');
}
// if - else statement
// if(age > 18){
//     console.log('You can drink rasna water');
// }
// else{
//     console.log('You cannot drink rasna water');
// }

age = 25;
// if-else Ladder
if(age > 32){
    console.log("You are not a kid");
}
else if(age >26){
    console.log("Bachhe nahi rahe");
}
else if(age >22){
    console.log("Yes Bachhe nahi rahe");
}
else if(age >18){
    console.log("18 Bachhe nahi rahe");
}
else{
    console.log("Bachhe rahe");
}
console.log("End of ladder");
*/
// var arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(arr);
// for(var i=0;i<arr.length;i++){
//     if(i==2){
//         //break;
//         continue;
//     }
//     console.log(arr[i])
// }

// arr.forEach(function(element){
//     console.log(element);
// })
// const ac = 0;
// ac++;
// ac = ac +1;
// let j = 0;
// while(j<arr.length){
//     console.log(arr[j]);
//     j ++;
// }

// do{
//     console.log(arr[j]);
//     j++;
// } while (j < arr.length);



// DOM Manipulation ******important 

// let elem=document.getElementById('click');
// console.log(elem);
// console.log(elem.innerHTML);
// console.log(elem.innerText);

// let elemClass=document.getElementsByClassName('container');
// console.log(elemClass);
// elemClass[0].style.background="pink";
// elemClass[0].classList.add("bg-primary")
// elemClass[0].classList.add("text-success")
// console.log(elemClass[0].innerHTML);
// console.log(elemClass[0].innerText); 

// tn = document.getElementsByTagName('p')
// console.log(tn);

// createdElement = document.createElement('p');
// tn[0].appendChild(createdElement);
// createdElement.innerHTML = "This is a created para";


// createdElement2 = document.createElement('b');
// createdElement2.innerText = "This is a created bold";
// tn[0].replaceChild(createdElement2, createdElement);

// removeChild(element); ---> removes an element //smjh nhi aya

//Selecting using Query

// sel=document.querySelector('.container');
// console.log(sel);
// sel = document.querySelectorAll('.container')
// console.log(sel)


// function clicked(){
//     console.log('The button was clicked')
// }
// window.onload = function(){
//     console.log('The document was loaded')
// }

// Events in JavaScript


// firstContainer.addEventListener('click',function () {
//     document.querySelectorAll('.container')[1].innerHTML="<b>this button is clicked</b> "
//     console.log("clicked on container");
// })

// firstContainer.addEventListener('mouseover',function () {
//     console.log("mouse on container");
// })
// firstContainer.addEventListener('mouseout', function(){
//     console.log("Mouse out of Container");
// })


// let prevHTML = document.querySelectorAll('.container')[1].innerHTML;
// firstContainer.addEventListener('mouseup', function(){
//     document.querySelectorAll('.container')[1].innerHTML = prevHTML;
//     console.log("Mouse up when clicked on Container");
// })

// firstContainer.addEventListener('mousedown', function(){
//     document.querySelectorAll('.container')[1].innerHTML = "<b> We have clicked</b>"
//     console.log("Mouse down when clicked on Container");
// })


// Arrow Functions
// function summ(a, b){
//     return a+b;
// }

summ = (a,b)=>{
    return a+b;
}

logKaro = ()=>{
    document.querySelectorAll('.container')[1].innerHTML = "<b> Set interval fired</b>"
    console.log("I am your log")
}
// SetTimeout and setinterval
//  clr = setTimeout(logKaro, 5000);
//  clr = setInterval(logKaro, 200);
// use clearInterval(clr)/clearTimeout(clr) to cancel setInterval/setTimeout

// JavaScript localStorage

//localStorage.setItem('name', 'harry') 
// localStorage 
// localStorage.getItem('name')
//localStorage.removeItem('name')
//localStorage.clear();


// Json 
// obj = {name: "harry", length: 1, a: {this: 'tha"t'}}
// jso = JSON.stringify(obj);
// console.log(typeof jso)
// console.log(jso)
// parsed = JSON.parse(`{"name":"harry","length":1,"a":{"this":"that"}}`)
// console.log(parsed);

//JSON.stringify() takes a JavaScript object and then transforms it into a JSON string.
//JSON.parse() takes a JSON string and then transforms it into a JavaScript object.


// const myObject = {
//     dog: "🐕",
//     cat: "🐈",
//     koala: "🐨",
//     count: 3
//   };
  
//   console.log(JSON.stringify(myObject));
//   // result: {"dog":"🐕","cat":"🐈","koala":"🐨","count":3}
  
//   console.log(JSON.parse(JSON.stringify(myObject)));
//   // result: Object {dog: "🐕", cat: "🐈", koala: "🐨", count: 3}

// Template literals - Backticks
a = 34;
console.log(`this is my ${a}`)
console.log(`${a}`);  //The ${} syntax allows us to put an expression in it and it will produce the value, which in our case above is just a variable that holds a string!





