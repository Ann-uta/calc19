
const inp1 = document.querySelector (".number1");
const inp2 = document.querySelector (".number2");
const div = document.querySelector(".out");
const sumButton = document.querySelector('.btn_sum');

let result;

class Calculation {
    conctructor (input1,input2){
      this.input1 = input1;
      this.input2 = input2;
      this.result = 0;
    }

    sum() {    
        this.result = Number(this.input1) + Number(this.input2); 
      //console.log(`Результат: ${this.result}`);           
    }
}
let s = new Calculation(inp1.value, inp2.value);
sumButton.addEventListener('click', function (){
   //result = +inp1.value + +inp2.value;
    console.log(`Результат: ${s.sum()}`);
});
//sumButton.onclick = s.sum;

//sumButton.addEventListener('click', s.sum);
