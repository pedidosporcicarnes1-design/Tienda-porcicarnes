// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {

    console.log("JavaScript cargado correctamente"); // Para depuración

    // Obtener el formulario
    const formulario = document.getElementById('formRegistro');

    // Verificar que el formulario existe
    if (!formulario) {
        console.error("No se encontró el formulario con id 'formRegistro'");
        return;
    }

    // Obtener el botón volver
    const btnVolver = document.getElementById('btnVolver');

    // Obtener TODOS los campos
    const razonSocial = document.getElementById('razonSocial');
    const nombreComercial = document.getElementById('nombreComercial');
    const nit = document.getElementById('nit');
    const contacto = document.getElementById('contacto');
    const telefono = document.getElementById('telefono');
    const direccion = document.getElementById('direccion');
    const puntosVenta = document.getElementById('puntosVenta');
    const aceptarTerminos = document.getElementById('aceptarTerminos');

    // Verificar que todos los campos existan
    console.log("Campos encontrados:", {
        razonSocial: !!razonSocial,
        nit: !!nit,
        contacto: !!contacto,
        telefono: !!telefono,
        direccion: !!direccion,
        puntosVenta: !!puntosVenta,
        aceptarTerminos: !!aceptarTerminos
    });

    // Función para validar teléfono
    function validarTelefono(telefono) {
        // Permitir números, espacios, guiones y paréntesis
        return /^[0-9+\-\s()]+$/.test(telefono) && telefono.length >= 7;
    }

    // Función para validar NIT
    function validarNIT(nit) {
        // Permitir números y guiones
        return /^[0-9-]+$/.test(nit) && nit.length >= 5;
    }

    // Función para validar Razón Social
    function validarRazonSocial(razonSocial) {
        // La razón social debe tener al menos 3 caracteres
        return razonSocial.trim().length >= 3;
    }

    // Función para mostrar error en un campo
    function mostrarError(campo, mensaje) {
        if (campo) {
            campo.style.borderColor = '#e74c3c';
            campo.style.backgroundColor = '#ffe6e6';
        }
        alert('❌ ' + mensaje);
        if (campo) {
            campo.focus();
        }
    }

    // Función para limpiar errores
    function limpiarError(campo) {
        if (campo) {
            campo.style.borderColor = '#ccc';
            campo.style.backgroundColor = '';
        }
    }

    // Validar campos individualmente al salir de ellos
    if (telefono) {
        telefono.addEventListener('blur', function() {
            if (this.value && !validarTelefono(this.value)) {
                mostrarError(this, 'Teléfono inválido. Use solo números, +, -, espacios o paréntesis.');
            } else {
                limpiarError(this);
            }
        });
    }

    if (nit) {
        nit.addEventListener('blur', function() {
            if (this.value && !validarNIT(this.value)) {
                mostrarError(this, 'NIT inválido. Use solo números y guiones (mínimo 5 caracteres).');
            } else {
                limpiarError(this);
            }
        });
    }

    if (razonSocial) {
        razonSocial.addEventListener('blur', function() {
            if (this.value && !validarRazonSocial(this.value)) {
                mostrarError(this, 'Razón Social debe tener al menos 3 caracteres.');
            } else {
                limpiarError(this);
            }
        });
    }

    // Limpiar error cuando el usuario comienza a escribir
    const campos = document.querySelectorAll('input, select');
    campos.forEach(campo => {
        campo.addEventListener('input', function() {
            limpiarError(this);
        });
    });

    // Manejar el envío del formulario
    formulario.addEventListener('submit', function(evento) {
        // Prevenir el envío normal del formulario
        evento.preventDefault();

        console.log("Formulario enviado"); // Para depuración

        // Obtener valores de los campos
        const razonSocialValor = razonSocial ? razonSocial.value.trim() : '';
        const nitValor = nit ? nit.value.trim() : '';
        const contactoValor = contacto ? contacto.value.trim() : '';
        const telefonoValor = telefono ? telefono.value.trim() : '';
        const direccionValor = direccion ? direccion.value.trim() : '';
        const puntosVentaValor = puntosVenta ? puntosVenta.value : '';
        const aceptarTerminosValor = aceptarTerminos ? aceptarTerminos.checked : false;
        const nombreComercialValor = nombreComercial ? nombreComercial.value.trim() : '';

        console.log("Valores capturados:", {
            razonSocial: razonSocialValor,
            nit: nitValor,
            contacto: contactoValor,
            telefono: telefonoValor,
            direccion: direccionValor,
            puntosVenta: puntosVentaValor,
            aceptarTerminos: aceptarTerminosValor
        });

        // Validar campos obligatorios - PRIMERO LA RAZÓN SOCIAL
        if (!razonSocialValor) {
            console.log("Error: Razón Social vacía");
            mostrarError(razonSocial, '❌ Razón Social es un campo obligatorio');
            return;
        }

        if (!validarRazonSocial(razonSocialValor)) {
            console.log("Error: Razón Social muy corta");
            mostrarError(razonSocial, '❌ Razón Social debe tener al menos 3 caracteres');
            return;
        }

        if (!nitValor) {
            mostrarError(nit, '❌ NIT es un campo obligatorio');
            return;
        } else if (!validarNIT(nitValor)) {
            mostrarError(nit, '❌ NIT inválido. Use solo números y guiones (mínimo 5 caracteres).');
            return;
        }

        if (!contactoValor) {
            mostrarError(contacto, '❌ Contacto es un campo obligatorio');
            return;
        }

        if (!telefonoValor) {
            mostrarError(telefono, '❌ Teléfono es un campo obligatorio');
            return;
        } else if (!validarTelefono(telefonoValor)) {
            mostrarError(telefono, '❌ Teléfono inválido. Use solo números, +, -, espacios o paréntesis.');
            return;
        }

        if (!direccionValor) {
            mostrarError(direccion, '❌ Dirección es un campo obligatorio');
            return;
        } else if (direccionValor.length < 10) {
            mostrarError(direccion, '❌ Dirección debe ser más específica (mínimo 10 caracteres)');
            return;
        }

        if (!puntosVentaValor) {
            alert('❌ Debe seleccionar un Punto de Venta');
            if (puntosVenta) puntosVenta.focus();
            return;
        }

        if (!aceptarTerminosValor) {
            alert('❌ Debe aceptar los términos y condiciones');
            if (aceptarTerminos) aceptarTerminos.focus();
            return;
        }

        // Si llegamos aquí, todos los campos son válidos
        console.log("Todos los campos son válidos, procediendo...");

        // Obtener el texto del punto de venta seleccionado
        let puntoVentaTexto = '';
        if (puntosVenta && puntosVenta.options[puntosVenta.selectedIndex]) {
            puntoVentaTexto = puntosVenta.options[puntosVenta.selectedIndex].text;
        }

        // Crear mensaje de éxito con TODOS los datos
        const mensajeExito = `✅ CLIENTE REGISTRADO EXITOSAMENTE

📋 DATOS DEL CLIENTE REGISTRADO:

🏢 RAZÓN SOCIAL: ${razonSocialValor}

🏷️ NOMBRE COMERCIAL: ${nombreComercialValor || 'No especificado'}

🆔 NIT: ${nitValor}

👤 CONTACTO: ${contactoValor}

📞 TELÉFONO: ${telefonoValor}

📍 DIRECCIÓN: ${direccionValor}

🛒 PUNTO DE VENTA: ${puntoVentaTexto}

=================================
✅ El cliente ha sido registrado correctamente en el sistema.
⏳ Será redirigido al formulario principal en 3 segundos...`;

        // Mostrar alert de éxito
        alert(mensajeExito);

        // Redirigir a index.html después de 3 segundos
        setTimeout(function() {
            console.log("Redirigiendo a index.html...");
            window.location.href = "index.html";
        }, 3000);

        // Opcional: También puedes limpiar el formulario
        // formulario.reset();
    });

    // Manejar el botón "Volver al Inicio"
    if (btnVolver) {
        btnVolver.addEventListener('click', function() {
            // Preguntar confirmación
            const confirmar = confirm("⚠️ ¿Está seguro que desea volver al inicio?\n\nLos datos no guardados se perderán.");
            if (confirmar) {
                window.location.href = "index.html";
            }
        });
    }

    // Enfocar automáticamente en la razón social al cargar
    if (razonSocial) {
        razonSocial.focus();
    }
});