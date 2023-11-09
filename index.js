let plus = document.querySelector('.plus');
let minus = document.querySelector('.minus');
let proizvidenie = document.querySelector('.proizvidenie');
let delenie = document.querySelector('.delenie');
let rezultat = document.querySelector('.rezultat');

plus.addEventListener('click',function(){
    let num1 = +document.querySelector('.num1').value;
    let num2 = +document.querySelector('.num2').value;
rezultat.innerText = num1 + num2;
})

minus.addEventListener('click',function(){
    let num1 = +document.querySelector('.num1').value;
    let num2 = +document.querySelector('.num2').value;
rezultat.innerText = num1 - num2;
})

proizvidenie.addEventListener('click',function(){
    let num1 = +document.querySelector('.num1').value;
    let num2 = +document.querySelector('.num2').value;
rezultat.innerText = num1 * num2;
})

delenie.addEventListener('click',function(){
    let num1 = +document.querySelector('.num1').value;
    let num2 = +document.querySelector('.num2').value;
    if (num2 == 0){
    rezultat.innerText = 'На 0 делить нельзя айайай >:('
    } else {
rezultat.innerText = num1 / num2;
}})