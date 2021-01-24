import emojiList from "../../emojiList";

export const interpolateColors = (c1, c2, ratio, floor = 0) => {
  c1 = c1.substring(1);
  c2 = c2.substring(1);
  // min ratio from react-native-chart-kit library
  if (ratio === floor) {
    return "#3a3a4a";
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
export const getEmojiValues = (emoji) => {
  const emojiObj = emojiList.find((item) => item.emoji === emoji);
  if (emojiObj === undefined) {
    return [0, 0, 0];
  }
  return [emojiObj.positive, emojiObj.neutral, emojiObj.negative];
};
export const getMoodRatio = (emojies, confidences) => {
  let totalConf = 0;
  confidences.forEach((c) => (totalConf += c));

  let totalSentiment = 0;
  let neg = 0;
  let pos = 0;

  for (const emoji of emojies) {
    const emojiObj = emojiList.find((item) => item.emoji === emoji);
    if (emojiObj === undefined) {
      continue;
    }
    totalSentiment += emojiObj.negative;
    totalSentiment += emojiObj.neutral;
    totalSentiment += emojiObj.positive;
    neg += emojiObj.negative;
    // data.data[1] += emojiObj.neutral;
    pos += emojiObj.positive;
  }
  pos /= totalSentiment;
  neg /= totalSentiment;
  // data.data[2] /= totalSentiment;

  const moodRatio = 0.5 + pos - neg;
  return moodRatio;
};
