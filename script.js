function iniciarSesion() {

    const nombre = document.getElementById("nombre").value;
    const contraseña = document.getElementById("contraseña").value;

    if (nombre === "" || contraseña === "") {
        alert("💗 Completa tu nombre y contraseña");
        return;
    }

    const login = document.getElementById("loginBox");
    const universo = document.getElementById("universo");

    login.classList.add("salir");

    setTimeout(() => {

        login.style.display = "none";

        universo.style.display = "flex";
        universo.classList.add("entrar");

        document.getElementById("mensaje").textContent =
            "Este pequeño universo fue creado especialmente para ti, "
            + nombre + " 💗";

        crearGalaxia();

        // 💗 Comenzar lluvia de "Te amo"
        lluviaTeAmo();

        // 💗 Seguir creando lluvia continuamente
        setInterval(() => {
            lluviaTeAmo();
        }, 4000);

    }, 700);
}


// 🌌 CREAR GALAXIA
function crearGalaxia() {

    const simbolos = [
        "✦",
        "✧",
        "★",
        "⋆",
        "·",
        "💗",
        "💕",
        "💖"
    ];

    for (let i = 0; i < 100; i++) {

        const particula = document.createElement("div");

        particula.className = "particula";

        particula.textContent =
            simbolos[Math.floor(Math.random() * simbolos.length)];

        const angulo = Math.random() * Math.PI * 2;

        const distancia =
            120 + Math.random() * 350;

        const x =
            Math.cos(angulo) * distancia;

        particula.style.left = "50%";
        particula.style.top = "50%";

        particula.style.setProperty(
            "--x",
            x + "px"
        );

        particula.style.fontSize =
            (8 + Math.random() * 18) + "px";

        particula.style.animationDuration =
            (4 + Math.random() * 8) + "s";

        particula.style.animationDelay =
            Math.random() * 5 + "s";

        document.body.appendChild(particula);
    }
}


// 💗 LLUVIA DE "TE AMO"
function lluviaTeAmo() {

    const universo =
        document.getElementById("universo");

    for (let i = 0; i < 15; i++) {

        const texto =
            document.createElement("div");

        texto.className = "te-amo";

        texto.textContent =
            "Te amo ❤️";

        // Posición horizontal aleatoria
        texto.style.left =
            Math.random() * 100 + "vw";

        // Tamaño aleatorio
        texto.style.fontSize =
            (14 + Math.random() * 14) + "px";

        // Velocidad aleatoria
        texto.style.animationDuration =
            (4 + Math.random() * 5) + "s";

        // Retraso aleatorio
        texto.style.animationDelay =
            Math.random() * 2 + "s";

        universo.appendChild(texto);

        // Eliminar después de caer
        setTimeout(() => {
            texto.remove();
        }, 10000);
    }
}


// ✨ ESTRELLAS AL PASAR EL DEDO
document.addEventListener("touchmove", (e) => {

    const dedo = e.touches[0];

    const estrella =
        document.createElement("div");

    estrella.className =
        "estrella-dedo";

    estrella.textContent = "✦";

    estrella.style.left =
        dedo.clientX + "px";

    estrella.style.top =
        dedo.clientY + "px";

    document.body.appendChild(estrella);

    setTimeout(() => {
        estrella.remove();
    }, 1000);

});