
var code;
function authCode() {
    code = "";
    var codeLength = 6;//验证码长度
    var authCode = document.getElementById("ac");
    var codeChars = new Array(0,1,2,3,4,5,6,7,8,9,'a','b','c','d',
        'e','f','g','h','i','j','k','l','m','n','o','p','q','r',
        's','t','u','v','w','x','y','z','A','B','C','D','E','F',
        'G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z');
    for (var i = 0;i < codeLength;i++){
        var codeNum = Math.floor(Math.random() * 52);
        code += codeChars[codeNum];
    }
    if(authCode){
        authCode.className = "code";
        authCode.innerHTML = code;
    }
    // alert(authCode.innerHTML)
}
function validateCode()
{
    var inputCode=document.getElementById("inputCode").value;
    var phone = document.getElementById("phone").value
    var pwd1 = document.getElementById("pwd1").value
    var pwd2 = document.getElementById("pwd2").value
    var input = document.getElementsByClassName("as").value;
        if(input != ""){
            if(phone.length == 11){

                if(inputCode == ""){
                    alert("验证码不能为空！");
                }else if(inputCode.toUpperCase() != code.toUpperCase()) {
                    alert("验证码输入有误！");
                }else {
                    if(pwd1.length >= 6 && pwd1.length <= 11){
                        if(pwd1 == pwd2){
                            $("#form1").submit();
                        }else{
                            alert("两次输入密码不正确！")
                        }
                    }else {
                        alert("密码长度不是6-11位！");
                    }
                }
            }else {
                alert("手机号长度必须11位！");
            }

    }else {
        alert("内容不能为空！")
    }
}
