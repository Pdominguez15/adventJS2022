const heights = [1, 3, 5, 7, 8, 5, 4, 3, 2];

function checkJump(heights) {
  const indexMax = heights.indexOf(Math.max(...heights));
  const left = heights.slice(0, indexMax);
  const right = heights.slice(indexMax + 1);
  const checkLeft = left.slice(1).every((value, index) => value >= left[index]);
  const checkRight = right
    .slice(1)
    .every((value, index) => value <= right[index]);
  return checkLeft && left.length > 0 && checkRight && right.length > 0;
}

console.log(checkJump(heights));
