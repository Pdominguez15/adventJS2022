function getCompleted(part, total) {
  const formatTime = (time) => {
    const [h, m, s] = time.split(":");
    return Number(h) * 3600 + Number(m) * 60 + Number(s);
  };

  const getMaximoComunDivisor = (a, b) => {
    let temporal; //Para no perder b
    while (b !== 0) {
      temporal = b;
      b = a % b;
      a = temporal;
    }
    return a;
  };

  const first = formatTime(part);
  const second = formatTime(total);
  const maximoComunDivisor = getMaximoComunDivisor(first, second);

  return `${first / maximoComunDivisor}/${second / maximoComunDivisor}`;
}

console.log(getCompleted("00:10:00", "01:00:00"));
