package com.hjw.example.domain;

import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;

/**
 * Created by 黄毅 on 2017/7/19.
 */
@Data
@Entity
@Table(name = "shopping_cart")
public class ShoppingCart implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    @Column(name = "trade_name")
    private String tradeName;
    @Column(name = "trade_price")
    private Double tradePrice;
    @Column(name = "buy_num")
    private long buyNum;

    @ManyToOne(cascade = CascadeType.PERSIST , optional = true)
    @JoinColumn(name = "modu_id" , unique = false)
    private Module mod;

    public ShoppingCart(){}

    public ShoppingCart(String tradeName,Double tradePrice,long buyNum,Module mod){
        this.tradeName = tradeName;
        this.tradePrice = tradePrice;
        this.buyNum = buyNum;
        this.mod = mod;
    }
}
