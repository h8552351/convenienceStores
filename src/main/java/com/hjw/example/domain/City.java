package com.hjw.example.domain;

import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;

/**
 * Created by 黄毅 on 2017/7/18.
 */
@Data
@Entity
public class City implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    @Column(name = "city_name")
    private String cityName;

    @OneToMany(mappedBy = "city" , cascade = CascadeType.PERSIST , fetch = FetchType.EAGER)
    private List<Plot> plotList;

    public City(){}

    public City(String cityName){
        this.cityName = cityName;
    }
}
