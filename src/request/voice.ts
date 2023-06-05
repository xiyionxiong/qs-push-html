export default {
  1: "V00002_EN_N_1",
  2: "V00002_EN_N_2",
  3: "V00002_EN_N_3",
  4: "V00002_EN_N_4",
  5: "V00002_EN_N_5",
  6: "V00002_EN_N_6",
  7: "V00002_EN_N_7",
  8: "V00002_EN_N_8",
  9: "V00002_EN_N_9",
  10: "V00002_EN_N_10",
  11: "V00002_EN_N_11",
  12: "V00002_EN_N_12",
  13: "V00002_EN_N_13",
  14: "V00002_EN_N_14",
  15: "V00002_EN_N_15",
  16: "V00002_EN_N_16",
  17: "V00002_EN_N_17",
  18: "V00002_EN_N_18",
  19: "V00002_EN_N_19",
  20: "V00002_EN_N_20",
  30: "V00002_EN_N_30",
  40: "V00002_EN_N_40",
  50: "V00002_EN_N_50",
  60: "V00002_EN_N_60",
  70: "V00002_EN_N_70",
  80: "V00002_EN_N_80",
  90: "V00002_EN_N_90",
  100: "V00002_EN_N_100",
  1000: "V00002_EN_N_1000",
  ".": "V00002_EN_N_DOT",
};

export function parse(amount: number) {
  if (amount > 999999.99) return [];

  let th = amount
    .toLocaleString("en-us", {
      maximumFractionDigits: 2, // 小数位最大保留位数：0-20
      minimumFractionDigits: 2, // 小数位最小保留位数：0-20
    })
    .split(",");

  const arr: string[] = [];
  if (th.length === 1) {
    arr.push(...parseBSF(Number(th[0])));
  } else {
    arr.push(...parseBSF(Number(th[0])));
    arr.push(`1000`);
    arr.push(...parseBSF(Number(th[1])));
  }

  console.log("arr>>", arr);

  return arr.map((i) => {
    return {
      code: `V00002_EN_N_${i}`,
      voiceText: i,
      type: "code",
    };
  });
}

function parseBSF(amount: number) {
  let arr: string[] = [];
  let b = Math.floor(amount / 100);
  if (b > 0) {
    arr.push(`${b}`);
    arr.push("100");
  }

  var s = Math.floor(amount % 100);
  if (s >= 10 && s < 21) arr.push(`${s}`.padEnd(2, "0"));
  else {
    if (s >= 21) {
      arr.push(`${Math.floor(s / 10)}`.padEnd(2, "0"));
    }
    arr.push(`${Math.floor((amount % 100) % 10)}`);
  }
  if (amount.toString().includes(".")) {
    arr.push("DOT");
    var str = amount.toString().split(".");

    for (let char of str[1]) {
      arr.push(char);
    }
  }

  return arr;
}
