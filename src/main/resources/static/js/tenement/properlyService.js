


$(document).ready(function () {
    $('.in-box').click(function () {
        var name  = $(this).children('.rt').children('h1').text();
        if(name == '物业报修'){
            $('.form').attr('action','properlyRepairs');
            $('.form').submit();
        }else if(name == '小区公告'){
            $('.form').attr('action','communityBulletin');
            $('.form').submit();
        }else if(name == '小区投票'){
            $('.form').attr('action','vote');
            $('.form').submit();
        }else if(name == '物业工作展示'){
            $('.form').attr('action','workDisplay');
            $('.form').submit();
        }else if(name == '生活缴费'){
            $('.form').attr('action','livingPayment');
            $('.form').submit();
        }
    })
})








































