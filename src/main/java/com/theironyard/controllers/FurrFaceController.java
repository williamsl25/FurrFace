package com.theironyard.controllers;

import com.theironyard.entities.User;
import com.theironyard.services.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.util.List;


/**
 * Created by DrScott on 11/19/15.
 */
@RestController
public class FurrFaceController {
    @Autowired
    UserRepository users;


    @RequestMapping("/addUser")
    public User login(HttpServletResponse response,
                      HttpSession session,
                      String username,
                      String password,
                      @RequestParam(defaultValue = "http://bit.ly/1I09WCO")String imageURL,
                      String petName,
                      @RequestParam(defaultValue = "unknown") String petType,
                      @RequestParam(defaultValue = "1") int petAge,
                      @RequestParam(defaultValue = "0")  int petRating,
                      @RequestParam(defaultValue = "User hasn't described themselves yet") String aboutMe,
                      @RequestParam(defaultValue = "westPhilly") String neighborhood) throws Exception {

            User user = new User();
            user.username = username;
            user.password = password;
            user.imageURL = imageURL;
            user.petName = petName;
            user.petType = petType;
            user.petAge = petAge;
            user.neighborhood = neighborhood;
            user.aboutMe = aboutMe;
            user.petRating = petRating;
            users.save(user);

       // System.out.println("");
        session.setAttribute("username", username);
        return user;
    }
    @RequestMapping("/login")
    public void login(HttpSession session, HttpServletResponse response) throws IOException {
        String username = (String) session.getAttribute("username");
        User user = users.findOneByUsername(username);
        if (user == null){
            response.sendRedirect("/");
        } else {
            response.sendRedirect("/");
        }
    }
    @RequestMapping("/logout")
    public void logout(HttpServletResponse response, HttpSession session) throws IOException {
        session.invalidate();
        response.sendRedirect("/");
        System.out.println("goodbye!");
    }
    @RequestMapping("/users")
    public List<User> users(){
        return (List<User>) users.findAll();
    }

    @RequestMapping("/currentUser")
    public User currentUser(HttpSession session){
        String username = (String) session.getAttribute("username");
        User user = users.findOneByUsername(username);
        return user;
    }


}
