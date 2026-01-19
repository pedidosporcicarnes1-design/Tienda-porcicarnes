// Escuchar el envío del formulario
document.getElementById("formVisita").addEventListener("submit", function(e) {
    e.preventDefault(); // Evita que el formulario recargue la página

    // Obtener la opción seleccionada
    const opcionPedido = document.getElementById("pedido").value;

    // Si NO se toma pedido
    if (opcionPedido === "no") {
        alert("✅ Datos enviados correctamente\nVisita registrada sin pedido");
        return;
    }

    // Si SÍ se toma pedido
    if (opcionPedido === "si") {
        window.location.href = "tienda.html";
        return;
    }

    // Si no seleccionó ninguna opción
    alert("⚠️ Por favor seleccione si se tomará pedido");
});

// Función para redirigir al registro (ya está en el HTML, pero por si acaso)
function irARegistro() {
    window.location.href = "registro.html";
}

// Asignar evento al botón Registrar Cliente
document.addEventListener('DOMContentLoaded', function() {
    const btnRegistrar = document.getElementById('btnRegistrarCliente');
    if (btnRegistrar) {
        btnRegistrar.addEventListener('click', irARegistro);
    }
});