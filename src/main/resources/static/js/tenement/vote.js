

$(document).ready(function () {
    $('.info').click(function () {
        var  theme = $(this).find('h3').text()
        $(this).find('input').eq(0).val(theme);
        $(this).children('form').submit();
    })

})
