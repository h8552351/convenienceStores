package com.hjw.example.domain;

import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;

/**
 * Created by 黄毅 on 2017/7/24.
 */
@Data
@Entity
public class Evaluate implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private  long id;
    private String content;
    @Column(name = "ev_time")
    private String evTime;
    private String tua;
    private String tub;
    private String tuc;

    @ManyToOne(cascade = CascadeType.PERSIST, optional = true)
    @JoinColumn(name = "user_id", unique = false)
    private User us;

    @ManyToOne(cascade = CascadeType.PERSIST, optional = true)
    @JoinColumn(name = "module_id", unique = false)
    private Module modu;


    public Evaluate(){}

    public Evaluate(String content,String evTime,String tua,String tub,String tuc,User us,Module modu){
        this.content = content;
        this.evTime = evTime;
        this.tua = tua;
        this.tub = tub;
        this.tuc = tuc;
        this.us = us;
        this.modu = modu;
    }
}
