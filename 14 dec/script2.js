import printHello from "./script3.js";
import{printHello1,printHello2,printHai}from "./script3.js";

printHello();
printHello1();
printHello2();
printHai();


// console.log("javascript regular expressions..");
// const str1 = "the cat is white";
// const str2 = "rat eats fishessss";
// const str3 ="is it  a fish";
// const str4 =`
// good meat
// is always good
// `;
// const regexp1 = /a/;
// const result1 = regexp1.test(str1);//checks if str1 contains letter 'a'
// console.log("result1:",result1);

// const regexp2 = /a/i;
// const result2 =  regexp2.test(str1)//checks if str1 contains leter 'a' and performs case insensitive search
// console.log("result2:",result2 );

// const regexp3= /ab/;
// const result3 =  regexp3.test(str1);//check if str1 contains'ab'
// console.log("result3:",result3 );

// //[] - represents range
// const regexp4= /[crb]a/;
// const result4 =  regexp4.test(str1);//check if str1 contains'c' 'r' or 'b' before 'a'
// console.log("result4:",result4 );

// const regexp5= /[a-z]a/i;
// const result5 =  regexp5.test(str1);//check if str1 contains any letter in between 'a' to 'z' also i represents case insensitive search
// console.log("result5:",result5 );

// const regexp6= /[a-z0-9]a/i;
// const result6 =  regexp6.test(str1);//check if str1 contains any letter in between 'a' to 'z' or any digits in between 0  to 9
// console.log("result6:",result6 );


// //^ represents start of a string 
// const regexp7= /^rat/i;
// const result7 =  regexp7.test(str2);//check if str2 starts with rat
// console.log("result7:",result7);


// //$:represents end of a string
// const regexp8= /fish$/i;
// const result8 =  regexp8.test(str2);//check if str2 ends with 'fish'
// console.log("result8:",result8 );

// const regexp9= /^good/im;//m-flag represents multiline matching
// const result9 =  regexp9.test(str4);//check if str2 ends with 'good'
// console.log("result9:",result9 );

// const regexp10= /good$/im;//m-flag represents multiline matching
// const result10 =  regexp10.test(str4);//check if str4 ends with 'good'
// console.log("result10:",result10 );

// const regexp11= /fishes?/im;//word before '?'is optional for matching
// const result11 =  regexp11.test(str3);//it matches both fishe and fishes,'s' is optional
// console.log("result11:",result11 );

// const regexp12= /fish(es)?/im;//'()'represents gruops
// const result12 =  regexp12.test(str3);//it matches both fishe and fishes 'es' is optional
// console.log("result12:",result12 );

// const regexp13= /fishes*$/i;//the letter before '*'can occur multiple times in a string
// const result13 =  regexp13.test(str3);//it matches fishe,fishes,fishnesss
// console.log("result13:",result13 );

// const regexp14= /fishes+$/i;//the letter before '*'can occur multiple times in a string,but atleast one occurance is required
// const result14 =  regexp14.test(str3);//it matches fishe,fishes,fishnesss
// console.log("result14:",result14 );

// const regexp15= /fishes.$/i;//any character can occur after fish,'.' represents any type of character
// const result15 =  regexp15.test(str3);//it matches fishe,fisha,fishb,fish1,fish2....but it does not matches fish,a character in place of '.'is a must
// console.log("result15:",result15 );

// const regexp16= /fish.*$/i;//any character can occur after fish,'.' represents any type of character
// const result16 =  regexp14.test(str3);//it matches fishe,fishes,fishness,......since due to '*' multiple characters are matched
// console.log("result16:",result16);


// //input validation
// //A-Z,a-z
// //0-9
// //...
// //starts with character

// const regexInp=/^[a-z][a-z0-9]*$/i;

// function checkResult(value){
//     const result = regexInp.test(value);

//     if(result){
//         return 'valid string';
//     }else{
//         return 'invalid string';
//     }
// }

// const value = "_J_9";

