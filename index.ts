import { randomInt } from "crypto";
import { writeFile } from "fs";

export class PasswordGenerator {
  private readonly upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  private readonly lowerCase = "abcdefghijklmnopqrstuvwxyz";
  private readonly digits = "0123456789";
  private readonly minus = "-";
  private readonly underline = "_";
  private readonly special = "!\"#$&&'*+,./:;=?@\\^`|~";
  private readonly brackets = "[]{}()<>";
  private readonly all =
    this.upperCase + this.lowerCase + this.digits + this.minus + this.underline + this.special + this.brackets;

  generatePasswords(length = 16, number = 1) {
    const passwords = [];
    for (let i = 0; i < number; i++) passwords.push(this.generatePassword(length));
    return passwords;
  }

  generatePassword(length = 16) {
    let password = "";
    for (let index = 0; index < length; index++) {
      const randomNumber = randomInt(this.all.length);
      password += this.all.charAt(randomNumber);
    }
    return password;
  }
}

const passwords = new PasswordGenerator().generatePasswords(16, 8);

writeFile("password.txt", passwords.join("\n"), () => console.log("OK"));