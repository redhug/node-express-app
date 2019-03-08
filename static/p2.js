var regex=/^[0-9]+$/;

let getsum = function (arg1, arg2) {
  return parseInt(arg1) + parseInt(arg2);
}

const sumbtn = document.getElementById('sum');
if(sumbtn){
  sumbtn.addEventListener('click', sum);
}

function mouseHOver() {
  const xhttp = new XMLHttpRequest();
  $.ajax({
    type: 'GET',
    url: 'https://thesimpsonsquoteapi.glitch.me/quotes?count=4',
    success: function (data) {
      $("#mouseOverExamp").html(data[1].quote);
    }
  });
}

function mouseOut() {
  $("#mouseOverExamp").html("Place the cursor on me");
}




function sum() {
  localStorage.setItem("num1",document.getElementById("value1").value);
  localStorage.setItem("num2",document.getElementById("value2").value);
  let sumVar=getsum(localStorage.getItem("num1"), localStorage.getItem("num2"));
  if(localStorage.getItem("num1").match(regex) && localStorage.getItem("num2").match(regex)){
  localStorage.setItem("sum1", sumVar);
  $("#result").html("Sum of two numbers is : " + localStorage.getItem("sum1"));
  }
  else{
    throw Error('The given argument is not a number');
  }
}

let getdiff = function (arg1, arg2) {
  return parseInt(arg1) - parseInt(arg2);
}
function diff() {
  localStorage.setItem("num1",document.getElementById("value1").value);
  localStorage.setItem("num2",document.getElementById("value2").value);
  if(localStorage.getItem("num1").match(regex) && localStorage.getItem("num2").match(regex)){
  localStorage.setItem("diff1", getdiff(localStorage.getItem("num1"), localStorage.getItem("num2")));
  $("#result").html("Difference of two numbers is : " + localStorage.getItem("diff1"));
  }
  else{
    throw Error('The given argument is not a number');
  }
}
let getmul = function (arg1, arg2) {
  return parseInt(arg1) * parseInt(arg2);
}
function mul() {
  localStorage.setItem("num1",document.getElementById("value1").value);
  localStorage.setItem("num2",document.getElementById("value2").value);
  if(localStorage.getItem("num1").match(regex) && localStorage.getItem("num2").match(regex)){
  localStorage.setItem("mul1", getmul(localStorage.getItem("num1"), localStorage.getItem("num2")));
  $("#result").html("Product of two numbers is : " + localStorage.getItem("mul1"));
  }
  else{
    throw Error('The given argument is not a number');
  }
}
let getdiv = function (arg1, arg2) {
  return parseInt(arg1) / parseInt(arg2);
}
function div() {
  localStorage.setItem("num1",document.getElementById("value1").value);
  localStorage.setItem("num2",document.getElementById("value2").value);
  if(localStorage.getItem("num1").match(regex) && localStorage.getItem("num2").match(regex)){
  localStorage.setItem("div1", getdiv(localStorage.getItem("num1"), localStorage.getItem("num2")));
  $("#result").html("Division of two numbers is : " + localStorage.getItem("div1"));
  }
  else{
    throw Error('The given argument is not a number');
  }
}


