

var  shuliang = 1;

$(document).ready(function () {
    var token = null;
    $.ajax({
        url: '/token',
        type: 'get',
        success: function (data) {
            token = data;
            console.debug('A: ' + token);
        }
    });
    var uploadSpace = 'http://ors8yq0z3.bkt.clouddn.com';
    qiniu.config({
        url: uploadSpace,
        uploadUrl: 'up-z2.qiniu.com'
    });

    $('#tu1').click(function () {
        qiniu.bind($('#tu1'), {
            filter: 'image'
        }).on('file', function(file) {
            var imagesBucket = qiniu.bucket('hjw-java', {
                putToken: token
            });
            var fileName = file.name;
            fileName = 'images/' + fileName;
            imagesBucket.putFile(fileName, file)
                .then(
                    function(reply) {
                        var se = new Date().getMilliseconds();
                        var  value1 = uploadSpace + '/' + fileName + '?v=' + se;
                        $("#photo").val(uploadSpace + '/' + fileName + '?v=' + se);
                        $("#id").val("tu1");
                    },
                    function(err) {
                        console.error(err);
                    }
                );
        });
    })

    $('#tu2').click(function () {
        qiniu.bind($('#tu2'), {
            filter: 'image'
        }).on('file', function(file) {
            var imagesBucket = qiniu.bucket('hjw-java', {
                putToken: token
            });
            var fileName = file.name;
            fileName = 'images/' + fileName;
            imagesBucket.putFile(fileName, file)
                .then(
                    function(reply) {
                        var se = new Date().getMilliseconds();
                        var  value1 = uploadSpace + '/' + fileName + '?v=' + se;
                        $("#photo").val(uploadSpace + '/' + fileName + '?v=' + se);
                        $("#id").val("tu2");
                    },
                    function(err) {
                        console.error(err);
                    }
                );
        });
    })

    $('#tu3').click(function () {
        qiniu.bind($('#tu3'), {
            filter: 'image'
        }).on('file', function(file) {
            var imagesBucket = qiniu.bucket('hjw-java', {
                putToken: token
            });
            var fileName = file.name;
            fileName = 'images/' + fileName;
            imagesBucket.putFile(fileName, file)
                .then(
                    function(reply) {
                        var se = new Date().getMilliseconds();
                        var  value1 = uploadSpace + '/' + fileName + '?v=' + se;
                        $("#photo").val(uploadSpace + '/' + fileName + '?v=' + se);
                        $("#id").val("tu3");
                    },
                    function(err) {
                        console.error(err);
                    }
                );
        });
    })

    $('#tu4').click(function () {
        qiniu.bind($('#tu4'), {
            filter: 'image'
        }).on('file', function(file) {
            var imagesBucket = qiniu.bucket('hjw-java', {
                putToken: token
            });
            var fileName = file.name;
            fileName = 'images/' + fileName;
            imagesBucket.putFile(fileName, file)
                .then(
                    function(reply) {
                        var se = new Date().getMilliseconds();
                        var  value1 = uploadSpace + '/' + fileName + '?v=' + se;
                        $("#photo").val(uploadSpace + '/' + fileName + '?v=' + se);
                        $("#id").val("tu4");
                    },
                    function(err) {
                        console.error(err);
                    }
                );
        });
    })

    $('.select1').change(function () {
        var citys =  $(this).find('option:selected').text();
        $('.citys').val(citys)
    })
    $('.select3').change(function () {
        var num =  $(this).find('option:selected').text();
        $('.num').val(num)
    })

    $('.select4').change(function () {
        var plot =  $(this).find('option:selected').text();
        $('.fbxq').val(plot)
    })

    $('.select5').change(function () {
        var plot =  $(this).find('option:selected').text();
        $('.zsxq').val(plot)
    })
    $('.select6').change(function () {
        var plot =  $(this).find('option:selected').text();
        $('.tpxq').val(plot)
    })
    $('.select7').change(function () {
        var plot =  $(this).find('option:selected').text();
        $('.alxq').val(plot)
    })
    $('.select8').change(function () {
        var userName =  $(this).find('option:selected').text();
        $('.rzxq').val(userName)
        $.ajax({
            type: 'post',
            url: '/progress',
            data: {userName:userName},
            // dataType:'json',
            // contentType: "application/json",
            success:function (data) {
                $('.progress').val(data);
            }
        })


    })
    $('.select').change(function () {
        var goodsType =  $(this).find('option:selected').text();
        $('.goodsType').val(goodsType)
    })
    $('.select2').change(function () {
        var type =  $(this).find('option:selected').text();
        if(type == '多选'){
            $(this).parent().parent().next().show();
            $('.postPoll .type').val(type)
            $(this).parent().parent().next().find('.select3').change(function () {
                var num;
                if($(this).find('option:selected').text() != '请选择选项个数' ){
                    num = $(this).find('option:selected').text();
                }
                $('.postPoll .num').val(num);

            })
        }else{
            $(this).parent().parent().next().hide();
            $('.postPoll .type').val(type)
        }
    })

    $(".but").click(function () {
        $("#form").submit();
    })
    $(".but1").click(function () {
        $("#form1").submit();
    })
    $(".but2").click(function () {
        $("#form2").submit();
    })
    $(".but3").click(function () {
        $(".form3").submit();
    })
    $(".but4").click(function () {
        $(".form4").submit();
    })
    $(".but5").click(function () {
        var content = $('.announce .ance').val();
        var cs = content.replace(/\n/g,"<br/>");//获取文本框中的回车（\n）并将其转换成<br/>
        alert(cs)
        $('.announce .gg').val(content);

        // $(".form5").submit();
    })
    $(".but6").click(function () {
        var content = $('.workDisplay .ance').val();
        $('.workDisplay .zs').val(content);
        $(".form6").submit();
    })
    $(".but7").click(function () {
        var content = $('.postPoll .ance').val();
        $('.postPoll .fbtp').val(content);
        $(".form7").submit();
    })
    $(".but8").click(function () {
        var content = $('.decorationCase .ance').val();
        $('.decorationCase .fbal').val(content);
        $(".form8").submit();
    })
    $(".but9").click(function () {
        var content = $('.decorationLog .ance').val();
        $('.decorationLog .fbrz').val(content);
        $(".form9").submit();
    })
})

