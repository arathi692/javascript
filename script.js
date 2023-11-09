console.log('welcome');
alert('hiiiiiiiiiii ')//global variable
var i;//variable declaration
i="hello";//initialisation
var a=10;//declaration + initialisation
console.log(i);
console.log("a: ",a);

//datatypes
var str="this is a string";
console.log("str: ",str);
console.log("type of str : ",typeof str);
var num=100;
console.log("str: ",num);
console.log("type of str : ",typeof num);

var bool=true;
console.log("str: ",bool);
console.log("type of str : ",typeof bool);

var a1=undefined;
console.log("a1: ",a1);
console.log("type of str : ",typeof a1);

var b1=null;
console.log("b1: ",b1);
console.log("type of str : ",typeof b1);

var c1;
console.log("c1: ",c1);
console.log("type of str : ",typeof c1);

var d1="";
console.log("d1: ",d1);
console.log("type of str : ",typeof d1);



document.write("know we are in a realscape")

//STRING METHODS
var str="hello world";
console.log(str.toUpperCase());
console.log(str.length);
console.log("lowercase",str.toLocaleLowerCase());
console.log("trim :",str.trim());
console.log("trimmed length :",str.trim().length);
console.log("substring",str.substring(0,3));
console.log("replace: ",str.replace("hello","hai"));
console.log("startswith: ",str.startsWith("hello"));
console.log("endswith:",str.endsWith("world"));
console.log("split ",str.split(','));//convert string to an array
console.log("join",str.split(',').join(','));//convert array to string
