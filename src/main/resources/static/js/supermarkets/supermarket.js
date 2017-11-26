/*<![CDATA[*/
var money = 0;
var count = 0;

$(document).ready(function () {
    // var sum1 = 0;
    parseInt(money)

    // 商品栏点击 + 操作
    $('.plus').click(function () {
        var  sum = $(this).prev().html();
        sum++;
        count++;
        var money1 = $(this).parent().prev().children('h1').children('span').html()*1;

        parseInt(money1)
        money = money1+money;
        parseInt(money)
        $('.foot_leftt').children('p').children('span').html(money.toFixed(1));
        $('.foot_leftb').children('.num').text(count)

        $('.bub').text(count);

        if(count > 0){
            $('.foot_leftt').show();
            $('.foot_leftb').show();
            $('.bub').show();
        }



        var name =$(this).parent().parent().parent().children('h1').html();
        var price = $(this).parent().prev().children('h1').children('span').html()*1;
        addProduct(name,price,sum);
        
        $(this).prev().html(sum);
        if(sum >= 1){
            $(this).prevAll().show();
        }
    })

    // 商品栏点击 - 操作
    $('.minus').click(function () {
        sum1 = $(this).next().text();
        var moneys = $(this).parent().prev().children('h1').children('span').html()*1;
        parseInt(moneys)
        sum1--;
        count--;
        money = money - moneys;
        parseInt(money)
        $('.foot_leftt').children('p').children('span').html(money.toFixed(1));
        $('.foot_leftb').children('.num').text(count)
        $('.bub').text(count);


        var name =$(this).parent().parent().parent().children('h1').text();
        var price = $(this).parent().prev().children('h1').children('span').html()*1;
        minusProduct(name,price,sum1);

        if(count < 1){
            $('.foot_leftt').hide();
            $('.foot_leftb').hide();
            $('.bub').hide();
        }

        $(this).next().text(sum1);
        if(sum1 < 1){
            $(this).hide()
            $(this).next().hide()
            $.ajax({
                type: 'post',
                url: '/deleteShoppingCarts/'+name,
                data: {},
                dataType:'json',
                contentType: "application/json",
            })
        }
    })

})



function addProduct(name,price,sum) {
    var boolean = true;
    function add() {
        $('#tab').find('tr').each(function () {
            if($(this).children('td').eq(0).children('input').val() == name){
                $(this).children('td').eq(2).children('div').children('input').val(sum);
                if($(this).children('td').eq(2).children('div').children('input').val() > 0){
                    $(this).children('td').eq(2).children('div').children('input').show()
                    $(this).children('td').eq(2).children('div').children('input').prev().show()
                }
                var pce = $(this).children('td').eq(1).children('div').children('input').val()*1
                parseFloat(price);
                $(this).children('td').eq(1).children('div').children('input').val(price.toFixed(1));
                boolean = false;
                return false;
            }
        })
    }
   add();

    if (boolean){
        $('#tab').append("<tr><td><input id='tradeName' type='text' name='tradeName' value='"+name+"'/></td><td><div class='infobl' id='tbl'><h1 style='width: 10%;color:black;font-size: 1.8em;'>￥</h1><input id='tradePrice' style='text-align: left' size='2' type='text' name='tradePrice' value='"+price.toFixed(1)+"'/></div></td><td><div class='infobr'><a href='###' class='ms'><img style='float: left' src='/img/减_看图王.jpg' height='50' width='50'/></a><input id='buyNum' type='text' name='buyNum' value='"+sum+"'/><a href='###' class='ps'><img src='/img/加.jpg' height='50' width='50'/></a></div></td></tr>");
    }



    var _list = [];
    var j=0;
    $('#tab').find('tr').each(function () {
        var list =[];
        var i=0;
        $(this).find('td').each(function () {
            list[i] = $(this).find('input').val();
            i++;
        })
        _list[j] = list;
        j++;
    })
    var modl = $('#modl').val();
    $.ajax({
        type: 'post',
        url: '/shoppingCart/'+modl,
        data: JSON.stringify(_list),
        dataType:'json',
        contentType: "application/json",
    })
}




