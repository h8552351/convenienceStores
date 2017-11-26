
$(document).ready(function () {
    $('.info').each(function () {
        var status = $(this).children('table').find('tr').eq(1).children('td').children('a').text();
        if(status == '充值中'){
            $(this).children('table').find('tr').eq(1).children('td').children('a').css('background-color','#2DA7AE')
        }else  if(status == '已充值'){
            $(this).children('table').find('tr').eq(1).children('td').children('a').css('background-color','#5BAD25')
            $(this).children('table').find('tr').eq(2).children('td').children('input').css('background-color','#999')
            $(this).children('table').find('tr').eq(2).children('td').children('input').val('充值完毕')
            $(this).children('table').find('tr').eq(2).children('td').children('input').css('readonly','readonly')
        }
    })


    $('.but').click(function () {
        $(this).val('充值完毕');
        $(this).css('readonly','readonly');
        $(this).css('background-color','#999')

        var time = $(this).parent().parent().prev().prev().children('td').children('p').text();
        var status = "已充值";


        $.ajax({
            type: 'post',
            url: '/updatePayment/'+time+"/"+status,
            dataType:'json',
            contentType: "application/json",
        })

        $(this).parent().parent().prev().children('.td').children('a').text('已充值');
        $(this).parent().parent().prev().children('.td').children('a').css('background-color','#5BAD25')
    })
})












































