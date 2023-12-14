console.log("javascript regular expressions..");
const str1 = "the cat is white";
const str2 = "rat eats fishessss";
const str3 ="is it  a fish";
const str4 =`
good meat
is always good
`;
const regexp1 = /a/;
const result1 = regexp1.test(str1);//checks if str1 contains letter 'a'
console.log("result1:",result1);

const regexp2 = /a/i;
const result2 =  regexp2.test(str1)//checks if str1 contains leter 'a' and performs case insensitive search
console.log("result2:",result2 );

const regexp3= /ab/;
const result3 =  regexp3.test(str1);//check if str1 contains'ab'
console.log("result3:",result3 );

//[] - represents range
const regexp4= /[crb]a/;
const result4 =  regexp4.test(str1);//check if str1 contains'c' 'r' or 'b' before 'a'
console.log("result4:",result4 );

const regexp5= /[a-z]a/i;
const result5 =  regexp5.test(str1);//check if str1 contains any letter in between 'a' to 'z' also i represents case insensitive search
console.log("result5:",result5 );

const regexp6= /[a-z0-9]a/i;
const result6 =  regexp6.test(str1);//check if str1 contains any letter in between 'a' to 'z' or any digits in between 0  to 9
console.log("result6:",result6 );


//^ represents start of a string 
const regexp7= /^rat/i;
const result7 =  regexp7.test(str2);//check if str2 starts with rat
console.log("result7:",result7);


//$:represents end of a string
const regexp8= /fish$/i;
const result8 =  regexp8.test(str2);//check if str2 ends with 'fish'
console.log("result8:",result8 );

const regexp9= /^good/im;//m-flag represents multiline matching
const result9 =  regexp9.test(str4);//check if str2 ends with 'good'
console.log("result9:",result9 );

const regexp10= /good$/im;//m-flag represents multiline matching
const result10 =  regexp10.test(str4);//check if str4 ends with 'good'
console.log("result10:",result10 );

const regexp11= /fishes?/im;//word before '?'is optional for matching
const result11 =  regexp11.test(str3);//it matches both fishe and fishes,'s' is optional
console.log("result11:",result11 );

const regexp12= /fish(es)?/im;//'()'represents gruops
const result12 =  regexp12.test(str3);//it matches both fishe and fishes 'es' is optional
console.log("result12:",result12 );

const regexp13= /fishes*$/i;//the letter before '*'can occur multiple times in a string
const result13 =  regexp13.test(str3);//it matches fishe,fishes,fishnesss
console.log("result13:",result13 );

const regexp14= /fishes+$/i;//the letter before '*'can occur multiple times in a string,but atleast one occurance is required
const result14 =  regexp14.test(str3);//it matches fishe,fishes,fishnesss
console.log("result14:",result14 );

const regexp15= /fishes.$/i;//any character can occur after fish,'.' represents any type of character
const result15 =  regexp14.test(str3);//it matches fishe,fisha,fishb,fish1,fish2....but it does not matches fish,a character in place of '.'is a must
console.log("result14:",result14 );




