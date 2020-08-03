(function(){
    var plus = document.querySelector('.plus_p');
    var number = document.querySelector('.number_p');
    var menos = document.querySelector('.menos_p');

    var numero = 0;

    function less(){
        const restar = 1;
        numero = numero - restar;
        number.innerHTML = numero;
    }

    function add(){
        const suma = 1;
        numero = numero + suma;
        number.innerHTML = numero;
    }

    menos.onclick = less;
    plus.onclick = add;
})()