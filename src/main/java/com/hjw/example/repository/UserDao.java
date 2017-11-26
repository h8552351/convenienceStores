package com.hjw.example.repository;

import com.hjw.example.domain.*;

import java.util.List;

/**
 * Created by 黄毅 on 2017/6/26.
 */
public interface UserDao {

//    新增城市
//    public void saveCity(City city);
//    新增小区
//    查询城市
    public List<City> queryCity();
//    根据城市名称查询小区
    public List<Plot> queryPlot(long cityId);

    public List<Plot> queryPlotByName(String name);
//    注册用户（新增）
    public void saveUser(User user);
//    根据用户手机登录用户（查询）
    public List<User> login(String phone);

    //    根据用户姓名查询用户（查询）
    public List<User> queryUserByName(String userName);

    public List<User> logins(String phone);
//    根据用户查询小区地址
    public List<User> address(User user);
//    根据用户修改密码
    public void updatePwd(User user);

    public List<Photo> queryPhoto();

    public List<Photo> queryPhotoById(String id);

    public void updatePhoto(Photo photo);

    public void saveCity(City city);

    public void savePlot(Plot plot);

    public List<City> queryCityByName(String cityName);


//超市模块-------------------------------------------------------
    public List<Module> queryModule(String name);//跟模块名称查询信息

    public List<ShoppingCart> queryShoppingCartByName(String tradeName);
    public void updateShoppingCart(ShoppingCart shoppingCart);
    public void deleteShoppingCart(ShoppingCart shoppingCart);
    public void saveShoppingCart(ShoppingCart shoppingCart);//增加购物车商品

//    新增订单
    public void saveOrder(OrderFrom orderFrom);
    public List<OrderFrom> queryOrder(String orderTime);//根据时间查询订单
    public List<OrderFrom> queryOrderByNum(String orderNum);//根据编号查询订单
    public void saveOrderGoods(OrderGoods orderGoods);//新增订单商品
    public void updateOrderGoods(OrderGoods orderGoods);//修改订单商品
    public void updateOrderFrom(OrderFrom orderFrom);//修改订单
    public List<Goods> queryGoods(String goodsName);//根据商品名称查询商品
    public List<Goods> queryGoodsByStste(String state);//根据商品状态查询商品
    public void updateGoods(Goods goods);//修改商品
    public void saveGoods(Goods goods);//增加商品
    public List<GoodsType> queryGoodsType(String typeName);//根据类型名称查询类型
    public void saveGoodsType(GoodsType goodsType);//增加商品类型


    public void saveEvaluate(Evaluate evaluate);//增加评价


//end-------------------------------------------------------------

//    物业服务/装修服务-------------------------------------------------------------------

    public void saveRepairs(ProperlyRepairs properlyRepairs);//新增报修

    public void updateRepairs(ProperlyRepairs properlyRepairs);//修改报修

    public List<ProperlyRepairs> queryRepairs(String time);//根据报修时间查询报修

    public void savePayment(LivingPayment livingPayment);//新增缴费

    public void updataPayment(LivingPayment livingPayment);//修改缴费

    public List<LivingPayment> queryPayment(String time);//根据缴费时间查询缴费

    public void saveBulletin(Communitybulletin communitybulletin);//添加公告

    public void saveDisplay(WorkDisplay workDisplay);//添加物业工作展示

    public void saveVote(Vote vote);//添加投票

    public List<Vote> queryVote(String theme);//根据主题查询投票

    public void saveVoteStatus(VoteStatus voteStatus);//添加用户投票状态

    public void saveVoteContent(VoteContent voteContent);//添加投票选项内容

    public void updateVoteContent(VoteContent voteContent);//修改投票选项内容

    public List<VoteContent> queryVoteContent(String info);//根据选项描述查询投票选项

    public void saveDecorationCase(DecorationCase decorationCase);//添加装修案例

    public List<DecorationCase> queryDecorationCase(String theme);//根据主题查询案例

    public void updateDecorationCase(DecorationCase decorationCase);//修改案例

    public void saveDecorationLog(DecorationLog decorationLog);//添加装修日志




//    end---------------------------------------------------------------------------------------






}
