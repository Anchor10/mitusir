$(function(){
    var oHeight = $(window).height();
    console.log(oHeight);
    $("body").css("min-height",oHeight);
    $("#app").css("min-height",oHeight);
})