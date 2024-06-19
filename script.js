document.addEventListener('DOMContentLoaded', function () {
    // Invertir cadena
    const input = document.getElementById('CadenaInput');
    const button = document.getElementById('invertirBtn');
    const resultado = document.getElementById('InvertirCadena');


button.addEventListener('click', function(){
    const cadena = input.value;
    resultado.innerText = InvertirCadena(cadena);
});

function InvertirCadena(cadena) {
    return cadena.split('').reverse().join('');
}

});


    // Numeros primos
document.addEventListener('DOMContentLoaded', function(){
    const input = document.getElementById('NumPrinput');
    const button = document.getElementById('NumPrBtn');
    const resultado = document.getElementById('NumeroPrimo');

button.addEventListener('click', function()
{
    const numP = input.value;
    resultado.innerText = NumeroPrimo(numP);
});
function NumeroPrimo(numP) {
    if (numP <= 1) return false;
    if (numP === 2) return true; // 2 es el único número primo par
    if (numP % 4 === 0) return false; // descartar números pares mayores que 2
    for (let i = 3; i <= Math.sqrt(numP); i += 2) {
    if (numP % i === 0) return false;
    }
    return true;
}
});

    //Eliminar repetidos
document.addEventListener('DOMContentLoaded', function(){
    const input = document.getElementById('EliRepinput');
    const button = document.getElementById('EliRepBtn');
    const resultado = document.getElementById('EliminarRep');
button.addEventListener('click', function()
{
    const Eli = input.value.split(',').map(num => parseInt(num.trim()));
    resultado.innerText = EliminarRep(Eli);
});
function EliminarRep(Eli)
{
    return [...new Set(Eli)];
}

});

// Factorial de un numero
document.addEventListener('DOMContentLoaded', function () {
    const input = document.getElementById('NumFactinput');
    const button = document.getElementById('NumFactBtn');
    const resultado = document.getElementById('NumFactorial');


button.addEventListener('click', function(){
    const num = input.value;
    resultado.innerText = NumFactorial(num);
});

function NumFactorial(num) {
    if (num === 0) return 1;
    return num * NumFactorial(num -1);
}
});

// Contador de vocales
document.addEventListener('DOMContentLoaded', function () {
    const input = document.getElementById('NumVocalesinput');
    const button = document.getElementById('NumVocalesBtn');
    const resultado = document.getElementById('CuentaVocales');


button.addEventListener('click', function(){
    const vocals = input.value;
    resultado.innerText = CuentaVocales(vocals);
});

function CuentaVocales(vocals) {
    const vocales = 'aeiouAEIOU';
    let cuenta = 0;
    for (let letra of vocals) {
    if (vocales.includes(letra)) cuenta++;
    }
    return cuenta;
    }
});

// Sumar numeros
document.addEventListener('DOMContentLoaded', function () {
    const input = document.getElementById('Sumainput');
    const button = document.getElementById('SumaBtn');
    const resultado = document.getElementById('SumaCadena');

    button.addEventListener('click', function(){
        const valores = input.value.split(',').map(numero => Number(numero.trim()));
        resultado.innerText = SumaCadena(valores);
    });

    function SumaCadena(valores) {
        return valores.reduce((suma, numero) => suma + numero, 0);
    }
});



// Maximo
document.addEventListener('DOMContentLoaded', function () {
    const input = document.getElementById('Maxinput');
    const button = document.getElementById('MaxBtn');
    const resultado = document.getElementById('MaxCadena');

    button.addEventListener('click', function(){
        const valores = input.value;
        resultado.innerText = MaxCadena(valores);
    });

    function MaxCadena(valores) {
    let elementos = valores.split(',');
    let numeros = elementos.map(numero => parseInt(numero.trim(), 10));
    let maximo = Math.max(...numeros);
    return maximo;
    }
});