package com.hjw.example.domain;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import java.io.Serializable;

/**
 * Created by 黄毅 on 2017/7/5.
 */
@Data
@Entity
public class Photo implements Serializable {

    @Id
    private String id;

    @Column(name = "photo_href")
    private String photoHref;
}
