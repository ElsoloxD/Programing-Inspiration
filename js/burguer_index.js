
let title = document.getElementById('titulo2')

title.style.color = 'rgb(136, 255, 0)'

var changeColor = document.getElementById("h1")

var object1 = document.getElementById('sect4')

var colors = ["Azul/Violeta/Verde/Amarillo/Rojo/Naranja/Cyan"]

var colorQuestion = prompt("¿Que color quiere para el titulo de la pagina?"+colors)

var curso = confirm('¿Quiere que se le muestren opciones de cursos gratuitos?');



colorQuestion = colorQuestion.toLowerCase()

if (curso == false){
    console.log('funciona')
    object1.style.display = 'none'
}



//<<<<<<<<<<<<<<<<<<<<<<<PROMPT<<<<<<<<<<<<<<<<<<<<<<<

//<<<<<<<<<<<<<AZUL<<<<<<<<<<<<<<<<<
if (colorQuestion == "azul"){
    
    changeColor.style.color = "blue"
    changeColor.style.backgroundColor = "#8a8af5"
}
//<<<<<<<<<<<<<VIOLETA<<<<<<<<<<<<<<<<<
if (colorQuestion == "violeta"){
    
    changeColor.style.color = "violet"
    changeColor.style.backgroundColor = "#8a8af5"
}
//<<<<<<<<<<<<<VERDE<<<<<<<<<<<<<<<<<
if (colorQuestion == "verde"){
    
    changeColor.style.color = "green"
    changeColor.style.backgroundColor = "#8a8af5"
}
//<<<<<<<<<<<<<AMARILLO<<<<<<<<<<<<<<<<<
if (colorQuestion == "amarillo"){
    
    changeColor.style.color = "yellow"
    changeColor.style.backgroundColor = "#8a8af5"
}
//<<<<<<<<<<<<<ROJO<<<<<<<<<<<<<<<<<
if (colorQuestion == "rojo"){
  
    changeColor.style.color = "red"
    changeColor.style.backgroundColor = "#8a8af5"
}
//<<<<<<<<<<<<<NARANJA<<<<<<<<<<<<<<<<<
if (colorQuestion == "naranja"){
    changeColor.style.color = "orange"
    changeColor.style.backgroundColor = "#8a8af5"
}
//<<<<<<<<<<<<<CYAN<<<<<<<<<<<<<<<<<
if (colorQuestion == "cyan"){
    changeColor.style.backgroundColor = "#8a8af5"
    changeColor.style.color = "cyan"
}




function showList(list){
var elemento = document.getElementById(list)

    if(elemento.style.display == 'none'){
    elemento.style.display = 'inline'
} else {
    elemento.style.display = 'none'
}
}

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