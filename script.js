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


//arrays
var a =10;
console.log("a :",a);
 
var arr=[10,20,30,40,"helloo","hiii",true,false,undefined,null];
console.log("arr : ",arr);
console.log("type of arr: ",typeof arr);
console.log("length :",arr.length);
console.log("join :",arr.join(''));
console.log("index : ",arr.indexOf("helloo"))

console.log("push element : ",arr.push("end"),',',"arr :",arr);
console.log("unshift element :  ",arr.unshift("first"),',',"arr :",arr);
console.log("pop element:  ",arr.pop(),',',"arr : ",arr);
console.log("shift element: ",arr.shift(),',',"arr : ",arr);


//replace elements in an array 
arr[0]=15;
arr[3]="welcome";
console.log("arr :",arr);

//splice
arr.splice(7,2);
console.log("arr :",arr);

arr.splice(3,0,40);
console.log("arr ",arr);

//objects

var obj = {
    firstname: "anu",
    lastname: "manu",
    age: "22",
    hobbies: ["reading,writing,singing"],
};
console.log("obj :",obj);

console.log("firstname: ",obj.firstname);
console.log("age : ",obj.age);

obj.age=11;
console.log("obj : ",obj);

obj.mark1=50;
console.log("obj : ",obj);

obj.mark2=100;
console.log("obj : ",obj);

//json string

var obj1={
    name:"arun",
    age:20,
    indian:false
};

var a=10;
console.log(`a: ${a}`);

var json_str=JSON.stringify(obj1);

//converting javascript object  JSON String
console.log(`Json : ${json_str}`);

//parsing JSON
var obj3=JSON.parse(json_str);
console.log(`object : ${obj3.name}`);


{
var a=10;//global scoped,can be declared anywhere in the function 

}

console.log("a : ",a);

//block scoped 
{
    let b;//declare
    b=15;//initialize

    const c=20;
    console.log("b : ",b);
    console.log("c : ",c);

}
//hoisting
console.log("x: ",x);
var x=50;
//console.log("y :",y); gives error


let y=60;
//multiple declarations
var x=100;

//javascript conditions

let num1=30;
let num2=46;
if(num1>num2)
{
    console.log(`num1 :,${num1}is greater`)
}else if(num1 == num2){
    console.log("both are equal");

}else{
    console.log(`num2 : ${num2} is greater`)
}
