const btn = document.querySelector(".signin-btn");
const preloader = document.getElementById("preloader");

btn.addEventListener("click", () => {
    preloader.classList.add("show");

    // Simulate login request
    setTimeout(() => {
        preloader.classList.remove("show");
        alert("Login Successful!");
    }, 3000);
});