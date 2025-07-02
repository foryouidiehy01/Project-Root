let users = JSON.parse(localStorage.getItem("users")) || [];

let form = document.getElementById("main-form");
form.addEventListener("submit", function (e) {
    e.preventDefault();

    let email = document.getElementById("email").value.trim();
    let username = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value.trim();

    let emailError = document.getElementById("emailError");
    let usernameError = document.getElementById("usernameError");
    let passwordError = document.getElementById("passwordError");

    emailError.innerText = "";
    usernameError.innerText = "";
    passwordError.innerText = "";

    let isValid = true;

    if (username === "") {
        usernameError.innerText = "Tài khoản không được để trống";
        isValid = false;
    } 

    else if (users.some(u => u.username === username)) {
        usernameError.innerText = "Tài khoản đã tồn tại";
        isValid = false;
    }

    if (password === "") {
        passwordError.innerText = "Mật khẩu không được để trống";
        isValid = false;
    }

    if (!isValid) return;

    let newId = users.length > 0 ? Math.max(...users.map(u => u.id)) + 1 : 1;

    let newUser = {
        id: newId,
        username: username,
        email: email,
        password: password,
        role: "USER",
        status: false,
        birthday: "",
        description: ""
    };

    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    alert("🎉 Đăng ký thành công!");
    window.location.href = "http://127.0.0.1:5500/pages/signin.html";
});
