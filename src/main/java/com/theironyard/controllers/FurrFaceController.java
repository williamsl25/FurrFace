package com.theironyard.controllers;

import com.theironyard.entities.Comment;
import com.theironyard.entities.User;
import com.theironyard.services.CommentRepository;
import com.theironyard.services.UserRepository;
import com.theironyard.utils.PasswordHash;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
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

    @Autowired
    CommentRepository comments;

    @PostConstruct
    public void init() throws InvalidKeySpecException, NoSuchAlgorithmException {
        if (users.count() == 0){
            User terry = new User();
            terry.username = "Terry";
            terry.password = PasswordHash.createHash("1234");
            terry.petName = "Maggie";
            terry.likes = 5;
            terry.aboutMe = "Likes chasing Abby the cat!";
            terry.petType = "Dog";
            terry.imageURL = "IMG_6894 (1).jpg";
            terry.petAge = 3;
            terry.neighborhood = "James Island";
            users.save(terry);

            Comment comment = new Comment();
            comment.text = "THis is terry's test comment";
            comment.user = terry;

            comments.save(comment);



            User doug = new User();
            doug.username = "Doug";
            doug.password = PasswordHash.createHash("1234");
            doug.petName = "Rum(plemintz)";
            doug.likes = 10;
            doug.aboutMe = "I wake Doug up 5 minute before his alarm goes off.";
            doug.petType = "Cat";
            doug.imageURL = "Slack for iOS Upload-1.jpg";
            doug.petAge = 11;
            doug.neighborhood = "Mount Pleasant";
            users.save(doug);


          /*  Comments dougComment = new Comments();
            dougComment.comment = "Double test";
            dougComment.user = doug;
            comments.save(dougComment); */


            User kate = new User();
            kate.username = "Kate";
            kate.password = PasswordHash.createHash("1234");
            kate.petName = "Amir";
            kate.likes = 2;
            kate.aboutMe = "I love watching Animal Planet!";
            kate.petType = "Dog";
            kate.imageURL = "Slack for iOS Upload.jpg";
            kate.petAge = 5;
            kate.neighborhood = "Wagner Terrace";
            users.save(kate);

            User lindsay = new User();
            lindsay.username = "Lindsay";
            lindsay.password = PasswordHash.createHash("1234");
            lindsay.petName = "Mr. Whiskers";
            lindsay.likes = 3;
            lindsay.aboutMe = "She loves to play with the chuckit, and swim.";
            lindsay.petType = "Dog";
            lindsay.imageURL = "charlie.jpg";
            lindsay.petAge = 5;
            lindsay.neighborhood = "Isle of Palms";
            users.save(lindsay);

            User bryan = new User();
            bryan.username = "Bryan";
            bryan.password = PasswordHash.createHash("1234");
            bryan.petName = "Baby Kitten";
            bryan.petType = "Cat";
            bryan.likes = 1;
            bryan.aboutMe = "Loves to stalk around the house.";
            bryan.imageURL = "IMG_6273.JPG" ;

            bryan.petAge = 2;
            bryan.neighborhood = "Summerville";
            users.save(bryan);
        }
    }

    @RequestMapping("/addUser")
    public void addUser(HttpServletResponse response,
                      HttpSession session,
                      String username,
                      String password,
                      MultipartFile imageURL,
                      String petName,
                      @RequestParam(defaultValue = "unknown") String selectPetType,
                      @RequestParam(defaultValue = "1") int petAge,
                      @RequestParam(defaultValue = "0")  int likes,
                      @RequestParam(defaultValue = "User hasn't described themselves yet") String aboutMe,
                      @RequestParam(defaultValue = "westPhilly") String selectNeighborhood) throws Exception {

            User user = new User();
            user.username = username;
            user.password = PasswordHash.createHash(password);
            //user.fileName = imageURL;

            File photoFile = File.createTempFile("imageURL", imageURL.getOriginalFilename(), new File("public"));
            FileOutputStream fos = new FileOutputStream(photoFile);
            fos.write(imageURL.getBytes());

            user.imageURL = photoFile.getName();
            user.petName = petName;
            user.petType = selectPetType;
            user.petAge = petAge;
            user.neighborhood = selectNeighborhood;
            user.aboutMe = aboutMe;
            user.likes = likes;
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
    }
    @RequestMapping(path = "/users", method = RequestMethod.GET)
    public List<User> users(HttpSession session,
                            String petType,
                            String neighborhood,
                            Integer petAge,
                            Integer id){
        String username = (String) session.getAttribute("username");
        User user = users.findOneByUsername(username);



        if (petType!=null){
            return (List<User>) users.findByPetType(user.petType);
        } if (neighborhood!=null){
            return (List<User>) users.findAllByNeighborhood(user.neighborhood);
        } if (petAge!=null){
            return (List<User>) users.findAllByPetAge(user.petAge);
        }else
        return (List<User>) users.findAll();
    }

    @RequestMapping("/currentUser")
    public User currentUser(HttpSession session){
        String username = (String) session.getAttribute("username");
        User user = users.findOneByUsername(username);
        return user;
    }

    @RequestMapping(path = "/user", method = RequestMethod.GET)
    public User user(HttpSession session){
      int id = (int) session.getAttribute("id");
        return users.findOneById(id);
    }

    @RequestMapping(path = "/user/{id}", method = RequestMethod.PUT)
    public void test(HttpSession session, @RequestBody User user, @PathVariable int id){
        users.save(user);
    }

    @RequestMapping("/editUser")
    public void editUser(HttpSession session,
                         HttpServletResponse response,
                         MultipartFile imageURL,
                         String petName,
                         String selectPetType,
                         Integer petAge,
                         String selectNeighborhood,
                         String aboutMe) throws Exception {
        String username = (String) session.getAttribute("username");
        if (session.getAttribute("username") == null) {
            throw new Exception("Not logged in.");
        }
        User user = users.findOneByUsername(username);
        if(petName!=null){
            user.petName = petName;
        }
        if (selectPetType!=null){
            user.petType = selectPetType;
        }
        if(selectNeighborhood!=null){
            user.neighborhood =selectNeighborhood;
        }
        if(aboutMe!=null){
            user.aboutMe = aboutMe;
        }
        if (petAge!=null){
            user.petAge = petAge;
        }

        if (imageURL!=null) {
            File photoFile = File.createTempFile("imageURL", imageURL.getOriginalFilename(), new File("public"));
            FileOutputStream fos = new FileOutputStream(photoFile);
            fos.write(imageURL.getBytes());
            user.imageURL = photoFile.getName();
        }
        users.save(user);
        response.sendRedirect("/#myPet");
    }


    @RequestMapping(value = "/comments", method = RequestMethod.GET)
    public List<Comment> allComments (){
       return (List<Comment>) comments.findAll();
    }


    @RequestMapping("/likes")
    public List<User> likes(){
       // return (List<User>) users.findAllOrderByLikesAsc();
        return (List<User>) users.findAll();
    }





}