$(document).ready(function () {
   $('.tab3').find('img').each(function () {
       if($(this).attr('src') == ""){
           $(this).hide();
       }
   })
})


$(document).ready(function () {
    $('.left_nav').click(function () {
        var name = $(this).val();
        $(this).prevAll().css('background-color','#E9E9E9')
        $(this).nextAll().css('background-color','#E9E9E9')
        $(this).css('background-color','#F34467')
        if(name == '更新图片'){
            $('.right').css('display','block');
            $('.right').prevAll().css('display','none');
            $('.right').nextAll().css('display','none');
        }else if(name == '添加城市'){
            $('.city').css('display','block');
            $('.city').prevAll().css('display','none');
            $('.city').nextAll().css('display','none');
        }else if(name == '添加小区'){
            $('.plot').css('display','block');
            $('.plot').prevAll().css('display','none');
            $('.plot').nextAll().css('display','none');
        }else if(name == '商品操作'){
            $('.container').css('overflow','auto');
            $('.putaway').css('display','block');
            $('.putaway').prevAll().css('display','none');
            $('.putaway').nextAll().css('display','none');
        }else if(name == '添加商品类型'){
            $('.addGoodsType').css('display','block');
            $('.addGoodsType').prevAll().css('display','none');
            $('.addGoodsType').nextAll().css('display','none');
        }else if(name == '查看订单'){
            $('.container').css('overflow','auto');
            $('.order').css('display','block');
            $('.order').prevAll().css('display','none');
            $('.order').nextAll().css('display','none');
        }else if(name == '报修操作'){
            $('.container').css('overflow','auto');
            $('.repairsOperation').css('display','block');
            $('.repairsOperation').prevAll().css('display','none');
            $('.repairsOperation').nextAll().css('display','none');
        }else if(name == '缴费操作'){
            $('.container').css('overflow','auto');
            $('.paymentOperation').css('display','block');
            $('.paymentOperation').prevAll().css('display','none');
            $('.paymentOperation').nextAll().css('display','none');
        }else if(name == '发布公告'){
            $('.announce').css('display','block');
            $('.announce').prevAll().css('display','none');
            $('.announce').nextAll().css('display','none');
        }else if(name == '物业工作展示'){
            $('.workDisplay').css('display','block');
            $('.workDisplay').prevAll().css('display','none');
            $('.workDisplay').nextAll().css('display','none');
        }else if(name == '发布投票'){
            $('.postPoll').css('display','block');
            $('.postPoll').prevAll().css('display','none');
            $('.postPoll').nextAll().css('display','none');
            $('.content').css('overflow','inherit');
            $('.container').css('overflow','inherit');
        }else if(name == '发布装修案例'){
            $('.decorationCase').css('display','block');
            $('.decorationCase').prevAll().css('display','none');
            $('.decorationCase').nextAll().css('display','none');
        }else if(name == '发布装修日志'){
            $('.decorationLog').css('display','block');
            $('.decorationLog').prevAll().css('display','none');
            $('.decorationLog').nextAll().css('display','none');
        }
    })
})


