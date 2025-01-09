document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("mon_form");
    const firstNameInput = document.getElementById("first_name");
    const lastNameInput = document.getElementById("last_name");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const confirmPasswordInput = document.getElementById("confirm_password");

    const errorName = document.getElementById("error_name");
    const errorLastName = document.getElementById("error_last_name");
    const errorEmail = document.getElementById("error_email");
    const errorPassword = document.getElementById("error_password");
    const errorConfirmPassword = document.getElementById("error_confirm_password");

    form.addEventListener("submit", (event) => {
        let isValid = true;

        // Réinitialiser les styles et messages d'erreur
        firstNameInput.classList.remove("error");
        lastNameInput.classList.remove("error");
        emailInput.classList.remove("error");
        passwordInput.classList.remove("error");
        confirmPasswordInput.classList.remove("error");

        errorName.style.display = "none";
        errorLastName.style.display = "none";
        errorEmail.style.display = "none";
        errorPassword.style.display = "none";
        errorConfirmPassword.style.display = "none";

        // Validation du prénom (minimum 3 caractères)
        if (firstNameInput.value.trim().length < 3) {
            isValid = false;
            firstNameInput.classList.add("error");
            errorName.style.display = "inline";
        }

        // Validation du nom (minimum 3 caractères)
        if (lastNameInput.value.trim().length < 3) {
            isValid = false;
            lastNameInput.classList.add("error");
            errorLastName.style.display = "inline";
        }

        // Validation de l'email
        if (emailInput.value.trim() === "") {
            isValid = false;
            emailInput.classList.add("error");
            errorEmail.textContent = "Veuillez entrer une adresse email !";
            errorEmail.style.display = "inline";
        } else if (!/\S+@\S+\.\S+/.test(emailInput.value)) {
            isValid = false;
            emailInput.classList.add("error");
            errorEmail.textContent = "Format d'email invalide !";
            errorEmail.style.display = "inline";
        }

        // Validation du mot de passe (minimum 8 caractères)
        if (passwordInput.value.trim().length < 8) {
            isValid = false;
            passwordInput.classList.add("error");
            errorPassword.style.display = "inline";
        }

        // Validation de la confirmation du mot de passe
        if (confirmPasswordInput.value !== passwordInput.value) {
            isValid = false;
            confirmPasswordInput.classList.add("error");
            errorConfirmPassword.style.display = "inline";
        }

        // Empêcher l'envoi du formulaire si validation échoue
        if (!isValid) {
            event.preventDefault();
        }
    });
});
