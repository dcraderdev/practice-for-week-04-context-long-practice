function callOnTarget(func, obj1, obj2) {
  const answer = func.call(obj1,obj2);
  return answer
}


/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

module.exports = callOnTarget;