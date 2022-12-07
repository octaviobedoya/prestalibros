const form = document.getElementById('form');
const inputs = document.querySelectorAll('#form inputs');

const expresiones = {
	user: /^[a-zA-Z0-9\_\-]{4,10}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}

const validarFormulario = (e) =>{
    switch(e.target.name){
        case "nombre":
            
        break;
        case "doc":
            
        break;
        case "phone":
            
        break;
        case "direccion":
            
        break;
        case "email":
            
        break;
        case "user":
            if(expresiones.user.test(e.target.value)){
                document.getElementById('grupo_user').classList.remove('form_grupo-incorrecto');
                document.getElementById('grupo_user').classList.add('form_grupo-correcto');
                document.querySelector('#grupo_user i').classList.add('fa-check-circle');
                document.querySelector('#grupo_user i').classList.remove('fa-times-circle');                
            } else{
                document.getElementById('grupo_user').classList.add('form_grupo-incorrecto');
            }
        break;
        case "pass":
            
        break;
    }
}
inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
});

