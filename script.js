
const inp1 = document.querySelector (".number1");
const inp2 = document.querySelector (".number2");
const div = document.querySelector(".out");
const sumButton = document.querySelector('.btn_sum');
const subButton = document.querySelector('.btn_sub');
const multButton = document.querySelector('.btn_mult');
const divisionButton = document.querySelector('.btn_division');

let result;

/*function showResult() {
    div.textContent = `Результат: ${result}`;
}
function clear(){
    document.getElementById('errorMessage').innerHTML="";
    document.querySelector('.out').innerHTML="";
}

/*function sum() {
    clear()
    result = Number(input1.value)+Number(input2.value);
    showResult ();
}

function sub() {
    clear()
    result = Number(input1.value)-Number(input2.value);
    showResult ();
}
function mult() {
    clear()
    result = Number(input1.value)*Number(input2.value);
    showResult ();
}

function division() {
    clear()
        if (input2.value == 0){
            document.getElementById('errorMessage').innerHTML = "На 0 делить нельзя!";
            return false;
    } 
    result = Number(input1.value)/Number(input2.value);
        showResult ();
    }*/

    //статические классы
class Calculation {
    conctructor (input1,input2){
    this.input1 = input1;
    this.input2 = input2;
    this.result = 0;
    }

    sum() {    
        this.result = Number(this.input1) + Number(this.input2); 
        console.log(`Результат: ${this.result}`);
        //showResult ();       
    }
}
let s = new Calculation(inp1.value, inp2.value);
sumButton.addEventListener('click', function (){
   //result = +inp1.value + +inp2.value;
   console.log(s.result);
    //console.log(s.sum());
});



//let s = new Calculation(input1.value,input2.value);
//console.log(s);
   /* let sumResult = Calculation.sum();
    console.log(sumResult.input1,sumResult.input2);*/
    
    /*static sub() {
        clear()
        result = Number(input1.value)-Number(input2.value);
        showResult ();
    }
    static mult() {
        clear()
        result = Number(input1.value)*Number(input2.value);
        showResult ();
    }
    
    static division() {
        clear()
            if (input2.value == 0){
                document.getElementById('errorMessage').innerHTML = "На 0 делить нельзя!";
                return false;
        } 
        result = Number(input1.value)/Number(input2.value);
            showResult ();
        }*/
    // решение на learn.js
        /*let calculator = {
            sum() {
              return this.a + this.b;
            },
          
            mul() {
              return this.a * this.b;
            },
          
            read() {
              this.a = +prompt('a?', 0);
              this.b = +prompt('b?', 0);
            }
          };
          
          calculator.read();
          alert( calculator.sum() );
          alert( calculator.mul() );*/

