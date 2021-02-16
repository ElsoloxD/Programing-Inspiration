let menuToggle = document.querySelector('.menu-toggle')
let menutoggleIcon = document.querySelector('.menu-toggle i')
let menu = document.getElementById('menu')

menuToggle.addEventListener('click', e=>{
    menu.classList.toggle('show');

    if(menu.classList.contains('show')){
        menuToggleIcon.setAttribute('class', 'fa fa-times');
    }else {
        menuToggleIcon.setAttribute('class', 'fa fa-bars'); 
    }
});

var email = document.getElementById('email')

const contraseña = document.getElementById('contrasena')

const mensaje = document.getElementById('mensaje')

function checkInputs() {
    email.addEventListener('input', validarEmail)
    contraseña.addEventListener('input', validarContraseña)
    //mensaje.addEventListener('textarea', validarMensaje)

    validarEmail()
    validarContraseña()
}

function validarEmail() {
    if(email.value == '') {
        email.style.backgroundColor = '#f5675d'
        email.setCustomValidity('Ingrese su correo electronico debe tener @ y .com u otras terminaciones')
    } else {
        email.style.backgroundColor = '#75f573'
        email.setCustomValidity('')
    }
}

function validarContraseña() {
    if(contrasena.value == '') {
        contrasena.style.backgroundColor = '#f5675d'
        contrasena.setCustomValidity('la contraseña debe tener un minimo de 6 caracteres')
    } else {
        contrasena.style.backgroundColor = '#75f573'
        contrasena.setCustomValidity('')
    }
}

window.addEventListener('keydown',checkInputs());