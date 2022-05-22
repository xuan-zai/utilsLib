### 防抖函数
> 功能：当一个功能，需要在极短的时间内进行高频率的触发时，我们就需要使用 `防抖` 函数进行限制。

```js
function debounce(interval) {
    let timeout;
    return function () {
        clearTimeout(timeout); // 清除定时器
        // 当在 interval 毫秒内，未进行触发，则立即执行该定时器内的函数
        timeout = setTimeout(() => {
            console.log('123')
        }, interval)
    }
}
```