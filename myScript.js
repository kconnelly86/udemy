//alert("Kyle Connelly");

// document.write('Kyle Connelly');

/* //start exercise
//declaring variables and printing them to the browser.

var myFirstVariable; 

document.write(myFirstVariable);

document.write("<br>");

var myName;

myName = "Kyle Connelly";
document.write(myName);

document.write("<br>");

var lastName = "Connelly";

document.write(lastName);*/ 
//end exercise

//start exercise
/*
var x = 100, y = 20;

var a = x + y;

document.write("Addition: ");
document.write(a);
document.write("<br>");

var s = x - y;

document.write("Subtraction: ");
document.write(s);
document.write("<br>");

var m = x * y;

document.write("Multiplication: ");
document.write(m);
document.write("<br>");

var d = x / y;

document.write("Divide: ");
document.write(d);
document.write("<br>");

var r = x % y;

document.write("Remainder: ");
document.write(r);
document.write("<br>");

var i = 4;
i++;

document.write("Increment: ");
document.write(i);
document.write("<br>");*/ 
//end exercise

/*
//start exercise
var firstName = "Kyle";
var lastName = "Connelly";

var fullName = firstName + " " + lastName;

document.write(fullName);
document.write("<br>");

var x = 10;

var t = "hello";

var z = x + " " + t;

document.write(z);
//end exercise
*/

/*
// start exercise
var temp = 100;

//simple if
// if (temp == 100){
// 	temp = temp - 2;
// 	document.write("temp just changed " + temp + "<br>" );
// }
// document.write("outside of the if ");

//if..else

if (temp == 10){
	temp = temp - 2;
	document.write("temp just changed " + temp + "<br>" );
} else {
	document.write("no need to change the temp");
}
//end exercise
*/

//start exercise
/*
== equal to
=== equal value and type(caps and everything the same)
!= not equal to
!== not equal value and not type
> greater than
< less than
>= greater than equal to 
<= less than equal to
*/

/*
 var studentAge = 16;

//equal to
if ( studentAge == 18) {
	//perform this
	document.write (" student age is equal to 18 <br>" );
}

//equal value and type
if ( studentAge === 18) {
	//only works if number and type are the same.
	document.write (" student age and type is equal to 18 <br>" );
}

if ( studentAge != 18){
	document.write (" student age is not equal to 18 <br>" );
}
*/

/*
//start exercise 
//switch statement
studentGrade = "";

switch(studentGrade){
	case "A":
		document.write("Student with grade A <br>");
		break;
	case "B":
		 document.write("Student with grade B <br>");
		 break;
	case "C": 
		 document.write("Student with grade C <br>");
		 break;
	default:
		  document.write("no grade found");
}
//end exercise
*/

/*
//start exercise
//for, while, do while
document.write("While loop <br>");
var x = 1;

while (x <= 5 ) {
	document.write(x + "<br>");

	x++;
}

//do while loop
document.write(" Do while loop <br>");
var y = 6;

do {
	document.write(y + "<br>");
	y++;

}while (y <= 5 );

document.write(" For loop <br>");

//for loop
for (y = 1; y <= 5; y++){
	document.write(y + "<br>");
}
*/

/*
//start exercise
//functions

function firstFunction() {

	document.write(" code inside function");

}

firstFunction();
*/
//end exercise


/*
//start exercise
//function with parameters

function parameters(p1, p2) {

	var z = p1 * p2;

	document.write("p1 * p2 = " + z + "<br>");
}
 parameters( 1, 20 );
 */
//end exercise

//start exercise
/*
//ternary FIZZBUZZ
for(i=1;i<=100;i++) {
console.log(((i%3)?(i%5)?i:'Buzz':(i%5)?'Fizz':'FizzBuzz'));
};
*/
//end exercise

//start
/*
//ES6 Easy to understand.
var fName = 'Peter', sName = 'Smith', age = 43, job= 'photographer';
var a = 'Hi, I\'m ' + fName + ' ' + sName + ', I\'m ' + age + ' and work as a ' + job + '.';
var b = `Hi, I'm ${ fName } ${ sName }, I'm ${ age } and work as a ${ job }.`;

document.write(a + "<br>");
document.write(b + "<br>"); 
*/
//end

//start
/*
//difference between 'var' and 'let' is seen in the console, 'var' returns 55555, and 'let' creates a new block scope with the value for 'i' bound to that loop, giving you 1,2,3,4,5. 
for (let i = 1; i < 5; i++){
    setTimeout(() => { console.log(i); }, 1000);
}
*/
//end

//start
//example of a template literal ES6.
/*
function foo(a, b, c) { console.log(`a=${a}, b=${b}, c=${c}`)} 
let data = [5, 15, 2];
foo( ...data); // a=5, b=15, c=2
*/
//end

/*
//start
//object literals and concise parameters
let a = 4, b = 7;
let c = { a: a, b: b };
let concise = { a, b };
console.log(c, concise) // {a: 4, b: 7}, {a: 4, b: 7}
//end
*/


//start
/*
// example of '...' Spread. 
let car = { type: 'vehicle ', wheels: 4};
let fordGt = { make: 'Ford', ...car, model: 'GT'};
console.log(fordGt); // {make: 'Ford', model: 'GT', type: 'vehicle', wheels: 4}
*/
//end


