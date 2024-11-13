// console.log(`hello`);
// window.alert("pop");
// document.getElementById("myp").textContent= `i love javasript`;
// let price=12.2;  number datatype
// let firstname="srinu";
// console.log(`Total is ${price} calculated`);
// console.log(`my name is ${firstname}`);
// console.log(typeof(firstname));
// let online=false;
// console.log(`bro is ${online}`);
// console.log(typeof(online));
// let fullname="Boddupally Srinu";
// document.getElementById("text").textContent = `danger ${fullname}`;
// let student=5;
// student/=2;
// student=student**2;//power operator use
// console.log(student);
/* operator precedence
1.parenthesis
2.exponents
3.multiplication&division&modulo
4.addition &subtraction*/
// let result= 1+2*3+4**2;
// console.log(result);
  // ---------------------
  //How to accept user input
  //1.Easy way =window prompt
  //2.PROFESSIONAL WAY =HTML textbox<<
  // let u;
  // username=window.prompt("what's your username?");
  // console.log(username);
  // document.getElementById("Submit").onclick=function(){
  //   u=document.getElementById("text").value;
  //   document.getElementById("heading").textContent=`hello ${u}`;
    // console.log(u);
  // }
  //type conversion (strings,numbers,booleans)
  // let age=window.prompt("How old are you");
  // age=Number(age);
  // age+=1;
  // console.log(age,typeof age);
  // let x="pizza";
  // let y="pizza";
  // let z="pizza";
  // x=Number(x);
  // y=String(y);
  // z=Boolean(z);
  // console.log(x,typeof x);
  // console.log(y,typeof y);
  // console.log(z,typeof z);
//const =a variable that can't be changed
// const PI=3.14159;
// let radius;
// let circumference;
// radius=window.prompt("Enter the radius of a circle");
// radius=Number(radius);
// circumference=2*pi*radius;
// console.log(circumference);
// document.getElementById("Submit").onclick=function(){
//  radius=document.getElementById("mytext").value;
// radius=Number(radius);
// circumference=2*PI*radius;
//   document.getElementById("myh3").textContent=circumference+"cm";
//  }
 //counter program
