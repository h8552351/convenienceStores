package com.hjw.example.domain;

import lombok.Data;

import javax.persistence.*;

/**
 * Created by 黄毅 on 2017/8/9.
 */
@Data
@Entity
@Table(name = "decoration_case")
public class DecorationCase {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    @Column(name = "case_theme")
    private String theme;
    @Column(name = "case_time")
    private String time;
    @Column(name = "case_info")
    private String info;

    private long hot;

    private String tu1;
    private String tu2;
    private String tu3;
    private String tu4;
    private String tu5;

    @ManyToOne(cascade = CascadeType.PERSIST, optional = true)
    @JoinColumn(name = "plot_id", unique = false)
    private Plot plot;

    public DecorationCase(){}

    public DecorationCase(String theme,String time,String info,String tu1,String tu2,String tu3,String tu4,String tu5,Plot plot){
        this.theme = theme;
        this.time = time;
        this.info = info;
        this.tu1 = tu1;
        this.tu2 = tu2;
        this.tu3 = tu3;
        this.tu4 = tu4;
        this.tu5 = tu5;
        this.plot = plot;
    }
}
