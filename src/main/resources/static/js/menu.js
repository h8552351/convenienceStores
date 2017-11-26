
$(document).ready(function () {
    // 用来存储遍历次数，作为数组长度
        var  count = 0;
        var name = $(".text input").value;
        $(".ua").each(function (index,value) {
            count++;
        })
        $(".ua").each(function (index,value) {

           $(this).removeClass("ua").addClass("u"+index);
                $(".text input").val(name+"/");
                if($(".u"+index+" ul").css("display") == "none"){
                    $(".u"+index+" ul").css("display","block");



                    for(var i = 0;i< count;i++){
                        if (i == index){
                            continue;
                        }
                        $(".u"+i+" ul").css("display","none")
                    }
                }else{
                    $(".u" + index + " .la").each(function (l, a) {
                        $(this).removeClass("la").addClass("l" + l).bind("click",function () {

                            var names = $(".l" + l + " a").text();
                            $(".text input").value.remove();
                            alert($(".text input").val(name+"/"+names));
                            // $(".text input").val(function (n, b) {
                            //     return b + names;
                            // })
                        });

                        // $(this).click(function () {
                        //
                        // })

                    })
                    // $(".u"+index+" ul").css("display","none");
                }
            })
})


