export function vibration() {
  if (navigator.vibrate) {
    console.log("dsds>>");

    // 支持
    navigator.vibrate([50]);
  }
}
