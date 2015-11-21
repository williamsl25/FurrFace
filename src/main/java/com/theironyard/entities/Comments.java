package com.theironyard.entities;

import javax.persistence.*;

/**
 * Created by DrScott on 11/21/15.
 */
@Entity
public class Comments {
    @Id
    @GeneratedValue
    public int id;

    public String comment;

    @ManyToOne
    public  User user;
}
