// 入口函数
$(function() {
    // 切换登录和注册的盒子
    $('#quzhuce').on('click', function() {
        // 隐藏登录的盒子
        $('.login').hide();
        // 显示注册的盒子
        $('.reg').show();
    })
    $('#qudenglu').on('click', function() {
        // 显示登录的盒子
        $('.login').show();
        // 隐藏注册的盒子
        $('.reg').hide();
    });
});