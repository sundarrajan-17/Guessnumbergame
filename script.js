const userinput=document.getElementById('userinput');
const form=document.getElementById('form');
let result=document.getElementById('result');
const number=Math.floor(Math.random()*100);
let GuessedCount=0;
console.log(number);

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const inputValue = userinput.value;
    if(inputValue > (number-10) && inputValue < number){
        result.innerHTML="Slightly Lower Than The Number";
    }else if(inputValue < (number+10) && inputValue > number){
        result.innerHTML="Slightly Greater Than The Number";
    }else if(inputValue < number){
        result.innerHTML="Too low Try Again";
    }else if(inputValue > number){
        result.innerHTML="Too High Try Again";
    }else{
        result.innerHTML=`Correct! You Got It In ${GuessedCount} Tries`;
    }
    GuessedCount++;
    userinput.value=''
})