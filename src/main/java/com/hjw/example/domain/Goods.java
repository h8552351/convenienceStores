package com.hjw.example.domain;

import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;

/**
 * Created by 黄毅 on 2017/7/13.
 */
@Data
@Entity
public class Goods implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    @Column(name = "goods_name")
    private String goodsName;
    @Column(name = "goods_details")
    private String goodsDetails;

    private Double price;
    @Column(name = "goods_num")
    private long goodsNum;

    private long threshold;

    @Column(name = "goods_status")
    private String goodsStatus;
    @ManyToOne(cascade = CascadeType.REFRESH, optional = true)
    @JoinColumn(name = "type_id", unique = false)
    private GoodsType goodsType;

    public Goods(){};

    public Goods(String goodsName,String goodsDetails,Double price,long goodsNum,long threshold,String goodsStatus,GoodsType goodsType){
        this.goodsName = goodsName;
        this.goodsDetails = goodsDetails;
        this.price = price;
        this.goodsNum = goodsNum;
        this.threshold = threshold;
        this.goodsStatus = goodsStatus;
        this.goodsType = goodsType;

    }
}
