function fixLetter(letter) {
  return letter
    .trim()
    .replace(/,/g, ", ")
    .replace(/(\s+)([?.,])/g, (match) => match.trim())
    .replace(/(\?)+/g, (match) => match[0])
    .replace(/\s+/g, " ")
    .replace(/(\.|\?|\!)\s*([a-z])/g, (match) => match.toUpperCase())
    .replace(/^[a-z]/, (match) => match.toUpperCase())
    .replace(/[a-z]$/, (match) => match + ".")
    .replace(/(santa claus)/gi, "Santa Claus");
}

console.log(
  fixLetter(
    ` hello,  how are you??     do you santa Claus know if santa claus exists?  i really,hope he . does!  bye  `
  )
);
