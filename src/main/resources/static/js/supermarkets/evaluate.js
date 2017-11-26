

$(document).ready(function () {

    $('.tua').nextAll().hide();

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
                        $('.tua').children('a').children('img').attr('src',value1);
                        $('.tub').show();
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
                        $('.tub').children('a').children('img').attr('src',value1);
                        $('.tuc').show();
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
                        $('.tuc').children('a').children('img').attr('src',value1);
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
            var content = $('#nr').val();
            $('.content').val(content);
            $('.form').submit();
        })
})




