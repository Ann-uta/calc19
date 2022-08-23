
const inp1 = document.querySelector (".number1");
const inp2 = document.querySelector (".number2");
const div = document.querySelector(".out");
const sumButton = document.querySelector('.btn_sum');
const subButton = document.querySelector('.btn_sub');
const multButton = document.querySelector('.btn_mult');
const divisionButton = document.querySelector('.btn_division');

let result;

function showResult() {
    div.textContent = `Результат: ${result}`;
}
function clear(){
    document.getElementById('errorMessage').innerHTML="";
    document.querySelector('.out').innerHTML="";
}
class Calculator {
    static sum(a, b) {
        return +a + +b;
    }
    static sub(a, b) {
        return +a - +b;
    }
    static mult(a, b) {
        return +a * +b;
    }
    static division(a, b) {     
        return +a / +b;            
    }
}
sumButton.addEventListener('click', function (){
    clear();
    result = Calculator.sum(inp1.value, inp2.value);
    showResult ();
});
subButton.addEventListener('click', function (){
    clear();
    result = Calculator.sub(inp1.value, inp2.value);
    showResult ();   
});
multButton.addEventListener('click', function (){
    clear();
    result = Calculator.mult(inp1.value, inp2.value); 
    showResult ();   
});
divisionButton.addEventListener('click', function (){
    clear();
    result = Calculator.division(inp1.value, inp2.value);
    if (inp2.value == 0){
        document.getElementById('errorMessage').innerHTML = "На 0 делить нельзя!";
        document.querySelector('.out').innerHTML="";
    } else{    
    showResult ();}   
});