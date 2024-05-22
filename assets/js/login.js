document.addEventListener('DOMContentLoaded', (event) => {
    const formulario = document.getElementById('Login');
    
    formulario.addEventListener('submit', function(e) {
        e.preventDefault(); // Evita el envío del formulario por defecto
        
        // Obtener los valores de los campos del formulario
        const usuario = document.getElementById('usuario').value;
        const contraseña = document.getElementById('contraseña').value;
        
        // Validar los datos (puedes agregar más validaciones según tus necesidades)
        if(usuario === '' || contraseña === '') {
            alert('Todos los campos son obligatorios.');
            return;
        }else if(usuario === 'admin' && contraseña === 'root'){
            window.location.href = '/datos.html';
            return;
        }else if(usuario  !== 'admin' || contraseña !== 'root'){
            alert('El usuario o contraseña no concuerdan.');
            return;
        }


        // Mostrar los datos (o enviar los datos a un servidor)
        console.log('Nombre:', nombre);
        console.log('Email:', email);

        formulario.reset();
    });
});
