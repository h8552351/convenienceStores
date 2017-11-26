

/**
 * Name : 循环滚动列表
 **/
(function(jQuery){
    $.fn.autoScroll = function (o) {
        o = $.extend({         //设置默认参数
            direction: 'left',
            interval: null,
            speed: null,
            distance: null,
            liWidth: null,
            liHeight: null,
            showNum: null
        },o || {});
        return this.each(function(){     //回调开始
            var $ts = $(this),
                // $ul = $ts.children("ul"),
                // $li = $ul.children("li"),
                len = $ts.length;
            // if (o.direction == 'up' || o.direction == 'down' ){   //根据类型设置css
            //     $ts.css({ "width": "100%", "height": o.showNum * o.liHeight });
            //     $ul.css({ "width": "100%", "height": len * o.liHeight });
            //     $li.css({ "float": "none", "width": "100%", "height": o.liHeight, "margin": 0,"padding": 0 });
            // };
            // if (o.direction == 'left' || o.direction == 'right' ){  //其实也可以在css里写好
            //     $ts.css({ "width": o.showNum * o.liWidth });
            //     $ul.css({ "width": len * o.liWidth });
            //     $li.css({ "float": "left" });
            // };
            switch (o.direction){          //分四种情况，进行事件调用
                case 'left': sroLeft();
                    break;
                case 'right':sroRight();
                    break;
                case 'up':  sroUp();
                    break;
                case 'down': sroDown();
                    break;
            };
            function sroLeft(){           //向左滚动事件
                $ul.css("left", 0);
                var left;
                function leftMoving(){
                    var dis = -o.distance,
                        dif = -o.liWidth * (len - o.showNum);
                    left = parseFloat($ul.css("left"));
                    if (left <= dif){
                        $ul.css("left",0);
                        left = 0;
                        $ul.delay(o.interval);
                    };
                    var ltDis = left + dis;
                    if(ltDis <= dif){
                        ltDis = dif;
                    };
                    $ul.animate({"left":ltDis+"px"}, o.speed);
                };
                $ul.hover(            //鼠标移上、移下的阻止与恢复滚动
                    function(){
                        clearInterval(fnLeft);
                    },
                    function(){
                        fnLeft = setInterval(function(){leftMoving()}, o.interval);
                    }
                );
                fnLeft = setInterval(function(){leftMoving()}, o.interval);
            };
            function sroRight(){          //向右滚动事件
                $ul.css("right", 0);
                var right;
                function rightMoving(){
                    var dis = -o.distance,
                        dif = -o.liWidth * (len - o.showNum);
                    right = parseFloat($ul.css("right"));
                    if (right <= dif){
                        $ul.css("right",0);
                        right = 0;
                        $ul.delay(o.interval);
                    };
                    var rtDis = right + dis;
                    if(rtDis <= dif){
                        rtDis = dif;
                    };
                    $ul.animate({"right":rtDis+"px"}, o.speed);
                };
                $ul.hover(
                    function(){
                        clearInterval(fnRight);
                    },
                    function(){
                        fnRight = setInterval(function(){rightMoving()}, o.interval);
                    }
                );
                fnRight = setInterval(function(){rightMoving()}, o.interval);
            };

            function sroUp(){           //向上滚动事件
                $ts.css("top", 0);
                var top;
                function upMoving(){
                    var dis = -o.distance,
                        dis = 16,
                        dif = 16 * (len - o.showNum);
                    top = parseFloat($ts.css("top"));
                    if (top <= dif){
                        $ts.css("top",0);
                        top = 0;
                        $ts.delay(o.interval);
                    };
                    var tpDis = top + dis;
                    if(tpDis <= dif){
                        tpDis = dif;
                    };
                    $ul.animate({"top":tpDis+"px"}, o.speed);
                };
                $ul.hover(
                    function(){
                        clearInterval(fnUp);
                    },
                    function(){
                        fnUp = setInterval(function(){upMoving()}, o.interval);
                    }
                );
                fnUp = setInterval(function(){upMoving()}, o.interval);
            };

            function sroDown(){           //向下滚动事件
                $ul.css("bottom",0);
                var bottom;
                function downMoving(){
                    var dis = -o.distance,
                        dif = -o.liHeight * (len - o.showNum);
                    bottom = parseFloat($ul.css("bottom"));
                    if (bottom <= dif){
                        $ul.css("bottom",0);
                        bottom = 0;
                        $ul.delay(o.interval);
                    };
                    var bmDis = bottom + dis;
                    if(bmDis <= dif){
                        bmDis = dif;
                    };
                    $ul.animate({"bottom":bmDis+"px"}, o.speed);
                };
                $ul.hover(
                    function(){
                        clearInterval(fnDown);
                    },
                    function(){
                        fnDown = setInterval(function(){downMoving()}, o.interval);
                    }
                );
                fnDown = setInterval(function(){downMoving()}, o.interval);
            };
        });
    };
})(jQuery);




