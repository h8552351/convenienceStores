



$(document).ready(function () {
    var bs = 0
    $('.info').find('li').click(function () {
        bs++;
        $(this).children('.content1').css('display','block');
        $('.theme').text("我的装修进度")
    })


    $('.jt').click(function () {
        if($('.content1').css('display') == 'block'){
            $('.content1').css('display','none');
        }else {
            if(bs == 0){
                window.history.back(-1);
            }else{
                window.history.back(-1);
                window.history.back(-1);
            }

        }
    })
})

$(document).ready(function () {
    $('.tp').each(function () {
        var img = $(this).children('img').attr('src')
        if(img == ""){
            $(this).remove();
        }
    })
})

$(document).ready(function () {
    var content = $('.conts').val();

    if(content != undefined){
        var conts = content.split(" ");
        for(var  i=0;i<conts.length;i++){
            $('.cont').append("<p>"+conts[i]+"</p>")
        }
    }

})

$(document).ready(function () {

    var man = $('.progress').val();
//        percent = 1 除以总人数
    var percent= man/100;
    var longWidth=300;
    var shortWidth=percent*longWidth;

    $(".short").animate({width:shortWidth+"px"},'slow');
    $('.plan').text(Math.round(percent*100)+"%")
})



























