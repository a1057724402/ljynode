/**
 * Created by Administrator on 15-4-24.
 */


$(function(){
    $("#about-subNav ul li").click(showPart)
})
function showPart(event){
    $("#about-subNav ul li").removeClass('point');
    var targetId="#"+event.target.parentNode.className;
    $(event.target).addClass('point')
    $("html,body").animate({scrollTop:$(targetId).offset().top-230},1000);
}
