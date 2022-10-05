function boundFuncTimer(obj, func, delay) {


  
  return setTimeout(()=>{
    let instance = func.bind(obj)
    return instance()
  }, delay)
}

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

module.exports = boundFuncTimer;