$(document).ready(function () {

    $('.tab').find('tr').each(function () {
        var state = $(this).children('td').eq(5).text();
        if(state == '上架'){
            $(this).find('input').eq(1).css('background-color','#E9E9E9')
            $(this).find('input').eq(2).css('background-color','#E9E9E9')
        }else if(state == '下架'){
            $(this).find('input').eq(0).css('background-color','#E9E9E9')
        }
    })


        $('.xj').click(function () {
            var state = $(this).parent().prev().text();
            if(state == '上架'){
                $(this).css('background-color','#E9E9E9');
                $(this).nextAll().css('background-color','#F34467');
                $(this).parent().prev().text("下架");
                var  name = $(this).parent().prev().prev().prev().prev().text();
                var state = "下架";
                $.ajax({
                    type: 'post',
                    url: '/upGoodsState/'+name+"/"+state,
                    data: {},
                    dataType:'json',
                    contentType: "application/json",
                })
            }
        })
        $('.sj').click(function () {
            var state = $(this).parent().prev().text();
            if(state == '下架'){
                $(this).css('background-color','#E9E9E9');
                $(this).prev().css('background-color','#F34467');
                $(this).next().css('background-color','#E9E9E9');
                $(this).parent().prev().text("上架");
                var name = $(this).parent().prev().prev().prev().prev().text();
                var state = "上架";


                $.ajax({
                    type: 'post',
                    url: '/upGoodsState/'+name+"/"+state,
                    data: {},
                    dataType:'json',
                    contentType: "application/json",
                })
            }
        })
        $('.xg').click(function () {
            var state = $(this).parent().prev().text();
            if(state == '下架'){
                $('.city').css('display','none');
                $('.right').css('display','none');
                $('.plot').css('display','none');
                $('.putaway').css('display','none');
                $('.addGoodsType').css('display','none');
                $('.addGoods').css('display','block');
                $('.order').css('display','none');
            }
        })
})

$(document).ready(function () {
    $('.tab1').each(function () {
        var state = $(this).find('tbody').children('tr').eq(0).children('td').eq(3).text();
        if(state == '已支付'){
            $(this).find('tfoot').children('tr').children('td').children('input').css('background-color','#F34467')
        }
    })

    $('.jd').click(function () {
        var state = $(this).parent().parent().parent().prev().children('tr').eq(0).children('td').eq(3).text();
        if (state == '已支付'){
            $(this).parent().parent().parent().prev().children('tr').eq(0).children('td').eq(3).text("配送中");
            $(this).css('background-color','#E9E9E9');

            var num =$(this).parent().parent().parent().prev().children('tr').eq(0).children('td').eq(0).text();
            var state = "配送中";
            $.ajax({
                type: 'post',
                url: '/upOrderState/'+num+"/"+state,
                data: {},
                dataType:'json',
                contentType: "application/json",
            })

        }
    })
})


