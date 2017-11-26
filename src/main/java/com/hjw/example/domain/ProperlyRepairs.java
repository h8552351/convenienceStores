package com.hjw.example.domain;

import lombok.Data;

import javax.persistence.*;
import java.util.Arrays;
import java.util.Comparator;
import java.util.List;
import java.util.ListIterator;

/**
 * Created by 黄毅 on 2017/8/5.
 */
@Data
@Entity
@Table(name = "properly_repairs")
public class ProperlyRepairs {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    @Column(name = "repairs_center")
    private String center;
    @Column(name = "repairs_time")
    private String time;
    @Column(name = "repairs_status")
    private String status;
    @Column(name = "repairs_tu1")
    private String tu1;
    @Column(name = "repairs_tu2")
    private String tu2;
    @Column(name = "repairs_tu3")
    private String tu3;
    @Column(name = "repairs_tu4")
    private String tu4;
    @Column(name = "repairs_tu5")
    private String tu5;

    @ManyToOne(cascade = CascadeType.PERSIST, optional = true)
    @JoinColumn(name = "user_id", unique = false)
    private User users;


    public ProperlyRepairs(){}

    public ProperlyRepairs(String center,String time,String status,String tu1,String tu2,String tu3,String tu4,String tu5,User users){
        this.center = center;
        this.time = time;
        this.status = status;
        this.tu1 = tu1;
        this.tu2 = tu2;
        this.tu3 = tu3;
        this.tu4 = tu4;
        this.tu5 = tu5;
        this.users = users;
    }

}
