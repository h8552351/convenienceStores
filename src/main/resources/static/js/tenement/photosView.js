


$(document).ready(function () {
    $('.content1').find('ul').append("<div class='xiang-ce'></div><img src='/img/左.jpg' height='32' width='32'/><div class='tu-pian'><span></span></div><img src='/img/右.jpg' height=‘32’ width=‘32’/>")
    $('.content1').find('li').each(function () {
        var tu = $(this).children('img').attr('src')
        $(this).parent().children('.tu-pian').children('span').append("<img src="+tu+">").animate({'left':'400px'})
    })

    $('.content1').find('ul').children('.xiang-ce').css('display','block').css('width','500px').css('height','600px').css('background-color','rgba(0,0,0,0.4)')
        .css('position','fixed').css('top','40px').css('left','150px').css('display','none');
    $('.content1').find('ul').children('.tu-pian').css('width','400px').css('height','300px')
        .css('background-color','white').css('margin','auto').css('overflow','hidden')
        .css('position','fixed').css('opacity','none').css('top','190px').css('left','198px').css('display','none');

    $('.content1').find('ul').children('.tu-pian').children('span').css('margin','auto').css('width','2000px').css('height','300px').css('display','block')
        .css('display','-webkit-flex').css('flex-flow','row nowrap');
    $('.content1').find('ul').children('.tu-pian').children('span').children('img').css('width','400px').css('height','300px');
    $('.content1').find('ul').children('img').eq(0).css('position','fixed').css('top','330px').css('left','150px').css('display','none');
    $('.content1').find('ul').children('img').eq(1).css('position','fixed').css('top','330px').css('left','618px').css('display','none');

    var  cont = 0;
    var num = 0;
    $('.tu-pian').find('img').each(function () {
        $(this).css('order',+cont);
        cont ++;
        num ++;
    })
    var sum = cont -1;
    var sun = num;

    // 点击右箭头操作
        $('.content1').children('ul').children('img').eq(1).click(function () {
            if(num != 1){
                $(this).prev().find('img').each(function () {
                    if($(this).css('order') == "0"){
                        $(this).css('order',sum)
                    }else{
                        $(this).css('order','-=1')
                    }
                })
                num --;
            }
        })
    // 点击左箭头操作
        $('.content1').children('ul').children('img').eq(0).click(function () {
            if(num != sun){
                $(this).next().find('img').each(function () {
                    if($(this).css('order') == sum){
                        $(this).css('order','0')
                    }else{
                        $(this).css('order','+=1')
                    }
                })
                num ++;
            }
        })
})
$(document).ready(function () {
    $('.content1').find('li').click(function () {
        $('.xiang-ce').css('display','block')
        $('.content1').children('ul').children('img').css('display','block')
        $('.tu-pian').css('display','block')
    })


    $('.xiang-ce').click(function () {
        $(this).css('display','none')
        $('.content1').children('ul').children('img').css('display','none')
        $('.tu-pian').css('display','none')
    })

})









































