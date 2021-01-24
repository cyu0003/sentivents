export const interpolateColors = (c1, c2, ratio, floor=0) => {
  c1 = c1.substring(1)
  c2 = c2.substring(1)
  // min ratio from react-native-chart-kit library
  if (ratio === floor) {
    return "#505066";
  }
  // normalize ratio, since min is 0.2 from react-native-chart-kit
  ratio = (ratio - 0.2) / 0.8;

  const hex = function (x) {
    x = x.toString(16);
    return x.length == 1 ? "0" + x : x;
  };

  const r = Math.ceil(
    parseInt(c1.substring(0, 2), 16) * ratio +
      parseInt(c2.substring(0, 2), 16) * (1 - ratio)
  );
  const g = Math.ceil(
    parseInt(c1.substring(2, 4), 16) * ratio +
      parseInt(c2.substring(2, 4), 16) * (1 - ratio)
  );
  const b = Math.ceil(
    parseInt(c1.substring(4, 6), 16) * ratio +
      parseInt(c2.substring(4, 6), 16) * (1 - ratio)
  );
  return `#${hex(r)}${hex(g)}${hex(b)}FF`;
};