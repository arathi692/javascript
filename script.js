console.log('welcome');
// alert('hiiiiiiiiiii ')//global variable
var i;//variable declaration
i = "hello";//initialisation
var a = 10;//declaration + initialisation
console.log(i);
console.log("a: ", a);

//datatypes
// var str = "this is a string";
// console.log("str: ", str);
// console.log("type of str : ", typeof str);
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



// document.write("know we are in a realscape")

//STRING METHODS
// var str = "hello world";
// console.log(str.toUpperCase());
// console.log(str.length);
// console.log("lowercase", str.toLocaleLowerCase());
// console.log("trim :", str.trim());
// console.log("trimmed length :", str.trim().length);
// console.log("substring", str.substring(0, 3));
// console.log("replace: ", str.replace("hello", "hai"));
// console.log("startswith: ", str.startsWith("hello"));
// console.log("endswith:", str.endsWith("world"));
// console.log("split ", str.split(','));//convert string to an array
// console.log("join", str.split(',').join(','));//convert array to string


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

// {
//     //Type of functions

//     //Named functions
//     function printHelloWorld() {
//         console.log("Hello world");
//     }

//     printHelloWorld();

//     //Anonymous functions
//     const printHai = function () {
//         console.log("Hai");
//     }

//     printHai();

//     //Arrow funtion
//     const printWelcome = () => {
//         console.log("Welcome");
//     };
//     printWelcome()

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
//     console.log(Math.sqrt(16)); //4
//     console.log(Math.round(10.4)); //10
//     console.log(Math.round(10.5)); //11
//     console.log(Math.ceil(10.2)); //11
//     console.log(Math.ceil(10.8)); //11
//     console.log(Math.floor(10.7)); //10
//     console.log(Math.floor(10.2)); //10
//     console.log(Math.abs(-90)); //90
//     console.log(Math.abs(90)); //90
//     console.log(Math.PI); //3.141592653589793
//     console.log(Math.max(10, 20, 30)); //30
//     console.log(Math.min(10, 20, 30)); //10
//     console.log(Math.pow(2, 3)); //8

// }

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
// {
//spread operator(dots using)
// let arr = [1, 2, 3, 4, 5]
// console.log("arr : ", arr);

// let arr1 = [...arr, 6];
// console.log("arr1 :", arr1);

// let obj = {
//     firstname: "jane",
//     lastname: "don",
//     age: 16

// }

// console.log("obj: ", obj);
// let obj1 = { ...obj, mark: 76 };
// console.log("obj1: ", obj1);
// {
//destructuring
// const [a, b, c, d, e] = arr;
// console.log("a: ", a);
// console.log("b :", b);
//...

//     const { firstName, lastName, age } = obj;
//     console.log("firstname :", firstName);
//     console.log("lastname: ", lastName);
//     console.log("age :", age);

// }
//nested destructuring
// const matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]

// ];

// const [firstRow, secondRow, thirdRow] = matrix;


// const [a, b, c] = firstRow;
// const [d, e, f] = secondRow;
// const [g, h, i] = thirdRow;
// console.log("a: ", a);
// console.log("b :", b);
// console.log("d:", d);
// console.log("g :", g);

//     {
//         const person = {
//             name: "john",
//             age: 30,
//             address: {
//                 city: "new york",
//                 zipcode: '1001',
//             },
//         }


//         const { name, age, address: { city, zipcode } } = person;
//         console.log("name :", name);
//         console.log("age:", age);
//         console.log("city:", city);
//         console.log("zipcode:", zipcode);

//     }
// }

//to find factorial 

// {
//     function fact(a) {
//         let fact = 1;
//         for (let i = a; i > 0; i--) {
//             fact = fact * i;
//         }
//         return fact;
//     }
//     let result = fact(4);
//     console.log("result:", result);

// }

//fibonocci series (0,1,1,2,3,5)
// {
//     function fibonacci(limit) {
//         let a = 0;
//         console.log(a);
//         let b = 1;
//         console.log(b);
//         let sum = 0;
//         while (sum < limit) {
//             sum = a + b;
//             console.log(sum);
//             a = b;
//             b = sum;

//         }


//     }
//     fibonacci(15);
// }

//sum=1
//a=1
//b=1

//sum=2
//a=1
//b=2
//sum=15
//while loop stops

//array to add
// {

//     let arr = [10, 20, 5, 40, 50]
//     let sum = 0;

