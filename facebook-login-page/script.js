let loginForm = document.querySelector("#loginForm");
let emailInput = document.querySelector("#emailInput");
let passwordInput = document.querySelector("#passwordInput");
let loginBtn = document.querySelector("#loginBtn");
let emailError = document.createElement("small");
emailError.textContent = "";
emailError.style.color = "red";
emailError.style.margin = "2px"
passwordInput.insertAdjacentElement('afterend', emailError)
emailError.style.display = "none"


// Click Work

loginBtn.addEventListener("click", (e) => {

    e.preventDefault();

    if (emailInput.value === "") {
        emailError.textContent = "Enter Email First";
        emailError.style.display = "block"

    } else if (passwordInput.value.length < 7) {
        emailError.textContent = "Minimum 8 Character Password"
        emailError.style.display = "block"

    } else {

        let successAlert = document.querySelector("#successAlert");
        successAlert.classList.add("show");
        setTimeout(() => {

            successAlert.classList.remove("show")

        }, 3000)

    }

})



