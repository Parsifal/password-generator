import { randomInt } from "crypto";

export const secret = (length = 64) => {
  const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowerCase = "abcdefghijklmnopqrstuvwxyz";
  const digits = "0123456789";
  const minus = "-";
  const underline = "_";
  const special = "!\"#$%&'*+,./:;=?@\\^`|~";
  const brackets = "[]{}()<>";
  const all = upperCase + lowerCase + digits + minus + underline + special + brackets;
  let secret = "";
  for (let size = 0; size < length; size++) secret += all.charAt(randomInt(all.length));
  return secret;
};