//     for (i = 0; i < arr.length; i++) {


//         sum = sum + arr[i];

//     }

//     console.log("sum :", sum);
//     avg = sum / arr.length;         //avg
//     console.log("avg :", avg);



    //min
    // let min = arr[0];//10
    // for (let i = 0; i < arr.length; i++) {
    //     //arr[0]>10->10->10=false
    //     //arr[1]>10->20>10=true
    //     if (arr[i] < min) {
    //         min = arr[i];
    //     }
    // }
    // console.log("min :", min);


    //max
//     let max = arr[0];
//     for (let i = 0; i < arr.length; i++) {
//         //arr[0]>10->20 = false
//         //arr[1]>10 -> 20 >10=true->max=20
//         if (arr[i] > max) {
//             max = arr[i]
//         }
//         console.log("max :", max);
//     }
// }
// {
//     let arr = [10, 20, 5, 40, 50]

    //sum function
//     function arrSum(arr) {
//         let sum = 0;
//         for (let i = 0; i < arr.length; i++) {
//             sum = sum + arr[i];

//         }

//         console.log("sum :", sum);
//         return sum;

//     }

//     console.log("arrsum : ", arrSum(arr));
//     let arrSumVar = arrSum(arr);
//     console.log("arrSumVar: ", arrSumVar);
// }

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
// {
//     let arr = [10, 20, 5, 40, 50]

//     function arrMax(arr) {
//         let max = arr[0];
//         for (let i = 0; i < arr.length; i++) {
//             if (arr[i] > max) {
//                 max = arr[i]
//             }
//             console.log("max :", max);
//             return max;
//         }
//         console.log("arrMax: ", arrMax(arr));
//         let arrMax = arrMax(arr);
//         console.log("arrMax :", arrMax);

//     }
// }

//program to convert negative values in array to positive

// {
//     let arr = [-1, 1, -2, 2, -10, 10]
//     function arrToPositive(arr) {
//         for (i = 0; i < arr.length; i++) {
//             if (arr[i] < 0) {
//                 arr[i] = arr[i] * -1;
//             }

//         }
//         return arr;

//     }
//     console.log("arr:", arrToPositive(arr));
// }




// function that check str is palindrome or not 
// {
// let str = 'hello';
// let reverse = ' ';
// for (let i = str.length - 1; i >=0; i--) {
//     reverse = reverse + str[i];
// }
// if (str == reverse) {
//     console.log("string is pallindrome")
// }
// console.log("reverse: ", reverse)
// }


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
// {
//     let evenSum = 0;
//     let oddSum = 0;
//     for (let i = 1; i <= 50; i++) {
//         if (i % 2 == 0) {
//             console.log("Even : ", i);
//             evenSum = evenSum + i;
//         } else {
//             console.log("Odd  : ", i);
//             oddSum = oddSum + i;
//         }
//     }
//     console.log("odd sum  : ", oddSum);
//     console.log("even sum : ", evenSum);
// }


//Recursive function: a function calling itself
// {
// let i=0;
// function count(){
//     i++;
//     while(i<=10){
//         console.log(i)
//         count();//recursive function call
//     }
  

// } 
//  count();//function call

//  console.log("countdown using recursive function call");
//  function countdown(n){
//     if(n<=0){
//         console.log("done");

//     }else{
//         console.log(n);
//         countdown(n-1);//recursive call
//     }
//  }
//  countdown(5);//normal function call


// //countdown(5),countdown(4),countdown(3),countdown(2),countdown(1),countdown(0),done
// console.log("factorial using recursive function call");

// function factorial(n){
//     if(n==0 || n==1){
//         return 1;

//     }else{
//         return n*factorial(n-1);
//     }
// }
// let fact = factorial(5);
// console.log("factorial: ",fact)
// //5 * factorial(4)>5*(4 * factorial(3))=> 5*(4*(3*factorial(2)))=> 5*4*3(2*factorial(1))=>5*4*3*2*1
// }
// {
//     let myForm = document.getElementById('myForm');
//     console.log("form:",myForm);

//      myForm.addEventListener('submit',function(e){
//         e.preventDefault();//stops default behaviour form

//         var datas={};


//         let firstname = document.getElementById('firstname');
//         let firstname_value=firstname.value;
//         console.log("firstname :",firstname_value);

//         let lastname = document.getElementById('lastname');
//         let  lastname_value=lastname.value;
//         console.log("lastname :",lastname_value);


