var miCoder=new Coder();
function Coder(){
  this.arrayCoder=[];
  this.contador=0;
  this.agrega=function(nombre,apellido,correo,contraseña){
    this.arrayCoder.push({
       id:this.contador,
       nombre:nombre,
       apellido:apellido,
       correo:correo,
       contraseña:contraseña
    })
    this.contador ++;
  }
}

var nombre=document.getElementById("nombre");
var apellido=document.getElementById("apellido");
var correo=document.getElementById("correo");
var contraseña=document.getElementById("contraseña");


document.getElementById("Registro").addEventListener("click", function(e){
  e.preventDefault();
miCoder.agrega(nombre.value , apellido.value , correo.value , contraseña.value);

  localStorage.setItem("Laboratoria", JSON.stringify(miCoder));
  console.log(miCoder.arrayCoder.length);
  window.location="bienvenida.html";


});
