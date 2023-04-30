/**
 * 生成一个用不重复的ID
 * @param { Number } randomLength
 */
function getUuiD(randomLength){
  return Number(Math.random().toString().substr(2,randomLength) + Date.now()).toString(36)
}

module.exports = getUuiD
