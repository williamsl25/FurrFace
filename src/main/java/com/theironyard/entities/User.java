package com.theironyard.entities;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by DrScott on 11/19/15.
 */
@Entity
public class User {
    @Id
    @GeneratedValue
    public int id;

    @Column(nullable = false)
    public String username;

    @Column(nullable = false)
    public String password;

    @Column(nullable = false)
    public String imageURL;

    @Column(nullable = false)
    public String petName;

    @Column(nullable = false)
    public String petType;

    @Column(nullable = false)
    public int petAge;

    @Column(nullable = false)
    public String neighborhood;

    @Column(nullable = false)
    public String aboutMe;

    @Column(nullable = false)
    public int petRating;

//    @Column(nullable = false)
   // public ArrayList<String> comments;

    public String getFileName() {
        return imageURL;
    }




}
