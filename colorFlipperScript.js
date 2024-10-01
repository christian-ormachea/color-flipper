const btnRed = document.getElementById('botonRojo');
const btnBlue = document.getElementById('botonAzul');
const btnGreen = document.getElementById('botonVerde');
const btnRandom = document.getElementById('botonRandom');
var actualColor = '';

btnRed.addEventListener('click', function() {
    actualColor = 'red';
    document.body.style.backgroundColor = actualColor;
});

btnBlue.addEventListener('click', function() {
    actualColor = 'blue';
    document.body.style.backgroundColor = actualColor;
});

btnGreen.addEventListener('click', function(){
    actualColor = 'green';
    document.body.style.backgroundColor = actualColor;
});

btnRandom.addEventListener('click', function() {
    actualColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = actualColor;
});


