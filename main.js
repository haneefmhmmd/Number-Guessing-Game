let userInput=document.getElementById('userInput');
let submitBtn=document.getElementById('submitBtn');
let result=document.getElementById('result');
submitBtn.addEventListener('click',checker);
userInput.addEventListener('click',initializer);
function initializer(){
    userInput.value="";
    result.style.backgroundColor='#1F2833';
        result.innerHTML="?";
}
function checker(){
    if(userInput.value>=1 && userInput.value<=100){
        let randNum=Math.floor(Math.random()*100);
        let diff=Math.abs(randNum-userInput.value);
        if(randNum===userInput.value)
        {
            result.innerHTML='Correct';
            result.style.transform='	transform: rotate3d(45, 45, 0, 180deg);'
            result.style.backgroundColor='green';
        }
        else if(diff<=4 && diff>=1){
            result.innerHTML='Hot';
            result.style.transform='	transform: rotate3d(45, 45, 0, 180deg);'
            result.style.backgroundColor='red';
        }
        else if(diff<=15 && diff>=5){
            result.innerHTML='Warm';
            result.style.transform='	transform: rotate3d(45, 45, 0, 180deg);'
            result.style.backgroundColor='yellow';
        }
        else{
            result.innerHTML='Cold';
            result.style.transform='	transform: rotate3d(45, 45, 0, 180deg);'
            result.style.backgroundColor='blue';
        }
    }
    else{
        alert('Invalid Input!');
    }
}