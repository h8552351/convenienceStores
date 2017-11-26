$(function () {
    var text ;
    var text1 ;
    $('.ua > .la').slideUp('normal');//通过使用滑动效果，隐藏被选元素，如果元素已显示出来的话

    var accordion_head = $('.ua > a'),
        accordion_body = $('.ua > .la'),
        body = $('.ua > .la > li > a');
    //accordion_head.first().addClass('active').next().slideDown('normal');这行代码设置页面打开时展开第一个菜单
    accordion_head.on('click', function (event) {
        // event.preventDefault();//preventDefault() 方法阻止元素发生默认的行为
        if ($(this).attr('class') != 'active') {
            accordion_body.slideUp('normal');
            text = $(this).text();
            //$(this).nextAll()为当前对象后面的所有兄弟，slideToggle('normal')展开
            $(this).nextAll().stop(true, true).slideToggle('normal');
            //获取.menu > li > a > 点击元素的同级的下个元素>停止所有在该元素上正在运行的动画>通过使用滑动效果在显示和隐藏状态之间切换元素

            accordion_head.removeClass('active');
            $(this).addClass('active');
        }
        else {
            accordion_body.slideUp('normal');
            $(this).removeClass('active');
        }
    });
    body.on('click',function (event) {
        $("#city").val("") ;
        if($(this).attr('class') != 'active'){
            text1 = $(this).text();
            text2 = text+"/"+text1;
            $("#city").val(text2) ;
            $(".container").css("display","block");
            $(".choice").css("display","none");
        }
    })
});

// function changeStyle(obj) {
//     $(".la a").each(function () {
//         if (obj == $(this).attr("index")) {
//             $(this).addClass('cur');
//         } else {
//             $(this).removeClass('cur');
//         }
//         return false;
//     });
// }