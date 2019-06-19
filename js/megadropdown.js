$(document).ready(function(){
    var sub = $('#sub')
    var activeRow
    var activeMenu

    var timer /*计时器*/

    var mouseInSub = false  /*标记当前鼠标是否在子菜单里面*/

    sub.on('mouseenter',function(e){
        mouseInSub = true
    }).on('mouseleave',function(e){
        mouseInSub = false
    })

    var mouseTrack = []

    var moveHandler = function(e){
        /*获取当前鼠标位置*/
        mouseTrack.push({
            x:e.pageX,
            y:e.pageY
        })
        /*只需要保存3个，多余的弹出*/
        if(mouseTrack.length > 3){
            mouseTrack.shift()
        }
    }

    $('#test')
        .on('mouseenter',function(e){
            sub.removeClass('none')

            $(document).bind('mousemove',moveHandler)
        })
        .on('mouseleave',function(e){
            sub.addClass('none')
            if(activeRow){
                activeRow.removeClass('active')
                activeRow = null
            }
            if(activeMenu){
                activeMenu.addClass('none')
                activeMenu = null
            }   
            
            /*解绑*/
            $(document).unbind('mousemove',moveHandler)
            
        })
        .on('mouseenter','li',function(e){
            if(!activeRow){
                activeRow = $(e.target).addClass('active')
                activeMenu = $('#' + activeRow.data('id'))
                activeMenu.removeClass('none')
                return
            }

            /*阻止频繁切换，只执行最后一个*/
            /*当事件触发时候计时器没有执行，就将其清除，当事件触发停止的时候，只执行最后一次*/
            if(timer){
                clearTimeout(timer)
            }

            var currMousePos = mouseTrack[mouseTrack.length - 1]
            var leftCorner = mouseTrack[mouseTrack.length - 2]

            var delay = needDelay(sub,leftCorner,currMousePos)

            if(delay){
                /*设置延迟 来优化*/
                /*在事件触发时设置缓冲器 如果这个计时器执行的时候当前鼠标在子菜单里面就不执行切换操作*/
                timer = setTimeout(function() {
                    if(mouseInSub){
                        return
                    }

                    activeRow.removeClass('active')
                    activeMenu.addClass('none')

                    activeRow = $(e.target)
                    activeRow.addClass('active')
                    activeMenu = $('#' + activeRow.data('id'))
                    activeMenu.removeClass('none')
                    timer = null
                }, 300)
            }else{
                var prevActiveRow = activeRow
                var prevActiveMenu = activeMenu

                activeRow = $(e.target)
                activeMenu = $('#'+activeRow.data('id'))

                prevActiveRow.removeClass('active')
                prevActiveMenu.addClass('none')

                activeRow.addClass('active')
                activeMenu.removeClass('none')
            }

        })
       
})