// 小区公告
$(document).ready(function () {
    $('.tab5 .tu_p').children('.p1').nextAll().hide()

    var token = null;
    $.ajax({
        url: '/token',
        type: 'get',
        success: function (data) {
            token = data;
            console.debug('A: ' + token);
        }
    });
    var uploadSpace = 'http://ors8yq0z3.bkt.clouddn.com';
    qiniu.config({
        url: uploadSpace,
        uploadUrl: 'up-z2.qiniu.com'
    });


    $('.tab5 .tp1').click(function () {
        qiniu.bind($('.tab5 .tp1'), {
            filter: 'image'
        }).on('file', function(file) {
            var imagesBucket = qiniu.bucket('hjw-java', {
                putToken: token
            });
            var fileName = file.name;
            fileName = 'images/' + fileName;
            imagesBucket.putFile(fileName, file)
                .then(
                    function(reply) {
                        var se = new Date().getMilliseconds();
                        var  value1 = uploadSpace + '/' + fileName + '?v=' + se;
                        $(".tab5 .tua").val(uploadSpace + '/' + fileName + '?v=' + se);
                        $('.tab5 .p1').children('a').children('img').attr('src',value1);
                        $(".tab5 .p2").show();
                    },
                    function(err) {
                        console.error(err);
                    }
                );
        });

    })


    $('.tab5 .tp2').click(function () {
        qiniu.bind($('.tab5 .tp2'), {
            filter: 'image'
        }).on('file', function(file) {
            var imagesBucket = qiniu.bucket('hjw-java', {
                putToken: token
            });
            var fileName = file.name;
            fileName = 'images/' + fileName;
            imagesBucket.putFile(fileName, file)
                .then(
                    function(reply) {
                        var se = new Date().getMilliseconds();
                        var  value1 = uploadSpace + '/' + fileName + '?v=' + se;
                        $(".tab5 .tub").val(uploadSpace + '/' + fileName + '?v=' + se);
                        $('.tab5 .p2').children('a').children('img').attr('src',value1);
                        $('.tab5 .p3').show();
                    },
                    function(err) {
                        console.error(err);
                    }
                );
        });

    })

    $('.tab5 .tp3').click(function () {
        qiniu.bind($('.tab5 .tp3'), {
            filter: 'image'
        }).on('file', function(file) {
            var imagesBucket = qiniu.bucket('hjw-java', {
                putToken: token
            });
            var fileName = file.name;
            fileName = 'images/' + fileName;
            imagesBucket.putFile(fileName, file)
                .then(
                    function(reply) {
                        var se = new Date().getMilliseconds();
                        var  value1 = uploadSpace + '/' + fileName + '?v=' + se;
                        $(".tab5 .tuc").val(uploadSpace + '/' + fileName + '?v=' + se);
                        $('.tab5 .p3').children('a').children('img').attr('src',value1);
                        $('.tab5 .p4').show();
                    },
                    function(err) {
                        console.error(err);
                    }
                );
        });

    })


    $('.tab5 .tp4').click(function () {
        qiniu.bind($('.tab5 .tp4'), {
            filter: 'image'
        }).on('file', function(file) {
            var imagesBucket = qiniu.bucket('hjw-java', {
                putToken: token
            });
            var fileName = file.name;
            fileName = 'images/' + fileName;
            imagesBucket.putFile(fileName, file)
                .then(
                    function(reply) {
                        var se = new Date().getMilliseconds();
                        var  value1 = uploadSpace + '/' + fileName + '?v=' + se;
                        $(".tab5 .tud").val(uploadSpace + '/' + fileName + '?v=' + se);
                        $('.tab5 .p4').children('a').children('img').attr('src',value1);
                        $('.tab5 .p5').show();
                    },
                    function(err) {
                        console.error(err);
                    }
                );
        });

    })


    $('.tab5 .tp5').click(function () {
        qiniu.bind($('.tab5 .tp5'), {
            filter: 'image'
        }).on('file', function(file) {
            var imagesBucket = qiniu.bucket('hjw-java', {
                putToken: token
            });
            var fileName = file.name;
            fileName = 'images/' + fileName;
            imagesBucket.putFile(fileName, file)
                .then(
                    function(reply) {
                        var se = new Date().getMilliseconds();
                        var  value1 = uploadSpace + '/' + fileName + '?v=' + se;
                        $(".tab5 .tue").val(uploadSpace + '/' + fileName + '?v=' + se);
                        $('.tab5 .p5').children('a').children('img').attr('src',value1);
                    },
                    function(err) {
                        console.error(err);
                    }
                );
        });

    })


})



