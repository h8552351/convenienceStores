package com.hjw.example.contorller;

import com.hjw.example.domain.*;
import com.hjw.example.service.QiniuUploadService;
import com.hjw.example.service.UserService;

import lombok.extern.slf4j.Slf4j;
import org.apache.catalina.servlet4preview.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.stereotype.Repository;
import org.springframework.ui.Model;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.*;


import java.sql.Timestamp;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.*;

/**
 * Created by 黄毅 on 2017/6/26.
 */
@Controller
@Slf4j
public class UserContorller {
    @Autowired
    private UserService userService;
    private Integer orderCount = 1;


    @GetMapping("/home")
    public String homePage(ModelMap modelMap){
        List<Photo> photos = userService.queryPhoto();
        User user = userService.logins("");

        modelMap.put("photos",photos);
        modelMap.put("plot","请登录!");
        modelMap.put("bulletinContent","");
        modelMap.put("bulletinTheme","");
        modelMap.put("user",user);
        return "homepage";
    }

    @PostMapping("/bulletin/{plot}")
    @ResponseBody
    public Communitybulletin bulletin(@PathVariable String plot){

        log.info(plot+"-------------------");

        List<Plot> plots = userService.queryPlotByName(plot);
        Communitybulletin communitybulletin = new Communitybulletin();
        communitybulletin = plots.get(0).getCommunitybulletins().get(0);
        return communitybulletin;
    }


    @GetMapping("/logins")
    public String login(){
        return "login";
    }

//    @RequestMapping(value = "login",method = RequestMethod.POST)
    @PostMapping("/login")
    public String loginUser(String phone,String pwd,ModelMap modelMap){
        User user = userService.login(phone,pwd);
        List<Photo> photos = userService.queryPhoto();
        if(user != null){

            modelMap.put("photos",photos);
            modelMap.put("user",user);
            modelMap.put("plot",user.getPlot().getPlotName());
            if(user.getPlot().getCommunitybulletins().size()>0){
                modelMap.put("bulletinContent",user.getPlot().getCommunitybulletins().get(0).getContent());
                modelMap.put("bulletinTheme",user.getPlot().getCommunitybulletins().get(0).getTheme());
            }else {
                modelMap.put("bulletin","");
                modelMap.put("bulletinContent","");
            }
            return "homepage";
        }
        modelMap.put("msg","手机号或密码错误！");
        return "login";
    }
    @GetMapping("registers")
    public String registers(ModelMap modelMap){
        List<City> citys = this.userService.queryCity();
//        List menus = new ArrayList();
//        for (City city:citys){
//            city.setPlots(this.userService.queryPlot(city.getId()));
//        }
        log.info(citys.get(0).getPlotList().get(0).getPlotName());
        modelMap.put("citys",citys);
        return "register";
    }
    @PostMapping("/register")
    public String register(String phone,String nickName,String userName,String city,String detailedAddress,String newpwd){
        String str[] = city.split("/");
        List<Plot> plots = userService.queryPlotByName(str[1]);
        User user = new User(phone,nickName,userName,newpwd,detailedAddress,plots.get(0));
            userService.regist(user);
        return "login";
    }
    @RequestMapping("/retrievePasswords")
    public String retrievePasswords(){
        return "retrievePassword";
    }


    @PostMapping("/updatePwd")
    public String updatePwd(String phone,String pwd){
        this.userService.updatePwd(phone,pwd);
        return "login";
    }
    @GetMapping("/plot")
    public String plot(String text,ModelMap modelMap){
        modelMap.put("text",text);
        return "register";
    }



//    七牛上传文件
//    后台模块---------------------------------------------------------------------------------------
    @Autowired
    private QiniuUploadService qiniuUploadService;

    @GetMapping("/upload")
    public String toUploadPage() {
        return "upload";
    }

    @GetMapping("/token")
    @ResponseBody
    public String getUploadToken() {
        log.info("request token");
        String token = this.qiniuUploadService.getUploadToken();
        return token;
    }

