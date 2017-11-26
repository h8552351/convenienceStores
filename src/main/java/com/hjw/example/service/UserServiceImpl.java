package com.hjw.example.service;

import com.hjw.example.domain.*;
import com.hjw.example.repository.UserDao;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

/**
 * Created by 黄毅 on 2017/6/26.
 */
@Service
@Transactional
@Slf4j
public class UserServiceImpl implements UserService {

    @Autowired
    private UserDao userDao;

    @Override
    public User login(String phone, String pwd) {
//        try {
//            return newsDao.queryAllNews("");
//        } catch (Exception e) {
//            // TODO Auto-generated catch block
//            e.printStackTrace();
//        }
//        return null;
        try {
            List<User> users = userDao.login(phone);
//            log.info(users.get(0).getNickName());
            if (users != null) {
                if (users.get(0).getPwd().equals(pwd)) {
                    return users.get(0);
                }
            }
        }catch (Exception e){
            e.printStackTrace();
        }
        return null;
    }

    @Override
    public User logins(String phone) {
        try {
            List<User> users = userDao.logins(phone);
            if (users != null) {
                return users.get(0);
            }
        }catch (Exception e){
            e.printStackTrace();
        }
        return null;
    }

    @Override
    public List<User> queryUser(String phone) {
        return userDao.logins(phone);
    }

    @Override
    public List<User> queryUserByName(String userName) {
        return userDao.queryUserByName(userName);
    }

    @Override
    public void regist(User user) {
        userDao.saveUser(user);
    }



    @Override
    public List<City> queryCity() {
        List<City> citys = null;
        try{
            citys = userDao.queryCity();
        }catch (Exception e){
            e.printStackTrace();
        }
        return citys;
    }

    @Override
    public List<Plot> queryPlot(long cityId) {
        try {
            return userDao.queryPlot(cityId);
        }catch (Exception e){
            e.printStackTrace();
        }
        return null;
    }

    @Override
    public List<Plot> queryPlotByName(String name) {
        List<Plot> plots = null;
        try {
            plots = userDao.queryPlotByName(name);
            log.info(plots.get(0).getPlotName()+"2222");
            return userDao.queryPlotByName(name);
        }catch (Exception e){
            e.printStackTrace();
        }
        return null;
    }

    @Override
    public void updatePwd(String phone, String pwd) {
        try{
            List<User> users = userDao.login(phone);
            if(users != null){
                User user = users.get(0);
                user.setPwd(pwd);
                userDao.updatePwd(user);
            }
        }catch (Exception e){
            e.printStackTrace();
        }
    }

    @Override
    public void updateUser(User user) {
        userDao.updatePwd(user);
    }

    @Override
    public List<Photo> queryPhoto() {
        return userDao.queryPhoto();
    }

    @Override
    public List<Photo> queryPhotoById(String id) {
        return userDao.queryPhotoById(id);
    }

    @Override
    public void updatePhoto(String id,String photo) {
        try{
            List<Photo> photos = userDao.queryPhotoById(id);
            if(photos != null){
                Photo photo1 = photos.get(0);
                photo1.setPhotoHref(photo);
                userDao.updatePhoto(photo1);
            }
        }catch (Exception e){
            e.printStackTrace();
        }

    }

    @Override
    public void saveCity(City city) {
            userDao.saveCity(city);
    }

    @Override
    public void savePlot(Plot plot) {
        userDao.savePlot(plot);
    }

    @Override
    public List<City> queryCityByName(String cityName) {
        return userDao.queryCityByName(cityName);
    }

    @Override
    public List<Module> queryModule(String name) {
        List<Module> modules = userDao.queryModule(name);
        return modules;
    }

    @Override
    public List<ShoppingCart> queryShoppingCartByName(String tradeName) {
        return userDao.queryShoppingCartByName(tradeName);
    }

    @Override
    public void deleteShoppingCart(String tradeName) {
        List<ShoppingCart> shopList = userDao.queryShoppingCartByName(tradeName);
        if(shopList.size() >0){
            if(shopList.get(0).getTradePrice() != null){
                userDao.deleteShoppingCart(shopList.get(0));
            }
        }
    }

