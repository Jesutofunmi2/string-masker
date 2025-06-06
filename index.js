/**
 * Masks a portion of the string with a specified character.
 *
 * @param {string} str - The input string to mask.
 * @param {string} maskChar - The character to use for masking.
 * @param {number} unmaskedLength - The number of characters to leave unmasked.
 * @param {boolean} maskFromStart - If true, mask from start; otherwise, mask from end.
 * @returns {string} - The masked string.
 */
export const mask = (str, maskChar = '*', unmaskedLength = 4, maskFromStart = true) => {
  const maskStart = maskFromStart ? 0 : Math.max(0, str.length - unmaskedLength);
  const maskEnd = maskFromStart ? Math.max(0, str.length - unmaskedLength) : str.length;

  return str
    .split("")
    .map((char, index) => {
      if (index >= maskStart && index < maskEnd) {
        return maskChar;
      } else {
        return char;
      }
    })
    .join("");
};
