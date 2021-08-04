let strLcd = "";

function zeroClick(){
  if (strLcd === "0") {

  }else {
    strLcd = strLcd + "0";
  }
  
  document.getElementById("mylcd").innerHTML = strLcd;
}

function oneClick(){
  if (strLcd === "0"){
    strLcd = "1";
  }else {
    strLcd = strLcd + "1";
  }
  document.getElementById("mylcd").innerHTML = strLcd;
}

function twoClick() {
  if (strLcd === "0"){
    strLcd = "2";
  }else {
    strLcd = strLcd + "2";
  }
  document.getElementById("mylcd").innerHTML = strLcd;  
}
function threeClick() {
  if (strLcd === "0"){
    strLcd = "3";
  }else {
    strLcd = strLcd + "3";
  }
  document.getElementById("mylcd").innerHTML = strLcd;  
}

function fourClick() {
  if (strLcd === "0"){
    strLcd = "4";
  }else {
    strLcd = strLcd + "4";
  }
  document.getElementById("mylcd").innerHTML = strLcd;
}

function fiveClick() {
  if (strLcd === "0"){
    strLcd = "5";
  }else {
    strLcd = strLcd + "5";
  }
  document.getElementById("mylcd").innerHTML = strLcd;
}

function sixClick() {
  if (strLcd === "0"){
    strLcd = "6";
  }else {
    strLcd = strLcd + "6";
  }
  document.getElementById("mylcd").innerHTML = strLcd;
}

function sevenClick(){
  if (strLcd === "0"){
    strLcd = "7";
  }else {
    strLcd = strLcd + "7";
  }
  document.getElementById("mylcd").innerHTML = strLcd;
}
function eightClick(){
  if (strLcd === "0"){
    strLcd = "8";
  }else {
    strLcd = strLcd + "8";
  }

  document.getElementById("mylcd").innerHTML = strLcd;
}
function nineClick() {
  if (strLcd === "0"){
    strLcd = "9";
  }else {
    strLcd = strLcd + "9";
  }

  document.getElementById("mylcd").innerHTML = strLcd;
}

////////// + - x /
function multiplyClick() {
  strLcd = strLcd + " x ";
  document.getElementById("mylcd").innerHTML = strLcd;
}
function divideClick() {
  strLcd = strLcd + " / ";
  document.getElementById("mylcd").innerHTML = strLcd;
}
function plusClick() {
  strLcd = strLcd + " + ";
  document.getElementById("mylcd").innerHTML = strLcd;
}
function minusClick() {
  strLcd = strLcd + " - ";
  document.getElementById("mylcd").innerHTML = strLcd;
}

function clearClick(){
  if (strLcd.length>0) {
    console.log("strLcd:" + strLcd);
    strLcd = strLcd.substring(0,strLcd.length-1);
    if (strLcd.length === 0) {
      strLcd = "0";
    }
  }
  
  document.getElementById("mylcd").innerHTML = strLcd;
}
function dotClick() {
  strLcd = strLcd + ".";
  document.getElementById("mylcd").innerHTML = strLcd;

}
function EnterClick() {
  if (strLcd.search(/[ ]/i) === -1) {
    
  }else {
    console.log(typeof strLcd);
    strLcd = strLcd.replace(/[x]/g, '*');
    console.log(strLcd);
    strLcd = math.evaluate(strLcd).toString();

    document.getElementById("mylcd").innerHTML = strLcd;
  
  } 
}

function openBracketClick() {
  strLcd = strLcd + "(";
  document.getElementById("mylcd").innerHTML = strLcd;
}
function closeBracketClick() {
  strLcd = strLcd + ")";
  document.getElementById("mylcd").innerHTML = strLcd;
}
function percentClick() {
  strLcd = strLcd + "%";
  document.getElementById("mylcd").innerHTML = strLcd;
}




function divide(left, right) {

  return Number(left) / Number(right);
}

function multiply(left, right) {

  return Number(left) * Number(right);
}

function del(left, right) {//delete is reserved word in Js

  return Number(left) - Number(right);
}

function add(left, right) {
 
  return Number(left) + Number(right);
  
} 
function divide(left) {

  return Number(left) %2 ;
}


function mathOperation(mathExpStr) {
let nextOperator = "";
let result = -1;
let leftOperand = "";
let rightOperand = "";


  let pos = mathExpStr.search(/[\+\-x\/]/i)
  //console.log("pos:" + pos);
  if (pos >= 0) {
    leftOperand = mathExpStr.substring(0,pos);
    rightOperand = mathExpStr.substring(pos+1, mathExpStr.length)
    //console.log("pos:" + pos +" l r:" +leftOperand + " " + rightOperand);

    if (mathExpStr[pos] === "+") {
      result = add(leftOperand, rightOperand);
      return result;
    }
    if (mathExpStr[pos] === "-") {
      result = del(leftOperand, rightOperand);
      return result;
    }
    if (mathExpStr[pos] === "x") {
      result = multiply(leftOperand, rightOperand);
      return result;
    }
    if (mathExpStr[pos] === "/") {
      result = divide(leftOperand, rightOperand);
      return result;
    }
    if (mathExpStr[pos] === "%") {
      result = divide(leftOperand, rightOperand);
      return result;
    }
  }else {
    
    result = "Operator not found";
  }
  
  
  return result
}