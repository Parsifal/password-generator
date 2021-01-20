import * as crypto from "crypto";
import fs from "fs";

export class PasswordGenerator {
  private readonly uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  private readonly lowercase = "abcdefghijklmnopqrstuvwxyz";
  private readonly numbers = "0123456789";
  private readonly symbols = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

  constructor(private readonly length = 16, private readonly number = 1) {}

  public generatePasswords() {
    const passwords = [];
    for (let i = 0; i < this.number; i++) passwords.push(this.generatePassword());
    return passwords;
  }

  public generatePassword() {
    const allSymbols = this.uppercase + this.lowercase + this.numbers + this.symbols;
    let password = "";
    for (let index = 0; index < this.length; index++) {
      const randomNumber = crypto.randomInt(allSymbols.length);
      password += allSymbols.charAt(randomNumber);
    }
    return password;
  }
}

const passwords = new PasswordGenerator(64, 64).generatePasswords();

fs.writeFile("password.txt", passwords.join("\n"), () => console.log("OK"));
