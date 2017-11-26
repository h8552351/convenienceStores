//<![CDATA[


$(function () {
    if($(".head a").text() == "请登录!"){
        $("img , a").click(function () {
            $(".form1").submit();
        })
    }else {
        $('.nav-a').click(function () {
            var name = $(this).children('p').text();
            if(name == '社区超市'){
                $('.fm').attr('action','supermarket');
                $('.ipt').attr('name','module').val(name);
                $('.fm').submit();
            }else if(name == '便民洗涤'){

            }else if(name == '物业服务'){
                var phone = $('.user').val();
                $('.fm').attr('action','properlyService');
                $('.ipt').attr('name','phone').val(phone);
                $('.fm').submit();
            }else if(name == '装修服务'){
                var phone = $('.user').val();
                $('.fm').attr('action','decorationCase');
                $('.ipt').attr('name','phone').val(phone);
                $('.fm').submit();
            }
        })

        $('.footer-a').click(function () {
            var name = $(this).children('p').text();
            if(name = '订单'){
                $('.forms').attr('action','orderFrom');
                $('.forms').submit();
            }
        })
    }


    var a = 0;
    var b = 0;
    var timer = setInterval(function () {
        a++;
        a = a % 4;
        b++;
        if(b==5){
            $(".bodypage img").eq(a).css("order",0)
            b=1;
        }
        $(".bodypage img").eq(a).addClass("bg").siblings().removeClass("bg").css("order",b);

    },1000);
})

$(document).ready(function () {
    var cont = $('.cont').val();
    var content = cont.split(" ");
    // $('#scrollBox2').text(cont);
    for(var i=0;i<content.length;i++){
        $('#scrollBox2').append("<p>"+content[i]+"</p>");
    }
})







// 文字行滚动循环------------------------------------------------------------------------------------

    $(document).ready(function () {
        new Marquee(
            "scrollBox2",  //容器ID<br>
            0,  //向上滚动(0向上 1向下 2向左 3向右)<br>
            2,  //滚动的步长<br>
            200,  //容器可视宽度<br>
            70,  //容器可视高度<br>
            40,  //定时器 数值越小，滚动的速度越快(1000=1秒,建议不小于20)<br>
            1000,  //间歇停顿时间(0为不停顿,1000=1秒)<br>
            1000,  //开始时的等待时间(0为不等待,1000=1秒)<br>
            22  //间歇滚动间距(可选)<br>
        );
    });
    function Marquee(){
        this.ID=document.getElementById(arguments[0]);
        this.Direction=arguments[1];
        this.Step=arguments[2];
        this.Width=arguments[3];
        this.Height=arguments[4];
        this.Timer=arguments[5];
        this.WaitTime=arguments[6];
        this.StopTime=arguments[7];
        if(arguments[8]){this.ScrollStep=arguments[8];}else{this.ScrollStep=this.Direction>1?this.Width:this.Height;}
        this.CTL=this.StartID=this.Stop=this.MouseOver=0;
        this.ID.style.overflowX=this.ID.style.overflowY="hidden";
        this.ID.noWrap=true;
        this.ID.style.width=this.Width;
        this.ID.style.height=this.Height;
        this.ClientScroll=this.Direction>1?this.ID.scrollWidth:this.ID.scrollHeight;
        this.ID.innerHTML+=this.ID.innerHTML;
        this.Start(this,this.Timer,this.WaitTime,this.StopTime);
    }
    Marquee.prototype.Start=function(msobj,timer,waittime,stoptime){
        msobj.StartID=function(){msobj.Scroll();}
        msobj.Continue=function(){
            if(msobj.MouseOver==1){setTimeout(msobj.Continue,waittime);}
            else{clearInterval(msobj.TimerID); msobj.CTL=msobj.Stop=0; msobj.TimerID=setInterval(msobj.StartID,timer);}
        }
        msobj.Pause=function(){msobj.Stop=1; clearInterval(msobj.TimerID); setTimeout(msobj.Continue,waittime);}
        msobj.Begin=function(){
            msobj.TimerID=setInterval(msobj.StartID,timer);
            msobj.ID.onmouseover=function(){msobj.MouseOver=1; clearInterval(msobj.TimerID);}
            msobj.ID.onmouseout=function(){msobj.MouseOver=0; if(msobj.Stop==0){clearInterval(msobj.TimerID); msobj.TimerID=setInterval(msobj.StartID,timer);}}
        }
        setTimeout(msobj.Begin,stoptime);
    }
    Marquee.prototype.Scroll=function(){
        switch(this.Direction){
            case 0:
                this.CTL+=this.Step;
                if(this.CTL>=this.ScrollStep&&this.WaitTime>0){this.ID.scrollTop+=this.ScrollStep+this.Step-this.CTL; this.Pause(); return;}
                else{if(this.ID.scrollTop>=this.ClientScroll) this.ID.scrollTop-=this.ClientScroll; this.ID.scrollTop+=this.Step;}
                break;
            case 1:
                this.CTL+=this.Step;
                if(this.CTL>=this.ScrollStep&&this.WaitTime>0){this.ID.scrollTop-=this.ScrollStep+this.Step-this.CTL; this.Pause(); return;}
                else{if(this.ID.scrollTop<=0) this.ID.scrollTop+=this.ClientScroll; this.ID.scrollTop-=this.Step;}
                break;
            case 2:
                this.CTL+=this.Step;
                if(this.CTL>=this.ScrollStep&&this.WaitTime>0){this.ID.scrollLeft+=this.ScrollStep+this.Step-this.CTL; this.Pause(); return;}
                else{if(this.ID.scrollLeft>=this.ClientScroll) this.ID.scrollLeft-=this.ClientScroll; this.ID.scrollLeft+=this.Step;}
                break;
            case 3:
                this.CTL+=this.Step;
                if(this.CTL>=this.ScrollStep&&this.WaitTime>0){this.ID.scrollLeft-=this.ScrollStep+this.Step-this.CTL; this.Pause(); return;}
                else{if(this.ID.scrollLeft<=0) this.ID.scrollLeft+=this.ClientScroll; this.ID.scrollLeft-=this.Step;}
                break;
        }
    }











// ]]>