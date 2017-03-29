

function creandoDiv(array){
  var contenedor = document.getElementById("mostrar");
  contenedor.innerHTML="";
  var p1=document.createElement("p");
  p1.innerHTML="nombre : "+array.nombre;
  var p2=document.createElement("p");
  p2.innerHTML="apellido : "+array.apellido;
  var p3=document.createElement("p");
  p3.innerHTML="Correo : "+array.correo;
  var p4=document.createElement("p");
  p4.innerHTML= "Contraseña :" + array.contraseña;
  contenedor.appendChild(p1);
      contenedor.appendChild(p2);
          contenedor.appendChild(p3);
          contenedor.appendChild(p4);
}

var codeadora = JSON.parse(localStorage.getItem("Laboratoria"));

creandoDiv(codeadora);
document.getElementById("editar").addEventListener("click",function(e){
  e.preventDefault();




  window.location="editar.html";
});
