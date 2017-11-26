package com.hjw.example.domain;

import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by 黄毅 on 2017/7/18.
 */
@Data
@Entity
public class Plot implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    @Column(name = "plot_name")
    private String plotName;

    @ManyToOne(cascade = CascadeType.PERSIST , optional = true)
    @JoinColumn(name = "city_id" , unique = false)
    private City city;

    @OneToMany(cascade = CascadeType.PERSIST , mappedBy = "plot" , fetch = FetchType.EAGER)
    private List<User> userList;

    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JoinColumn(name = "plot_id")
    private List<Communitybulletin> communitybulletins = new ArrayList<Communitybulletin>();

    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JoinColumn(name = "plot_id")
    private List<WorkDisplay> workDisplays = new ArrayList<WorkDisplay>();

    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JoinColumn(name = "plot_id")
    private List<DecorationCase> decorationCases = new ArrayList<DecorationCase>();

    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JoinColumn(name = "plot_id")
    private List<Vote> votes = new ArrayList<Vote>();


    public Plot(){}

    public Plot(String plotName,City city){
        this.plotName = plotName;
        this.city = city;
    }
}
