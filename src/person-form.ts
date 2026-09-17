import { Person } from "./person";

export class PersonForm {
  private form: HTMLFormElement;
  private nameInput: HTMLInputElement;
  private cpfInput: HTMLInputElement;
  private addressInput: HTMLInputElement;
  private result: HTMLElement;

  constructor() {
    this.form = document.querySelector<HTMLFormElement>("#person-form") as HTMLFormElement;
    this.nameInput = document.querySelector<HTMLInputElement>("#name") as HTMLInputElement;
    this.cpfInput = document.querySelector<HTMLInputElement>("#cpf") as HTMLInputElement;
    this.addressInput = document.querySelector<HTMLInputElement>("#address") as HTMLInputElement;
    this.result = document.querySelector<HTMLElement>("#result") as HTMLElement;
  }

  bind(): void {
    this.form.addEventListener("submit", (event) => {
      event.preventDefault();

      const person = new Person(
        this.nameInput.value,
        this.cpfInput.value,
        this.addressInput.value,
      );

      this.result.textContent = JSON.stringify(person.toJSON(), null, 2);
    });
  }
}