    @PostMapping("/qiniu")
    public String qiniu(String values,ModelMap modelMap){
        User user = userService.logins("");
        modelMap.put("values1",values);
        modelMap.put("plot","请登录!");
        modelMap.put("user",user);
        return "upload";
    }

    @RequestMapping("/admins")
    @GetMapping
    public String admin(ModelMap modelMap, HttpServletRequest request){
        List<Photo> photos = userService.queryPhoto();
        modelMap.put("photos",photos);

        List<Module> modules = userService.queryModule("社区超市");
        List<GoodsType> goodsTypes = modules.get(0).getGoodsTypes();
        List<City> cityList = userService.queryCity();
        List<Plot> plots = userService.queryPlotByName("");
        List<User> users = userService.queryUser("");
        List<ProperlyRepairs> properlyRepairs = userService.queryRepairs("");
        List<LivingPayment> livingPayments = userService.queryPayment("");

        modelMap.put("plot",plots);
        modelMap.put("cityList",cityList);
        modelMap.put("repairs",properlyRepairs);
        modelMap.put("payment",livingPayments);
        modelMap.put("goodsTypes",goodsTypes);
        modelMap.put("users",users);
        modelMap.put("orders",modules.get(0).getOrderFroms());
        return "admin";
    }

    @PostMapping("/savePhoto")
    public String queryPhoto(String id,String photo,ModelMap modelMap){
        userService.updatePhoto(id,photo);
        User user = userService.logins("");
        List<Photo> photos = userService.queryPhoto();

        modelMap.put("plot",user.getPlot().getPlotName());
        modelMap.put("user",user);
        modelMap.put("photos",photos);
        modelMap.put("bulletin","");
        modelMap.put("bulletinContent","");

        return "homepage";
    }

    @PostMapping("/saveCity")
    public String saveCity(String city,ModelMap modelMap){
        City city1 = new City(city);
        userService.saveCity(city1);
        List<Photo> photos = userService.queryPhoto();
        modelMap.put("photos",photos);

        List<Module> modules = userService.queryModule("社区超市");
        List<GoodsType> goodsTypes = modules.get(0).getGoodsTypes();
        List<City> cityList = userService.queryCity();
        List<Plot> plots = userService.queryPlotByName("");
        modelMap.put("plot",plots);
        modelMap.put("cityList",cityList);
        modelMap.put("goodsTypes",goodsTypes);
        return "admin";
    }

    @PostMapping("/savePlot")
    public String savePlot(String citys,String plot,ModelMap modelMap){
        List<City> citys1 = userService.queryCityByName(citys);
        Plot plot1 = new Plot(plot,citys1.get(0));
        userService.savePlot(plot1);
        List<Photo> photos = userService.queryPhoto();
        modelMap.put("photos",photos);

        List<Module> modules = userService.queryModule("社区超市");
        List<GoodsType> goodsTypes = modules.get(0).getGoodsTypes();
        List<City> cityList = userService.queryCity();
        List<Plot> plots = userService.queryPlotByName("");
        modelMap.put("plot",plots);
        modelMap.put("cityList",cityList);
        modelMap.put("goodsTypes",goodsTypes);
        return "admin";
    }

    @PostMapping("/upOrderState/{num}/{state}")
    @ResponseBody
    public void upOrderState(@PathVariable String num,@PathVariable String state){
        List<OrderFrom> orderFromList = userService.queryOrderByNum(num);
        orderFromList.get(0).setState(state);
        userService.updateOrderFrom(orderFromList.get(0));
    }

    @PostMapping("/upOrderState/{num}/{state}/{handles}")
    @ResponseBody
    public void upOrder(@PathVariable String num,@PathVariable String state,@PathVariable String handles){
        List<OrderFrom> orderFromList = userService.queryOrderByNum(num);
        orderFromList.get(0).setState(state);
        orderFromList.get(0).setHandle(handles);
        userService.updateOrderFrom(orderFromList.get(0));
    }



