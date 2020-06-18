let kays = document.querySelector('.keys');
let output = document.querySelector('.input');
let title = document.querySelector('.title');
let counter = 0;

document.querySelector('.clear').onclick = () => clearOutput();

function clearOutput() {
   output.innerText = '';
}

for (var i = 0; i < kays.childNodes.length; i++) {
  kays.childNodes[i].onclick = function () {
    if (+this.innerText <= 9) {
      output.innerText += this.innerText;
    }else{
      switch (this.innerText){
        case '+':
          replacementOrAdditionOperator('+');
          break;
        case '-':
          replacementOrAdditionOperator('-');
          break;
        case 'x':
          replacementOrAdditionOperator('*');
          break;
        case '/':
          replacementOrAdditionOperator('/');
          break;
        case '.':
          createDot();
          break;
        case '=':
          calcResult();
          break;
      }
    }
    checkInput();
  }
}

function createDot() {
  checkInput();
  if (checkInput() == false && counter == 0) {
    counter++; //обнуляется в replacementOrAdditionOperator
    output.innerText += '.';
  }else if (counter > 0) {
    
  }
  console.log(counter);
}

function checkInput() {
  let inputArr = output.innerText.split('');

  if (isNaN(inputArr.pop())) {
    return true;
  }else{
    return false;
  }

  //return isNaN(inputArr.pop()) -- сокращение блока условий выше в checkInput;
}

function calcResult() {
  if (checkInput() == true) {
    output.innerText = output.innerText;
  }else{
    let result = eval(output.innerText);
    checkInput();
    let checkСorrectСondition = output.innerText.split('').pop();
    if (result == undefined) {
      output.innerText = '';
    }else if (result == Infinity) {
      output.innerText = '';
    }else if(Number.isNaN(result)){
      output.innerText = '';
    }else if(checkInput() == true){
      output.innerText = '';
    }else{
      output.innerText = result;
    }
  }
}

function replacementOrAdditionOperator(operator) {
  let inputArr = output.innerText.split('');
  counter = 0;
  if (checkInput() == true) {
    if (inputArr.pop() == operator) {
      //ничего не делать?
    }else if (output.innerText == ''){
      output.innerText = '';
    }else if (inputArr.pop() != operator) {
      let inputNewArr = output.innerText.split('');
      inputNewArr.pop();
      inputNewArr.push(operator);
      output.innerText = inputNewArr.join('');
    }
  }else{
    output.innerText += operator;
  }
}

window.onkeydown = function () {
  if (event.key <= 9) {
    output.innerText += event.key;
  }else{
    switch(event.key){
      case '+':
        replacementOrAdditionOperator('+');
        break;
      case '-':
        replacementOrAdditionOperator('-')
        break;
      case '*':
        replacementOrAdditionOperator('*')
        break;
      case '/':
        replacementOrAdditionOperator('/')
        break;
      case 'Enter':
        calcResult();
        break;
      case 'Delete':
        clearOutput();
        break;
      case '.':
        createDot();
        break;
      case 'Backspace':
        clearLastSymbol();
        break;
    }
  }
  checkInput();
}

function clearLastSymbol(){
  let inputArr = output.innerText.split('');
  inputArr.pop();
  output.innerText = inputArr.join('');
}

for (var i = 0; i < title.childNodes.length; i++) {
  if (i%2 == 0) {
    
  }else{
    title.childNodes[i].classList.add('title_animation');
    title.childNodes[i].style.color = '#a6a4a4';
  }
}