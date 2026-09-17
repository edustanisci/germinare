import { Person } from "./person";

export class PersonForm {
  private readonly form: HTMLFormElement;
  private readonly nameInput: HTMLInputElement;
  private readonly cpfInput: HTMLInputElement;
  private readonly addressInput: HTMLInputElement;
  private readonly result: HTMLElement;

  constructor() {
    const form = document.querySelector<HTMLFormElement>("#person-form");
    const nameInput = document.querySelector<HTMLInputElement>("#name");
    const cpfInput = document.querySelector<HTMLInputElement>("#cpf");
    const addressInput = document.querySelector<HTMLInputElement>("#address");
    const result = document.querySelector<HTMLElement>("#result");

    if (!form || !nameInput || !cpfInput || !addressInput || !result) {
      throw new Error("Elementos do formulário não encontrados no HTML.");
    }

    this.form = form;
    this.nameInput = nameInput;
    this.cpfInput = cpfInput;
    this.addressInput = addressInput;
    this.result = result;
  }

  bind(): void {
    this.form.addEventListener("submit", (event) => {
      event.preventDefault();

      const person = new Person(
        this.nameInput.value.trim(),
        this.cpfInput.value.trim(),
        this.addressInput.value.trim(),
      );

      this.result.textContent = JSON.stringify(person.toJSON(), null, 2);
    });
  }
}
