

$(document).ready(function () {
    var sum = $('.sum').val();
    $('.but2').click(function () {
        var i =0;
        $('.handle').each(function () {
            if($(this).children('.checkbox').children('.la').children('.lb').css('opacity') == 1){
                var info = $(this).children('label').children('h4').text();
                $('.content1').find('form').append("<input type='hidden' name='info' value='"+info+"'/>");
                i++;
            }
        })

        if(i != 0){
            $('.content1').find('form').submit();
        }

    })
})



$(document).ready(function () {
    var i=1;
    $('.handle').each(function () {
        $(this).children('label').attr('for',i);
        $(this).children('.checkbox').children('input').attr('id',i);
        $(this).children('.checkbox').children('label').attr('for',i);
        i++;
    })

    var type = $('.type').text();
    if(type == '多选'){
        $('.checkbox').children('input').attr('type','checkbox')

        var nums = $('.sum').val();
        var num = 1;

        $('.checkbox').click(function () {
            var s = 0;
            if($(this).children('.la').children('.lb').css('opacity') == 0){
                if(num < nums){
                    $(this).children('.la').children('.lb').css('opacity','1')
                    $('.handle').each(function () {
                        if($(this).children('.checkbox').children('.la').children('.lb').css('opacity') == 1){
                            s++;
                        }
                    })
                    num = s;
                }
            }else{
                $(this).children('.la').children('.lb').css('opacity','0')
                num--;
            }
        })
    }else if(type == '单选'){
        $('.checkbox').children('input').attr('type','radio')
    }

})


















