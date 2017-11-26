

$(document).ready(function () {

    var bs = 0
    $('.info').find('li').click(function () {
        bs++;
        $(this).children('.content1').css('display','block');
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

    var conts = content.split(" ");

    for(var  i=0;i<conts.length;i++){
        $('.cont').append("<p>"+conts[i]+"</p>")
    }

})



