function minusProduct(name,price,sum) {
    $('#tab').find('tr').each(function () {
        if($(this).children('td').eq(0).children('input').val() == name){
            if(sum < 1){
                $(this).remove();
                return false;
            }
            $(this).children('td').eq(2).children('div').children('input').val(sum);
            return;
        }
    })


    var _list = [];
    var j=0;
    $('#tab').find('tr').each(function () {
        var list =[];
        var i=0;
        $(this).find('td').each(function () {
            list[i] = $(this).find('input').val();
            i++;
        })
        _list[j] = list;
        j++;
    })
    var modl = $('#modl').val();
    $.ajax({
        type: 'post',
        url: '/shoppingCart/'+modl,
        data: JSON.stringify(_list),
        dataType:'json',
        contentType: "application/json",
    })

}



$(document).ready(function () {

    $('.gwCart').click(function () {
        $('.shopping_cart').show();
        $(this).text('结算订单')
    })

    $('#shopping').click(function (event) {
        if($(this).text() == '结算订单'){
            $('.goodsSum').val(count);
            $('.totalMoney').val(money.toFixed(1));
            $('.form_sc').attr('action','tallyOrder')
            $('.form_sc').submit()
            empty();
        }
        $('.shopping_cart').show();
        $(this).text('结算订单')


        // 购物车内点击 + 操作
        $('.ps').click(function (event) {
            var name1 = $(this).parent().parent().prev().prev().children('input').val();
            var price1 = $(this).parent().parent().prev().children('.infobl').children('input').val()*1;
            var num = $(this).prev().val();
            parseInt(num);
            num++;
            count++;
            money = money + price1;

            // $(this).parent().parent().prev().children('.infobl').children('h1').children('span').text((price*sum).toFixed(2))
            $('.foot_leftt').children('p').children('span').text(money.toFixed(1));
            $('.foot_leftb').children('.num').text(count)
            $('.bub').text(count);
            $(this).prev().val(num);

            $('.goods_ru').each(function () {
                var  names = $(this).children('li').children('div').children('h1').text();
                if (name1 == names){
                    $(this).children('li').children('div').children('div').children('.infobr').children('h1').val(num);
                    return;
                }
            })
            if(count >0){
                $('.bub').show();
                $('.foot_leftt').show();
                $('.foot_leftb').show();
            }

            if(num >= 1){
                $(this).prevAll().show();
            }

            var _list = [];
            var j=0;
            $('#tab').find('tr').each(function () {
                var list =[];
                var i=0;
                $(this).find('td').each(function () {
                    list[i] = $(this).find('input').val();
                    i++;
                })
                _list[j] = list;
                j++;
            })
            var modl = $('#modl').val();
            $.ajax({
                type: 'post',
                url: '/shoppingCart/'+modl,
                data: JSON.stringify(_list),
                dataType:'json',
                contentType: "application/json",
            })

        })




        // 购物车内点击 - 操作
        $('.ms').click(function () {
            var name = $(this).parent().parent().prev().prev().children('input').val();
            var price = $(this).parent().parent().prev().children('.infobl').children('input').val()*1;
            var num = $(this).next().val();
            parseInt(num);
            num--;
            count--;

            money = money - price;
            $('.foot_leftt').children('p').children('span').text(money.toFixed(1));
            $('.foot_leftb').children('.num').text(count)
            $('.bub').text(count);

            $('.goods_ru').each(function () {
                var  names = $(this).children('li').children('div').children('h1').text();
                if (name == names){
                    $(this).children('li').children('div').children('div').children('.infobr').children('h1').text(num);
                    if(num < 1){
                        $(this).children('li').children('div').children('div').children('.infobr').children('h1').hide();
                        $(this).children('li').children('div').children('div').children('.infobr').children('h1').prev().hide();
                    }
                    return;
                }
            })

            if(num < 1){
                $(this).parent().parent().parent().remove();

                $.ajax({
                    type: 'post',
                    url: '/deleteShoppingCarts/'+name,
                    data: {},
                    dataType:'json',
                    contentType: "application/json",
                })

            }
            if(count < 1){
                $('.foot_leftt').hide();
                $('.foot_leftb').hide();
                $('.bub').hide();
            }
            $('.foot_leftb').children('.num').text(count)
            $('.bub').text(count);
            $(this).next().val(num);



            var _list = [];
            var j=0;
            $('#tab').find('tr').each(function () {
                var list =[];
                var i=0;
                $(this).find('td').each(function () {
                    list[i] = $(this).find('input').val();
                    i++;
                })
                _list[j] = list;
                j++;
            })
            var modl = $('#modl').val();
            $.ajax({
                type: 'post',
                url: '/shoppingCart/'+modl,
                data: JSON.stringify(_list),
                dataType:'json',
                contentType: "application/json",
            })

        })



    })
    $('.ly').click(function () {
        $('.shopping_cart').hide();
        $('#shopping').text('前往购物车')
        $('.ps').unbind('click')
        $('.ms').unbind('click')
        // $('.plus').unbind('click')
        // $('.minus').unbind('click')
    })
})