// let validation_result =checkResult(value);
// console.log("validation_result:",validation_result);




// //
// function onChange(arg){
//     let validation_result=checkResult(arg.value);
//     let label = document.getElementById('error');
//     if(validation_result){
//         label.innerHTML = validation_result

//     }else{
//         label.innerHTML= validation_result;
//     }
// }

// //string replace using regular expressions
// let str5="a-b-c";
// let replacedString1 = str5.replace(/-/,':');//replaces first '-' with':'
// console.log("replacedstring:",replacedString1);

// let replacedString2= str5.replace(/-/g,':');//replaces first '-' with':'
// console.log("replacedstring2:",replacedString2);

// let dateStr ='12-10-04'

// let dateStrReplaced = dateStr.replace(/(\d{2}$)/,'20$1');//gets '04' from dataStr and replace it as '2004',$1 will get the value of the first capture group ie within '()'brackets
// console.log("dateStrreplaced:",dateStrReplaced)

// //email
// const exp1=/^[a-z]*[0-9][@]*$/i;

// function emailCheck(arg){
//     let validation_result=checkResult(arg.value);
//     let label = document.getElementById('errorr');
//     if(validation_result){

//     }
// }

//'^'  and '$' can only be used in the start and end of a string and cannot be used in between strings to match,so we use lookaheads for giving starting and ending in between  strings

//(?=) - positive lookahead,A(?=B) -> matches:A only if A is followed by B
//(?!) - negative lookahead,A(?!B) ->matches:A only if A is not followed by B
//(?<=) - positive lookbehind,(?<=B)A -> matches:A only if A is preceded by B
//(?<!) - negative lookbehind,(?<!B)A ->matches:A only if A is not preceded by B

// {
//     let dataString = '19-12-2023';
//     let regex = /-\d+-/;//it will match also '-12' in result and gives as result array
//     const result = dateString.match(regex);
//     console.log("result:",result);
    
//     //inorder to match exactly '12' in dateString we can use lookaheads
//     let regex1=/(?<=-)\d+(?=-)/;//this will exactly match '12' in string
//     const result1 = dateString.match(regex1);
//     console.log("result1:",result1);

//     //example for negative lookahead and negative lookbehind
//     let phone ="(91)1234567890";

//     //to match numbers outside of (91)
//     const phoneRegex = /(?<!\()\d+(?!))/;
//     const phoneRegexResult = phone.match(phoneRegex);
//     console.log("phoneRegexResult:",phoneRegexResult);

// }

//     function findUser(userId){
//         let userInfo = [{
//             id:1,
//             name:"john",
//             age:30
//         },
//     {
//         id:2,
//         name: "jane",
//         age:25,
//     }
// ];

//     let user = userInfo.find((element)=> element.id == userId);
//     return user;
// }
    // let user = userInfo.find()=> userInfo.id  

    // //using promises 
    // {
    // function findUser2(userId){
    //     return new Promise((resolve,reject)=>
    //     {
    //         setTimeout(()=>{
    //             let userInfo = [{
    //                 id:1,
    //                 name:"john",
    //                 age:30,
    //             },
    //         {
    //             id:2,
    //             name:"jane",
    //             age:25,
    //         }];
    //         let user =userInfo.find(element)=> element.id === userId;
    //         if(user){
    //             resolve(user);

    //         }else{
    //             reject("user not found");
    //         }
    //         },3000)
    //     })
            

    //     }
    //     findUser2(3)
    //     .then(user)=>{
    //         console.log("\n\n");
    //         console.log("user:",user);
    //         console.log(user.name);

    //     }
    //     .catch((error)=>{
    //         console.log("\n\n");
    //         console.log("error:",error)
    //     });
    // }/

    //not reiable,call back hell
    //  api.createOrder(()=>{
    //     api.payment(()=>{
    //         api.orderSuccess();
    //     });
    //  });

   
    //using async await
    async function getData(){
        let userData = await findUser2(2);
        console.log("userData:",userData);

    }
getData();

