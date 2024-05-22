// Función para mostrar la alerta en la que mensaje sera nuestro mensaje personalizado
function mostrarAlerta(mensaje) {
    // Obtiene los valores de nuestro codigo
    document.getElementById('comentarioModal').textContent = mensaje;
    document.getElementById('modal').style.display = 'block';
}

// Función para cerrar la alerta
function cerrarModal() {
    document.getElementById('modal').style.display = 'none';
}

document.addEventListener('DOMContentLoaded', (event) => {
    // Obtiene el valor del formulario
    const formulario = document.getElementById('Login');
    
    // Detecta cuando se ha cliqueado el boton "submit"
    formulario.addEventListener('submit', function(e) {
        e.preventDefault(); // Evita el envío del formulario por defecto
        
        // Obtener los valores de los campos del formulario
        const usuario = document.getElementById('usuario').value;
        const contraseña = document.getElementById('contraseña').value;
        
        // Validar los datos
        if(usuario === '' || contraseña === '') 
        {
            // Si los campos estan vacios mostrara una alerta de error
            mostrarAlerta('Los campos no han sido rellenados.')
            console.log('Fallido: Uno o mas campos no han sido rellenados.');
            return;
        }
        else if(usuario === 'admin' && contraseña === 'root') 
        {
            // Si son correctos redirigira a la pagina indicada
            window.location.href = '../web/datos.html';
            console.log('Exito.', username);
            return;
        }
        else if(usuario  !== 'admin' || contraseña !== 'root')
        {
            // Si son incorrectos mostrara una alerta de error y generara un log de error
            mostrarAlerta('El usuario o contraseña no es correcto.')
            console.log('Fallido: El usuario o contraseña no es correcto.');
            return;
        }


        // Mostrar los datos (o enviar los datos a un servidor en caso futuro)
        console.log('Usuario:', nombre);

        formulario.reset();
    });
});