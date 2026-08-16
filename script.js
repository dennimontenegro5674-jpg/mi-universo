function iniciarSesion() {

    const nombre = document.getElementById("nombre").value;
    const contraseña = document.getElementById("contraseña").value;

    if (nombre === "" || contraseña === "") {
        alert("💗 Completa tu nombre y contraseña");
        return;
    }

    document.getElementById("loginBox").style.display = "none";

    const universo = document.getElementById("universo");
    universo.style.display = "flex";

    document.getElementById("mensaje").textContent =
        "Este pequeño universo fue creado especialmente para ti, " + nombre + " 💗";
}