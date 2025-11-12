// 清晰的额外功能 - 1.js
// 页面历史记录管理
(function() {
    // 防止浏览器后退
    history.pushState(null, null, document.URL);
    window.addEventListener('popstate', function() {
        history.pushState(null, null, document.URL);
    });
    
    // 微信浏览器检测
    function isWeixinBrowser() {
        return /micromessenger/i.test(navigator.userAgent);
    }
    
    // 如果是微信浏览器，添加特殊处理
    if (isWeixinBrowser()) {
        // 微信浏览器特殊逻辑
        console.log('微信浏览器环境');
    }
})();