    @PostMapping("/upGoodsState/{name}/{state}")
    @ResponseBody
    public void upGoodsState(@PathVariable String name,@PathVariable String state){
        List<Goods> goods = userService.queryGoods(name);
        goods.get(0).setGoodsStatus(state);
        userService.updateGoods(goods.get(0));
    }

    @PostMapping("/addGoods")
    public String addGoods(ModelMap modelMap,String goodsName,String goodsDetails,Double price,long goodsNum,long threshold,String typeName){
        List<GoodsType> goodsTypes = userService.queryGoodsType(typeName);
        Goods goods = new Goods(goodsName,goodsDetails,price,goodsNum,threshold,"下架",goodsTypes.get(0));
        userService.saveGoods(goods);


        List<Photo> photos = userService.queryPhoto();
        modelMap.put("photos",photos);
        List<Module> modules = userService.queryModule("社区超市");
        List<GoodsType> goodsTypeList = modules.get(0).getGoodsTypes();
        List<City> cityList = userService.queryCity();
        List<Plot> plots = userService.queryPlotByName("");
        modelMap.put("cityList",cityList);
        modelMap.put("goodsTypes",goodsTypeList);
        modelMap.put("plot",plots);
        return "admin";
    }


    @PostMapping("/addGoodsType")
    public String addGoodsType(ModelMap modelMap,String typeName){
        List<Module> modules = userService.queryModule("社区超市");
        GoodsType goodsType = new GoodsType(typeName,modules.get(0));
        userService.saveGoodsType(goodsType);



        List<Photo> photos = userService.queryPhoto();
        modelMap.put("photos",photos);
        List<GoodsType> goodsTypeList = userService.queryGoodsType("");
        List<City> cityList = userService.queryCity();
        List<Plot> plots = userService.queryPlotByName("");
        modelMap.put("cityList",cityList);
        modelMap.put("orders",modules.get(0).getOrderFroms());
        modelMap.put("goodsTypes",goodsTypeList);
        modelMap.put("plot",plots);
        return "admin";
    }









//end---------------------------------------------------------------------------------------------
//    超市模块
//    -------------------------------------------------------------------------------------------
//    超市页面(超市/评价信息/购物车详情页面)
    @PostMapping("/supermarket")
    public String supermarket(String name,String module,ModelMap modelMap){
        List<Module> modules =  userService.queryModule(module);//根据模块名称查询商品类型及商品
        List<Plot> plots = userService.queryPlotByName(name);
//        List<ShoppingCart> shopCarts = userService.queryShoppingCartByName("");
//        modelMap.put("shopCarts",shopCarts);//购物车商品


        modelMap.put("plotName",name);//用户小区
        modelMap.put("module",modules.get(0));//模块名称
        modelMap.put("goodsTypes",modules.get(0).getGoodsTypes());//商品类型及商品
        modelMap.put("evaluate",modules.get(0).getEvaluates());

        return "supermarkets/supermarket";
    }

    //购物车新增/更新数据
    @PostMapping("/shoppingCart/{modl}")
    @ResponseBody
    public void shoppingCart(@PathVariable String modl,@RequestBody Object[][] str){
        List<Module> moduleList = userService.queryModule(modl);
        for(int i=0;i<str.length;i++){
            ShoppingCart shopCart = new ShoppingCart((String) str[i][0],Double.parseDouble((String) str[i][1]),Long.parseLong((String) str[i][2]),moduleList.get(0));
            userService.saveShoppingCart(shopCart);
        }
    }


    //删除购物车单个商品
    @PostMapping("/deleteShoppingCarts/{name}")
    @ResponseBody
    public void deleteByOneCart(@PathVariable String name){
        userService.deleteShoppingCart(name);
    }


    //删除购物车所有商品
    @PostMapping("/deleteAll/{modl}")
    @ResponseBody
    public void deleteCart(@PathVariable String modl){
        List<Module> modules  = userService.queryModule(modl);
        List<ShoppingCart> shoppingCarts = modules.get(0).getCarts();
        if(shoppingCarts.size()>0){
            if(shoppingCarts.get(0).getTradePrice() != null){
                for(ShoppingCart shoppingCart:shoppingCarts){
                    userService.deleteShoppingCart(shoppingCart.getTradeName());
                }
            }
        }
    }


