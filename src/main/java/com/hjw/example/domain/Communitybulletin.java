package com.hjw.example.domain;

import lombok.Data;

import javax.persistence.*;

/**
 * Created by 黄毅 on 2017/8/7.
 */
@Data
@Entity
public class Communitybulletin {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    @Column(name = "bulletin_theme")
    private String theme;
    @Column(name = "bulletin_time")
    private String time;
    @Column(name = "bulletin_content")
    private String content;
    private String tu1;
    private String tu2;
    private String tu3;
    private String tu4;
    private String tu5;

    @ManyToOne(cascade = CascadeType.PERSIST, optional = true)
    @JoinColumn(name = "plot_id", unique = false)
    private Plot plot;

    public Communitybulletin(){}

    public Communitybulletin(String theme,String time,String content,String tu1,String tu2,String tu3,String tu4,String tu5,Plot plot){
        this.theme = theme;
        this.time = time;
        this.content = content;
        this.tu1 = tu1;
        this.tu2 = tu2;
        this.tu3 = tu3;
        this.tu4 = tu4;
        this.tu5 = tu5;
        this.plot = plot;
    }
}
