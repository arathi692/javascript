console.log('welcome');
// alert('hiiiiiiiiiii ')//global variable
var i;//variable declaration
i = "hello";//initialisation
var a = 10;//declaration + initialisation
console.log(i);
console.log("a: ", a);

//datatypes
var str = "this is a string";
console.log("str: ", str);
console.log("type of str : ", typeof str);
var num = 100;
console.log("str: ", num);
console.log("type of str : ", typeof num);

var bool = true;
console.log("str: ", bool);
console.log("type of str : ", typeof bool);

var a1 = undefined;
console.log("a1: ", a1);
console.log("type of str : ", typeof a1);

var b1 = null;
console.log("b1: ", b1);
console.log("type of str : ", typeof b1);

var c1;
console.log("c1: ", c1);
console.log("type of str : ", typeof c1);

var d1 = "";
console.log("d1: ", d1);
console.log("type of str : ", typeof d1);



document.write("know we are in a realscape")

//STRING METHODS
var str = "hello world";
console.log(str.toUpperCase());
console.log(str.length);
console.log("lowercase", str.toLocaleLowerCase());
console.log("trim :", str.trim());
console.log("trimmed length :", str.trim().length);
console.log("substring", str.substring(0, 3));
console.log("replace: ", str.replace("hello", "hai"));
console.log("startswith: ", str.startsWith("hello"));
console.log("endswith:", str.endsWith("world"));
console.log("split ", str.split(','));//convert string to an array
console.log("join", str.split(',').join(','));//convert array to string


//arrays
var a = 10;
console.log("a :", a);

var arr = [10, 20, 30, 40, "helloo", "hiii", true, false, undefined, null];
console.log("arr : ", arr);
console.log("type of arr: ", typeof arr);
console.log("length :", arr.length);
console.log("join :", arr.join(''));
console.log("index : ", arr.indexOf("helloo"))

console.log("push element : ", arr.push("end"), ',', "arr :", arr);
console.log("unshift element :  ", arr.unshift("first"), ',', "arr :", arr);
console.log("pop element:  ", arr.pop(), ',', "arr : ", arr);
console.log("shift element: ", arr.shift(), ',', "arr : ", arr);


//replace elements in an array 
arr[0] = 15;
arr[3] = "welcome";
console.log("arr :", arr);

//splice
arr.splice(7, 2);
console.log("arr :", arr);

arr.splice(3, 0, 40);
console.log("arr ", arr);

//objects:key value pairs

var obj = {
    firstname: "anu",
    lastname: "manu",
    age: "22",
    hobbies: ["reading,writing,singing"],
};
console.log("obj :", obj);

console.log("firstname: ", obj.firstname);
console.log("age : ", obj.age);

obj.age = 11;
console.log("obj : ", obj);

obj.mark1 = 50;
console.log("obj : ", obj);

obj.mark2 = 100;
console.log("obj : ", obj);

//json string

var obj1 = {
    name: "arun",
    age: 20,
    indian: false
};

var a = 10;
console.log(`a: ${a}`);

var json_str = JSON.stringify(obj1);

//converting javascript object  JSON String
console.log(`Json : ${json_str}`);

//parsing JSON
var obj3 = JSON.parse(json_str);
console.log(`object : ${obj3.name}`);


{
    var a = 10;//global scoped,can be declared anywhere in the function 

}

console.log("a : ", a);

//block scoped 
{
    let b;//declare
    b = 15;//initialize

    const c = 20;
    console.log("b : ", b);
    console.log("c : ", c);

}
//hoisting
console.log("x: ", x);//undefined
var x = 50;
//console.log("y :",y); gives error


let y = 60;
//multiple declarations
var x = 100;

//javascript conditions

// let num1=30;
// let num2=46;
// if(num1>num2)
// {
//     console.log(`num1 :,${num1}is greater`)
// }else if(num1 == num2){
//     console.log("both are equal");

// }else{
//     console.log(`num2 : ${num2} is greater`)
// }

// if(true || true || false){
//     console.log("condition true");

// }else{
//     console.log("condition false");

