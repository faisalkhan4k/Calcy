const heading = document.querySelector('h1');
const input = document.querySelector('.input')


let num1='', num2='' , operatorEntered='';



//Function to create numbers
function numbers(number){
    const numbersContainer = document.querySelector('.numbers');
    const button = document.createElement('button');
    numbersContainer.appendChild(button);
    
    button.textContent= number;
    
    button.style.color = 'blue';
}
for( let i = 1 ; i<10 ; i++){
    console.log('hi');
    numbers(`${i}`);
}

//Function to create operator buttons
function operators(operator){
    const operatorDiv = document.querySelector('.operators');
    const button = document.createElement('button');
    operatorDiv.appendChild(button);
    button.textContent = operator;
    operatorDiv.style.backgroundColor = 'blue';
}


numbers('0');

operators('+');
operators('-');
operators('^');
operators('/');
operators('*');

//Selecting all the numbers from the numberContainer
const numberedButtons = document.querySelectorAll('.numbers button');
const numbersbuttons = Array.from(numberedButtons);
console.log(numbersbuttons);

//Populating the Input div with numbers


numbersbuttons.forEach((button)=>{
    button.addEventListener('click',()=>{

        num1+=button.textContent;

        input.textContent+=button.textContent;

    });
});

//Selecting all the operators from the operators Div
const operatorButtons = document.querySelectorAll('.operators button');
const operatorsbuttons = Array.from(operatorButtons);
console.log(operatorsbuttons);


operatorsbuttons.forEach((operator)=>{
    operator.addEventListener('click',()=>{
        if(operatorEntered!=''){
            
            num1 = (arthematicOperations(operatorEntered,num2,num1));
            operatorEntered='';
        }
        num2=num1;
        num1='';
        operatorEntered = operator.textContent;
        console.log(operatorEntered);
        if(num2==''){
            alert('enter a number first');
            operatorEntered='';
        }
        else input.textContent+=operator.textContent;
        
        
    })
})
const clearInput =  document.querySelector('.longbuttons').appendChild(document.createElement('button'));
clearInput.textContent="AC";
const equalsTo =  document.querySelector('.longbuttons').appendChild(document.createElement('button'));
equalsTo.textContent = "="
equalsTo.addEventListener('click',()=>{
   num1 = (arthematicOperations(operatorEntered,num2,num1));
   operatorEntered='';
})

clearInput.addEventListener('click',()=>{
    num1='';
    num2='';
    input.textContent='';
    operatorEntered='';
})

function arthematicOperations(operator , num1,num2){
    if(operator == '+') return input.textContent = parseInt(num1)+parseInt(num2);
    else if(operator == '-') return input.textContent = num1-num2;
    else if(operator == '*') return input.textContent = num1*num2;
    else if(operator == '/') return input.textContent = num1/num2;
    else if(operator == '^') return input.textContent = Math.pow(num1,num2);
}

//Entering another operator or clicking equals to sign gives the result

// function Result( )