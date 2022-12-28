function getOptimalPath(path) {
  return path.reduceRight((acc, curr) =>
    curr.map((value, index) => value + Math.min(acc[index], acc[index + 1]))
  )[0];
}

console.log(getOptimalPath([[0], [3, 4], [9, 8, 1], [1, 1, 1, 1]]));
