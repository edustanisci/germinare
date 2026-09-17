import { describe, expect, it } from "vitest";
import { Person } from "./person";

describe("Person", () => {
  it("deve criar e serializar os dados da pessoa", () => {
    const person = new Person("Maria", "123.456.789-00", "Rua A, 123");

    expect(person.toJSON()).toEqual({
      name: "Maria",
      cpf: "123.456.789-00",
      address: "Rua A, 123",
    });
  });
});
