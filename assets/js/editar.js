var codeadora = JSON.parse(localStorage.getItem("Laboratoria"));
	var inputsEditar = document.getElementsByTagName("input");
	inputsEditar[0].value = codeadora.nombre;
	inputsEditar[1].value = codeadora.apellido;
	inputsEditar[2].value = codeadora.correo;
	inputsEditar[3].value = codeadora.contraseña;

	document.getElementById("Guardar").addEventListener("click",function(){
		if(inputsEditar[0].length!=0 && inputsEditar[1].length!=0 && inputsEditar[2].length!=0 && inputsEditar[3].length!=0){
			codeadora.nombre=inputsEditar[0].value;
			codeadora.apellido= inputsEditar[1].value
			codeadora.edad = inputsEditar[2].value;
			codeadora.genero = inputsEditar[3].value;
			localStorage.setItem("Laboratoria",JSON.stringify(codeadora));
			window.location="bienvenida.html"
		}
		else{
			alert("Todos los campos son obligatorios");

}
});