// }
//+,-,*,/,%,++,++var,--var,var++,var--
//&&,||,!
//=
//=,==,===,<,>,<=,>=,<==

//pre increment
let abc1 = 10;
let result1 = ++abc1;
console.log("result1 :", result1);

//pre decrement
let abc2 = 10;
let result2 = --abc2;
console.log("result2:", result2);

//post increment
// let abc3=20;
// let result3=abc3++;
// console.log("result3:",result3);

//post decrement
// let abc4=10;
// let result4=abc4++;
// console.log("result4:",result4);


//switch statement
let day = 4;

switch (day) {
    case 1:
        console.log("monday");
        break;
    case 2:
        console.log("tuesday");
        break;
    case 3:
        console.log("wednesday");
        break;
    case 4:
        console.log("thurs");
        break;
    case 5:
        console.log("friday");
        break;
    case 6:
        console.log("saturday");
        break;
    case 7:
        console.log("sunday");
        break;
    default:
        console.log("invalid value");
        break;
}

//loops
//forloops
for (var i = 0; i < 10; i++) {
    console.log(i);
}

for (var i = 0; i < 10; i++) {
    console.log("hello");
}
//while loop

let flag = false;

{
    let i = 0;
    while (i <= 10) {
        console.log("hello from while loop..");
        i = i + 1;
    }


    //do while
    do {
        console.log("hello from while loop");
        i = i + 1;
    } while (i <= 10);//


    //break and continue
    for (let i = 0; i < 10; i++) {

        if (i == 5) {
            continue;
        }

        if (i == 8) {
            break;
        }
        console.log(i);
    }

}
//str="*\n**\n***\n"
{
    //nested loops
    // let string = '';
    // for(let i=0;i<=10;i++){
    //     //nested for loop
    //     for(let j=0;j<i;j++){
    //         string = string + '*';
    //         console.log(string);

    //     }
    //     string=string + '\n';

    // }

    //functions
    //function definition
    function printhello() {
        //code block
        console.log("hello");
    }

    printhello();//function call

    //function to print sum
    function sum(a, b)//parameter
    {
        let sum;
        sum = a + b;
        console.log("sum :", sum);
    }
    sum(10, 20);//argument
}




for (var i = 1; i <= 10; i++) {
    console.log(i);
}

//to print the sum of 10 numbers
{

    let sum = 0;

    for (let i = 0; i <= 10; i++) {
        sum = sum + i;
        console.log("sum :", sum);

    }

    //print even numbers
    let i = 0;
    while (i <= 20) {

        if (i % 2 == 0) {
            console.log("i:", i);
        }
        i++;
    }



}


{
    //call by value
    let a = 10;
    function update(a) {
        a = "new value";
        console.log("from function :", a);

    }
    update(a);
    console.log("a: ", a);

    //call by reference
    let arr = [10, 20, 30];
    function arrUpdate(arr) {
        arr[0] = 100;
        console.log("arr from function :", arr)

    }
    arrUpdate(arr);
    console.log("arr :", arr);

}

{
    //closures
    function outerFunction() {
        const outerVariable = 'from outer function';
        function innerFunction() {
            function innerFunction1() {
                function innerFunction2() {
                    console.log("outerVariable : ", outerVariable);
                }
                return innerFunction2;
            }
            return innerFunction1;

        }
        return innerFunction;
    }

    let result = outerFunction();//innerfunction code
    console.log("result :", result);
    result();

    let result1 = result();
    console.log("result1:", result1);
    result();

    let result2 = result1();
    console.log("result2:", result2);
    result2();
    // a function along with its environment is called closure
}
//dom methods

// {
// let content = document.getElementsByClassName("content");
// content[0].textContent="some content";
// content[1].textContent="Another content";

// let text = document.getElementById("text");
// text.textContent="some text";



// let para =document.getElementById("p");
// para[0].textContent ="A paragraph";

// let listItem = document.querySelector(".container .container1 ul li");
//     listItem.textContent = "List item 1";

// }

