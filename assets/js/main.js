(() => {
  "use strict";

  const year = document.querySelector("[data-year]");
  if (year) year.textContent = new Date().getFullYear();

  const form = document.querySelector("[data-service-form]");
  if (!form) return;

  const status = form.querySelector("[data-form-status]");
  const submitButton = form.querySelector("button[type='submit']");
  const buttonLabel = form.querySelector(".button-label");
  const buttonLoading = form.querySelector(".button-loading");

  form.addEventListener("submit", async (event) => {
    if (!form.checkValidity()) return;
    event.preventDefault();

    status.textContent = "";
    status.className = "form-status";
    submitButton.disabled = true;
    submitButton.setAttribute("aria-busy", "true");
    buttonLabel.hidden = true;
    buttonLoading.hidden = false;

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: new FormData(form),
        headers: { Accept: "application/json" }
      });

      if (!response.ok) throw new Error("Submission failed");

      form.reset();
      status.textContent = "Thank you. Your service request was sent successfully.";
      status.classList.add("success");
    } catch (error) {
      status.textContent = "We couldn’t send your request. Please try again, or call or text us directly.";
      status.classList.add("error");
    } finally {
      submitButton.disabled = false;
      submitButton.removeAttribute("aria-busy");
      buttonLabel.hidden = false;
      buttonLoading.hidden = true;
      status.focus?.();
    }
  });
})();
