const gifts = ["cat", "game", "socks"];

function wrapping(gifts) {
  return gifts.map(
    (gift) =>
      "*".repeat(gift.length + 2) +
      "\n*" +
      gift +
      "*\n" +
      "*".repeat(gift.length + 2)
  );
}

console.log(wrapping(gifts));
