package com.hjw.example.service;

import com.hjw.example.domain.*;

import java.util.List;

/**
 * Created by 黄毅 on 2017/6/26.
 */

public interface UserService {

//登录验证
    public User login(String name,String pwd);

    public User logins(String phone);

    public List<User> queryUser(String phone);//查询所有用户

    //    根据用户姓名查询用户（查询）
    public List<User> queryUserByName(String userName);

    //    用户注册
    public  void regist(User user);
//    选择城市
    public List<City> queryCity();

//    选择小区
    public List<Plot> queryPlot(long cityId);

    public List<Plot> queryPlotByName(String name);

//    修改密码
    public void updatePwd(String phone,String pwd);

//    修改进度
    public void updateUser(User user);

    public List<Photo> queryPhoto();

    public List<Photo> queryPhotoById(String id);

    public void updatePhoto(String id,String photo);

    public void saveCity(City city);

    public void savePlot(Plot plot);

    public List<City> queryCityByName(String cityName);


//    超市模块-------------------------------------------------------------
    public List<Module> queryModule(String name);//根据模块名称查询信息
    public List<ShoppingCart> queryShoppingCartByName(String tradeName);//根据购物车名称查询信息
    public void deleteShoppingCart(String tradeName);//删除单个购物车商品
    public  void saveShoppingCart(ShoppingCart shoppingCart);//增加购物车商品

    public void saveOrder(OrderFrom orderFrom);//增加订单
    public List<OrderFrom> queryOrder(String orderTime);//根据时间查询订单
    public List<OrderFrom> queryOrderByNum(String orderNum);//根据编号查询订单
    public void saveOrderGoods(OrderGoods orderGoods);//新增订单商品
    public void updateOrderFrom(OrderFrom orderFrom);//修改订单
    public List<Goods> queryGoods(String goodsName);//根据商品名称查询商品
    public void updateGoods(Goods goods);//修改商品
    public void saveGoods(Goods goods);//增加商品
    public List<GoodsType> queryGoodsType(String typeName);//根据类型名称查询类型
    public void saveGoodsType(GoodsType goodsType);//增加商品类型

    public void saveEvaluate(Evaluate evaluate);//增加评价
//    public List<Goods> allGoods(int pageNumber,int pageSize);

//    end----------------------------------------------------------------------


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

    public void saveVoteStatus(VoteStatus voteStatus);//添加用户投票状态

    public List<Vote> queryVote(String theme);//根据主题查询投票

    public void saveVoteContent(VoteContent voteContent);//添加投票选项内容

    public void updateVoteContent(VoteContent voteContent);//修改投票选项内容

    public List<VoteContent> queryVoteContent(String info);//根据选项描述查询投票选项

    public void saveDecorationCase(DecorationCase decorationCase);//添加装修案例

    public List<DecorationCase> queryDecorationCase(String theme);//根据主题查询案例

    public void updateDecorationCase(DecorationCase decorationCase);//修改案例

    public void saveDecorationLog(DecorationLog decorationLog);//添加装修日志




//    end---------------------------------------------------------------------------------------

}