    //   支付订单操作
    @PostMapping("/orders")
    public String orders(ModelMap modelMap,long goodsSum,Double totalMoney,String orderNum,String shippingMethod,String[] goodsName,Double[] price,long[] number){
        List<OrderFrom> orderFromList = userService.queryOrderByNum(orderNum);
//        List<OrderGoods> orderGoodsList = new ArrayList<OrderGoods>();
        for(int i =0;i<goodsName.length;i++){
//            OrderGoods orderGoods1 = new OrderGoods(goodsName[i],price[i],number[i]);
            log.info("================");
            List<Goods> goods = userService.queryGoods("");
            for(Goods goods1:goods){
                if(goods1.getGoodsName().equals(orderFromList.get(0).getOrderGoodsList().get(i).getGoodsName())){

                }
            }
            orderFromList.get(0).getOrderGoodsList().get(i).setNumber(number[i]);
//            orderFromList.get(0).getOrderGoodsList().get(i).set
        }
        orderFromList.get(0).setGoodsSum(goodsSum);
        orderFromList.get(0).setTotalMoney(totalMoney);
        orderFromList.get(0).setState("已支付");
        orderFromList.get(0).setShippingMethod(shippingMethod);
        orderFromList.get(0).setHandle("评价");
        userService.updateOrderFrom(orderFromList.get(0));


        List<Photo> photos = userService.queryPhoto();
        modelMap.put("photos",photos);
        modelMap.put("plot",orderFromList.get(0).getUser().getPlot().getPlotName());
        modelMap.put("user",orderFromList.get(0).getUser());
        if(orderFromList.get(0).getUser().getPlot().getCommunitybulletins().size()>0){
            modelMap.put("bulletinContent",orderFromList.get(0).getUser().getPlot().getCommunitybulletins().get(0).getContent());
            modelMap.put("bulletinTheme",orderFromList.get(0).getUser().getPlot().getCommunitybulletins().get(0).getTheme());
        }else {
            modelMap.put("bulletin","");
            modelMap.put("bulletinContent","");
        }
        return "homepage";
    }


//    订单信息页面
    @PostMapping("/orderFrom")
    public String order(String name,ModelMap modelMap){
        User user = userService.logins(name);
        List<OrderFrom> orderFromList = new ArrayList<OrderFrom>();

        SimpleDateFormat data = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");//时间格式化
        Timestamp now = new Timestamp(System.currentTimeMillis());//定义格式不显示毫秒
        String orderTime = data.format(now);//获取当前时间
        String datas = orderTime.substring(0,10);
        for(OrderFrom order:user.getOrderFromList()){
            if(order.getState().equals("未支付")){
                String time = order.getOrderTime().substring(0,10);
                if(time.equals(datas)){
                    orderFromList.add(order);
                }
            }else {
                orderFromList.add(order);
            }

        }

        modelMap.put("user",user);
        modelMap.put("order",orderFromList);
        return "supermarkets/order";
    }


