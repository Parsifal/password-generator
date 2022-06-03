import { randomInt } from "crypto";

export const secret = (length = 64) => {
  const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowerCase = "abcdefghijklmnopqrstuvwxyz";
  const digits = "0123456789";
  const minus = "-";
  const underLine = "_";
  const special = "!\"#$%&'*+,./:;=?@\\^`|~";
  const brackets = "[]{}()<>";
  const alphabet =
    upperCase + lowerCase + digits + minus + underLine + special + brackets;
  let secret = "";
  for (let index = 0; index < length; index++)
    secret += alphabet.charAt(randomInt(alphabet.length));
  return secret;
};
