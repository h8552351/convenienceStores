package com.hjw.example.domain;

import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by 黄毅 on 2017/7/13.
 */
@Data
@Entity
@Table(name = "goods_type")
public class GoodsType implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    @Column(name = "type_name")
    private String typeName;

    @ManyToOne(cascade = CascadeType.REFRESH, optional = true)
    @JoinColumn(name = "module_id", unique = false)
    private Module module;

    @OneToMany(mappedBy = "goodsType", cascade = CascadeType.REFRESH, fetch = FetchType.EAGER)
    private List<Goods> goodsList = new ArrayList<Goods>();

    public GoodsType(){}

    public GoodsType(String typeName,Module module){
        this.typeName = typeName;
        this.module = module;
    }
}
