


$(document).ready(function () {
    $('.ord').each(function () {
        var stt = $(this).children('.ord_top').children('.ord_top_right').children('.top').children('a').text();
        if(stt == '未支付'){
            $(this).children('.ord_top').children('.ord_top_right').children('.top').children('a').css('background-color','#999')
        }else if(stt == '已支付'){
            $(this).children('.ord_top').children('.ord_top_right').children('.top').children('a').css('background-color','#5BAD25')
        }else if(stt == '配送中'){
            $(this).children('.ord_top').children('.ord_top_right').children('.top').children('a').css('background-color','#2DA7AE')
        }else if(stt == '已送达'){
            $(this).children('.ord_top').children('.ord_top_right').children('.top').children('a').css('background-color','#2C78A8')
        }
    })

})



$(document).ready(function () {
    $('.handle').click(function () {

        var handle = $(this).val();
        if(handle == '评价'){

            var num = $(this).prev().children('.ord_top_right').children('.top').children('b').children('.bh').text();
            var state = $(this).prev().children('.ord_top_right').children('.top').children('a').text();
            var handles = "评价"

            $.ajax({
                type: 'post',
                url: '/upOrderState/'+num+"/"+state+"/"+handles,
                data: {},
                dataType:'json',
                contentType: "application/json",
            })


            $(this).css('background-color','#999')
            $(this).val("已评价");
            var name = $(this).prev().children('#top').children('h3').text();
            $('.name').val(name);
            $('.form1').submit();
        }else if(handle == '支付'){
            $(this).val("评价");

            var num = $(this).prev().children('.ord_top_right').children('.top').children('b').children('.bh').text();
            var state = "已支付";
            var handles = "评价"

            $.ajax({
                type: 'post',
                url: '/upOrderState/'+num+"/"+state+"/"+handles,
                data: {},
                dataType:'json',
                contentType: "application/json",
            })
        }
    })
})