    @PostMapping("/evalu")
    public String eval(String name,String phone,ModelMap modelMap){
        modelMap.put("name",name);
        modelMap.put("phone",phone);
        return "supermarkets/evaluate";
    }



//    结算订单页面
    @PostMapping("/tallyOrder")
    public String tallyOrder(String[] tradeName,Double[] tradePrice,long[] buyNum,String module,String plotName,Double totalMoney,long goodsSum,ModelMap modelMap) throws ParseException {
        List<Module> modules = userService.queryModule(module);//所属模块
        List<Plot> plots = userService.queryPlotByName(plotName);//根据小区查到用户信息
        User user = plots.get(0).getUserList().get(0);
        //订单编号生成
        SimpleDateFormat data = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");//时间格式化
        Timestamp now = new Timestamp(System.currentTimeMillis());//定义格式不显示毫秒
        String orderTime = data.format(now);//获取当前时间
        String orderNum = modules.get(0).getGoodsTypes().get(0).getId()+modules.get(0).getGoodsTypes().get(0).getGoodsList().get(0).getId()+orderTime.substring(2,4)+orderTime.substring(5,7)+orderTime.substring(8,10)+orderTime.substring(11,13)+orderTime.substring(14,16)+plots.get(0).getId()+orderCount++;
        OrderFrom orderFrom = new OrderFrom(orderNum,goodsSum,totalMoney,"未支付","立即送达",orderTime,"支付",user,modules.get(0));
        userService.saveOrder(orderFrom);

        for (int i=0;i<tradeName.length;i++ ){
            OrderGoods orderGoods = new OrderGoods(tradeName[i],tradePrice[i],buyNum[i],orderFrom);
            userService.saveOrderGoods(orderGoods);
        }


        List<OrderFrom> orderFromList = userService.queryOrder(orderTime);
        modelMap.put("order", orderFromList.get(0));
        modelMap.put("orderGoods",orderFromList.get(0).getOrderGoodsList());
        return "supermarkets/tallyOrder";
    }

//    评价页面
    @PostMapping("/evaluate")
    public String evaluate(String phone,String moduleName,String content,String tua,String tub,String tuc,ModelMap modelMap){
        User user = userService.logins(phone);
        List<Module> modules = userService.queryModule(moduleName);
        SimpleDateFormat data = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");//时间格式化
        Timestamp now = new Timestamp(System.currentTimeMillis());//定义格式不显示毫秒
        String orderTime = data.format(now).substring(0,10);//获取当前时间

        Evaluate evaluate = new Evaluate(content,orderTime,tua,tub,tuc,user,modules.get(0));
        userService.saveEvaluate(evaluate);


        List<Photo> photos = userService.queryPhoto();
        modelMap.put("photos",photos);
        modelMap.put("plot",user.getPlot().getPlotName());
        modelMap.put("user",user);
        if(user.getPlot().getCommunitybulletins().size()>0){
            modelMap.put("bulletinContent",user.getPlot().getCommunitybulletins().get(0).getContent());
            modelMap.put("bulletinTheme",user.getPlot().getCommunitybulletins().get(0).getTheme());
        }else {
            modelMap.put("bulletin","");
            modelMap.put("bulletinContent","");
        }
        return "homepage";
    }



//    物业服务模块--------------------------------------------------------------------------------

    @PostMapping("/properlyService")
    public String properlyService(ModelMap modelMap,String phone){
        User user = userService.logins(phone);

        modelMap.put("phone",phone);
        modelMap.put("plot",user.getPlot().getPlotName());
        return "tenement/properlyService";
    }


//    物业报修
    @PostMapping("/properlyRepairs")
    public String properlyRepairs(ModelMap modelMap,String phone){
        User user = userService.logins(phone);
        List<ProperlyRepairs> properlyRepairsList = user.getProperlyRepairs();

//        对数据集合倒序排序
        Collections.sort(properlyRepairsList, new Comparator<ProperlyRepairs>() {
            @Override
            public int compare(ProperlyRepairs o1, ProperlyRepairs o2) {
                return orderCount.compareTo((int) o1.getId());
            }
        });


        modelMap.put("user",user);
        modelMap.put("properlyRepairsList",properlyRepairsList);
        return "tenement/properlyRepairs";
    }

    //   报修
    @PostMapping("/repairs")
    public String repairs(String phone,ModelMap modelMap){
        modelMap.put("phone",phone);
        return "tenement/addRepairs";
    }

