const distance = 30;
const sleighs = [
  { name: "Dasher", consumption: 0.3 },
  { name: "Dancer", consumption: 0.5 },
  { name: "Rudolph", consumption: 0.7 },
  { name: "Midu", consumption: 1 },
];

function selectSleigh(distance, sleighs) {
  const bestSligh = sleighs
    .filter((sleigh) => distance * sleigh.consumption <= 20)
    .at(-1);
  return bestSligh ? bestSligh.name : null;
}

console.log(selectSleigh(distance, sleighs));
