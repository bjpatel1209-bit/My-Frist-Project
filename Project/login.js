function validateLogin() {
    let age = parseInt(document.getElementById("age").value);

    if (isNaN(age) || age < 18) {
        alert("❌ You must be 18 or above to login.");
        return false; // STOP form submission
    } else {
        alert("✅ Login Successful!");
        window.location.href = "main.html"; // redirect only if valid
        return false;
    }
}

