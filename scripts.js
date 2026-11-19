document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".newsletter form");
    const emailInput = document.querySelector("#email");
    const message = document.querySelector(".newsletter .message");

    form.noValidate = true;
    message.setAttribute("role", "status");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const email = emailInput.value.trim();
        emailInput.value = email;

        if (email === "" || !emailInput.validity.valid) {
            message.textContent = "Please enter a valid email address.";
            emailInput.focus();
            return;
        }

        message.textContent =
            `Thank you! Your email address ${email} has been added to our mailing list!`;

        form.reset();
    });
});