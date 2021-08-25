document.getElementById('submit-btn').addEventListener("click", function() {
    const email = document.getElementById("user-email");
    const password = document.getElementById("user-password");
    if (email.value == "rejuyanhossainshawon@gmail.com" && password.value == "ok12345") {
        window.location.href = 'banking.html';
    } else {
        console.log("not valid");
    }
})