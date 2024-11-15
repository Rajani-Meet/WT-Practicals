function validateForm() {
    var name = document.getElementById("name").value;
    if (name === "") {
        alert("Name field cannot be empty.");
        return false;
    }

    var email = document.getElementById("email").value;
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    var password = document.getElementById("password").value;
    if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
        return false;

    }

    var confrim = document.getElementById("confrim").value;
    if (password != confrim) {
        alert("Password Mismatch.");
        return false;
    }
}