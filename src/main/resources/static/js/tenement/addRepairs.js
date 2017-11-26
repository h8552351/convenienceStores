

$(document).ready(function () {

    $('.p1').nextAll().hide();

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


    $('.tua').click(function () {
        qiniu.bind($('.tua'), {
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
                        $(".tu1").val(uploadSpace + '/' + fileName + '?v=' + se);
                        $('.p1').children('a').children('img').attr('src',value1);
                        $('.p2').show();
                    },
                    function(err) {
                        console.error(err);
                    }
                );
        });

    })


    $('.tub').click(function () {
        qiniu.bind($('.tub'), {
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
                        $(".tu2").val(uploadSpace + '/' + fileName + '?v=' + se);
                        $('.p2').children('a').children('img').attr('src',value1);
                        $('.p3').show();
                    },
                    function(err) {
                        console.error(err);
                    }
                );
        });

    })

    $('.tuc').click(function () {
        qiniu.bind($('.tuc'), {
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
                        $(".tu3").val(uploadSpace + '/' + fileName + '?v=' + se);
                        $('.p3').children('a').children('img').attr('src',value1);
                        $('.p4').show();
                    },
                    function(err) {
                        console.error(err);
                    }
                );
        });

    })


    $('.tud').click(function () {
        qiniu.bind($('.tud'), {
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
                        $(".tu4").val(uploadSpace + '/' + fileName + '?v=' + se);
                        $('.p4').children('a').children('img').attr('src',value1);
                        $('.p5').show();
                    },
                    function(err) {
                        console.error(err);
                    }
                );
        });

    })


    $('.tue').click(function () {
        qiniu.bind($('.tue'), {
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
                        $(".tu5").val(uploadSpace + '/' + fileName + '?v=' + se);
                        $('.p5').children('a').children('img').attr('src',value1);
                    },
                    function(err) {
                        console.error(err);
                    }
                );
        });

    })

})

$(document).ready(function () {
    $('.but').click(function () {
        var center = $('.center').val();
        $('.cent').val(center);
        $('.form').submit();
    })
})



























