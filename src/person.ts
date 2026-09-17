export class Person {
  name: string;
  cpf: string;
  address: string;

  constructor(name: string, cpf: string, address: string) {
    this.name = name;
    this.cpf = cpf;
    this.address = address;
  }

  toJSON(): { name: string; cpf: string; address: string } {
    return {
      name: this.name,
      cpf: this.cpf,
      address: this.address,
    };
  }
}