    @Override
    public void saveShoppingCart(ShoppingCart shopCart) {
        List<ShoppingCart> cartList =  userDao.queryShoppingCartByName(shopCart.getTradeName());
        if(cartList.size()>0){
            if(cartList.get(0).getTradeName() != null){
                cartList.get(0).setBuyNum(shopCart.getBuyNum());
                userDao.updateShoppingCart(cartList.get(0));
            }else {
                userDao.saveShoppingCart(shopCart);
            }
        }else {
            userDao.saveShoppingCart(shopCart);
        }
    }

    @Override
    public void saveOrder(OrderFrom orderFrom) {
        userDao.saveOrder(orderFrom);
    }

    @Override
    public List<OrderFrom> queryOrder(String orderTime) {
        return userDao.queryOrder(orderTime);
    }

    @Override
    public List<OrderFrom> queryOrderByNum(String orderNum) {
        return userDao.queryOrderByNum(orderNum);
    }

    @Override
    public void saveOrderGoods(OrderGoods orderGoods) {
        userDao.saveOrderGoods(orderGoods);
    }

    @Override
    public void updateOrderFrom(OrderFrom orderFrom) {
        userDao.updateOrderFrom(orderFrom);
    }

    @Override
    public List<Goods> queryGoods(String goodsName) {
        return userDao.queryGoods(goodsName);
    }

    @Override
    public void updateGoods(Goods goods) {
        userDao.updateGoods(goods);
    }

    @Override
    public void saveGoods(Goods goods) {
        userDao.saveGoods(goods);
    }

    @Override
    public List<GoodsType> queryGoodsType(String typeName) {
        return userDao.queryGoodsType(typeName);
    }

    @Override
    public void saveGoodsType(GoodsType goodsType) {
        userDao.saveGoodsType(goodsType);
    }

    @Override
    public void saveEvaluate(Evaluate evaluate) {
        userDao.saveEvaluate(evaluate);
    }

    @Override
    public void saveRepairs(ProperlyRepairs properlyRepairs) {
        userDao.saveRepairs(properlyRepairs);
    }

    @Override
    public void updateRepairs(ProperlyRepairs properlyRepairs) {
        userDao.updateRepairs(properlyRepairs);
    }

    @Override
    public List<ProperlyRepairs> queryRepairs(String time) {
        return userDao.queryRepairs(time);
    }

    @Override
    public void savePayment(LivingPayment livingPayment) {
        userDao.savePayment(livingPayment);
    }

    @Override
    public void updataPayment(LivingPayment livingPayment) {
        userDao.updataPayment(livingPayment);
    }

    @Override
    public List<LivingPayment> queryPayment(String time) {
        return userDao.queryPayment(time);
    }

    @Override
    public void saveBulletin(Communitybulletin communitybulletin) {
        userDao.saveBulletin(communitybulletin);
    }

    @Override
    public void saveDisplay(WorkDisplay workDisplay) {
        userDao.saveDisplay(workDisplay);
    }

    @Override
    public void saveVote(Vote vote) {
        userDao.saveVote(vote);
    }

    @Override
    public void saveVoteStatus(VoteStatus voteStatus) {
        userDao.saveVoteStatus(voteStatus);
    }

    @Override
    public List<Vote> queryVote(String theme) {
        return userDao.queryVote(theme);
    }

    @Override
    public void saveVoteContent(VoteContent voteContent) {
        userDao.saveVoteContent(voteContent);
    }

    @Override
    public void updateVoteContent(VoteContent voteContent) {
        userDao.updateVoteContent(voteContent);
    }

    @Override
    public List<VoteContent> queryVoteContent(String info) {
        return userDao.queryVoteContent(info);
    }

    @Override
    public void saveDecorationCase(DecorationCase decorationCase) {
        userDao.saveDecorationCase(decorationCase);
    }

    @Override
    public List<DecorationCase> queryDecorationCase(String theme) {
        return userDao.queryDecorationCase(theme);
    }

    @Override
    public void updateDecorationCase(DecorationCase decorationCase) {
        userDao.updateDecorationCase(decorationCase);
    }

    @Override
    public void saveDecorationLog(DecorationLog decorationLog) {
        userDao.saveDecorationLog(decorationLog);
    }

//    @Override
//    public List<Goods> allGoods(int pageNumber, int pageSize) {
//        PageHelper.startPage(pageNumber,pageSize);
//        List<Goods> goods = userDao.queryModule("社区超市").get(0).getGoodsTypes().get(0).getGoodsList();
//        return goods;
//    }
}
