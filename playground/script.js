let greenButton = document.querySelector('.button1');
let blueButton = document.querySelector('.button2');
let redButton = document.querySelector('.button3');
let yellowButton = document.querySelector('.button4');



greenButton.addEventListener('click', function(){
    document.body.style.backgroundColor = 'green';
})

blueButton.addEventListener('click', function(){
    document.body.style.backgroundColor = 'blue';
})

redButton.addEventListener('click', function(){
    document.body.style.backgroundColor = 'red';
})

yellowButton.addEventListener('click', function(){
    document.body.style.backgroundColor = 'yellow';
})