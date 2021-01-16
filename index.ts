import * as crypto from "crypto";
import * as fs from "fs";

export class PasswordGenerator {
  private readonly uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  private readonly lowercase = "abcdefghijklmnopqrstuvwxyz";
  private readonly numbers = "0123456789";
  private readonly symbols = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

  public generate(length = 16) {
    const allSymbols = this.uppercase + this.lowercase + this.numbers + this.symbols;
    let password = "";
    for (let index = 0; index < length; index++) {
      const randomNumber = crypto.randomInt(allSymbols.length);
      password += allSymbols.substring(randomNumber, randomNumber + 1);
    }
    return password;
  }
}

const password = new PasswordGenerator().generate();

fs.writeFile("password.txt", password, () => console.log("OK"));
