package com.hjw.example.domain;

import lombok.Data;

import javax.persistence.*;

/**
 * Created by 黄毅 on 2017/8/5.
 */
@Data
@Entity
@Table(name = "living_payment")
public class LivingPayment {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    @Column(name = "payment_type")
    private String type;
    @Column(name = "payment_money")
    private Double money;
    @Column(name = "payment_time")
    private String time;
    @Column(name = "payment_status")
    private String status;

    @ManyToOne(cascade = CascadeType.PERSIST, optional = true)
    @JoinColumn(name = "user_id", unique = false)
    private User user;

    public LivingPayment(){}

    public LivingPayment(String type,Double money,String time,String status,User user){
        this.type = type;
        this.money = money;
        this.time = time;
        this.status = status;
        this.user = user;
    }
}
