package com.hjw.example.domain;

import lombok.Data;

import javax.persistence.*;

/**
 * Created by 黄毅 on 2017/8/7.
 */
@Data
@Entity
@Table(name = "vote_content")
public class VoteContent {
    @Id
    private long id;
    private String photo;
    private String info;
    private long poll;

    @ManyToOne(cascade = CascadeType.PERSIST, optional = true)
    @JoinColumn(name = "vote_id", unique = false)
    private Vote vote;

    public VoteContent(){}

    public VoteContent(String photo,String info,Vote vote){
        this.photo = photo;
        this.info = info;
        this.vote = vote;
    }

//    public VoteContent(String photo,String info,long poll,Vote vote){
//        this.photo = photo;
//        this.info = info;
//        this.poll = poll;
//        this.vote = vote;
//    }
}