// 物业工作展示
$(document).ready(function () {
    $('.tab6 .tu_p').children('.p1').nextAll().hide()

    var token = null;
    $.ajax({
        url: '/token',
        type: 'get',
        success: function (data) {
            token = data;
            console.debug('A: ' + token);
        }
    });
    var uploadSpace = 'http://ors8yq0z3.bkt.clouddn.com';
    qiniu.config({
        url: uploadSpace,
        uploadUrl: 'up-z2.qiniu.com'
    });


    $('.tab6 .tp1').click(function () {
        qiniu.bind($('.tab6 .tp1'), {
            filter: 'image'
        }).on('file', function(file) {
            var imagesBucket = qiniu.bucket('hjw-java', {
                putToken: token
            });
            var fileName = file.name;
            fileName = 'images/' + fileName;
            imagesBucket.putFile(fileName, file)
                .then(
                    function(reply) {
                        var se = new Date().getMilliseconds();
                        var  value1 = uploadSpace + '/' + fileName + '?v=' + se;
                        $(".tab6 .tua").val(uploadSpace + '/' + fileName + '?v=' + se);
                        $('.tab6 .p1').children('a').children('img').attr('src',value1);
                        $(".tab6 .p2").show();
                    },
                    function(err) {
                        console.error(err);
                    }
                );
        });

    })


    $('.tab6 .tp2').click(function () {
        qiniu.bind($('.tab6 .tp2'), {
            filter: 'image'
        }).on('file', function(file) {
            var imagesBucket = qiniu.bucket('hjw-java', {
                putToken: token
            });
            var fileName = file.name;
            fileName = 'images/' + fileName;
            imagesBucket.putFile(fileName, file)
                .then(
                    function(reply) {
                        var se = new Date().getMilliseconds();
                        var  value1 = uploadSpace + '/' + fileName + '?v=' + se;
                        $(".tab6 .tub").val(uploadSpace + '/' + fileName + '?v=' + se);
                        $('.tab6 .p2').children('a').children('img').attr('src',value1);
                        $('.tab6 .p3').show();
                    },
                    function(err) {
                        console.error(err);
                    }
                );
        });

    })

    $('.tab6 .tp3').click(function () {
        qiniu.bind($('.tab6 .tp3'), {
            filter: 'image'
        }).on('file', function(file) {
            var imagesBucket = qiniu.bucket('hjw-java', {
                putToken: token
            });
            var fileName = file.name;
            fileName = 'images/' + fileName;
            imagesBucket.putFile(fileName, file)
                .then(
                    function(reply) {
                        var se = new Date().getMilliseconds();
                        var  value1 = uploadSpace + '/' + fileName + '?v=' + se;
                        $(".tab6 .tuc").val(uploadSpace + '/' + fileName + '?v=' + se);
                        $('.tab6 .p3').children('a').children('img').attr('src',value1);
                        $('.tab6 .p4').show();
                    },
                    function(err) {
                        console.error(err);
                    }
                );
        });

    })


    $('.tab6 .tp4').click(function () {
        qiniu.bind($('.tab6 .tp4'), {
            filter: 'image'
        }).on('file', function(file) {
            var imagesBucket = qiniu.bucket('hjw-java', {
                putToken: token
            });
            var fileName = file.name;
            fileName = 'images/' + fileName;
            imagesBucket.putFile(fileName, file)
                .then(
                    function(reply) {
                        var se = new Date().getMilliseconds();
                        var  value1 = uploadSpace + '/' + fileName + '?v=' + se;
                        $(".tab6 .tud").val(uploadSpace + '/' + fileName + '?v=' + se);
                        $('.tab6 .p4').children('a').children('img').attr('src',value1);
                        $('.tab6 .p5').show();
                    },
                    function(err) {
                        console.error(err);
                    }
                );
        });

    })


    $('.tab6 .tp5').click(function () {
        qiniu.bind($('.tab6 .tp5'), {
            filter: 'image'
        }).on('file', function(file) {
            var imagesBucket = qiniu.bucket('hjw-java', {
                putToken: token
            });
            var fileName = file.name;
            fileName = 'images/' + fileName;
            imagesBucket.putFile(fileName, file)
                .then(
                    function(reply) {
                        var se = new Date().getMilliseconds();
                        var  value1 = uploadSpace + '/' + fileName + '?v=' + se;
                        $(".tab6 .tue").val(uploadSpace + '/' + fileName + '?v=' + se);
                        $('.tab6 .p5').children('a').children('img').attr('src',value1);
                    },
                    function(err) {
                        console.error(err);
                    }
                );
        });

    })


})




