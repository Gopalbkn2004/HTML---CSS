       console.log("HELLO GOPAL");
       // alert(" first click to OK then open this site");
        confirm("thank you for wesite");
        //promt box site open hona sa phala ata ha
       var x= prompt("enter your name");
       alert("welcome" + x );
    // data type in javascript
    //number
    var num1 = 436;
    var num2 = 653;

    //string
    var str1='my name is gopal ';
    var str2='my father name is surendra kumar khatri';

    //object
    var gopal= 49;
    var praveen= 60;
    var kanishka= 89;
    
    //booleans
    var a = true;
    var b = false;
    console.log(a ,b);

    // var und = undefined;
    var und;
    console.log(und)

    var n =null;
    console.log(n);
    /*
    at a very highh level, there are two type of data type injavascript
    1. primitive data type:undefined,null,number,string,boolean,symbol
    2. reference data type:
    */
   var arr = [0,1,2,9,4,5]
   console.log(arr[2] )

// operator in javascript 
//arithemetic operator
var a =12;
var b =30;
console.log("the value of a+b is", a+b);
console.log("the value of a*b is",a*b);
console.log("the value of a-b is",a-b);
console.log("the value of a/b is",a/b);
//comperison operators
var c =30;
var v= 40;
console.log(c == v);
console.log(c >= v);
console.log(c <= v);
//logical operater

//logical and
//console.log(true && true)
//console.log(true && false)
//console.log(false && true)
//console.log(false && false)
var age=19;
var b=40;
if(age>=18 && b<=40){document.write("ellegible")}


//logical or
//console.log(true || true)
//console.log(false || true)
//console.log(true || false)
//console.log(false || false)
var age=19;
var b=40;
if(age>=18 || b<=40){document.write("able")}

//logical not
console.log(!false);
console.log(!true);

function avg(a, b){
     return(a+b)/2;
}

c1=avg(5,7);
c2=avg(12,23);
console.log(c1,c2);
var l=10;
var m=10;
if(l=m){
document.write("then statment is true")}
// ya bata na kaliya ha ki ya kis type ka object ha
var a=20;
document.write(a);
document.write("<br><br>");
document.write(typeof a);
document.write("<br><br>");
var age=12;
switch(true){
     case(age>=18 && age<=40):
     document.write("yes eligible")
     break;
     default : document.write("not eligible")
};