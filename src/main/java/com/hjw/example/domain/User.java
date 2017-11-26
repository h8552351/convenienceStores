package com.hjw.example.domain;

import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by 黄毅 on 2017/6/26.
 */
@Data
@Entity
public class User implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    private String phone;
    private String nickName;
    private String userName;

    private String pwd;
    @Column(name = "detailed_address")
    private String detailedAddress;

    private long progress;


    @ManyToOne(cascade = CascadeType.PERSIST, optional = true)
    @JoinColumn(name = "plot_id", unique = false)
    private Plot plot;

    @OneToMany(mappedBy = "user", cascade = CascadeType.PERSIST, fetch = FetchType.EAGER)
    private List<OrderFrom> orderFromList;

    @OneToMany(mappedBy = "us", cascade = CascadeType.PERSIST, fetch = FetchType.EAGER)
    private List<Evaluate> evaluates;

    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private List<ProperlyRepairs> properlyRepairs = new ArrayList<ProperlyRepairs>();

    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private List<LivingPayment> livingPayments = new ArrayList<LivingPayment>();

    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private List<DecorationLog> decorationLogs = new ArrayList<DecorationLog>();

    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private List<VoteStatus> voteStatuses = new ArrayList<VoteStatus>();


    public User(){};

    public User(String phone,String nickName,String userName,String pwd,String detailedAddress,Plot plot){
        this.phone = phone;
        this.nickName = nickName;
        this.userName = userName;
        this.pwd = pwd;
        this.detailedAddress = detailedAddress;
        this.plot = plot;
    }

    public User(String phone,String nickName,String userName,String pwd,String detailedAddress,long progress,Plot plot){
        this.phone = phone;
        this.nickName = nickName;
        this.userName = userName;
        this.pwd = pwd;
        this.detailedAddress = detailedAddress;
        this.progress = progress;
        this.plot = plot;
    }
}
