
//
Function.prototype.myCall = function(context, ...args) {
  context = context || window;

  context.fn = this;

  let result = context.fn(...args)
  delete context.fn
  return result;
}

Function.prototype.myApply = function(context, args = []) {
  context = context || window;
  context.fn = this;

  let result = context.fn(...args)
  delete context.fn;
  return result
}


Function.prototype.myBind = function(context, ...oArgs) {
  let _this = this;
  return function(...iArgs) {
    let args = oArgs.concat(iArgs);
    return _this.myApply(context, args)
  }
}


Function.prototype.myBind = function(context = window, ...oArgs) {
  let _this = this;
  return function(...iArgs) {
    const args = oArgs.concat(iArgs);

    const result = _this.apply(context, args)

    return result
  }

}
