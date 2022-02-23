import { randomInt } from "crypto";
import { writeFile } from "fs";

export class PasswordGenerator {
  private readonly uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  private readonly lowercase = "abcdefghijklmnopqrstuvwxyz";
  private readonly numbers = "0123456789";
  private readonly symbols = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
  private readonly allSymbols = this.uppercase + this.lowercase + this.numbers + this.symbols;

  generatePasswords(length = 16, number = 1) {
    const passwords = [];
    for (let i = 0; i < number; i++) passwords.push(this.generatePassword(length));
    return passwords;
  }

  generatePassword(length = 16) {
    let password = "";
    for (let index = 0; index < length; index++) {
      const randomNumber = randomInt(this.allSymbols.length);
      password += this.allSymbols.charAt(randomNumber);
    }
    return password;
  }
}

const passwords = new PasswordGenerator().generatePasswords(16, 8);

writeFile("password.txt", passwords.join("\n"), () => console.log("OK"));