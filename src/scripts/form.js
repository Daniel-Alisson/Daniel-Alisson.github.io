// script para o forms do contato
class FormSubmit {
  constructor(config) {
    this.config = config;
    this.form = document.querySelector(config.form);
    this.formBotao = document.querySelector(config.button);
    if (this.form) {
      this.url = this.form.getAttribute("action");
    }
    this.sendForm = this.sendForm.bind(this);
  }

  displayMessage(message, className) {
    const existingMessage = this.form.querySelector(`.${className}`);
    if (existingMessage) {
      existingMessage.remove();
    }
    const messageElement = document.createElement("h4");
    messageElement.className = className;
    messageElement.innerHTML = message;
    this.form.appendChild(messageElement);
    setTimeout(() => {
      messageElement.remove();
    }, 3000);
  }

  displaySuccess() {
    this.displayMessage(this.config.success, "success");
  }

  displayError() {
    this.displayMessage(this.config.error, "error");
  }

  getFormObject() {
    const formObject = {};
    const fields = this.form.querySelectorAll("[name]");
    fields.forEach((field) => {
      formObject[field.getAttribute("name")] = field.value;
    });
    return formObject;
  }

  resetarBotao() {
    this.formBotao.disabled = false;
    this.formBotao.innerText = "Enviar";
  }

  validateForm() {
    const fields = this.form.querySelectorAll("[required]");
    for (const field of fields) {
      if (!field.value.trim()) {
        field.focus();
        this.displayMessage("Por favor, preencha todos os campos.", "error");
        return false;
      }
    }
    return true;
  }

  onSubmission(event) {
    event.preventDefault();
    event.target.disabled = true;
    event.target.innerText = "Enviando...";
  }

  async sendForm(event) {
    try {
      this.onSubmission(event);
      if (!this.validateForm()) {
        return;
      }
      await fetch(this.url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(this.getFormObject()),
      });
      this.displaySuccess();
      this.form.reset();
    } catch (error) {
      this.displayError();
      throw new Error(error);
    } finally {
      setTimeout(() => {
        this.resetarBotao();
      }, 3000);
    }
  }

  init() {
    if (this.form) this.formBotao.addEventListener("click", this.sendForm);
    return this;
  }
}

const formSubmit = new FormSubmit({
  form: "[data-form]",
  button: "[data-button]",
  success: "<h4 class='success'>Mensagem enviada!</h4>",
  error: "<h4 class='error'>Não foi possível enviar sua mensagem</h4>",
});
formSubmit.init();
