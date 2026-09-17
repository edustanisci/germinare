import { Person } from "./person";

const form = document.querySelector<HTMLFormElement>("#person-form");
const nameInput = document.querySelector<HTMLInputElement>("#name");
const cpfInput = document.querySelector<HTMLInputElement>("#cpf");
const addressInput = document.querySelector<HTMLInputElement>("#address");
const result = document.querySelector<HTMLElement>("#result");

if (!form || !nameInput || !cpfInput || !addressInput || !result) {
  throw new Error("Elementos do formulário não encontrados no HTML.");
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const person = new Person(
    nameInput.value.trim(),
    cpfInput.value.trim(),
    addressInput.value.trim(),
  );

  result.textContent = JSON.stringify(person.toJSON(), null, 2);
});
