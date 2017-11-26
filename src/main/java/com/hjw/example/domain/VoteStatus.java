package com.hjw.example.domain;

import lombok.Data;

import javax.persistence.*;

/**
 * Created by 黄毅 on 2017/8/11.
 */
@Data
@Entity
@Table(name = "vote_stutes")
public class VoteStatus {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    @Column(name = "stutes")
    private String status;

    @ManyToOne(cascade = CascadeType.PERSIST, optional = true)
    @JoinColumn(name = "user_id", unique = false)
    private User user;

    @ManyToOne(cascade = CascadeType.PERSIST, optional = true)
    @JoinColumn(name = "vote_id", unique = false)
    private Vote vote;

    public VoteStatus(){}

    public VoteStatus(String status,User user,Vote vote){
        this.status = status;
        this.user = user;
        this.vote = vote;
    }

}
