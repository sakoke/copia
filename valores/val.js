let total_emocional = Number(localStorage.getItem('total_emocional'));;
let total_desper = Number(localStorage.getItem('total_desper'));;
let total_personal = Number(localStorage.getItem('total_personal'));;


document.addEventListener("DOMContentLoaded", function() {
    consejos_emocional();
    consejos_desper();
    consejos_personal();
    nivel_desper();
    nivel_emocional();
    nivel_personal();
});

function consejos_emocional(){
    const consejos = document.getElementById("consejos_can");
    
    if (total_emocional <= 18) {
        consejos.textContent="Consejos para cada nivel";
    } else if (total_emocional <= 36) {
        consejos.textContent="Consejos para cada nivel";
    } else {
        consejos.textContent="Consejos para cada nivel";
    }
    
}

function consejos_desper(){
    const consejos = document.getElementById("consejos_des");
    
    if (total_desper <= 10) {
        consejos.textContent="Consejos para cada nivel";
    } else if (total_desper <= 20) {
        consejos.textContent="Consejos para cada nivel";
    } else {
        consejos.textContent="Consejos para cada nivel";
    }
}

function consejos_personal(){
    const consejos = document.getElementById("consejos_rea");
    
    if (total_personal <= 16) {
        consejos.textContent="Consejos para cada nivel";
    } else if (total_personal <= 32) {
        consejos.textContent="Consejos para cada nivel";
    } else {
        consejos.textContent="Consejos para cada nivel";
    }
}

function nivel_emocional(){
    const niv_emo = document.getElementById("nivel_can");
    
    if (total_emocional <= 18) {
        niv_emo.textContent="Nivel Bajo";
    } else if (total_emocional <= 36) {
        niv_emo.textContent="Nivel Medio";
    } else {
        niv_emo.textContent="Nivel Alto";
    }
}

function nivel_desper(){
    const niv_desper = document.getElementById("nivel_des");
    
    if (total_desper <= 10) {
        niv_desper.textContent="Nivel Bajo";
    } else if (total_desper <= 20) {
        niv_desper.textContent="Nivel Medio";
    } else {
        niv_desper.textContent="Nivel Alto";
    }
}

function nivel_personal() {
    const niv_per = document.getElementById("nivel_rea");
    
    if (total_personal <= 16) {
        niv_per.textContent = "Nivel Bajo";
    } else if (total_personal <= 32) {
        niv_per.textContent = "Nivel Medio";
    } else {
        niv_per.textContent = "Nivel Alto";
    }
}