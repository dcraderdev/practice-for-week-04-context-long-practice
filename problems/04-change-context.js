function changeContext(func, obj) {


  let instance = func.bind(obj)
  return instance()




}

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

module.exports = changeContext;