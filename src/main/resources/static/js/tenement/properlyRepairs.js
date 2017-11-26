$(document).ready(function () {
    $('.addRepairs').click(function () {
        $('.form').submit();
    })

    // $('.jt').click(function () {
    //     $('.form1').submit();
    // })
})

$(document).ready(function () {
    $('.info').each(function () {
        var status = $(this).children('b').children('a').text();
        if(status == '处理中'){
            $(this).children('b').children('a').css('background-color','#2DA7AE')
        }else  if(status == '已处理'){
            $(this).children('b').children('a').css('background-color','#5BAD25')
            $(this).children('input').css('background-color','#999')
            $(this).children('input').val('处理完毕')
            $(this).children('input').css('readonly','readonly')
        }
    })


    $('.but').click(function () {
        $(this).val('处理完毕');
        $(this).css('readonly','readonly');
        $(this).css('background-color','#999')

        var time = $(this).prev().prev().text();
        var status = "已处理";

        $.ajax({
            type: 'post',
            url: '/updateRepairs/'+time+"/"+status,
            dataType:'json',
            contentType: "application/json",
        })

        $(this).prev().children('a').text('已处理');
        $(this).prev().children('a').css('background-color','#5BAD25')
    })
})












































