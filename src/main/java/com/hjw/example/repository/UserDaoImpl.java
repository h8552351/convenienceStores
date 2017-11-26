package com.hjw.example.repository;

import com.hjw.example.domain.*;
import lombok.extern.slf4j.Slf4j;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by 黄毅 on 2017/6/26.
 */
@Repository
@Slf4j
public class UserDaoImpl implements UserDao {

    @Autowired
    private SessionFactory sessionFactory;

    private Session getSession(){
        return sessionFactory.getCurrentSession();
    }


    @Override
    public List<City> queryCity() {
        return this.getSession().createQuery("from City").list();
    }

    @Override
    public List<Plot> queryPlot(long cityId) {
        return this.getSession().createQuery("from Plot where cityId = "+cityId).list();
    }

    @Override
    public List<Plot> queryPlotByName(String name) {
        log.info("+"+name+"dao");
        return this.getSession().createQuery("from Plot where plotName like '%"+name+"%'").list();
    }

    @Override
    public void saveUser(User user) {
        this.getSession().save(user);
    }

    @Override
    public List<User> login(String phone) {
        return this.getSession().createQuery("from User where phone like '%"+phone+"%'").list();
    }

    @Override
    public List<User> queryUserByName(String userName) {
        return this.getSession().createQuery("from User where userName like '%"+userName+"%'").list();
    }

    @Override
    public List<User> logins(String phone) {
        return this.getSession().createQuery("from User where phone like '%"+phone+"%'").list();
    }

    @Override
    public List<User> address(User user) {
        return this.getSession().createQuery("from User where id = "+user.getId()).list();
    }

    @Override
    public void updatePwd(User user) {
        this.getSession().update(user);
    }

    @Override
    public List<Photo> queryPhoto() {
        return this.getSession().createQuery("from Photo").list();
    }

    @Override
    public List<Photo> queryPhotoById(String id) {
        return this.getSession().createQuery("from Photo where id = '"+id+"'").list();
    }

    @Override
    public void updatePhoto(Photo photo) {
        this.getSession().update(photo);
    }

    @Override
    public void saveCity(City city) {
        this.getSession().save(city);
    }

    @Override
    public void savePlot(Plot plot) {
        this.getSession().save(plot);
    }

    @Override
    public List<City> queryCityByName(String cityName) {
        return this.getSession().createQuery("from City where cityName like '%"+cityName+"%'").list();
    }

    @Override
    public List<Module> queryModule(String name) {
        return this.getSession().createQuery("from Module where moduleName like '%"+name+"%'").list();
    }

    @Override
    public List<ShoppingCart> queryShoppingCartByName(String tradeName) {
        return this.getSession().createQuery("from ShoppingCart where tradeName like '%"+tradeName+"%'").list();
    }

    @Override
    public void updateShoppingCart(ShoppingCart shoppingCart) {
        this.getSession().update(shoppingCart);
    }

    @Override
    public void deleteShoppingCart(ShoppingCart shoppingCart) {
        this.getSession().delete(shoppingCart);
    }

    @Override
    public void saveShoppingCart(ShoppingCart shoppingCart) {
        this.getSession().save(shoppingCart);
    }

    @Override
    public void saveOrder(OrderFrom orderFrom) {
        this.getSession().save(orderFrom);
    }

    @Override
    public List<OrderFrom> queryOrder(String orderTime) {
        return this.getSession().createQuery("from OrderFrom where orderTime = '"+orderTime+"'").list();
    }

    @Override
    public List<OrderFrom> queryOrderByNum(String orderNum) {
        return this.getSession().createQuery("from OrderFrom where orderNum = '"+orderNum+"'").list();
    }

    @Override
    public void saveOrderGoods(OrderGoods orderGoods) {
        this.getSession().save(orderGoods);
    }

    @Override
    public void updateOrderGoods(OrderGoods orderGoods) {
        this.getSession().update(orderGoods);
    }

    @Override
    public void updateOrderFrom(OrderFrom orderFrom) {
        this.getSession().update(orderFrom);
    }

    @Override
    public List<Goods> queryGoods(String goodsName) {
        return this.getSession().createQuery("from Goods where goodsName like '%"+goodsName+"%'").list();
    }

    @Override
    public List<Goods> queryGoodsByStste(String state) {
        return this.getSession().createQuery("from Goods where goodsStatus = '"+state+"'").list();
    }

    @Override
    public void updateGoods(Goods goods) {
        this.getSession().update(goods);
    }

    @Override
    public void saveGoods(Goods goods) {
        this.getSession().save(goods);
    }

    @Override
    public List<GoodsType> queryGoodsType(String typeName) {
        return this.getSession().createQuery("from GoodsType where typeName like '%"+typeName+"%'").list();
    }

    @Override
    public void saveGoodsType(GoodsType goodsType) {
        this.getSession().save(goodsType);
    }

    @Override
    public void saveEvaluate(Evaluate evaluate) {
        this.getSession().save(evaluate);
    }

    @Override
    public void saveRepairs(ProperlyRepairs properlyRepairs) {
        this.getSession().save(properlyRepairs);
    }

    @Override
    public void updateRepairs(ProperlyRepairs properlyRepairs) {
        this.getSession().update(properlyRepairs);
    }

    @Override
    public List<ProperlyRepairs> queryRepairs(String time) {
        return this.getSession().createQuery("from ProperlyRepairs where time like '%"+time+"%'").list();
    }

    @Override
    public void savePayment(LivingPayment livingPayment) {
        this.getSession().save(livingPayment);
    }

    @Override
    public void updataPayment(LivingPayment livingPayment) {
        this.getSession().update(livingPayment);
    }

    @Override
    public List<LivingPayment> queryPayment(String time) {
        return this.getSession().createQuery("from LivingPayment where time like '%"+time+"%'").list();
    }

    @Override
    public void saveBulletin(Communitybulletin communitybulletin) {
        this.getSession().save(communitybulletin);
    }

    @Override
    public void saveDisplay(WorkDisplay workDisplay) {
        this.getSession().save(workDisplay);
    }

    @Override
    public void saveVote(Vote vote) {
        this.getSession().save(vote);
    }

    @Override
    public List<Vote> queryVote(String theme) {
        return this.getSession().createQuery("from Vote where theme like '%"+theme+"%'").list();
    }

    @Override
    public void saveVoteStatus(VoteStatus voteStatus) {
        this.getSession().save(voteStatus);
    }

    @Override
    public void saveVoteContent(VoteContent voteContent) {
        this.getSession().save(voteContent);
    }

    @Override
    public void updateVoteContent(VoteContent voteContent) {
        this.getSession().update(voteContent);
    }

    @Override
    public List<VoteContent> queryVoteContent(String info) {
        return this.getSession().createQuery("from VoteContent where info like '%"+info+"%'").list();
    }

    @Override
    public void saveDecorationCase(DecorationCase decorationCase) {
        this.getSession().save(decorationCase);
    }

    @Override
    public List<DecorationCase> queryDecorationCase(String theme) {
        return this.getSession().createQuery("from DecorationCase where theme like '%"+theme+"%'").list();
    }

    @Override
    public void updateDecorationCase(DecorationCase decorationCase) {
        this.getSession().update(decorationCase);
    }

    @Override
    public void saveDecorationLog(DecorationLog decorationLog) {
        this.getSession().save(decorationLog);
    }
}