// const decreaseBtn=document.getElementById("decreaseBtn");
// const resetbtn=document.getElementById("resetbtn");
// const increaseBtn=document.getElementById("increaseBtn");
// const countlabel=document.getElementById("countlabel");
// let count=0;
// increaseBtn.onclick=function(){
//    count++;
//    countlabel.textContent=count;
//  }
//  decreaseBtn.onclick=function(){
//   count--;
//   countlabel.textContent=count;
// }
// resetbtn.onclick=function(){
//   count=0;
//   countlabel.textContent=count;
// }
// ------------------------
// Math=built-in object that provides a collection of properties and methods
// console.log(Math.PI);
// console.log(Math.E);//eulers number
// let x=3;
// let y=2;
// let z =1;
// let z= Math.floor(x);
// let z= Math.round(x);
// let z= Math.ceil(x);
// let z= Math.trunc(x);
// let z= Math.pow(x,y);
//  z= Math.sqrt(y);
//  z= Math.log(x);
// z= Math.sin(x);
// z= Math.cos(x);
// z= Math.tan(x);
// z= Math.abs(x);
// z= Math.sign(x);
// let max=Math.max(x,y,z);
// console.log(max);
// let min=Math.min(x,y,z);
// console.log(min);
// -------------------------
// RANDOM NUMBER GENERATOR is generatores the random number from 0 &1 b/w
// let randomnum=Math.floor(Math.random()*(max-min))+min;
// console.log(randomnum);
// const mybutton=document.getElementById("mybutton");
// const label1=document.getElementById("label1");
// const label2=document.getElementById("label2");
// const label3=document.getElementById("label3");
// const min=1;
// const max=6;
// let randomnum1;
// let randomnum2;
// let randomnum3;
// mybutton.onclick =function(){ 
//   randomnum1=Math.floor(Math.random()*max)+min;
//   randomnum2=Math.floor(Math.random()*max)+min;
//   randomnum3=Math.floor(Math.random()*max)+min;
//    label1.textContent=randomnum1;
//    label2.textContent=randomnum2;
//    label3.textContent=randomnum3;
// }
//IF STATEMENTS  =ifa a  condition is true,execute some code if not ,do something else
// const mytext=document.getElementById("mytext");
// const mysubmit=document.getElementById("mysubmit");
// const resultelement=document.getElementById("resultelement");
// let age;
// mysubmit.onclick=function(){
//   age=mytext.value;
//   age=Number(age);
//   if(age>=100){
//      resultelement.textContent="you are very good boy";
//   }else if(age==0){
//     resultelement.textContent="you are very bad boy";
//   }
//   else{
//     resultelement.textContent="you are very innocent boy";
//   }
// }
//.checked = property but determines the checked state of an HTML checkbox or radio button element
// const mycheckbox = document.getElementById("mycheckbox");
// const visaBtn = document.getElementById("visaBtn");
// const mastercardBtn = document.getElementById("mastercardBtn");
// const paypalBtn = document.getElementById("paypalBtn"); 
// const mysubmit = document.getElementById("mysubmit");
// const subresult = document.getElementById("subresult");
// const paymentResult = document.getElementById("paymentResult");
// mysubmit.onclick = function() {
//   if (mycheckbox.checked) {
//     subresult.textContent = `you are subscribed`;
//   } else {
//     subresult.textContent = `you are not subscribed`;
//   }
//   if(visaBtn.checked){
//     paymentResult.textContent=`you are paying with visa`;
//   }else if(mastercardBtn.checked){
//     paymentResult.textContent=`you are paying with Mastercard`;
//   }
//   else if(paypalBtn.checked){
//     paymentResult.textContent=`you are paying with paypal`;
//   }
//   else{
//     paymentResult.textContent=`you must select a payment type`;
//   }
// }
// ternary operator = a short cut to if{} and else{} satements helps to assign a variable bases on a condition condition? codeIftrue:codeiffalse
// let age=33;
// let msg=age>=18 ?`your are greater than 18`:`you are less than the 18`;
// console.log(msg);
// let student=false;
// let msg=student?"you are student":"you are not a student";
// console.log(msg); 
// let purchaseAmount =125;
// let discount =purchaseAmount>=100?10:0;
// console.log(`amount is  $${discount}`);  
  //SWITCH= can be an efficient repalcement to many else if statements   
  // let day=5;
  // switch(day){
  //     case 1:
  //       console.log("monday");
  //       break;
  //      case 2:
  //       console.log("tuesday");
  //       break;
  //       case 3:
  //       console.log("wednesday");
  //       break;
  //       case 4:
  //       console.log("thursday");
  //       break;
  //       case 5:
  //       console.log("friday");
  //       break;
  //       case 6:
  //         console.log("saturday");
  //         break;
  //        case 6:
  //           console.log("sunday");
  //           break;
  //         default:
  //           console.log("invalid day");
  // }
  // ---------------STRING METHODS=allow to mamipulate and work with text(strings)
  // let username="Brocode";
//   console.log(username.charAt(6));
//   console.log(username.lastIndexOf('o'));
// console.log(username.length);
// console.log(username.trim());
// console.log(username.toUpperCase());
// console.log(username.toLowerCase());
// console.log(username.repeat(3));
// console.log(username.startsWith('B'));
// console.log(username.endsWith('e'));
// console.log(username.includes(" "));//check the space in the string
// let phonenumber="123-456-7890";
// phonenumber=phonenumber.replaceAll("-","@")
 // console.log(phonenumber);
