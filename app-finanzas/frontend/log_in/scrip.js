const container = document.getElementById("container");
const registerBtn = document.getElementById("register");
const loginBtn = document.getElementById("login");

registerBtn.addEventListener("click", () => {
    container.classList.add("active");
});

loginBtn.addEventListener("click", () => {
    container.classList.remove("active");
});

// Lógica de Registro
document.getElementById("register-form").addEventListener("submit", (e) => {
    e.preventDefault(); 
    // Simulamos el inicio de sesión marcando flag en localStorage
    localStorage.setItem("isLoggedIn", "true");
    window.location.href = "../index.html";
});

// Lógica de Inicio de Sesión
document.getElementById("login-form").addEventListener("submit", (e) => {
    e.preventDefault();
    // Simulamos el inicio de sesión marcando flag en localStorage
    localStorage.setItem("isLoggedIn", "true");
    window.location.href = "../index.html";
});