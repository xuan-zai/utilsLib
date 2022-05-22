/**
 * 防抖函数
 * @param {*} interval 时间，在多少时间内触发
 * @param {*} callback 回调函数，要触发什么事件
 * @returns 
 */
function debounce(interval, callback) {
  let timeout;
  return function() {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      callback();
    }, interval);
  };
}
