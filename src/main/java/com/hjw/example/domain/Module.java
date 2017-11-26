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
public class Module implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    @Column(name = "module_name")
    private String moduleName;

    @Column(name = "module_photoHref")
    private String photoHref;

    @OneToMany(mappedBy = "module", cascade = CascadeType.PERSIST, fetch = FetchType.EAGER)
    private List<GoodsType> goodsTypes = new ArrayList<GoodsType>();

    @OneToMany(mappedBy = "modules", cascade = CascadeType.PERSIST, fetch = FetchType.EAGER)
    private List<OrderFrom> orderFroms;

    @OneToMany(mappedBy = "mod" , cascade = CascadeType.PERSIST , fetch = FetchType.EAGER)
    private List<ShoppingCart> carts;

    @OneToMany(mappedBy = "modu" , cascade = CascadeType.PERSIST , fetch = FetchType.EAGER)
    private List<Evaluate> evaluates;

}
