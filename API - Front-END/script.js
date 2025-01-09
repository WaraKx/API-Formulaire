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

    // Objet pour stocker les données du formulaire
    const formData = {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    };

    // Mettre à jour formData lors de la saisie de l'utilisateur
    firstNameInput.addEventListener("input", (e) => {
        formData.firstName = e.target.value;
        console.log(formData);
    });

    lastNameInput.addEventListener("input", (e) => {
        formData.lastName = e.target.value;
        console.log(formData);
    });

    emailInput.addEventListener("input", (e) => {
        formData.email = e.target.value;
        console.log(formData);
    });

    passwordInput.addEventListener("input", (e) => {
        formData.password = e.target.value;
        console.log(formData);
    });

    confirmPasswordInput.addEventListener("input", (e) => {
        formData.confirmPassword = e.target.value;
        console.log(formData);
    });

    // Soumission du formulaire avec validation
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        console.log(formData);

        let isValid = true;

        // Réinitialisation des erreurs
        errorName.style.display = "none";
        errorLastName.style.display = "none";
        errorEmail.style.display = "none";
        errorPassword.style.display = "none";
        errorConfirmPassword.style.display = "none";

        firstNameInput.classList.remove("error");
        lastNameInput.classList.remove("error");
        emailInput.classList.remove("error");
        passwordInput.classList.remove("error");
        confirmPasswordInput.classList.remove("error");

        // Validation du prénom
        if (!formData.firstName || formData.firstName.trim().length < 3) {
            isValid = false;
            firstNameInput.classList.add("error");
            errorName.style.display = "block";
            errorName.innerText = "Veuillez entrer un prénom (minimum 3 caractères) !";
        }

        // Validation du nom de famille
        if (!formData.lastName || formData.lastName.trim().length < 3) {
            isValid = false;
            lastNameInput.classList.add("error");
            errorLastName.style.display = "block";
            errorLastName.innerText = "Veuillez entrer un nom de famille (minimum 3 caractères) !";
        }

        // Validation de l'email
        if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
            isValid = false;
            emailInput.classList.add("error");
            errorEmail.style.display = "block";
            errorEmail.innerText = "Veuillez entrer une adresse email valide !";
        }

        // Validation du mot de passe
        if (!formData.password || formData.password.length < 8) {
            isValid = false;
            passwordInput.classList.add("error");
            errorPassword.style.display = "block";
            errorPassword.innerText = "Le mot de passe doit contenir au moins 8 caractères !";
        }

        // Validation de la confirmation du mot de passe
        if (formData.password !== formData.confirmPassword) {
            isValid = false;
            confirmPasswordInput.classList.add("error");
            errorConfirmPassword.style.display = "block";
            errorConfirmPassword.innerText = "Les mots de passe ne correspondent pas !";
        }

        // Soumettre le formulaire si toutes les validations sont réussies
        if (isValid) {
            console.log("Formulaire soumis avec succès !");
            // Vous pouvez envoyer les données ici avec fetch ou autre
        }
    });
});
