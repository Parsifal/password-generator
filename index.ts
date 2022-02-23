import * as crypto from "crypto";
import * as fs from "fs";

export class PasswordGenerator {
  private readonly uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  private readonly lowercase = "abcdefghijklmnopqrstuvwxyz";
  private readonly numbers = "0123456789";
  private readonly symbols = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
  private readonly allSymbols = this.uppercase + this.lowercase + this.numbers + this.symbols;

  generatePasswords(length: number = 16, number: number = 1): string[] {
    const passwords = [];
    for (let i = 0; i < number; i++) passwords.push(this.generatePassword(length));
    return passwords;
  }

  generatePassword(length: number = 16): string {
    let password = "";
    for (let index = 0; index < length; index++) {
      const randomNumber = crypto.randomInt(this.allSymbols.length);
      password += this.allSymbols.charAt(randomNumber);
    }
    return password;
  }
}

const passwords = new PasswordGenerator().generatePasswords(16, 8);

fs.writeFile("password.txt", passwords.join("\n"), () => console.log("OK"));
