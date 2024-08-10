/* Archivo: script/logica.js */

document.getElementById('registroForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Evitar el envío tradicional del formulario

    // Capturar los valores ingresados
    const nombre = document.getElementById('nombre').value;
    const apellidos = document.getElementById('apellidos').value;
    const sexo = document.getElementById('sexo').value;
    const fechaNacimiento = document.getElementById('fecha_nacimiento').value;
    const movil = document.getElementById('movil').value;
    const email = document.getElementById('email').value;

    // Validaciones
    let validationsPassed = true;
    const regexLetras = /^[a-zA-Z\s]+$/;
    const regexMovil = /^[0-9]+$/;
    const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    // Validar que nombres y apellidos no contengan números ni símbolos
    if (!regexLetras.test(nombre) || !regexLetras.test(apellidos)) {
        alert("Los campos de Nombre y Apellidos solo deben contener letras.");
        validationsPassed = false;
    }

    // Validar que el móvil solo contenga números
    if (!regexMovil.test(movil)) {
        alert("El campo de Móvil solo debe contener números.");
        validationsPassed = false;
    }

    // Validar que el email sea válido
    if (!regexEmail.test(email)) {
        alert("El Email ingresado no es válido.");
        validationsPassed = false;
    }

    // Validar la edad del usuario
    const hoy = new Date();
    const fechaNacimientoDate = new Date(fechaNacimiento);
    let edad = hoy.getFullYear() - fechaNacimientoDate.getFullYear();
    const mes = hoy.getMonth() - fechaNacimientoDate.getMonth();
    if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNacimientoDate.getDate())) {
        edad--;
    }
    if (edad < 18) {
        alert("Debes tener al menos 18 años para registrarte.");
        validationsPassed = false;
    }

    // Si todas las validaciones pasan, mostrar el resumen
    if (validationsPassed) {
        // Mostrar los datos ingresados en la sección de resumen
        document.getElementById('resumenNombre').textContent = nombre;
        document.getElementById('resumenApellidos').textContent = apellidos;
        document.getElementById('resumenSexo').textContent = sexo;
        document.getElementById('resumenFechaNacimiento').textContent = fechaNacimiento;
        document.getElementById('resumenMovil').textContent = movil;
        document.getElementById('resumenEmail').textContent = email;

        // Mostrar el resumen y ocultar el formulario original
        document.getElementById('resumen').style.display = 'block';
        document.getElementById('registroForm').style.display = 'none';
    }
});

// Permitir al usuario editar sus datos
document.getElementById('editarRegistro').addEventListener('click', function() {
    // Ocultar el resumen y mostrar nuevamente el formulario
    document.getElementById('resumen').style.display = 'none';
    document.getElementById('registroForm').style.display = 'block';
});

// Confirmar el registro (simulado)
document.getElementById('confirmarRegistro').addEventListener('click', function() {
    // Simular el éxito del registro
    document.getElementById('successMessage').style.display = 'block';
    document.getElementById('resumen').style.display = 'none';

    // Vaciar los campos del formulario
    document.getElementById('registroForm').reset();

    // Mostrar nuevamente el formulario para un nuevo registro (opcional)
    document.getElementById('registroForm').style.display = 'block';
});
