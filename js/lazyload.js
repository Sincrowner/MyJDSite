$(window).on('load',function(){
    var dataInfo={"data":[{
            "src":"0.png",
            "info":"索尼（SONY）WH-1000XM3 高解析度无线蓝牙降噪 头戴式耳机（触控面板 智能降噪 长久续航）黑色",
            "price":"1990.00"
        },{
            "src":"4.png",
            "info":"Bose 遮噪睡眠耳塞 noise masking sleepbuds 被动降噪 真无线耳塞",
            "price":"1699.00"
        },{
            "src":"7.png",
            "info":"索尼（SONY）WH-H900N 蓝牙无线耳机 降噪耳机 头戴式 Hi-Res游戏耳机 手机耳机 月光蓝",
            "price":"1190.00"
        },{
            "src":"8.png",
            "info":"Apple 2019新品 Macbook Pro 15.4【带触控栏】全新九代六核i7 16G 256G 深空灰 苹果笔记本电脑 轻薄本 MV902CH/A",
            "price":"16499.00"
        },{
            "src":"9.png",
            "info":"Bose SoundSport Free 真无线蓝牙耳机--黑色 运动耳机 防掉落耳塞",
            "price":"1379.00"
        }
    ]}
    var num=0;
    $(window).on('scroll',function () {
        $('#goingbutton').click(function(){
            num=0;
            /*可在此处更改服务传过来的数据*/
            /*下方加载模式可修改，加入判断语句可实现自营和领券的加载*/
        })
        if(check&&num<10){
            $.each(dataInfo.data,function(key,value){
                var oa=$('<a>').attr('href','#').appendTo($('#goods'));
                var odiv=$('<div>').addClass('list').appendTo($(oa));
                var oimg=$('<img>').attr('src','images/goods/'+$(value).attr('src')).appendTo($(odiv));
                var op=$('<p>').addClass('info').appendTo($(odiv));
                var oi=$('<i>').addClass('info-it').appendTo($(op));
                $(oi).append('自营');
                $(op).append($(value).attr('info'));
                var odiv2=$('<div>').addClass('price').appendTo($(odiv));
                var oi2=$('<i>').appendTo($(odiv2));
                $(oi2).append('￥');
                var ospan=$('<span>').appendTo(odiv2);
                $(ospan).append($(value).attr('price'));
            })
            num++;
        }
    })
})


function check(){ 
    var $lasta = $('#goods>a').last();
    var lastaDis = $lasta.offset().top+Math.floor($lasta.outerHeight()/2);
    var scrollTop = $(window).scrollTop;
    var documentH = $(window).height();
    return (lastaDis<scrollTop+documentH)?true:false;
}
