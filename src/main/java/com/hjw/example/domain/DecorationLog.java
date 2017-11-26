package com.hjw.example.domain;

import lombok.Data;

import javax.persistence.*;

/**
 * Created by 黄毅 on 2017/8/9.
 */
@Data
@Entity
@Table(name = "decoration_log")
public class DecorationLog {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    @Column(name = "log_theme")
    private String theme;
    @Column(name = "log_time")
    private String time;
    @Column(name = "log_info")
    private String info;
    private String tu1;
    private String tu2;
    private String tu3;
    private String tu4;
    private String tu5;

    @ManyToOne(cascade = CascadeType.PERSIST, optional = true)
    @JoinColumn(name = "user_id", unique = false)
    private User user;

    public DecorationLog(){}

    public DecorationLog(String theme,String time,String info,String tu1,String tu2,String tu3,String tu4,String tu5,User user){
        this.theme = theme;
        this.time = time;
        this.info = info;
        this.tu1 = tu1;
        this.tu2 = tu2;
        this.tu3 = tu3;
        this.tu4 = tu4;
        this.tu5 = tu5;
        this.user = user;
    }

}
