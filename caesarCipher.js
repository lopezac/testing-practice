const caesarCipher = (() => {
  const encrypt = (str, key) => {
    if (key <= 0 || key > 26) return str;

    let encryptedStr = "";
    for (let char of str.split("")) {
      if (isALetter(char)) char = encryptLetter(char, key);
      encryptedStr += char;
    }
    return encryptedStr;
  };

  const encryptLetter = (letter, key) => {
    const charCode = letter.toLowerCase().charCodeAt();
    let encryptedCode = charCode + key;

    if (encryptedCode > 122) encryptedCode = 96 + (encryptedCode - 122);
    const encryptedLetter = String.fromCharCode(encryptedCode);

    if (isUpperCase(letter)) return encryptedLetter.toUpperCase();
    else return encryptedLetter;
  };

  const isUpperCase = (letter) => {
    const charCode = letter.charCodeAt();
    return charCode >= 65 && charCode <= 90;
  };

  const isALetter = (char) => {
    const charCode = char.charCodeAt();
    return isUpperCase(char) || (charCode >= 97 && charCode <= 122);
  };

  return { encrypt, encryptLetter };
})();

module.exports = caesarCipher;
console.log(caesarCipher.encrypt("abc", 2));
