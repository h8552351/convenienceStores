package com.hjw.example.domain;

import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;

/**
 * Created by 黄毅 on 2017/7/17.
 */
@Data
@Entity
@Table(name = "order_goods")
public class OrderGoods implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    @Column(name = "goods_name")
    private String goodsName;
    private Double price;
    private long number;

    @ManyToOne(cascade = CascadeType.PERSIST, optional = true)
    @JoinColumn(name = "order_id", unique = false)
    private OrderFrom orderFrom;

    public OrderGoods(){}

    public OrderGoods(String goodsName,Double price,long number,OrderFrom orderFrom){
        this.goodsName = goodsName;
        this.price = price;
        this.number = number;
        this.orderFrom = orderFrom;
    }
}
