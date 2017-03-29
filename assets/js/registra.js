
function Coder(nombre,apellido,correo,contraseña){
		this.nombre = nombre;
		this.apellido = apellido;
		this.correo = correo;
		this.contraseña = contraseña;
	};



var nombre=document.getElementById("nombre");
var apellido=document.getElementById("apellido");
var correo=document.getElementById("correo");
var contraseña=document.getElementById("contraseña");


document.getElementById("Registro").addEventListener("click", function(e){
  e.preventDefault();


  if(nombre.length!=0 && apellido.length!=0 && correo.length!=0 && contraseña.length!=0) {
  			localStorage.setItem("Laboratoria",JSON.stringify(new Coder(nombre.value,apellido.value,correo.value,contraseña.value,contraseña.value)));
  			document.getElementById("registra").reset()
  			  window.location="bienvenida.html";
  		}
  		else{
  			var nota=document.getElementById("nota");
        nota.innerHTML="ingrese todos los campos";
  		}

});
