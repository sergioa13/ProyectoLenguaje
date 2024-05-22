document.addEventListener('DOMContentLoaded', (event) => {
    const formulario = document.getElementById('miFormulario');
    
    formulario.addEventListener('submit', function(e) {
        e.preventDefault(); // Evita el envío del formulario por defecto
        
        // Obtener los valores de los campos del formulario
        const nombre = document.getElementById('nombre').value;
        const email = document.getElementById('email').value;
        const mensaje = document.getElementById('mensaje').value;
        
        // Validar los datos (puedes agregar más validaciones según tus necesidades)
        if(nombre === '' || email === '' || mensaje === '') {
            alert('Todos los campos son obligatorios.');
            return;
        }
        
        // Mostrar los datos (o enviar los datos a un servidor)
        console.log('Nombre:', nombre);
        console.log('Email:', email);
        console.log('Mensaje:', mensaje);
        
        // Aquí puedes agregar la lógica para enviar los datos a un servidor, si es necesario
        // Por ejemplo, usando fetch:
        /*
        fetch('URL_DEL_SERVIDOR', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ nombre, email, mensaje })
        }).then(response => response.json())
          .then(data => {
              console.log('Success:', data);
              alert('Formulario enviado con éxito.');
          }).catch(error => {
              console.error('Error:', error);
              alert('Error al enviar el formulario.');
          });
        */
        
        // Limpiar el formulario después de enviar
        formulario.reset();
    });
});
