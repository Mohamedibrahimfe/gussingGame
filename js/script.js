
const clickButton = document.getElementById('submit');
const input = document.getElementById('input');
const output = document.querySelector('.output');
let randomNumber = Math.floor(Math.random() * 100) + 1;

function checkGussing() {
    if(input.value==randomNumber){
        output.innerHTML ="congrats";

    }else if(input.value<randomNumber){

        output.innerHTML ="Low";

    }else if(input.value>randomNumber) {
        output.innerHTML ="high";
    }
}
clickButton.addEventListener('click',checkGussing);