    //    添加报修
    @PostMapping("/addRepairs")
//    @ResponseBody
    public String addRepairs(String phone,String center,String tua,String tub,String tuc,String tud,String tue,ModelMap modelMap){
        User user = userService.logins(phone);

        SimpleDateFormat data = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");//时间格式化
        Timestamp now = new Timestamp(System.currentTimeMillis());//定义格式不显示毫秒
        String orderTime = data.format(now);//获取当前时间


        ProperlyRepairs properlyRepairs = new ProperlyRepairs(center,orderTime,"已报修",tua,tub,tuc,tud,tue,user);
        userService.saveRepairs(properlyRepairs);

        User users = userService.logins(phone);
        List<ProperlyRepairs> properlyRepairsList = users.getProperlyRepairs();

//        对数据集合倒序排序
        Collections.sort(properlyRepairsList, new Comparator<ProperlyRepairs>() {
            @Override
            public int compare(ProperlyRepairs o1, ProperlyRepairs o2) {
                    return orderCount.compareTo((int) o1.getId());
            }
        });


        modelMap.put("user",user);
        modelMap.put("properlyRepairsList",properlyRepairsList);
        return "tenement/properlyRepairs";
    }
    //    修改报修状态
    @PostMapping("/updateRepairs/{time}/{status}")
    @ResponseBody
    public void updateRepairs(@PathVariable String status,@PathVariable String time){
        log.info(status);
        List<ProperlyRepairs> properlyRepairs = userService.queryRepairs(time);
        properlyRepairs.get(0).setStatus(status);
        userService.updateRepairs(properlyRepairs.get(0));
    }


    //    小区公告
    @PostMapping("/communityBulletin")
    public String communityBulletin(ModelMap modelMap,String phone,String name){
        User user = userService.logins(phone);
        List<Communitybulletin> communitybulletins = user.getPlot().getCommunitybulletins();

//        对数据集合倒序排序
        Collections.sort(communitybulletins, new Comparator<Communitybulletin>() {
            @Override
            public int compare(Communitybulletin o1, Communitybulletin o2) {
                return orderCount.compareTo((int) o1.getId());
            }
        });


        modelMap.put("user",user);
        modelMap.put("communitybulletins",communitybulletins);
        return "tenement/communityBulletin";
    }


    //    小区投票
    @PostMapping("/vote")
    public String vote(ModelMap modelMap,String phone){
        User user = userService.logins(phone);

        modelMap.put("user",user);
        modelMap.put("votes",user.getPlot().getVotes());
        return "tenement/vote";
    }

    @PostMapping("/voteContent")
    public String voteContent(ModelMap modelMap,String theme,String phone){
        User user = userService.logins(phone);
        List<Vote> votes = userService.queryVote(theme);

        for(VoteStatus voteStatus:user.getVoteStatuses()){
            if(voteStatus.getVote().getTheme().equals(theme)){
                modelMap.put("status",voteStatus.getStatus());
            }
        }


        modelMap.put("user",user);
        modelMap.put("history",0);
        modelMap.put("sum",user.getPlot().getUserList().size());
        modelMap.put("vote",votes.get(0));
        return "tenement/voteContent";
    }


    @PostMapping("/voteOption")
    public String voteOption(ModelMap modelMap,String theme,String phone){
        User user = userService.logins(phone);
        List<Vote> votes = userService.queryVote(theme);

        modelMap.put("user",user);
        modelMap.put("sum",user.getPlot().getUserList().size());
        modelMap.put("vote",votes.get(0));
        return "tenement/voteOption";
    }

    @PostMapping("/votePoll")
    public String votePoll(String[] info,String theme,String phone,ModelMap modelMap){
        User user = userService.logins(phone);
        List<Vote> votes = userService.queryVote(theme);

        VoteStatus voteStatus = new VoteStatus("已投票",user,votes.get(0));
        userService.saveVoteStatus(voteStatus);

        for(int i=0;i<info.length;i++){
            List<VoteContent> voteContents = userService.queryVoteContent(info[i]);
            long poll = voteContents.get(0).getPoll()+1;
            voteContents.get(0).setPoll(poll);
            userService.updateVoteContent(voteContents.get(0));
        }

        modelMap.put("user",user);
        modelMap.put("sum",user.getPlot().getUserList().size());
        modelMap.put("vote",votes.get(0));
        modelMap.put("status","已投票");
        modelMap.put("history",1);
        return "tenement/voteContent";
    }


