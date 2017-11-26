

$(document).ready(function () {


    if($('.status').val() == '已投票'){
        $('.but1').css('background-color','#d6d6d6')
    }else {
        $('.but1').click(function () {
            $('.content1').find('form').submit();
        })
    }

    plan()


    $('.jt').click(function () {
        if($('.dtory').val() == 0){
            window.history.back(-1);
        }else if($('.dtory').val() == 1){
            window.history.back(-1);
            window.history.back(-1);
            window.history.back(-1);
        }
    })

})
function plan() {
    $('.tp').each(function () {
        var man = $(this).children('b').children('.cont').text();//当前选项
        var sum = $('.sum').val();//总用户数量
//        percent = 1 除以总人数
        var percent= man/10;//应该如：man/sum
        var longWidth=200;
        var shortWidth=percent*longWidth;

        $(this).children('.long').children(".short").animate({width:shortWidth+"px"},'slow');
        $(this).children('b').children('.plan').text(Math.round(percent*100)+"%")
        $(this).children('b').children('.cont').text(man+"票")
    })
}



















