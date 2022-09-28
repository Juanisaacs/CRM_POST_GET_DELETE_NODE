import { nuevoCliente } from './API.js';
import { mostrarAerta, validar } from './funciones.js'

(function(){
    const formulario = document.querySelector('#formulario');
    formulario.addEventListener('submit', validarCliente);

    function validarCliente(e){
        e.preventDefault();

        const nombre = document.querySelector('#nombre').value;
        const email = document.querySelector('#email').value;
        const telefono = document.querySelector('#telefono').value;
        const empresa = document.querySelector('#empresa').value;
    
        // forma corta de validar todos los campos de un formulario

        const cliente = {
            nombre,
            email,
            telefono,
            empresa


        }
            if (validar(cliente)) {
                //Mostrar mensaje 
                mostrarAerta('Todos los campos son obligatorios');
                return;
            }
                nuevoCliente(cliente);
    }


      //  if (){}
    
})();