    //    物业工作展示
    @PostMapping("/workDisplay")
    public String workDisplay(ModelMap modelMap,String phone,String name){
        User user = userService.logins(phone);
        List<WorkDisplay> workDisplays = user.getPlot().getWorkDisplays();

//        对数据集合倒序排序
        Collections.sort(workDisplays, new Comparator<WorkDisplay>() {
            @Override
            public int compare(WorkDisplay o1, WorkDisplay o2) {
                return orderCount.compareTo((int) o1.getId());
            }
        });


        modelMap.put("user",user);
        modelMap.put("workDisplays",workDisplays);
        return "tenement/workDisplay";
    }


    //    生活缴费
    @PostMapping("/livingPayment")
    public String livingPayment(ModelMap modelMap,String phone){
        modelMap.put("phone",phone);
        return "tenement/livingPayment";
    }

//    充值缴费操作
    @PostMapping("/rechargePayment/{phone}")
    @ResponseBody
    public void rechargePayment(@PathVariable String phone,@RequestBody Object[] str){
        User user = userService.logins(phone);

        SimpleDateFormat data = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");//时间格式化
        Timestamp now = new Timestamp(System.currentTimeMillis());//定义格式不显示毫秒
        String orderTime = data.format(now);//获取当前时间

        String strs = (String) str[1];
        String[] money = strs.split("元");

        LivingPayment livingPayment = new LivingPayment((String) str[0],Double.parseDouble(money[0]),orderTime,"已缴费",user);
        userService.savePayment(livingPayment);
    }


//    修改缴费状态
    @PostMapping("/updatePayment/{time}/{status}")
    @ResponseBody
    public void updatePayment(@PathVariable String time,@PathVariable String status){
        List<LivingPayment> livingPayments = userService.queryPayment(time);
        livingPayments.get(0).setStatus(status);
        userService.updataPayment(livingPayments.get(0));
    }


//    充值历史操作
    @PostMapping("/rechargeHistory")
    public String rechargeHistory(ModelMap modelMap,String phone){
        User user = userService.logins(phone);
        modelMap.put("user",user);
        return "tenement/rechargeHistory";
    }


//    发布公告
    @PostMapping("/announce")
    public String announce(String plotName,String theme,String content,String tu1,String tu2,String tu3,String tu4,String tu5){
        List<Plot> plots = userService.queryPlotByName(plotName);

        SimpleDateFormat data = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");//时间格式化
        Timestamp now = new Timestamp(System.currentTimeMillis());//定义格式不显示毫秒
        String orderTime = data.format(now);//获取当前时间

        Communitybulletin communitybulletin = new Communitybulletin(theme,orderTime,content,tu1,tu2,tu3,tu4,tu5,plots.get(0));
//        userService.saveBulletin(communitybulletin);
        return "redirect:/admins";
    }


    //    发布物业工作展示
    @PostMapping("/display")
    public String display(String plotName,String theme,String content,String tu1,String tu2,String tu3,String tu4,String tu5){
        List<Plot> plots = userService.queryPlotByName(plotName);

        SimpleDateFormat data = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");//时间格式化
        Timestamp now = new Timestamp(System.currentTimeMillis());//定义格式不显示毫秒
        String orderTime = data.format(now);//获取当前时间

        WorkDisplay workDisplay = new WorkDisplay(theme,orderTime,content,tu1,tu2,tu3,tu4,tu5,plots.get(0));
        userService.saveDisplay(workDisplay);
        return "redirect:/admins";
    }


//    发布投票
    @PostMapping("/postPoll")
    public String postPoll(String theme,String content,String type,long num,String[] photo,String[] info,String plotName){
        List<Plot> plots = userService.queryPlotByName(plotName);

        SimpleDateFormat data = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");//时间格式化
        Timestamp now = new Timestamp(System.currentTimeMillis());//定义格式不显示毫秒
        String orderTime = data.format(now);//获取当前时间
        if(type.equals("单选")){
            Vote vote = new Vote(theme,orderTime,type,1,content,plots.get(0));
            userService.saveVote(vote);
            for (int i=0;i<info.length;i++){
                VoteContent voteContent = new VoteContent(photo[i],info[i],vote);
                userService.saveVoteContent(voteContent);
            }
        }else {
            Vote vote = new Vote(theme,orderTime,type,num,content,plots.get(0));
            userService.saveVote(vote);
            for (int i=0;i<info.length;i++){
                VoteContent voteContent = new VoteContent(photo[i],info[i],vote);
                userService.saveVoteContent(voteContent);
            }
        }
        return "redirect:/admins";
    }



