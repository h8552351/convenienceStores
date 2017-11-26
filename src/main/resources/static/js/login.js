
$(document).ready(function () {
    $("#but").click(function () {
        var input = $(".input input").val();
        var input1 = $(".input-a input").val();
        if (input != "" && input1 != ""){
            if(/^[0-9]{11}$/.test(input)){
                if(/^[0-9a-zA-z]{6,11}$/.test(input1)){
                    $("#form").submit();
                }else {
                    alert("请输入11位手机号或6-11位由字母和数字组成的密码！")
                }
            }else{
                alert("请输入11位手机号或6-11位由字母和数字组成的密码！")
            }

        }else {
            alert("手机号或密码不能为空！")
        }
    })
})