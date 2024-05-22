// Función para mostrar la alerta personalizada
function mostrarAlertaPersonalizada(mensaje) {
    document.getElementById('modalMensaje').textContent = mensaje;
    document.getElementById('miModal').style.display = 'block';
}

// Función para cerrar la alerta personalizada
function cerrarModal() {
    document.getElementById('miModal').style.display = 'none';
}

document.addEventListener('DOMContentLoaded', (event) => {
    const formulario = document.getElementById('Login');
    
    formulario.addEventListener('submit', function(e) {
        e.preventDefault(); // Evita el envío del formulario por defecto
        
        // Obtener los valores de los campos del formulario
        const usuario = document.getElementById('usuario').value;
        const contraseña = document.getElementById('contraseña').value;
        
        // Validar los datos
        if(usuario === '' || contraseña === '') {
            mostrarAlertaPersonalizada('Los campos no han sido rellenados.')
            console.log('Fallido: Uno o mas campos no han sido rellenados.');
            return;
        }else if(usuario === 'admin' && contraseña === 'root'){
            window.location.href = '../web/datos.html';
            console.log('Exito.', username);
            return;
        }else if(usuario  !== 'admin' || contraseña !== 'root'){
            mostrarAlertaPersonalizada('El usuario o contraseña no es correcto.')
            console.log('Fallido: El usuario o contraseña no es correcto.');
            return;
        }


        // Mostrar los datos (o enviar los datos a un servidor)
        console.log('Nombre:', nombre);
        console.log('Email:', email);

        formulario.reset();
    });
});