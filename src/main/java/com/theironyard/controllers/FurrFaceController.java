package com.theironyard.controllers;

import com.theironyard.entities.User;
import com.theironyard.services.UserRepository;
import com.theironyard.utils.PasswordHash;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import javax.annotation.PostConstruct;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.security.NoSuchAlgorithmException;
import java.security.spec.InvalidKeySpecException;
import java.util.List;


/**
 * Created by DrScott on 11/19/15.
 */
@RestController
public class FurrFaceController {
    @Autowired
    UserRepository users;

    @PostConstruct
    public void init() throws InvalidKeySpecException, NoSuchAlgorithmException {
        if (users.count() == 0){
            User terry = new User();
            terry.username = "Terry";
            terry.password = PasswordHash.createHash("1234");
            terry.petName = "Maggie";
            terry.petRating = 0;
            terry.aboutMe = "Hi, I'm terry and I have a dog named Maggie!";
            terry.petType = "dog";

          //  terry.comments.add("TEST");






            terry.imageURL = "tumblr_lzri1rAyNd1qaxzado1_1280.png";
            terry.petAge = 8;
            terry.neighborhood = "West Ashley";

            users.save(terry);
//hello
            User doug = new User();
            doug.username = "Doug";
            doug.password = PasswordHash.createHash("1234");
            doug.petName = "Rowan";
            doug.petRating = 10;
            doug.aboutMe = "Hi, I'm Doug and I have a dog named Rowan!";
            doug.petType = "dog";
            doug.imageURL = "tumblr_lzri1rAyNd1qaxzado1_1280.png";
            doug.petAge = 8;
            doug.neighborhood = "James Island";
            users.save(doug);

            User kate = new User();
            kate.username = "Kate";
            kate.password = PasswordHash.createHash("1234");
            kate.petName = "Balto";
            kate.petRating = 10;
            kate.aboutMe = "Hi, I'm Kate and I have a dog named katedog!";
            kate.petType = "dog";
            kate.imageURL = "tumblr_lzri1rAyNd1qaxzado1_1280.png";
            kate.petAge = 8;
            kate.neighborhood = "West Ashley";
            users.save(kate);

            User lindsay = new User();
            lindsay.username = "Lindsay";
            lindsay.password = PasswordHash.createHash("1234");
            lindsay.petName = "Mr. Whiskers";
            lindsay.petRating = 10;
            lindsay.aboutMe = "Hi, I'm Lindsay and I have a cat!!";
            lindsay.petType = "cat";
            lindsay.imageURL = "tumblr_m7vve1Fqli1qzfb9so1_1280.jpg";
            lindsay.petAge = 8;
            lindsay.neighborhood = "South of Broad";
            users.save(lindsay);

            User bryan = new User();
            bryan.username = "Bryan";
            bryan.password = PasswordHash.createHash("1234");
            bryan.petName = "Callie";
            bryan.petType = "cat";
            bryan.petRating = 8;
            bryan.aboutMe = "Hi, I'm bryan and i have a kid!";
            bryan.imageURL = "tumblr_lzri1rAyNd1qaxzado1_1280.png" ;

            bryan.petAge = 5;
            bryan.neighborhood = "Mount Pleasant";
            users.save(bryan);
        }

    }

    @RequestMapping("/addUser")
    public void addUser(HttpServletResponse response,
                      HttpSession session,
                      String username,
                      String password,
                      //@RequestParam(defaultValue = "http://bit.ly/1I09WCO")String imageURL,
                        MultipartFile imageURL,
                      String petName,
                      @RequestParam(defaultValue = "unknown") String petType,
                      @RequestParam(defaultValue = "1") int petAge,
                      @RequestParam(defaultValue = "0")  int petRating,
                      @RequestParam(defaultValue = "User hasn't described themselves yet") String aboutMe,
                      @RequestParam(defaultValue = "westPhilly") String selectNeighborhood) throws Exception {

/*        if (username.equals( users.findOneByUsername(username).username)){
            throw new Exception("User already exists. please select new username");
        }*/
            User user = new User();
            user.username = username;
            user.password = PasswordHash.createHash(password);
            //user.fileName = imageURL;

            File photoFile = File.createTempFile("imageURL", imageURL.getOriginalFilename(), new File("public"));
            FileOutputStream fos = new FileOutputStream(photoFile);
            fos.write(imageURL.getBytes());

            user.imageURL = photoFile.getName();
            user.petName = petName;
            user.petType = petType;
            user.petAge = petAge;
            user.neighborhood = selectNeighborhood;
            user.aboutMe = aboutMe;
            user.petRating = petRating;
            users.save(user);
         session.setAttribute("username", username);
         response.sendRedirect("/#homePage");
    }

    @RequestMapping("/login")
    public void login(HttpSession session, HttpServletResponse response, String password, String username) throws Exception {
        session.setAttribute("username", username);
        User user = users.findOneByUsername(username);
        if (user==null){
            response.sendRedirect("/#newUser");
        } else if  (!PasswordHash.validatePassword(password, user.password)) {
                response.sendRedirect("/");
            } else
        response.sendRedirect("/#homePage");
        }

    @RequestMapping("/logout")
    public void logout(HttpServletResponse response, HttpSession session) throws IOException {
        session.invalidate();
        response.sendRedirect("/");
        System.out.println("goodbye!");
    }
    @RequestMapping(path = "/users", method = RequestMethod.GET)
    public List<User> users(){
        return (List<User>) users.findAll();
    }

    @RequestMapping("/currentUser")
    public User currentUser(HttpSession session){
        String username = (String) session.getAttribute("username");
        User user = users.findOneByUsername(username);
        return user;
    }

    @RequestMapping("/user")
    public User user(HttpSession session){
        int id = (int) session.getAttribute("id");
        return users.findOneById(id);
    }


    @RequestMapping("/edit")
    public void editUser(HttpSession session, HttpServletResponse response, String imageURL, String petName, String petType, int petAge, String neighborhood, String aboutMe, int petRating) throws Exception {
        String username = (String) session.getAttribute("username");
        if (session.getAttribute("username") == null) {
            throw new Exception("Not logged in.");
        }
        User user = users.findOneByUsername(username);
        user.imageURL = imageURL;
        user.petName = petName;
        user.petType = petType;
        user.petAge = petAge;
        user.neighborhood = neighborhood;
        user.aboutMe = aboutMe;
        user.petRating = petRating;
        users.save(user);
        response.sendRedirect("/");
    }

    @RequestMapping("/petType")
    public List<User> searchPetType (String petType){
        return users.findAllByPetType(petType);
    }
    @RequestMapping("/neighborhood")
    public List<User> searchByNeighborhood (String neighborhood){
        return users.findAllByNeighborhood( neighborhood);
    }


    @RequestMapping("/petAge")
    public List<User> searchByPetAge (int petAge){
        return users.findAllByPetAge(petAge);
    }

    @RequestMapping(path = "/users", method= RequestMethod.POST)
    public void addComment (HttpSession session,
                            String thoughts,
                            String receiver) throws Exception {
        String username = (String) session.getAttribute("username");
       int id = (int) session.getAttribute("id");
        if (username == null){
            throw new Exception("You're not logged in!!!!!");
        }
     //   String test = (String) session.getAttribute("username");
      //  User senderUser = users.findOneByUsername(username);
        User receiverUser = users.findOneById(id);
       receiverUser.comments.set(receiverUser.comments.size()+1, thoughts);
       // receiverUser.comments.add(thoughts);
        users.save(receiverUser);
    }


}
