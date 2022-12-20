function checkPart(part) {
  return [...part].some((value, index, array) => {
    const possibleCharacters = array.filter(
      (character, index2) => index !== index2
    );
    return (
      possibleCharacters.join("") === possibleCharacters.reverse().join("")
    );
  });
}

console.log(checkPart("miidim"));
