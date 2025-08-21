document.addEventListener('DOMContentLoaded', () => {
    // Elementos del DOM
    const b0 = document.getElementById('b0');
    const b1 = document.getElementById('b1');
    const b2 = document.getElementById('b2');
    const b3 = document.getElementById('b3');
    const b4 = document.getElementById('b4');
    const b5 = document.getElementById('b5');
    const b6 = document.getElementById('b6');
    const led = document.getElementById("led");
    const restartBtn = document.getElementById('restartBtn');

    const bAccept = document.getElementById('bAccept');
    const bBorrar = document.getElementById('bBorrar');

    const winModal = document.getElementById('winModal');
    const wonPrize = document.getElementById('wonPrize');

    // Reinicia el juego
    function restartGame() {
        winModal.style.display = 'none';
    }


    restartBtn.addEventListener('click', restartGame);


    // Event listeners para botones

    bBorrar.addEventListener('click', () => cambiarTexto(""));
    b0.addEventListener('click', () => anadirTexto('0'))
    b1.addEventListener('click', () => anadirTexto('1'))
    b2.addEventListener('click', () => anadirTexto('2'))
    b3.addEventListener('click', () => anadirTexto('3'))
    b4.addEventListener('click', () => anadirTexto('4'))
    b5.addEventListener('click', () => anadirTexto('5'))
    b6.addEventListener('click', () => anadirTexto('6'))
    bAccept.addEventListener('click', () => comprar())

});

function cambiarTexto(texto) {
    // Seleccionamos el div por su id

    // Cambiamos el texto
    led.textContent = texto;
}

function anadirTexto(texto) {

    led.textContent += texto;
}

function alerta(texto) {
    cambiarTexto(texto);
    setTimeout(() => {
        cambiarTexto("");
    }, 2000);
}

function mostrar(num) {

    const anom = ["Guatatas", "Guamen", "Núvol Guadanil", "GuadaBurger", "Guadaogurts"];
    const adescripcio = ["Patates intergaláctiques especialitat de SGG",
        "El millor ramen de la galàxia Guadianil",
        "Magnífics núvols recollits dels millors indrets de la galàxia",
        "Hamburguesas de carn intergalàctica sense maltractament animal",
        "Iogurs naturals amb certificat ecologic intergalàctic"
    ];
    const nom = document.getElementById('nom');
    const descripcio = document.getElementById('descripcio');

    var compra = document.getElementById("prize" + num)
    var top = compra.style.top
    compra.classList.add("visible");

    setTimeout(() => {
        compra.style.top = '500px';
        setTimeout(() => {
            compra.style.top = top;
            compra.classList.remove("visible")
            cambiarTexto("");

            wonPrize.src = compra.querySelector('img').src;
            winModal.style.display = 'flex';

            var n = parseInt(num)
            nom.textContent = anom[n - 1];
            descripcio.textContent = adescripcio[n - 1];
        }, 1000);
    }, 1000);
}

function comprar() {

    var num = led.textContent;
    const numValidos = ["01", "02", "03", "04", "05", "06"];

    if (numValidos.includes(num)) {
        console.log("Compra correcta")

        if (num == "06") {


            led.classList.add("marqueanimation");
            led.textContent = "Esgotat";
            setTimeout(() => {
                led.classList.remove("marqueanimation")
                led.textContent = "";
            }, 5000);



        } else {

            mostrar(num);

        }






    } else {
        alerta("Error");

    }

}

