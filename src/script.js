let width = document.querySelector("#width"), wrap_width = document.querySelector("#wrap-width");
let copyPast = (clickOn, coppyText) => {
  if (width.value && wrap_width.value) {
    let res, text;
    (res = (+width.value / +(wrap_width.value / 100))) % 1 < 0.05 ? (res = parseInt(res)) : res.toFixed(2);
    !coppyText ? (text = `${res}vw`) : (text = `clamp(${parseInt(width.value / 2)}px, ${res}vw, ${width.value}px)`);
    navigator.clipboard.writeText(text).then(() => {
      navigator.clipboard.readText().then((text) => {
        document.querySelector(clickOn).innerHTML = text;
      });
    });
  }
};  