var s = 0;
// 小区投票
function toupiao() {

    var token = null;
    $.ajax({
        url: '/token',
        type: 'get',
        success: function (data) {
            token = data;
            console.debug('A: ' + token);
        }
    });
    var uploadSpace = 'http://ors8yq0z3.bkt.clouddn.com';
    qiniu.config({
        url: uploadSpace,
        uploadUrl: 'up-z2.qiniu.com'
    });

        $('.ms').click(function () {
            var name = $(this).parent().attr('id')
            qiniu.bind($('#'+name+' img'), {
                filter: 'image'
            }).on('file', function(file) {
                var imagesBucket = qiniu.bucket('hjw-java', {
                    putToken: token
                });
                var fileName = file.name;
                fileName = 'images/' + fileName;
                imagesBucket.putFile(fileName, file)
                    .then(
                        function(reply) {
                            var se = new Date().getMilliseconds();
                            var  value1 = uploadSpace + '/' + fileName + '?v=' + se;

                            $('#'+name).children('input').val(value1)
                            $('#'+name).children('img').attr('src',value1);
                            s++;
                        },
                        function(err) {
                            console.error(err);
                        }
                    );
            });

        })
}

$(document).ready(function () {
        $('.pus').click(function () {
            var img = $('#pt'+(shuliang -1)).children('img').attr('src');
            if(img != '/img/添加图片.jpg'){
                if(shuliang<10){
                    $('.tdys').append("<li class='option'><a class='poto' id='pt"+shuliang+"' href='###'><input type='hidden' name='photo'/><img class='ms' src='/img/添加图片.jpg' height='70' width='70'/></a><input type='text' name='info'/><input class='remove' type='button' value='删除'/></li>")
                    shuliang ++;
                    toupiao()
                    $('.remove').click(function () {
                        $(this).parent().remove();
                        shuliang--;
                    })
                }
            }else {
                alert('请完整填写上一个内容,在增加！')
            }
        })
    toupiao()
})


