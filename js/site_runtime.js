// 请将这里的日期修改为你博客的创建日期（年, 月-1, 日, 时, 分, 秒）
// 例如：如果你的博客在 2023年10月1日 08:00:00 上线，则写 (2023, 9, 1, 8, 0, 0)
// 注意：JavaScript中月份从0开始计数（0=一月，9=十月）
var create_time = new Date(2026, 1, 14, 0, 0, 0);

function updateRuntime() {
    var now = new Date();
    var diff = now.getTime() - create_time.getTime();

    // 计算天数、小时、分钟和秒
    var days = Math.floor(diff / (1000 * 60 * 60 * 24));
    var hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((diff % (1000 * 60)) / 1000);

    // 构建显示字符串，你可以自定义这里的格式
    var runtimeStr = "🏃 本站已运行: " + days + " 天 " + hours + " 时 " + minutes + " 分 " + seconds + " 秒";

    // 找到显示运行时间的元素并更新内容
    var runtimeElement = document.getElementById('site-runtime');
    if (runtimeElement) {
        runtimeElement.innerHTML = runtimeStr;
    }
}

// 页面加载后立即执行一次，然后每秒更新一次
window.onload = function() {
    updateRuntime();
    setInterval(updateRuntime, 1000);
};