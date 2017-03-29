var nombre=document.getElementById("nombre");
var apellido=document.getElementById("apellido");
var correo=document.getElementById("correo");
var contraseña=document.getElementById("contraseña");
var spans=document.getElementsByTagName("span");

function Coder(nombre,apellido,correo,contraseña){
		this.nombre = nombre;
		this.apellido = apellido;
		this.correo = correo;
		this.contraseña = contraseña;
	};



	var soloPass = function(e){
	var codigoTecla = e.keyCode;
	if(contraseña.value.length<6){
		spans[3].innerHTML="ingrese una contraseña mas larga"
		console.log("entra");
		return true;
	}else{
		spans[3].innerHTML= "";
		console.log("entr2222a");
		return false;
	}
}
contraseña.onkeypress=soloPass;








document.getElementById("Registro").addEventListener("click", function(e){
  e.preventDefault();

 localStorage.setItem("usuario" ,nombre.value);
 var usuario=localStorage.getItem("usuario");
  if(nombre.length!=0 && apellido.length!=0 && correo.length!=0 && contraseña.length!=0) {
  			localStorage.setItem(usuario,JSON.stringify(new Coder(nombre.value,apellido.value,correo.value,contraseña.value,contraseña.value)));
  			document.getElementById("registra").reset()
  			  window.location="bienvenida.html";
  		}
  		else{
  			var nota=document.getElementById("nota");
        nota.innerHTML="ingrese todos los campos";
  		}

});
