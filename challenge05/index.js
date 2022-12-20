const giftsCities = [12, 3, 11, 5, 7];
const maxGifts = 20;
const maxCities = 3;

function getMaxGifts(giftsCities, maxGifts, maxCities) {
  return Math.max(
    ...giftsCities
      .reduce((x, y) => x.concat(x.map((x) => [y].concat(x))), [[]])
      .filter((item) => item.length <= maxCities)
      .map((subset) => subset.reduce((a, b) => a + b, 0))
      .filter((item) => item <= maxGifts)
  );
}

console.log(getMaxGifts(giftsCities, maxGifts, maxCities));