    //    发布装修案例
    @PostMapping("/case")
    public String releaseCase(String plotName,String theme,String info,String tu1,String tu2,String tu3,String tu4,String tu5){
        List<Plot> plots = userService.queryPlotByName(plotName);

        SimpleDateFormat data = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");//时间格式化
        Timestamp now = new Timestamp(System.currentTimeMillis());//定义格式不显示毫秒
        String orderTime = data.format(now);//获取当前时间

        DecorationCase decorationCase = new DecorationCase(theme,orderTime,info,tu1,tu2,tu3,tu4,tu5,plots.get(0));
        userService.saveDecorationCase(decorationCase);
        return "redirect:/admins";
    }


    //    发布装修日志
    @PostMapping("/log")
    public String releaseLog(String userName,long progress,String theme,String info,String tu1,String tu2,String tu3,String tu4,String tu5){
        List<User> users = userService.queryUserByName(userName);
        users.get(0).setProgress(progress);
        userService.updateUser(users.get(0));

        SimpleDateFormat data = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");//时间格式化
        Timestamp now = new Timestamp(System.currentTimeMillis());//定义格式不显示毫秒
        String orderTime = data.format(now);//获取当前时间

        DecorationLog decorationLog = new DecorationLog(theme,orderTime,info,tu1,tu2,tu3,tu4,tu5,users.get(0));
        userService.saveDecorationLog(decorationLog);
        return "redirect:/admins";
    }

    @PostMapping("/progress")
    @ResponseBody
    public String userProgress(HttpServletRequest request){
        log.info(request.getParameter("userName"));
        List<User> users = userService.queryUserByName(request.getParameter("userName"));
        return String.valueOf(users.get(0).getProgress());
    }


    //    新房装修
    @PostMapping("/decorationCase")
    public String decorationCase(ModelMap modelMap,String phone){
        User user = userService.logins(phone);
        List<DecorationCase> decorationCases = user.getPlot().getDecorationCases();

//        对数据集合倒序排序
        Collections.sort(decorationCases, new Comparator<DecorationCase>() {
            @Override
            public int compare(DecorationCase o1, DecorationCase o2) {
                return orderCount.compareTo((int) o1.getId());
            }
        });


        modelMap.put("user",user);
        modelMap.put("decorationCases",decorationCases);
        return "tenement/decorationCase";
    }

    @PostMapping("/hot/{name}/{hot}")
    @ResponseBody
    public void hot(@PathVariable long hot,@PathVariable String name){
        List<DecorationCase> decorationCases = userService.queryDecorationCase(name);
        decorationCases.get(0).setHot(hot);
        userService.updateDecorationCase(decorationCases.get(0));
    }



    //    装修日志
    @PostMapping("/decorationLog")
    public String decorationLog(ModelMap modelMap,String phone){
        User user = userService.logins(phone);
        List<DecorationLog> decorationLogs = user.getDecorationLogs();

//        对数据集合倒序排序
        Collections.sort(decorationLogs, new Comparator<DecorationLog>() {
            @Override
            public int compare(DecorationLog o1, DecorationLog o2) {
                return orderCount.compareTo((int) o1.getId());
            }
        });

        modelMap.put("user",user);
        modelMap.put("decorationLogs",decorationLogs);
        return "tenement/decorationLog";
    }






//    end----------------------------------------------------------------------------------------

}
