export class Person {
  constructor(
    public readonly name: string,
    public readonly cpf: string,
    public readonly address: string,
  ) {}

  toJSON(): { name: string; cpf: string; address: string } {
    return {
      name: this.name,
      cpf: this.cpf,
      address: this.address,
    };
  }
}
