function togglePassword() {
    let password = document.getElementById("password");
    let icon = document.getElementById("eye1");
    if (password.type === "password") {
        password.type = "text";
        icon.setAttribute('src', '../img/eye.svg')
    } else {
        password.type = "password";
        icon.setAttribute('src', '../img/eye-flash.svg')
    }
}

function togglePassword2() {
    let password = document.getElementById("password2");
    let icon = document.getElementById("eye2");
    if (password.type === "password") {
        password.type = "text";
        icon.setAttribute('src', '../img/eye.svg')
    } else {
        password.type = "password";
        icon.setAttribute('src', '../img/eye-flash.svg')
    }
}