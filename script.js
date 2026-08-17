// ==========================================
// 🌌 GALAXIA 3D
// ==========================================

const galaxia = document.getElementById("galaxia");

let escena;
let camara;
let renderizador;
let estrellas;
let estrellas2;

if (galaxia && typeof THREE !== "undefined") {

    escena = new THREE.Scene();

    camara = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        2000
    );

    camara.position.z = 500;

    renderizador = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true
    });

    renderizador.setPixelRatio(
        Math.min(window.devicePixelRatio, 2)
    );

    renderizador.setSize(
        window.innerWidth,
        window.innerHeight
    );

    galaxia.appendChild(renderizador.domElement);


    // ==========================================
    // ✨ ESTRELLAS
    // ==========================================

    const cantidad = 3000;

    const posiciones = new Float32Array(cantidad * 3);

    for (let i = 0; i < cantidad; i++) {

        const radio = 150 + Math.random() * 900;
        const angulo = Math.random() * Math.PI * 2;

        posiciones[i * 3] =
            Math.cos(angulo) * radio;

        posiciones[i * 3 + 1] =
            (Math.random() - 0.5) * 650;

        posiciones[i * 3 + 2] =
            Math.sin(angulo) * radio;
    }

    const geometria = new THREE.BufferGeometry();

    geometria.setAttribute(
        "position",
        new THREE.BufferAttribute(posiciones, 3)
    );

    const material = new THREE.PointsMaterial({
        color: 0xffffff,
        size: 2.2,
        transparent: true,
        opacity: 0.95
    });

    estrellas = new THREE.Points(
        geometria,
        material
    );

    escena.add(estrellas);


    // ==========================================
    // ✨ SEGUNDA CAPA
    // ==========================================

    const cantidad2 = 1200;

    const posiciones2 = new Float32Array(cantidad2 * 3);

    for (let i = 0; i < cantidad2; i++) {

        posiciones2[i * 3] =
            (Math.random() - 0.5) * 1500;

        posiciones2[i * 3 + 1] =
            (Math.random() - 0.5) * 900;

        posiciones2[i * 3 + 2] =
            (Math.random() - 0.5) * 1200;
    }

    const geometria2 = new THREE.BufferGeometry();

    geometria2.setAttribute(
        "position",
        new THREE.BufferAttribute(posiciones2, 3)
    );

    const material2 = new THREE.PointsMaterial({
        color: 0xffd6e5,
        size: 1.5,
        transparent: true,
        opacity: 0.8
    });

    estrellas2 = new THREE.Points(
        geometria2,
        material2
    );

    escena.add(estrellas2);


    // ==========================================
    // 🖱️ MOVIMIENTO DEL MOUSE
    // ==========================================

    let mouseX = 0;
    let mouseY = 0;

    document.addEventListener("mousemove", (e) => {

        mouseX =
            e.clientX / window.innerWidth - 0.5;

        mouseY =
            e.clientY / window.innerHeight - 0.5;
    });


    // ==========================================
    // 🌌 ANIMACIÓN
    // ==========================================

    function animarGalaxia() {

        requestAnimationFrame(animarGalaxia);

        if (estrellas) {

            estrellas.rotation.y += 0.0007;
            estrellas.rotation.x += 0.00015;

            estrellas.rotation.y += mouseX * 0.0008;
            estrellas.rotation.x += mouseY * 0.0004;
        }

        if (estrellas2) {

            estrellas2.rotation.y += 0.00025;
            estrellas2.rotation.x += 0.0001;
        }

        renderizador.render(
            escena,
            camara
        );
    }

    animarGalaxia();


    // ==========================================
    // 📱 REDIMENSIONAR
    // ==========================================

    window.addEventListener("resize", () => {

        camara.aspect =
            window.innerWidth / window.innerHeight;

        camara.updateProjectionMatrix();

        renderizador.setSize(
            window.innerWidth,
            window.innerHeight
        );
    });
}


// ==========================================
// ❤️ LOGIN
// ==========================================

function iniciarSesion() {

    const nombre =
        document.getElementById("nombre");

    const contraseña =
        document.getElementById("contraseña");

    const login =
        document.getElementById("loginBox");

    const universo =
        document.getElementById("universo");

    const nombreCorrecto = "Scarlet";
    const contraseñaCorrecta = "1234";


    if (
        nombre.value.trim().toLowerCase() ===
        nombreCorrecto.toLowerCase()
        &&
        contraseña.value ===
        contraseñaCorrecta
    ) {

        login.classList.add("salir");

        setTimeout(() => {

            login.style.display = "none";

            universo.style.display = "flex";

            iniciarLluvia();

        }, 700);

    } else {

        alert(
            "Nombre o contraseña incorrectos ❤️"
        );
    }
}


// ==========================================
// ☄️ LLUVIA DE "TE AMO" 💜
// ==========================================

function crearTeAmo() {

    const texto =
        document.createElement("div");

    texto.className = "te-amo";

    texto.innerHTML = "Te amo 💜";


    // ☄️ POSICIÓN ALEATORIA CERCA DE LA ESQUINA
    texto.style.right =
        (-80 + Math.random() * 180) + "px";


    // ✨ TAMAÑO ALEATORIO
    texto.style.fontSize =
        (17 + Math.random() * 13) + "px";


    // ☄️ VELOCIDAD ALEATORIA
    const velocidad =
        1.8 + Math.random() * 1.5;

    texto.style.animationDuration =
        velocidad + "s";


    document.body.appendChild(texto);


    // 🧹 BORRAR DESPUÉS
    setTimeout(() => {

        texto.remove();

    }, (velocidad + 1) * 1000);
}


// ==========================================
// ☄️ LLUVIA MÁS INTENSA
// ==========================================

function iniciarLluvia() {

    // Crear varios inmediatamente
    for (let i = 0; i < 5; i++) {

        setTimeout(() => {
            crearTeAmo();
        }, i * 180);
    }


    // Crear nuevos constantemente
    setInterval(() => {

        // ☄️ 2 o 3 cometas cada vez
        const cantidad =
            Math.random() > 0.5 ? 3 : 2;

        for (let i = 0; i < cantidad; i++) {

            setTimeout(() => {
                crearTeAmo();
            }, i * 150);
        }

    }, 500);
}