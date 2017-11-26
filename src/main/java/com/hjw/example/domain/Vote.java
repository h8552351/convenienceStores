package com.hjw.example.domain;

import lombok.Data;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by 黄毅 on 2017/8/7.
 */
@Data
@Entity
public class Vote {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    @Column(name = "vote_theme")
    private String theme;
    private String time;
    @Column(name = "vote_type")
    private String type;
    @Column(name = "choice_num")
    private long num;
    @Column(name = "vote_content")
    private String content;

    @ManyToOne(cascade = CascadeType.PERSIST, optional = true)
    @JoinColumn(name = "plot_id", unique = false)
    private Plot plot;

    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JoinColumn(name = "vote_id")
    private List<VoteContent> voteContents = new ArrayList<VoteContent>();

    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JoinColumn(name = "vote_id")
    private List<VoteStatus> voteStatuses = new ArrayList<VoteStatus>();

    public Vote(){}

    public Vote(String theme,String time,String type,String content,Plot plot){
        this.theme = theme;
        this.time = time;
        this.type = type;
        this.content = content;
        this.plot = plot;
    }

    public Vote(String theme,String time,String type,long num,String content,Plot plot){
        this.theme = theme;
        this.time = time;
        this.type = type;
        this.num = num;
        this.content = content;
        this.plot = plot;
    }
}
