document.addEventListener("DOMContentLoaded", () => {
    // Primer modal
    const modal = document.getElementById("modal");
    const openModalBtn = document.getElementById("openModal");
    const closeModal = document.querySelector("#modal .close");

    openModalBtn.addEventListener("click", () => {
        modal.classList.add("show");
        document.body.classList.add("modal-open"); // Bloquea el scroll
    });

    closeModal.addEventListener("click", () => {
        modal.classList.remove("show");
        document.body.classList.remove("modal-open"); // Restaura el scroll
    });

    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.classList.remove("show");
            document.body.classList.remove("modal-open"); // Restaura el scroll
        }
    });

    // Segundo modal
    const modal2 = document.getElementById("modal2");
    const openModalBtn2 = document.getElementById("openModal2");
    const closeModal2 = document.querySelector("#modal2 .close");

    openModalBtn2.addEventListener("click", () => {
        modal2.classList.add("show");
        document.body.classList.add("modal-open"); // Bloquea el scroll
    });

    closeModal2.addEventListener("click", () => {
        modal2.classList.remove("show");
        document.body.classList.remove("modal-open"); // Restaura el scroll
    });

    window.addEventListener("click", (e) => {
        if (e.target === modal2) {
            modal2.classList.remove("show");
            document.body.classList.remove("modal-open"); // Restaura el scroll
        }
    });

    // tercer modal
    const modal3 = document.getElementById("modal3");
    const openModalBtn3 = document.getElementById("openModal3");
    const closeModal3 = document.querySelector("#modal3 .close");

    openModalBtn3.addEventListener("click", () => {
        modal3.classList.add("show");
        document.body.classList.add("modal-open"); // Bloquea el scroll
    });

    closeModal3.addEventListener("click", () => {
        modal3.classList.remove("show");
        document.body.classList.remove("modal-open"); // Restaura el scroll
    });

    window.addEventListener("click", (e) => {
        if (e.target === modal3) {
            modal3.classList.remove("show");
            document.body.classList.remove("modal-open"); // Restaura el scroll
        }
    });

    // cuarto modal
    const modal4 = document.getElementById("modal4");
    const openModalBtn4 = document.getElementById("openModal4");
    const closeModal4 = document.querySelector("#modal4 .close");

    openModalBtn4.addEventListener("click", () => {
        modal4.classList.add("show");
        document.body.classList.add("modal-open"); // Bloquea el scroll
    });

    closeModal4.addEventListener("click", () => {
        modal4.classList.remove("show");
        document.body.classList.remove("modal-open"); // Restaura el scroll
    });

    window.addEventListener("click", (e) => {
        if (e.target === modal4) {
            modal4.classList.remove("show");
            document.body.classList.remove("modal-open"); // Restaura el scroll
        }
    });

    // quinto modal
    const modal5 = document.getElementById("modal5");
    const openModalBtn5 = document.getElementById("openModal5");
    const closeModal5 = document.querySelector("#modal5 .close");

    openModalBtn5.addEventListener("click", () => {
        modal5.classList.add("show");
        document.body.classList.add("modal-open"); // Bloquea el scroll
    });

    closeModal5.addEventListener("click", () => {
        modal5.classList.remove("show");
        document.body.classList.remove("modal-open"); // Restaura el scroll
    });

    window.addEventListener("click", (e) => {
        if (e.target === modal5) {
            modal5.classList.remove("show");
            document.body.classList.remove("modal-open"); // Restaura el scroll
        }
    });

    // sexto modal
    const modal6 = document.getElementById("modal6");
    const openModalBtn6 = document.getElementById("openModal6");
    const closeModal6 = document.querySelector("#modal6 .close");

    openModalBtn6.addEventListener("click", () => {
        modal6.classList.add("show");
        document.body.classList.add("modal-open"); // Bloquea el scroll
    });

    closeModal6.addEventListener("click", () => {
        modal6.classList.remove("show");
        document.body.classList.remove("modal-open"); // Restaura el scroll
    });

    window.addEventListener("click", (e) => {
        if (e.target === modal6) {
            modal6.classList.remove("show");
            document.body.classList.remove("modal-open"); // Restaura el scroll
        }
    });

    // séptimo modal
    const modal7 = document.getElementById("modal7");
    const openModalBtn7 = document.getElementById("openModal7");
    const closeModal7 = document.querySelector("#modal7 .close");

    openModalBtn7.addEventListener("click", () => {
        modal7.classList.add("show");
        document.body.classList.add("modal-open"); // Bloquea el scroll
    });

    closeModal7.addEventListener("click", () => {
        modal7.classList.remove("show");
        document.body.classList.remove("modal-open"); // Restaura el scroll
    });

    window.addEventListener("click", (e) => {
        if (e.target === modal7) {
            modal7.classList.remove("show");
            document.body.classList.remove("modal-open"); // Restaura el scroll
        }
    });

    // octavo modal
    const modal8 = document.getElementById("modal8");
    const openModalBtn8 = document.getElementById("openModal8");
    const closeModal8 = document.querySelector("#modal8 .close");

    openModalBtn8.addEventListener("click", () => {
        modal8.classList.add("show");
        document.body.classList.add("modal-open"); // Bloquea el scroll
    });

    closeModal8.addEventListener("click", () => {
        modal8.classList.remove("show");
        document.body.classList.remove("modal-open"); // Restaura el scroll
    });

    window.addEventListener("click", (e) => {
        if (e.target === modal8) {
            modal8.classList.remove("show");
            document.body.classList.remove("modal-open"); // Restaura el scroll
        }
    });
});


//Invitación por correo electrónico
function enviarInvitacion() {
    let email = prompt("Ingresa el correo del destinatario:");

    if (email) {
        let subject = encodeURIComponent("Invitación a un evento cultural en Popayán");
        let body = encodeURIComponent(`Hola,\n\nQueremos invitarte a un evento cultural en la ciudad de Popayán. Será una experiencia llena de arte, música y tradición.\n\n📅 Fecha: [Fecha del evento]\n📍 Lugar: [Lugar del evento]\n⏰ Hora: [Hora del evento]\n\n¡Esperamos contar contigo para celebrar nuestra cultura!\n\nSaludos,\n[Tu nombre o entidad organizadora]`);

        let mailtoLink = `mailto:${email}?subject=${subject}&body=${body}`;
        window.location.href = mailtoLink;
    }
}