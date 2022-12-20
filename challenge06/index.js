function createCube(size) {
  let top = [];
  let bottom = [];
  for (let i = 1; i <= size; i++) {
    top.push(" ".repeat(size - i) + "/\\".repeat(i) + "_\\".repeat(size));
    bottom.push(" ".repeat(size - i) + "\\/".repeat(i) + "_/".repeat(size));
  }
  return top.concat(bottom.reverse()).join("\n");
}
