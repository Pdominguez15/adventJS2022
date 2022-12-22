const leds = [1, 0, 0, 1, 0, 0];

function countTime(leds) {
  let offGroup = leds.join("").split("1");
  offGroup[0] += offGroup.at(-1);
  return Math.max(...offGroup.map((led) => led.length)) * 7;
}

console.log(countTime(leds));
