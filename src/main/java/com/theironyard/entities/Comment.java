package com.theironyard.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

/**
 * Created by DrScott on 11/22/15.
 */
@Entity
public class Comment {
    @Id
    @GeneratedValue
    public int id;

   public String text;

    @ManyToOne
    public User user;
}

