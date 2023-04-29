// **防抖函数概念：**
// > 该函数只能在指定延时结束后才能调用，如果在过程中重复调用，则重新计时。

// **应用场景:**
// 1. 用户在搜索框输入时的数据查询，指定`n` 毫秒 延时，只能在输入完后过了`n`毫秒后才会去搜索，中间的持续输入则会重新计时
// 2. 在监听window.onresize事件，并触发某些操作时。
function debounce(fn, wait) {
  let timer;
  return function () {
    let _this = this;
    if (timer) clearTimeout(timer);

    timer = setTimeout(() => {
      fn.apply(_this, arguments);
    }, wait);
  };
}

// **函数节流:**
// > 在规定时间内，函数只能被调用一次。如果单位时间内多次触发，则忽略

// **应用场景：**
// 1. 点击搜索按钮时的防重复。
// 2. 监听scroll事件时

function throttle(fn, wait) {
  var last = 0;
  return function () {
    let now = Date.now();
    // 超过约定时间，可以再次调用
    if (now - last >= wait) {
      fn.apply(this, arguments);
      last = Date.now();
    }
  };
}
