const boxes = [
  { l: 1, w: 1, h: 1 },
  { l: 2, w: 2, h: 2 },
  { l: 3, w: 3, h: 3 },
];

function fitsInOneBox(boxes) {
  return boxes
    .sort((a, b) => a.l - b.l)
    .every((currentBox, i, boxesSorted) => {
      if (i === 0) return true;
      return (
        currentBox.l > boxesSorted[i - 1].l &&
        currentBox.w > boxesSorted[i - 1].w &&
        currentBox.h > boxesSorted[i - 1].h
      );
    });
}
console.log(fitsInOneBox(boxes));