//         let place = document.getElementById('place');
//         let place_value=place.value;
//         console.log("place :",place_value);

        // let phone = document.getElementById('phone');
        // let phone_value=phone.value;
        // console.log("phone :",phone_value);

        // let age = document.getElementById('age');
        // let age_value=age.value;
        // console.log("phone :",age_value);

        // let email = document.getElementById('email');
        // let email_value=email.value;
        // console.log("email :",email_value);


        // let password=document.getElementById('password');
        // let password_value=password.value;
        // console.log("password:",password_value);

        // datas.firstname = firstname_value;
        // datas.lastname = lastname_value;
        // datas.place = place_value;
        // datas.phone = phone_value;
        // datas.email =email_value;
        // datas.password=password_value;
        // datas.age= age_value;

    //     // console.log("datas:",datas);
    //     handleDatas(datas);//to push obj to array
    // });
    // let arr=[];


    // function handleDatas(datas){
    //     console.log("datas :",datas);
    //     let message = document.getElementById('message');
        

    //     //validation
    //     if(arr.length > 0){
    //         for(let i =0;i<arr.length;i++){
    //             if(arr[i].email == datas.email){
    //                 message.innerHTML ="email already found";
    //                 return;

    //             }
                
                
    //         }
    //     }

    //     arr.push(datas);
    //     message.innerHTML="sucess";
    //     console.log("arr :",arr);
    // }
    // }
    {
    let arr =[
        {
            name : "anvar",
            mark :5,
            place:"pettaa"
        },
        {
            name:"arathi",
            mark:100,
            place:"thodupuzha"
        }
    ];
    console.log("arr :",arr);


        
    
//ARRAY FUNCTIONS
//forEach():used in looping
{
console.log("forEach ->");

arr.forEach((item,index)=>{

    console.log(`item -${index}:`,item);
    
});

//FIND

console.log("find->");
const y = arr.find((item)=> {
    return item.name == "anvar";
});
console.log("y :",y)
}
//filter
console.log("filter ->");
const arr1 = arr.filter((item,index) => {
    return item.mark == 5;
})
console.log("arr1:",arr1);
//map
console.log("map ->");
const arr2 = arr.map((item)=>{
    return item.name;

});//returns an array of same length
console.log("arr2:",arr2);

//reduce 
const value = arr.reduce((total,item)=> {
    console.log("total :",total);
    console.log("item :",item);
    return total + item.mark;


},0);
console.log("value:",value);

}


//to find the sum of square of elements in an array using forEach
//find the first even number Of an array using find
//filter all the even numbers in an array using filter function
{
    let num = [1, 2, 3, 4];
    let sumOfSquares = 0;
    
    num.forEach(function (num) {
      sumOfSquares += num * num;
    });
    
    console.log("sum of squares in array:",sumOfSquares);

//2
   
    const x= num.find(item => item % 2 === 0);      
    console.log(x) ;
//3
    const arr1=num.filter(item => item%2==0)
    console.log(arr1)
    
    }
   
//or first even number of an array
{

function findEvenNum(arr){
    let evenNum=arr.find((element)=>{
        //element=1 -> element%2->1%2 ==0 ->false
        //element=2 -> element%2 == 0->2%2==0->true 
        return element%2 == 0
    });
    return evenNum;
}
let firstEvenNumber = findEvenNum([1,2,3,4]);
console.log("firstEvenNumber:",firstEvenNumber);


//filter all even numbers using filter 
function findAllEvenNum(arr){
    let evenNumsArr=arr.filter((element,index)=>{

        //element =1 -> element%2 ==0 -> 1%2==0-> false
        //element=1 -> element%2 ==0-> 2%2==0 -> true -> return element -> return2
        return element%2 == 0;
    });
    return evenNumsArr;
}
let allEvenNumbers = findAllEvenNum([1,2,3,4]);
console.log("allevennumbers:",allEvenNumbers);

}
//double elements in an array using map
{
function double(arr){
    let doubledArr = arr.map((element)=> {
        //return-arr -> [20,40,60]
        //element=10 -> element*2 ->10*2 =20 -> return 20
        //element =20 -> element*2 -> 20*2=40 -> return 40
        return element*2;


    });
    return doubledArr;

}
let doubledNumbers = double([10,20,30]);
console.log("doublednumbers:",doubledNumbers)

}
//write a function 'productPositive' that takes an array of numbers as input and uses the 'reduce' method to calculate the product of all possitive numbers in an array
{
function productPositive(arr){
    const prod = arr.reduce((prod,element) => {
        //element=-1 -> element>0 -> false -> return prod -> 1
        //element = 1 -> element>0 ->true -> return prod = prod * element-> prod=1*1 -> return 1->1


        if(element>0){
            return prod = prod * element;
        
        }else{
            return prod;
        }

        },1);
        return prod;//6
    }
 let product = productPositive([-1,1,-2,2,-3,3]);
 console.log("product:",product)
}

