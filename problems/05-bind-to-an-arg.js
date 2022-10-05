function bindToAnArg(func, arg) {
  func = func.bind(arg, arg)
  return func
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = bindToAnArg;