/*
let person = {
	name: 'kyle',
	age: 31,
	job: { company: 'Tesco', title: 'Manager' }
};
//start
//cant figure out why this wont work? run it to see error about '.', or ')' in job.company. and once i took out the '.' it said extra parens?
function es6({ age, name, job: {company}) {
    var yearOfBirth = 2018 - age;
    console.log( `${ name } works at ${ company } and was born in ${ yearOfBirth }.`);
};
//end
*/


/*
//FIZZBUZZ
//start
for (var i = 1; i <= 100; i++) {
	 if (i % 15 === 0) {
	 	console.log('fb');
	 }else if( i % 3 === 0){
	 	console.log('f');
	 }else if( i % 5 === 0) {
	 	console.log('b');
	 }else{
	 	console.log(i);
	 }
}
//end
*/


/*
//start
//nested function
function outerFunction() {
	document.write('outer stuff<br>');

	function innerFunction() {

		document.write('code inside/nested function');
	}
	innerFunction();
}
outerFunction();
//end
*/


/*
//start
//Dialog Boxes
// giving the confirm box an if statement gives the 'ok','cancel' a written response in the browser.
 var x = confirm("do you want to receive mail");
 	if ( x ) {
 		document.write("we will send you mail");

 	} else {
 		document.write("we will not send you mail");
 	}
//end
*/

/*
//start
//data types and objects, using 'typeof' keyword

var x = 'hello';
alert(typeof(x));
//alerts 'string'

var x = new String('hello');
alert(typeof(x));

 //list of built in object constructors in JS

 var obj1 = new Object(); //new Object as object
 var obj2 = new String(); //new String as object
 var obj3 = new Number(); //new Number as object
 var obj4 = new Boolean(); //new Boolean as object
 var obj5 = new Array();  //new Array as object
 var obj6 = new RegExp(); //new RegExp as object
 var obj7 = new Function(); //new Function as object
 var obj8 = new Date(); //new Date as object  
//end
*/


//start
//objects
//everything is an object in JS
//Properties are data related to the object
//Methods are actions to be performed with object on its data.
/*
 var person = new Object();
 //person is the property with name value pairs like below
 person.firstName = 'kyle';
 person.lastName = 'connelly';
 person.age = 31;
 person.height = 6;
 person.fullName = function() {
 	return ( person.firstName + " " + person.lastName);
 }
 alert(person.firstName);
 alert(person['age']);
 alert(person.fullName());
*/

/*
// creating an object using an object constructor
function Person(fName, lName, age, hg) {
	this.firstName = fName;
	this.lastName = lName;
	this.age = age;
	this.height = hg;
	this.fullName = function() {
		return (this.firstName + ' ' + this.lastName);
	}
 alert(fName);
 alert(age);
 alert(this.fullName());
}

var myBrother = new Person('russel', 'brown', 25, 5.5);
var mySister = new Person('sis', 'brown', 15, 4.3);

//end
*/


/*
//start
//date and time

var rightNow = new Date();
document.write(rightNow);

//end
*/


//start
// joining arrays
// var listOfNumber1 = [1, 2, 3];
// var listOfNumber2 = [4, 5, 6];

// var allNum = listOfNumber1.concat(listOfNumber2);
// document.write(allNum + "<br>");

// // loop through array
// var myCars = ["bmw", "merc", "ford"];
// for (var i = 0; i < myCars.length; i++) {
// 	document.write(myCars[i] + "<br>");
// }
// //  array objects
// var myCars = [
// 	{model:'bmw', year: 2016},
// 	{model: 'merc', year:1234},
// 	{model: 'ford', year: 1886}
// ];

// for(var i = 0; i < myCars.length; i++) {
// 	var myCar = "";
// 	for ( var cp in myCars[i]) {
// 		myCar = myCar + myCars[i][cp];

// 	}
// 	document.write(myCar  + '<br>');
// }

//end

// start
// regex
// var regExp1 = new RegExp('abcd');

// // alt syntax
// var regExp2 = /abcd/;

// var strToSearch = 'abc';

// var matchFound = regExp2.test(strToSearch);

// alert(matchFound);
// end

// start
// number type and number
// var n = new Number(15);

// document.write(n + "<br>");

// document.write("Primitive value" + n.valueOf() + "<br>");

// // create number just by assigning to variable
// var n = 15.5;
// document.write(n + "<br>");

// // check for valid number
// var numberCheck =  20 + "t";

// document.write(numberCheck + " is not a valid number: " + isNaN(numberCheck) + "<br>");

// end

// start
// browser object model
// global variable
// var x = 15;
// alert(window.x);

// function y() {
// 	document.write('Global function invoked');
// }
// window.y();
// alert("alert invoked without window object");
// window.alert("alert invoked using window object");



// end
//start
//navigator 
document.write("Name: " + navigator.appName + "<br>" + 
"Version: " + navigator.appVersion + "<br>" + 
"Code Name: " + navigator.appCodeName + "<br>" + 
"Platform: " + navigator.platform + "<br>"
);
//end



















