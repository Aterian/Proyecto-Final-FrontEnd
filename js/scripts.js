
const sobreMi = document.getElementById('boton-presentacion');
const presentacionMain = document.getElementById('presentacionMain');
const expYhab = document.getElementById('boton-experiencia');
const experiencia = document.getElementById('infoExp');
const datosPers = document.getElementById('boton-datosPersonales');
const datosContacto = document.getElementById('contacto');

const clsBtn = document.getElementById('btnCerrar');


const bloqBtn1 = [document.getElementById('presentacionMain'),document.getElementById('btnCerrar')];
const bloqBtn2 = [document.getElementById('infoExp'),document.getElementById('btnCerrar')];
const bloqBtn3 = [document.getElementById('contacto'),document.getElementById('btnCerrar')];


const bloqBtnAll = [document.getElementById('presentacionMain'),document.getElementById('infoExp'),
document.getElementById('contacto'),document.getElementById('btnCerrar')];



sobreMi.addEventListener('click', function(){
     for (let i=0; i<bloqBtn1.length;i++){
          if (bloqBtn1[i].style.display = "none"){
               bloqBtn1[i].style.display = "block";
          }
     }
});

expYhab.addEventListener('click', function(){
     for (let i=0; i<bloqBtn2.length;i++){
          if (bloqBtn2[i].style.display = "none"){
               bloqBtn2[i].style.display = "block";
          }  
     }
});

datosPers.addEventListener('click', function(){
     for (let i=0; i<bloqBtn3.length;i++){
          if (bloqBtn3[i].style.display = "none"){
               bloqBtn3[i].style.display = "block";
          }
     }    
});

clsBtn.addEventListener('click', function(){
     for (let i=0; i<bloqBtnAll.length;i++){
          if ( bloqBtnAll[i].style.display = "block"){
               bloqBtnAll[i].style.display = "none";
          }
     }  
});

