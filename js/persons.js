const urlParams = new URLSearchParams(window.location.search);
const invitados = urlParams.get("invitados") || "X";
document.getElementById("invitados-texto").innerText = 
    `${invitados}`;