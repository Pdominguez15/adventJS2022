const packOfGifts = ["book", "doll", "ball"];
const reindeers = ["dasher", "dancer"];

function distributeGifts(packOfGifts, reindeers) {
  return Math.floor(
    (reindeers.join("").length * 2) / packOfGifts.join("").length
  );
}

console.log(distributeGifts(packOfGifts, reindeers));