// 装修案例
$(document).ready(function () {
    $('.tab8 .tu_p').children('.p1').nextAll().hide()

    var token = null;
    $.ajax({
        url: '/token',
        type: 'get',
        success: function (data) {
            token = data;
            console.debug('A: ' + token);
        }
    });
    var uploadSpace = 'http://ors8yq0z3.bkt.clouddn.com';
    qiniu.config({
        url: uploadSpace,
        uploadUrl: 'up-z2.qiniu.com'
    });


    $('.tab8 .tp1').click(function () {
        qiniu.bind($('.tab8 .tp1'), {
            filter: 'image'
        }).on('file', function(file) {
            var imagesBucket = qiniu.bucket('hjw-java', {
                putToken: token
            });
            var fileName = file.name;
            fileName = 'images/' + fileName;
            imagesBucket.putFile(fileName, file)
                .then(
                    function(reply) {
                        var se = new Date().getMilliseconds();
                        var  value1 = uploadSpace + '/' + fileName + '?v=' + se;
                        $(".tab8 .tua").val(uploadSpace + '/' + fileName + '?v=' + se);
                        $('.tab8 .p1').children('a').children('img').attr('src',value1);
                        $(".tab8 .p2").show();
                    },
                    function(err) {
                        console.error(err);
                    }
                );
        });

    })


    $('.tab8 .tp2').click(function () {
        qiniu.bind($('.tab8 .tp2'), {
            filter: 'image'
        }).on('file', function(file) {
            var imagesBucket = qiniu.bucket('hjw-java', {
                putToken: token
            });
            var fileName = file.name;
            fileName = 'images/' + fileName;
            imagesBucket.putFile(fileName, file)
                .then(
                    function(reply) {
                        var se = new Date().getMilliseconds();
                        var  value1 = uploadSpace + '/' + fileName + '?v=' + se;
                        $(".tab8 .tub").val(uploadSpace + '/' + fileName + '?v=' + se);
                        $('.tab8 .p2').children('a').children('img').attr('src',value1);
                        $('.tab8 .p3').show();
                    },
                    function(err) {
                        console.error(err);
                    }
                );
        });

    })

    $('.tab8 .tp3').click(function () {
        qiniu.bind($('.tab8 .tp3'), {
            filter: 'image'
        }).on('file', function(file) {
            var imagesBucket = qiniu.bucket('hjw-java', {
                putToken: token
            });
            var fileName = file.name;
            fileName = 'images/' + fileName;
            imagesBucket.putFile(fileName, file)
                .then(
                    function(reply) {
                        var se = new Date().getMilliseconds();
                        var  value1 = uploadSpace + '/' + fileName + '?v=' + se;
                        $(".tab8 .tuc").val(uploadSpace + '/' + fileName + '?v=' + se);
                        $('.tab8 .p3').children('a').children('img').attr('src',value1);
                        $('.tab8 .p4').show();
                    },
                    function(err) {
                        console.error(err);
                    }
                );
        });

    })


    $('.tab8 .tp4').click(function () {
        qiniu.bind($('.tab8 .tp4'), {
            filter: 'image'
        }).on('file', function(file) {
            var imagesBucket = qiniu.bucket('hjw-java', {
                putToken: token
            });
            var fileName = file.name;
            fileName = 'images/' + fileName;
            imagesBucket.putFile(fileName, file)
                .then(
                    function(reply) {
                        var se = new Date().getMilliseconds();
                        var  value1 = uploadSpace + '/' + fileName + '?v=' + se;
                        $(".tab8 .tud").val(uploadSpace + '/' + fileName + '?v=' + se);
                        $('.tab8 .p4').children('a').children('img').attr('src',value1);
                        $('.tab8 .p5').show();
                    },
                    function(err) {
                        console.error(err);
                    }
                );
        });

    })


    $('.tab8 .tp5').click(function () {
        qiniu.bind($('.tab8 .tp5'), {
            filter: 'image'
        }).on('file', function(file) {
            var imagesBucket = qiniu.bucket('hjw-java', {
                putToken: token
            });
            var fileName = file.name;
            fileName = 'images/' + fileName;
            imagesBucket.putFile(fileName, file)
                .then(
                    function(reply) {
                        var se = new Date().getMilliseconds();
                        var  value1 = uploadSpace + '/' + fileName + '?v=' + se;
                        $(".tab8 .tue").val(uploadSpace + '/' + fileName + '?v=' + se);
                        $('.tab8 .p5').children('a').children('img').attr('src',value1);
                    },
                    function(err) {
                        console.error(err);
                    }
                );
        });

    })
})




