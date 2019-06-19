$(document).ready(function(){
    var activea
    var activeMenu 
    $('.news').on('mouseenter','a',function(e){
        activea=$(e.target)
        activeMenu=$('#'+activea.data('id'))
        activeMenu.addClass('activeNew')
        activeMenu.siblings().removeClass('activeNew')
    })
})