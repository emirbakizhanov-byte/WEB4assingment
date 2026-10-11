(() => {
  "use strict";

  const validationForms = document.querySelectorAll(".needs-validation");

  validationForms.forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      event.stopPropagation();

      if (form.id === "registration-form") {
        const password = form.querySelector("#password");
        const confirmPassword = form.querySelector("#confirmPassword");
        confirmPassword.setCustomValidity(
          confirmPassword.value === password.value ? "" : "Passwords do not match."
        );
      }

      form.classList.add("was-validated");

      if (form.checkValidity()) {
        if (form.id === "registration-form") {
          document.querySelector("#registration-success").classList.remove("d-none");
        } else {
          const message = form.querySelector(".alert");
          if (message) {
            message.classList.remove("d-none");
          }
        }
      } else {
        const success = document.querySelector("#registration-success");
        if (success) success.classList.add("d-none");
      }
    });

    form.addEventListener("reset", () => {
      window.setTimeout(() => {
        form.classList.remove("was-validated");
        form.querySelectorAll(".is-valid, .is-invalid").forEach((element) => {
          element.classList.remove("is-valid", "is-invalid");
        });
        const success = document.querySelector("#registration-success");
        if (success) success.classList.add("d-none");
      }, 0);
    });
  });

  const password = document.querySelector("#password");
  const confirmPassword = document.querySelector("#confirmPassword");
  if (password && confirmPassword) {
    const validateMatch = () => {
      confirmPassword.setCustomValidity(
        confirmPassword.value === password.value ? "" : "Passwords do not match."
      );
    };
    password.addEventListener("input", validateMatch);
    confirmPassword.addEventListener("input", validateMatch);
  }
})();
