



$(document).ready(function () {
    var bs =0;
    var hot = $('.ht').children('div').text();
    var name = $('.rd').children('h3').text();
    $('.info').find('li').click(function () {
        hot++;
        bs++;
        $(this).children('.content1').css('display','block');
        $('.ht').children('div').text(hot);

        $.ajax({
            type: 'post',
            url: '/hot/'+name+'/'+hot,
            dataType:'json',
            contentType: "application/json",
        })


    })


    $('.jt').click(function () {
        if($('.content1').css('display') == 'block'){
            $('.content1').css('display','none');
        }else {
            if(bs == 0){
                window.history.back(-1);
            }else{
                window.history.back(-1);
                window.history.back(-1);
            }

        }
    })
})



$(document).ready(function () {
    $('.tp').each(function () {
        var img = $(this).children('img').attr('src')
        if(img == ""){
            $(this).remove();
        }
    })
})

$(document).ready(function () {
    var content = $('.conts').val();
    if(content != undefined){
        var conts = content.split(" ");
        for(var  i=0;i<conts.length;i++){
            $('.cont').append("<p>"+conts[i]+"</p>")
        }
    }
})


$(document).ready(function () {
    $('.addRepairs').click(function () {
        $('.form').submit();
    })
})
























