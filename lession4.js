
//set timeout
setTimeout(function() {
    // alert("set timeout")
}, 2000)


//set interval
setInterval(() => {
    // alert("set interval")
}, 2000);
// alert("xin chào")

function showMe() {
    alert("hello");
}
// keyup
// function changeMe() {
//     document.getElementById("container").style.backgroundColor = "yellow";
// }
var show = document.getElementById("show");
show.addEventListener('click', showMe); 
var container = document.getElementById("container");
//mouseOver
function mouseOver() {
    // container.style.backgroundColor = "yellow";
}
//mouseout
function mouseOut() {
    container.style.backgroundColor = "white";
}

container.addEventListener('mouseover', mouseOver);
container.addEventListener('mouseout', mouseOut);
parseInt()
//onfocus
var textInput = document.getElementById("textInput");
var printText = document.getElementById("printText");

textInput.addEventListener('focus', function() {
    textInput.style.backgroundColor = "yellow";
})
textInput.addEventListener('keyup', function() {
    printText.innerHTML = textInput.value;
})
textInput.addEventListener('copy', function() {
    alert("copy thành công")
});

var num1 = document.getElementById("num1");
var num2 = document.getElementById("num2");
var sum1 = document.getElementById("sum1");
console.log(num1)
console.log(num2)
console.log(sum1)
function sumNumber(a, b) {
    if(a == "") a = 0;
    if(b == "") b = 0;
    sum1.value = parseInt(a) + parseInt(b);
}

num1.addEventListener('key', function() {
    sumNumber(num1.value, num2.value);
    // sum1.value = parseInt(num1.value) + parseInt(num2.value);
});
num2.addEventListener('keyup', function() {
    sumNumber(num1.value, num2.value)
    // sum1.value = parseInt(num1.value) + parseInt(num2.value);
});



