/*javascript output*/

document.write("hello word");
console.log("md.Bokul Islam");
window.alert("hello");

/*javascript datatype
  string
  number
  boolen
  objects*/

/*javascript variable*/
var name='bokul'
document.write(typeof(name) + "<br/>");
var age=24
document.write(typeof(age) + "<br/>");
var num=24.43
document.write(typeof(num) + "<br/>");
var yes=true
document.write(typeof(yes)+"<br/>");

/*javascript datatype conversion*/
var name1="40"
name1=parseInt(name1);
document.write(name1 +"<br/>");
document.write(typeof(name1) +"<br/>");


var name2=30.3453
name2=parseInt(name2);
document.write(name2+"<br/>");
document.write(typeof(name1) +"<br/>");

var name4=190
name4=parseFloat(name4);
document.write(name4+"<br/>");
document.write(typeof(name4) +"<br/>");

var name3=30
name3 = name3.toString();
document.write(name3 +"<br/>");
document.write(typeof(name3) +"<br/>");

var number=3.1416
document.write(number.toFixed(1)+'<br/>');
document.write(number.toPrecision(4)+'<br/>');
document.write(typeof(number));

/*string concatation*/
document.write("Hello" + " World");
var text="Bangla"
var text1='desh'
text=text.concat(text1);
document.write(text+"<br/>");
document.write(text.length+"<br/>");
document.write(text.slice(6,10));


var num=prompt("Enter a number:");
var num1=prompt("Enter a number:");
var sum=parseInt(num) + parseInt(num1);
document.write("sum is : "+sum);