//1.Given an array of numbers, use the map method to create a new array where each number is doubled.
// let numbers = [1, 2, 3, 4, 5];
// let doubledNumbers = numbers.map(num => num * 2);
// console.log("a new array where each number is doubled:",doubledNumbers);

//2.Given an array of numbers, use the filter method to create a new array containing only the even numbers.
// {
//     let arr=[5,9,8,4];
//     let evennumber=arr.filter(num => num %2 ===0);
//     console.log("new array containing only the even numbers:",evennumber)
// }
//3.Given an array of numbers, use the reduce method to calculate the sum of all the numbers
// {
    
//     let arr=[3,4,5,6];
   
//     const sum= arr.reduce((total,item)=> {
        
//     return total+item;
    
//     },0);
//     console.log("sum of num:",sum);
    
//     }
    

//4.Given an array of numbers, use the reduce method to find the maximum value in the array.
// {
//     let arr=[1,2,3,4];
//     let max = numbers.reduce((total, item) => {
//         return Math.max(total, item);
//       }, );
      
//       console.log("maximum:",max);
// }
//5.Given an array of strings, use the map method to create a new array where each string is capitalized.
// let string = ["cat", "cow", "dog"];

// let capital = string.map((str) => {
//   return str.toUpperCase();
// });

// console.log("string is capitalized:",capital);

//6.Given an array of words, use the filter method to create a new array containing only the words with a length greater than a specified value.
// {
//     let arr = ["hello", "world", "javascript","toughh"];
//     let minLength = 5;

// let newWord = arr.filter((arr) => {
//   return arr.length > minLength;
// });

// console.log("newwords:",newWord); 

// }

//7.Given an array of numbers, use the map method to create a new array of strings indicating whether each number is even or odd.
// {
//     let num=[7,9,6,3,4];
//     const even = numbers.map(num => (num % 2 == 0));
//     console.log("even",even)
// }

//8.Given an array, use the filter method to create a new array with only unique elements (remove duplicates).

//9.Given an array of numbers, use the sort method to sort them in ascending order.

//10.Given an array of objects with a name property, use the map method to create a new array containing only the names.

//to take vowels from string

// {

//     let str = "aeroplane";
//     function vowels(str){
//         for (let i = 0; i < str.length; i++) {
//             if(str[i]){
                

//             }
           
//         }
//           }
//           return vowels;
//         }
    
    
    {
//this is used to refer current object
console.log(this);
let obj ={
    name : "john",
    getAge: function(){
        console.log(this);

    }
}
console.log(obj.name);
console.log(obj.getAge());

    }
    function greet(message,message1){
        console.log("message :",message);
        console.log("message1:",message1);

        console.log("this:",this);
        console.log("name:",this.name);


    }
    

    //call method
    // greet.call(obj,"hello","hello1");

    //bind method
    let boundGreet = greet.bind(obj ,"hello","hello1");
    console.log("boundGreet:",boundGreet);
    boundGreet();

    //apply method
    greet.apply(obj,["hello","hello1"]);

    
// {
//     let obj = {
//         name:"harry",
//         age: 30,
//         mark:50,
//         greeting:function(){
//             console.log("name:",this.name);
//             console.log("age:",this.age);
//         }

//     }

// obj.greeting();//
// }
// //constructor function
// function Person(name,age,mark){
//     this.name =name;
//     this.age = age;
//     this.mark=mark;
//     this.greeting = function(){
//         console.log("name:",this.name);
//         console.log("age:",age);

//     }
// }
// const person1 = new Person("john",30);//new keyword is used to create an object
// console.log("person1:",person1);
// person1.greeting();

// const person2 = new Person("jane",25);
// console.log("person2:",person2);
// person2.greeting();

// //updating individual objects
// person2.place="ekm";
// console.log("Person2.place",person2.place);

// Person.prototype.getMark = function(){
//     return this.mark;
// }
// console.log("Mark of person1:",person1.getMark());
// console.log("mark of person2:",person2.getMark());