{
    //Type of functions

    //Named functions
    function printHelloWorld() {
        console.log("Hello world");
    }

    printHelloWorld();

    //Anonymous functions
    const printHai = function () {
        console.log("Hai");
    }

    printHai();

    //Arrow funtion
    const printWelcome = () => {
        console.log("Welcome");
    };
    printWelcome()

    //call back function
    // function printHaiWorld(a) {
    //     a();
    // }

    // const callback = function () {
    //     console.log("Hai world")
    // }

    // let btn = document.getElementById('btn1');

    // btn.addEventListener('click', function () {
    //     alert("Button clicked")
    // });

    // btn.addEventListener('mouseover', () => {
    //     console.log("Mouse over event ...")
    // });

    // btn.addEventListener('mouseout', () => {
    //     console.log("Mouse out event ...")
    // });

    // btn.addEventListener('mousdown', function () {
    //     console.log("Mouse down event ...")
    // });

    // btn.addEventListener('mousup', () => {
    //     console.log("Mouse up event ...")
    // });

    // btn.addEventListener('mousemove', () => {
    //     console.log("Mouse move event ...")
    // });

    // let inp = document.getElementById('inp');

    // inp.addEventListener('keydown', () => {
    //     console.log("Keydown event ...");
    // });

    // inp.addEventListener('keyup', () => {
    //     console.log("Keyup event ...");
    // });

    //Math function
    console.log(Math.sqrt(16)); //4
    console.log(Math.round(10.4)); //10
    console.log(Math.round(10.5)); //11
    console.log(Math.ceil(10.2)); //11
    console.log(Math.ceil(10.8)); //11
    console.log(Math.floor(10.7)); //10
    console.log(Math.floor(10.2)); //10
    console.log(Math.abs(-90)); //90
    console.log(Math.abs(90)); //90
    console.log(Math.PI); //3.141592653589793
    console.log(Math.max(10, 20, 30)); //30
    console.log(Math.min(10, 20, 30)); //10
    console.log(Math.pow(2, 3)); //8

}

// {

//     //Timer functions
//     setTimeout(function () {
//         console.log("From setTimeOut...");
//         // alert("From setTimeOut")
//     }, 3000);
//     setInterval(function () {
//         console.log("From setInterval");
//     }, 3000);

//     //Program to show current time
//     function putZero(sec) {
//         return sec < 10 ? "0" + sec : sec;
//     }

//     function show() {
//         var time = document.getElementById('time');
//         var dt = new Date();
//         var hours = dt.getHours();
//         //     if(hours>12) {
//         //         ampm = "pm";
//         // }else {
//         //     ampm = "am";
//         // }
//         var ampm = hours > 12 ? "pm" : "am";

//         //time.innerHTML = putZero(hours % 12) + ";" + putZero(getMinutes()) + ":" +putZero(dt.getSeconds()) + ampm;

//         setTimeout(function () {
//             show();//Recursive call
//         }, 1000);
//     }

//     show();
// }
{
    //spread operator(dots using)
    let arr = [1, 2, 3, 4, 5]
    console.log("arr : ", arr);

    let arr1 = [...arr, 6];
    console.log("arr1 :", arr1);

    let obj = {
        firstname: "jane",
        lastname: "don",
        age: 16

    }

    console.log("obj: ", obj);
    let obj1 = { ...obj, mark: 76 };
    console.log("obj1: ", obj1);
    {
        //destructuring
        const [a, b, c, d, e] = arr;
        console.log("a: ", a);
        console.log("b :", b);
        //...

        const { firstName, lastName, age } = obj;
        console.log("firstname :", firstName);
        console.log("lastname: ", lastName);
        console.log("age :", age);

    }
    //nested destructuring
    const matrix = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]

    ];

    const [firstRow, secondRow, thirdRow] = matrix;


    const [a, b, c] = firstRow;
    const [d, e, f] = secondRow;
    const [g, h, i] = thirdRow;
    console.log("a: ", a);
    console.log("b :", b);
    console.log("d:", d);
    console.log("g :", g);

    {
        const person = {
            name: "john",
            age: 30,
            address: {
                city: "new york",
                zipcode: '1001',
            },
        }


        const { name, age, address: { city, zipcode } } = person;
        console.log("name :", name);
        console.log("age:", age);
        console.log("city:", city);
        console.log("zipcode:", zipcode);

    }
}

