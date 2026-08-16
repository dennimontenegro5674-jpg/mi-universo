function iniciarSesion() {
    const nombre = document.querySelector('input[type="text"]').value;
    const contraseña = document.querySelector('input[type="password"]').value;

    if (nombre === "" || contraseña === "") {
        alert("💗 Completa tu nombre y contraseña");
        return;
    }

    alert("✨ Bienvenido, " + nombre + " 💗");
}