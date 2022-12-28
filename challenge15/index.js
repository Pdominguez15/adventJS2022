function decorateTree(base) {
  const decorator = {
    PP: "P",
    BR: "P",
    RB: "P",
    RR: "R",
    BP: "R",
    PB: "R",
    BB: "B",
    RP: "B",
    PR: "B",
  };
  const splitedBase = base.split(" ");

  const createRow = (row) =>
    new Array(row.at(-1).length - 1).fill("X").map(
      (_, index) =>
        decorator[
          row
            .at(-1)
            .slice(index, index + 2)
            .join("")
        ]
    );

  return new Array(splitedBase.length)
    .fill(splitedBase)
    .reduce((row, _) => row.concat([createRow(row)]), [splitedBase])
    .slice(0, splitedBase.length)
    .map((row) => row.join(" "))
    .reverse();
}

console.log(decorateTree("B P R P"));