//to find factorial 

{
    function fact(a) {
        let fact = 1;
        for (let i = a; i > 0; i--) {
            fact = fact * i;
        }
        return fact;
    }
    let result = fact(4);
    console.log("result:", result);

}

//fibonocci series (0,1,1,2,3,5)
{
    function fibonacci(limit) {
        let a = 0;
        console.log(a);
        let b = 1;
        console.log(b);
        let sum = 0;
        while (sum < limit) {
            sum = a + b;
            console.log(sum);
            a = b;
            b = sum;

        }


    }
    fibonacci(15);
}

//sum=1
//a=1
//b=1

//sum=2
//a=1
//b=2
//sum=15
//while loop stops

//array to add
{

    let arr = [10, 20, 5, 40, 50]
    let sum = 0;

    for (i = 0; i < arr.length; i++) {


        sum = sum + arr[i];

    }

    console.log("sum :", sum);
    avg = sum / arr.length;         //avg
    console.log("avg :", avg);



    //min
    let min = arr[0];//10
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    console.log("min :", min);

    //max
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
        }
        console.log("max :", max);
    }
}
{
    let arr = [10, 20, 5, 40, 50]

    //sum function
    function arrSum(arr) {
        let sum = 0;


        for (let i = 0; i < arr.length; i++) {


            sum = sum + arr[i];

        }

        console.log("sum :", sum);
        return sum;

    }

    console.log("arrsum : ", arrSum(arr));
    let arrSumVar = arrSum(arr);
    console.log("arrSumVar: ", arrSumVar);
}

//min function
// {
//     let arr = [10, 20, 5, 40, 50]

//     function arrMin(arr) {
//         let min = arr[0];//10
//         for (let i = 0; i < arr.length; i++) {
//             if (arr[i] < min) {
//                 min = arr[i];
//             }
//         }
//         console.log("min :", min);
//         return min;

//     }

//     console.log("arrMin: ", arrMin(arr));
//     let arrMin = arrMin(arr);
//     console.log("arrMin :", arrMin);
// }



//max function
{
    let arr = [10, 20, 5, 40, 50]

    function arrMax(arr) {
        let max = arr[0];
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > max) {
                max = arr[i]
            }
            console.log("max :", max);
            return max;
        }
        console.log("arrMax: ", arrMax(arr));
        let arrMax = arrMax(arr);
        console.log("arrMax :", arrMax);

    }
}

//program to convert negative values in array to positive
{
function arrToPositive(arr){


    let i=0;
    
    while(i<arr.length){

        
        if(arr[i]<0) arr[i]=arr[i]*-1;
        i++;
    }
return arr;
}

let arr=[-1,1,-2,2,-10,10] 
let newArr=arrToPositive(arr);
console.log("newarr :",newArr);
}













// function that check str is palindrome or not 
function check_palindrome(str) {
    let j = str.length - 1;
    for (let i = 0; i < j / 2; i++) {
        let x = str[i];//forward character 
        let y = str[j - i];//backward character
        if (x != y) {
            // return false if string not match
            return false;
        }
    }
    /// return true if string i
    return true;

}
//function that print output if string is palindrome
function is_palindrome(str) {
    // variable that is true if string is palindrome
    let ans = check_palindrome(str);
    //condition checking ans is true or not 
    if (ans == true) {
        console.log("string is palindrome");
    }
    else {
        console.log("string not a palindrome");
    }
}

//multiplication table
// {
//     for (let i=1; i<=10; i++)
//     {
//         for (let j=1; j<=10; j++)
//         {
//             console.log(`${i}*${j}=${i*j}\n`);
//         }
//     }
// }

// sum of even and odd
{
    let evenSum = 0;
    let oddSum = 0;
    for (let i = 1; i <= 50; i++) {
        if (i % 2 == 0) {
            console.log("Even : ", i);
            evenSum = evenSum + i;
        } else {
            console.log("Odd  : ", i);
            oddSum = oddSum + i;
        }
    }
    console.log("odd sum  : ", oddSum);
    console.log("even sum : ", evenSum);
}


