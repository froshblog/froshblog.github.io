// 请将这里的日期修改为你博客的创建日期（年, 月-1, 日, 时, 分, 秒）
// 例如：如果你的博客在 2023年10月1日 08:00:00 上线，则写 (2023, 9, 1, 8, 0, 0)
// 注意：JavaScript中月份从0开始计数（0=一月，9=十月）
// runtime.js
(function() {
    // 设置你的博客创建时间
    // 格式: new Date(年, 月-1, 日, 时, 分, 秒)
    var startDate = new Date(2026, 0, 14, 0, 0, 0); // 修改为你的日期
    
    function updateRuntime() {
        var now = new Date();
        var diff = now.getTime() - startDate.getTime();
        
        // 如果时间还没到（未来时间），则显示倒计时
        if (diff < 0) {
            diff = Math.abs(diff);
            var days = Math.floor(diff / (1000 * 60 * 60 * 24));
            var hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((diff % (1000 * 60)) / 1000);
            
            document.getElementById('site-runtime').innerHTML = 
                "⏳ 距离上线还有: " + days + "天 " + hours + "时 " + minutes + "分 " + seconds + "秒";
            return;
        }
        
        // 计算运行时间
        var years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
        var days = Math.floor((diff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24));
        var hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((diff % (1000 * 60)) / 1000);
        
        // 格式化显示
        var runtimeStr = "";
        if (years > 0) {
            runtimeStr = "⏱️ 本站已运行: " + years + "年 " + days + "天 " + hours + "时 " + minutes + "分 " + seconds + "秒";
        } else if (days > 0) {
            runtimeStr = "⏱️ 本站已运行: " + days + "天 " + hours + "时 " + minutes + "分 " + seconds + "秒";
        } else {
            runtimeStr = "⏱️ 本站已运行: " + hours + "时 " + minutes + "分 " + seconds + "秒";
        }
        
        document.getElementById('site-runtime').innerHTML = runtimeStr;
    }
    
    // 页面加载后执行
    document.addEventListener('DOMContentLoaded', function() {
        updateRuntime();
        setInterval(updateRuntime, 1000);
    });
})();