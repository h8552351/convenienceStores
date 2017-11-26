
var money = 0;
var count = 0;
$(document).ready(function () {

    $('.plus').click(function () {
        var price = $(this).parent().parent().prev().children('input').val()*1;
        var num = $(this).prev().val()*1;
        num++;
        count = count + num;
        money = money + price;
        $(this).prev().val(num);
        $('.sum').val(money.toFixed(1));
    })

    $('.minus').click(function () {
        var price = $(this).parent().parent().prev().children('input').val()*1;
        var num = $(this).next().val()*1;
        num--;

        if(num >= 1){
            count = count -num;
            money = money - price;
            $(this).next().val(num);
            $('.sum').val(money.toFixed(1));
        }
    })


    $('#tab').find('tr').each(function () {
        var  price = $(this).children('td').eq(1).children('input').val()*1;
        var num = $(this).children('td').eq(2).children('div').children('input').val()*1;
        money = money + price*num;
        count = count + num;
    })
    $('.sum').val(money.toFixed(1));


    var time = $('.time').val();
    var h = time.substring(11,13)*1;//订单小时
    var m = time.substring(14,16)*1;//订单分钟
    var time1 = time.substring(11,16);
    //当日0点到订单时间的总分钟数
    var ym =1440 - (h*60+m);//订单时间到当日0点的剩余分钟数

    for(var sm = h*60+m+30;sm<1440;sm +=30){
        m +=30;
        if(m>=60){
            h++;
            m-=60;
            if(m<10){
                if(h<10){
                    var times = time1+"—0"+h.toString()+":0"+m.toString();
                    $('.select').append("<option>"+times+"</option>");
                    time1 = "0"+h.toString()+":0"+m.toString();
                }else {
                    var times = time1+"—"+h.toString()+":0"+m.toString();
                    $('.select').append("<option>"+times+"</option>");
                    time1 = h.toString()+":0"+m.toString();
                }

            }else{
                if(h<10){
                    var times = time1+"—0"+h.toString()+":"+m.toString();
                    $('.select').append("<option>"+times+"</option>");
                    time1 = "0"+h.toString()+":"+m.toString();
                }else {
                    var times = time1+"—"+h.toString()+":"+m.toString();
                    $('.select').append("<option>"+times+"</option>");
                    time1 = h.toString()+":"+m.toString();
                }
            }

        }else{
            if(h<10){
                var times = time1+"—0"+h.toString()+":"+m.toString();
                $('.select').append("<option>"+times+"</option>");
                time1 = "0"+h.toString()+":"+m.toString();
            }else{
                var times = time1+"—"+h.toString()+":"+m.toString();
                $('.select').append("<option>"+times+"</option>");
                time1 = h.toString()+":"+m.toString();
            }
        }
    }
})

$(document).ready(function () {
    var time = $(this).find('option:selected').text();
    $('.shippingMethod').val(time);
    $('.select').change(function () {
        var time = $(this).find('option:selected').text();
        $('.shippingMethod').val(time);
    })


    $('.but').click(function () {
        $('.goodsSum').val(count);
        $('.form').submit();
    })

})

