// let phonenumber="123-456-7890";
// phonenumber=phonenumber.padStart(31,"0")
// console.log(phonenumber);
// let phonenumber="123-456-7890";
// phonenumber=phonenumber.padEnd(31,"0")
// console.log(phonenumber);
// string slicing =creating a substring form a portion of anothe string string.slice(start,end);
// const fullname="srinu boddupally";
// let firstname=fullname.slice(0,5);
// let lastname=fullname.slice(6,8);
// let firstchar=fullname.slice(0,1);
// let lastchar=fullname.slice(-3);
// let firstname=fullname.slice(0,fullname.indexOf(" "));
// let lastname=fullname.slice(0,fullname.indexOf(" ")+1);
// console.log(firstname);
// console.log(lastname);
// console.log(firstchar);
// console.log(lastchar);
// const email = "srinu@gmail.com";
// let username = email.slice(0, email.indexOf("@"));
// let extension = email.slice(email.indexOf("@") + 1);
// console.log(username); 
// console.log(extension);
//Method Chaining=calling one method after another in one continous line of code
// let username=window.prompt("Enter the username");
//.............NO METHOD CHAINING.........
// username=username.trim();
// let letter=username.charAt(0);
//  letter=letter.toUpperCase();
//  let extrachars=username.slice(1);
//  extrachars=extrachars.toLowerCase();
//  username=letter+extrachars;
//  console.log(username);
//............. METHOD CHAINING.........
// username=username.trim().charAt(0).toUpperCase()+username.trim.slice(1).toLowerCase();
// console.log(username);
// ----------------logical operators =used to  combine or manipulate  boolean values(true or false)
// AND=&& OR=||  NOT=!
// const sunny=true;
// if(!sunny){
//   console.log("it is sunny");
// }else{
//   console.log("it is not sunny");
// }
// = assignment operator
// == comparsion operator (compareif values are values)
// === strict equlality opertor (compare if values & datatype are equal)
// !=inequality operator 
// !== strict inequality operator
// const PI="3.14";
// if(PI ==="3.14"){//must same the datatype
//   console.log("That is pi");
// }
// else{
//   console.log("That is not pi");
// }
// if(PI!=="3.14"){//must same the datatype
//   console.log("That is pi");
// }
// else{
//   console.log("That is not pi");
// }
// -----while loop =repeat some code while some condition is true
// let loggedin=false;
// let username;
// let password;
// while(!loggedin){
//    username=window.prompt(`Enter the username`);
//    password=window.prompt(`Enter the password`);
//    if(username=="myusername" && password=="mypassword"){
//      loggedin=true;
//      console.log("you are logged in ");
//    }else{
//      console.log("Invalid credentoials!please try again");
//    }
// }
// do{
//   username=window.prompt(`Enter the username`);
//   password=window.prompt(`Enter the password`);
//   if(username=="myusername" && password=="mypassword"){
//     loggedin=true;
//     console.log("you are logged in ");
//   }else{
//     console.log("Invalid credentoials!please try again");
//   }
// }while(!loggedin)
// for loop =repeat some code a limited amount of times
// for(i=1;i<=20;i++){
//   if(i!=1){
//     // continue;
//     break;
//   }else{
//    console.log(i);
// }}
// Number Guessing Game
// const minnum = 1;
// const maxnum = 100;
// const answer = Math.floor(Math.random() * (maxnum - minnum + 1) + minnum);
// let attempts = 0;
// let guess;
// let running = true;

// while (running) {
//   guess = window.prompt(`Guess a number between ${minnum} - ${maxnum}`);
//   guess = Number(guess);
  
//   if (isNaN(guess)) {
//     window.alert("Please enter a valid number.");
//   } else if (guess < minnum || guess > maxnum) {
//     window.alert(`Please enter a number between ${minnum} and ${maxnum}.`);
//   } else {
//     attempts++;
    
//     if (guess < answer) {
//       window.alert("Too low! Try again.");
//     } else if (guess > answer) {
//       window.alert("Too high! Try again.");
//     } else {
//       window.alert(`Correct! The answer was ${answer}. It took you ${attempts} attempts.`);
//       running = false; 
//     }
//   }
// }
//function =Asection of reusable code.
  // declare code once ,use it whenever you want.
  // call the function to execute that code
// function happybirthday(srinu,age){
//    console.log("Happy birthday to you");
//    console.log("Happy birthday to you");
//    console.log(`Happy birthday ${username}to you`);
//    console.log(`the ${age} is`);
// }
// happybirthday("srinu",45);
// happybirthday("srinth",35);
// function add(x,y){
//   return x+y;
//  }
// function subtract(x,y){ 
//    return x-y;
// }
// function multiply(x,y){ 
//   return x*y;
// }
// function divide(x,y){ 
//   return x/y;
// }
// function iseven(number){
//   return number%2==0?true:false;
// }
// function isvaliEmail(email){
//   return email.includes("@")?true:false;
// }
// t=add(2,4);
// console.log(t);
// t=subtract(2,4);
// console.log(t);
// t=multiply(2,4);
// console.log(t);
// t=divide(2,4);
// console.log(t);
// t=iseven(8);
// console.log(t);
// t=isvaliEmail("srinu34@gmail.com");
// console.log(t);
//variable scope =where a varaible is recognised and accessible(local vs global)
// function2();
 // let y=4
// function function2(){ 
//   let y=3;
//   console.log(y);
// }
//Temepature conversion program
const texBox=document.getElementById("textBox");
const toFarenheit=document.getElementById("toFarenheit");
const toCelsius=document.getElementById("toCelsius");
const result=document.getElementById("result");
let temp;
function convert()
{
  if(toFarenheit.checked){ 
       temp=Number(texBox.value);
      temp=temp*9/5+32;
      result.textContent=temp.toFixed(1)+"°F";
  }else if(toCelsius.checked){
    temp=Number(texBox.value);
    temp=(temp-32)*(5/9);
    result.textContent=temp.toFixed(1)+"°C";
  }else{
     result.textContent="select a unit";
  }
}
