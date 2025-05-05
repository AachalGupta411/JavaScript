function login() {
    var user = document.getElementById("username").value;
    var pass = document.getElementById("password").value;

    if (user === "aachal" && pass === "aachalthegreat") {
    document.getElementById("result").innerHTML = "Login successful!";
    document.getElementById("result").style.color = "green";
    } else {
    document.getElementById("result").innerHTML = "Wrong username or password.";
    document.getElementById("result").style.color = "red";
    }
}