$(document).ready(function () {
    $('.goods_ul').eq(0).each(function () {
        $(this).css('background-color','white');
        $(this).prevAll().css('background-color','#EAEAEA');
        $(this).nextAll().css('background-color','#EAEAEA');
        $(this).children('li').children('p').next('.goods_right').css('display','block')
        $(this).nextAll().children('li').children('p').next('.goods_right').hide()
        $(this).prevAll().children('li').children('p').next('.goods_right').hide()
    })

    $('.goods_ul').click(function () {
        $(this).nextAll().children('li').children('p').next('.goods_right').hide()
        $(this).prevAll().children('li').children('p').next('.goods_right').hide()
        if($(this).children('li').children('p').next('.goods_right').css('display') != 'block'){
            $(this).children('li').children('p').next('.goods_right').css('display','block')
        }

        $(this).css('background-color','white');
        $(this).prevAll().css('background-color','#EAEAEA');
        $(this).nextAll().css('background-color','#EAEAEA');
    })
})



$(document).ready(function () {
    $('#tab').find('tr').each(function () {
        if($(this).children('td').eq(0).children('input').val() == ''){
            $(this).hide();
        }
    })


    $('.evaluate_tu').each(function (e,l) {
        if($(this).attr('src') == ''){
            $(this).hide()
        }
    })
    $('.nav_goods').click(function () {
        $('.content_goods').show()
        $('.content_evaluate').hide()
        $(this).css('border-bottom','4px #D43F5F solid')
        $('.nav_comment').css('border','none')
    })
    $('.nav_comment').click(function () {
        $('.content_goods').hide()
        $('.content_evaluate').show()
        $(this).css('border-bottom','4px #D43F5F solid')
        $('.nav_goods').css('border','none')
    })
})

// 清空购物车
function empty() {
    var modl = $('#modl').val();
    $.ajax({
        type: 'post',
        url: '/deleteAll/'+modl,
        data:{},
        dataType:'json',
        contentType: "application/json",
    })

    $('#tab').find('tr').each(function () {
        $(this).remove();
    })

    $('.goods_ru').each(function () {
        var num = 0;
        $(this).children('li').children('div').children('div').children('.infobr').children('h1').text(num);
        $(this).children('li').children('div').children('div').children('.infobr').children('h1').hide();
        $(this).children('li').children('div').children('div').children('.infobr').children('h1').prev().hide();
    })

    money = 0;
    count = 0
    $('.foot_leftt').children('p').children('span').text(money.toFixed(1));
    $('.foot_leftb').children('.num').text(count)
    $('.bub').text(count);
    $('.foot_leftt').hide();
    $('.foot_leftb').hide();
    $('.bub').hide();
}
$(document).ready(function () {
    $('#deleteAll').click(function () {
        empty();
    })
})



// 给购物车刷新数据
$(document).ready(function () {
    $('#tab').find('tr').each(function () {
       var name = $(this).children('td').eq(0).find('input').val();
       var price = $(this).children('td').eq(1).find('input').val()*1;
       var num = $(this).children('td').eq(2).find('input').val()*1;

       money = money+price*num;
       count = count + num;

        $('.goods_ru').each(function () {
            var  names = $(this).children('li').children('div').children('h1').text();
            if (name == names){
                $(this).children('li').children('div').children('div').children('.infobr').children('h1').text(num);
                if(num >= 1){
                    $(this).children('li').children('div').children('div').children('.infobr').children('h1').show();
                    $(this).children('li').children('div').children('div').children('.infobr').children('h1').prev().show();
                }
                return;
            }
        })
    })

    $('.foot_leftt').children('p').children('span').text(money);
    $('.foot_leftb').children('.num').text(count)
    $('.bub').text(count);

    if(count >=1){
        $('.foot_leftt').show();
        $('.foot_leftb').show();
        $('.bub').show();
    }
})

$(document).ready(function () {
    $('.goods_ru').each(function () {
        var state = $(this).children('input').val();
        if(state == '下架'){
            $(this).remove();
        }
    })
})



/*]]>*/