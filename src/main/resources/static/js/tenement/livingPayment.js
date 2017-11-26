

$(document).ready(function () {
    $('.tab1').find('td').click(function () {
        if($(this).children('a').text() == '其他'){
            $(this).css('border-color','blue');
            $(this).parent().prev().children('td').css('border-color','red');
        }else if($(this).parent().attr('class') != 'tr'){
            $(this).css('border-color','blue');
            $(this).nextAll().css('border-color','red');
            $(this).prevAll().css('border-color','red');
            $(this).parent().next().children('td').css('border-color','red');
        }
    })
    $('.tab2').find('td').click(function () {
        $(this).css('border-color','blue');
        $(this).nextAll().css('border-color','red');
        $(this).prevAll().css('border-color','red');
    })
})

$(document).ready(function () {
   $('.but').click(function () {
       var  money;
       $('.tab1').find('td').each(function () {
           if($(this).attr('style') == 'border-color: blue;'){
               if($(this).children('a').text() == '其他'){
                   money = $('.my').val();
               }else{
                   money = $(this).children('a').text();
               }
           }
       })
       var type;
       $('.tab2').find('tr').eq(0).children('td').each(function () {
           alert('asdasd')
           if($(this).attr('style') == 'border-color: blue;'){
               type = $(this).children('a').children('h3').text();
           }
       })
        alert("充值成功！")
        var list = [];
       list[0] = type;
       list[1] = money;
       alert(type)
       alert(money)
        var phone = $('.phone').val();
       $.ajax({
           type: 'post',
           url: '/rechargePayment/'+phone,
           data: JSON.stringify(list),
           dataType:'json',
           contentType: "application/json",
       })

   })
})

$(document).ready(function () {

    $('.tab1').find('td').click(function () {
        if($(this).children('a').text() == '其他'){
            $(this).parent().next().show();
        }else if($(this).parent().attr('class') != 'tr'){
            $('.tab1').find('tr').eq(2).hide();
        }
    })


    $('.rechargeHistory').click(function () {
        $('.form').submit();
    })
})



