// 装修日志
$(document).ready(function () {
    $('.tab9 .tu_p').children('.p1').nextAll().hide()

    var token = null;
    $.ajax({
        url: '/token',
        type: 'get',
        success: function (data) {
            token = data;
            console.debug('A: ' + token);
        }
    });
    var uploadSpace = 'http://ors8yq0z3.bkt.clouddn.com';
    qiniu.config({
        url: uploadSpace,
        uploadUrl: 'up-z2.qiniu.com'
    });


    $('.tab9 .tp1').click(function () {
        qiniu.bind($('.tab9 .tp1'), {
            filter: 'image'
        }).on('file', function(file) {
            var imagesBucket = qiniu.bucket('hjw-java', {
                putToken: token
            });
            var fileName = file.name;
            fileName = 'images/' + fileName;
            imagesBucket.putFile(fileName, file)
                .then(
                    function(reply) {
                        var se = new Date().getMilliseconds();
                        var  value1 = uploadSpace + '/' + fileName + '?v=' + se;
                        $(".tab9 .tua").val(uploadSpace + '/' + fileName + '?v=' + se);
                        $('.tab9 .p1').children('a').children('img').attr('src',value1);
                        $(".tab9 .p2").show();
                    },
                    function(err) {
                        console.error(err);
                    }
                );
        });

    })


    $('.tab9 .tp2').click(function () {
        qiniu.bind($('.tab9 .tp2'), {
            filter: 'image'
        }).on('file', function(file) {
            var imagesBucket = qiniu.bucket('hjw-java', {
                putToken: token
            });
            var fileName = file.name;
            fileName = 'images/' + fileName;
            imagesBucket.putFile(fileName, file)
                .then(
                    function(reply) {
                        var se = new Date().getMilliseconds();
                        var  value1 = uploadSpace + '/' + fileName + '?v=' + se;
                        $(".tab9 .tub").val(uploadSpace + '/' + fileName + '?v=' + se);
                        $('.tab9 .p2').children('a').children('img').attr('src',value1);
                        $('.tab9 .p3').show();
                    },
                    function(err) {
                        console.error(err);
                    }
                );
        });

    })

    $('.tab9 .tp3').click(function () {
        qiniu.bind($('.tab9 .tp3'), {
            filter: 'image'
        }).on('file', function(file) {
            var imagesBucket = qiniu.bucket('hjw-java', {
                putToken: token
            });
            var fileName = file.name;
            fileName = 'images/' + fileName;
            imagesBucket.putFile(fileName, file)
                .then(
                    function(reply) {
                        var se = new Date().getMilliseconds();
                        var  value1 = uploadSpace + '/' + fileName + '?v=' + se;
                        $(".tab9 .tuc").val(uploadSpace + '/' + fileName + '?v=' + se);
                        $('.tab9 .p3').children('a').children('img').attr('src',value1);
                        $('.tab9 .p4').show();
                    },
                    function(err) {
                        console.error(err);
                    }
                );
        });

    })


    $('.tab9 .tp4').click(function () {
        qiniu.bind($('.tab9 .tp4'), {
            filter: 'image'
        }).on('file', function(file) {
            var imagesBucket = qiniu.bucket('hjw-java', {
                putToken: token
            });
            var fileName = file.name;
            fileName = 'images/' + fileName;
            imagesBucket.putFile(fileName, file)
                .then(
                    function(reply) {
                        var se = new Date().getMilliseconds();
                        var  value1 = uploadSpace + '/' + fileName + '?v=' + se;
                        $(".tab9 .tud").val(uploadSpace + '/' + fileName + '?v=' + se);
                        $('.tab9 .p4').children('a').children('img').attr('src',value1);
                        $('.tab9 .p5').show();
                    },
                    function(err) {
                        console.error(err);
                    }
                );
        });

    })


    $('.tab9 .tp5').click(function () {
        qiniu.bind($('.tab9 .tp5'), {
            filter: 'image'
        }).on('file', function(file) {
            var imagesBucket = qiniu.bucket('hjw-java', {
                putToken: token
            });
            var fileName = file.name;
            fileName = 'images/' + fileName;
            imagesBucket.putFile(fileName, file)
                .then(
                    function(reply) {
                        var se = new Date().getMilliseconds();
                        var  value1 = uploadSpace + '/' + fileName + '?v=' + se;
                        $(".tab9 .tue").val(uploadSpace + '/' + fileName + '?v=' + se);
                        $('.tab9 .p5').children('a').children('img').attr('src',value1);
                    },
                    function(err) {
                        console.error(err);
                    }
                );
        });
    })
})

$(document).ready(function () {

    $('.tab3 .tr3').each(function () {
        var status =  $(this).find('td').eq(2).text();

       if(status == '处理中'){
            $(this).find('td').eq(4).children('input').css('background-color','#999')
            $(this).find('td').eq(4).children('input').css('readonly','readonly');
        }else if(status == '已处理'){
            $(this).hide();
        }
    })

    $('.tab3 .c-li').click(function () {
        $(this).css('background-color','#999')
        $(this).parent().prev().prev().text("处理中")
        var time = $(this).parent().prev().prev().prev().text();
        var status = "处理中";

        $.ajax({
            type: 'post',
            url: '/updateRepairs/'+time+"/"+status,
            dataType:'json',
            contentType: "application/json",
        })
    })


    $('.tab4 .tr4').each(function () {
        var status =  $(this).find('td').eq(3).text();
        if(status == '充值中'){
            $(this).find('td').eq(4).children('input').css('background-color','#999')
            $(this).find('td').eq(4).children('input').unbind('click');
        }else if(status == '已充值'){
            $(this).hide();
        }
    })

    $('.tab4 .c-zhi').click(function () {
        $(this).unbind('click');
        $(this).css('background-color','#999')
        $(this).parent().prev().text("充值中")
        var time = $(this).parent().prev().prev().text();
        var status = "充值中";

        $.ajax({
            type: 'post',
            url: '/updatePayment/'+time+"/"+status,
            dataType:'json',
            contentType: "application/json",
        })
    })



})








