// Para poner una alerta y ver si funciona el js
//alert("Hola mundo");

let app = document.getElementById('app');

let typewriter = new Typewriter(app, {
    loop: true,
    delay: 75,
});
//Reconoce accion por parentesis despues del nombre de la accion
//aveces tiene el operador punto
typewriter
    .pauseFor(1000) //milisegundos 2.5 segundos
    .typeString('<span style="color:#560144;">Desarrolladora Frontend JR </span>')
    .start();

// Frase
let frase = document.getElementById('frase');
let typewriterFrase = new Typewriter(frase, {
    loop: true,
    delay: 75,
});

typewriterFrase
    .pauseFor(1000) //milisegundos 2.5 segundos
    .typeString('<span style="color:#EFC3CA;">Insistir, persistir, resistir y nunca desistir </span>')
    .pauseFor(2500)
    .deleteAll()
    .typeString('-Neil Alden Armstrong ')
    .pauseFor(1000)
    .start();