package com.hjw.example.domain;

import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

/**
 * Created by 黄毅 on 2017/7/17.
 */
@Data
@Entity
@Table(name = "order_from")
public class OrderFrom implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @Column(name = "order_num")
    private String orderNum;//订单编号

    @Column(name = "goods_sum")
    private long goodsSum;//商品总数

    @Column(name = "total_money")
    private Double totalMoney;//总金额

    private String state;//订单状态

    @Column(name = "shipping_method")
    private String shippingMethod;//配送方式

    @Column(name = "order_time")
    private String orderTime;//订单时间

    private String handle;//操作

    @ManyToOne(cascade = CascadeType.PERSIST, optional = true)
    @JoinColumn(name = "user_id", unique = false)
    private User user;

    @ManyToOne(cascade = CascadeType.PERSIST, optional = true)
    @JoinColumn(name = "module_id", unique = false)
    private Module modules;

    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JoinColumn(name = "order_id")
    private List<OrderGoods> orderGoodsList = new ArrayList<OrderGoods>();

    public OrderFrom(){}

    public OrderFrom(String orderNum,long goodsSum,Double totalMoney,String state, String shippingMethod, String orderTime,String handle, User user, Module modules){
        this.orderNum = orderNum;
        this.goodsSum = goodsSum;
        this.totalMoney = totalMoney;
        this.state = state;
        this.shippingMethod = shippingMethod;
        this.orderTime = orderTime;
        this.handle= handle;
        this.user = user;
        this.modules = modules;
    }
}