// {
//     let obj1 = {
//         type:"series",
//         model: 2017,
//         Cars:function(){
//             console.log("type",this.type);
//             console.log("model",this.model);

//         }

        
//     }
//     obj1.Cars();
// }

// function Car(type,model){
//     this.type = type;
//     this.model = model;
//     this.greeting=function(){
//         console.log("type",this.type);
//         console.log("model:",this.model);
//     }
// }
// const car1 = new Car("5series",2007);
// console.log("car1:",car1);
// car1.Cars();

// const car2 = new Car("s series",2020);
// console.log("car2",car2);
// car2.Cars();

//using classes
// {
// class Person{
//     name;
//     age;
//     mark;

//     constructor(name,age,mark){
//         this.name = name;
//         this.age =age;
//         this.mark=mark;

//     }

//     greeting(){
//         console.log("name:",this.name);
//         console.log("age:",age);
//         console.log("mark:",mark);
          
//     }
// }
// let person1 = new Person("john",30,70);
// console.log("person1:",person1);
// person1.greeting();

// let person2 = new Person("anu",20,50);
// console.log("person2:",person2);
// person2.greeting();
// }

// class Animal{
//     constructor(name){
//         this.name = name;
//     }

//     walk(){
//         console.log("animal walking");
//     }
// }

// class Dog extends Animal{
//     nickName;
//     constructor(name,nickName){
//         super(name);//calls parent constructor
//         this.nickName=nickName
//     }
//     walk(){
//         console.log("dog walking....")
//     }
// }

// let myAnimal = new Animal("monkey");
// console.log("myanimal:",myAnimal);
// myAnimal.walk();


// let myDog = new Dog("parent of arjun","Arjun");
// console.log("mydog",myDog);
// myDog.walk();


// {
// class Cars{
//     constructor(car){
//         this.car = car;

        
//     }
//     model(){
//         console.log("car model ");
//     }
// }
//     class Polo extends Cars{
//         versionName;
//         constructor(model,versionName){
//             super(model);
//             this.versionName=versionName
//         }
//         model(){
//             console.log("polo color is red");
//         }
//     }
//     let myCars = new Cars("2020");
//     console.log("myCars:",myCars)
//     myCars.model();


//     let myPolo = new Polo("class of cars","red");
//     console.log("myCar",myCars);
//     myCars.model();

// }

{
    //getters and setters
class car{
    constructor(name){
        this.name = name;
    }

    //without using getters and setters
    //setColor(color){
        //this.color = color;
        //}
        //getColor(){
            //return this.color;
            //}
            


            //using getters and setters
            set setColor(color){
                this.color=color;
            }
            get getColor(){
                return this.color;
            }
        }

        let myCar = new car("Benz");
    
    //setting color
    //myCar.setColor("green");//without using setter
    myCar.setColor = "green";//using setter


    console.log("mycar:",myCar);

    //getting color
    //console.log("color of myCar:",myCar.getColor());//without using filter
    console.log("color of myCar:",myCar.color);//using getter
    }



    class Button{
        constructor(content){
            this.button = document.createElement('button');
            this.button.innerHTML = content;
            document.body.appendChild(this.button);
        }

        set width(width){
            this.button.style.width = width + "px";

        }

        set height(height){
            this.button.style.height = height +"px";
        }

        get width(){
            return this.button.style.width;
        }
        get height(){
            return this.button.style.height;

        }

        onClick(fn){
            this.button.onClick = fn;
        }

    }
    let myButton = new Button('click here');
    console.log("myButton:",myButton);

    myButton.width=200;
    myButton.height=50;

    console.log("button width:",myButton.width);
    console.log("button height:",myButton.height);

    myButton.onClick(function (){
        console.log("my button clicked....");


    });

    //inheritance
    class YellowButton extends Button{

        //Method Over riding
        onClick(fn){
            this.button.onclick = function (){
                this.button.style.background = "yellow";
                fn();

            }.bind(this);
        }

    }
    let myYellowButton = new YellowButton("yellow Button");
    console.log("myyellowbutton:",myYellowButton);

    myYellowButton.width=300;
    myYellowButton.height = 75;


    console.log("myyellowbutton width:",myYellowButton.width);

    console.log("myyellowbutton height:",myYellowButton.height);

    myYellowButton.onClick(function(){
        console.log("button clicked...");
    })

    