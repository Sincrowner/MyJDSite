$(document).ready(function() {

    var $box = $('.grid-col2-t');
    var $arrowLeft = $('.arrow .arrow-l');
    var $arrowRight = $('.arrow .arrow-r');
    var $uLi = $('.grid-col2-t>ul>li');
    var $ol = $('.grid-col2-t>ol');
    
    var imgNum = $('.grid-col2-t>ul>li').length;    // 图片的数量
    var index = 0;  // 计数器
    
    
    // 小圆点
    var num = 0;

    // 根据图片的数量动态生成小圆点
    while(num < imgNum) {
        $ol.append("<li></li>");
        num++;
    }

    var $oLi = $('.grid-col2-t>ol>li');
    $oLi.first().addClass('now');  // 默认给第一个小圆点添加now类
    
    // 鼠标经过小圆点时，显示出对应的图片
    $oLi.mouseover(function() {
        $(this).addClass('now').siblings().removeClass('now');/*为当前元素增加now类，同时它的兄弟元素去电now类*/
        index = $(this).index();/*获取当前元素的下标位置*/
        $uLi.eq(index).fadeIn().siblings().fadeOut();/*eq() 选择器选取带有指定 index 值的元素，当前元素渐入，兄弟元素淡出*/
        /*siblings() // 获取所有兄弟节点*/
    });
    
    
    // 1、点击右箭头：让当前图片的下一张图片淡入，其他图片淡出。
    $arrowRight.click(function() {
        index++;
        if(index>imgNum-1) {
            index = 0;
        }
        
        // 点击右箭头修改呈现的图片时，对应的小圆点也跟着修改now类
        $uLi.eq(index).fadeIn().siblings().fadeOut();
        $oLi.eq(index).addClass('now').siblings().removeClass('now');
    });
    
    
    // 2、单击左箭头：让当前图片的上一张图片淡入，其他图片淡出。
    $arrowLeft.click(function() {
        index--;
        if(index<0) {
            index = imgNum-1;
        }
        
        // 点击右箭头修改呈现的图片时，对应的小圆点也跟着修改now类
        $uLi.eq(index).fadeIn().siblings().fadeOut();
        $oLi.eq(index).addClass('now').siblings().removeClass('now');
    });
    
    
    // 自动轮播
    var timeId = setInterval(function() {
        $arrowRight.click();
    }, 2000);    // 2秒自动切换
    
    // 鼠标放在banner上，停止自动播放
    $box.hover(function() {
            clearInterval(timeId);
        }, function(){
        timeId = setInterval(function() {
            $arrowRight.click();
        }, 2000);    // 2秒自动切换
    });
});