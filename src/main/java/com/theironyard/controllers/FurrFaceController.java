package com.theironyard.controllers;

import com.theironyard.entities.Comment;
import com.theironyard.entities.User;
import com.theironyard.services.CommentRepository;
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
   /* @Autowired
    CommentRepository comments; */
    @Autowired
    CommentRepository comments;

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
            terry.imageURL = "tumblr_lzri1rAyNd1qaxzado1_1280.png";
            terry.petAge = 8;
            terry.neighborhood = "West Ashley";
            users.save(terry);

            Comment comment = new Comment();
            comment.text = "THis is terry's test comment";
            comment.user = terry;

            comments.save(comment);








//hello
           User doug = new User();
            doug.username = "Doug";
            doug.password = PasswordHash.createHash("1234");
            doug.petName = "Rowan";
            doug.petRating = 10;
            doug.aboutMe = "Rowan's a rescue mutt who enjoys hopping over a 5 foot fence and going on walkabouts";
            doug.petType = "dog";
            doug.imageURL = "IMG_0622.JPG";
            doug.petAge = 8;
            doug.neighborhood = "Mount Pleasant";
            users.save(doug);


          /*  Comments dougComment = new Comments();
            dougComment.comment = "Double test";
            dougComment.user = doug;
            comments.save(dougComment); */


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
                      @RequestParam(defaultValue = "unknown") String selectPetType,
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
            user.petType = selectPetType;
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
      //  System.out.println("goodbye!");
    }
    @RequestMapping(path = "/users", method = RequestMethod.GET)
    public List<User> users(HttpSession session,
                            String petType,
                            String neighborhood,
                            Integer petAge,
                            String petRating){
        String username = (String) session.getAttribute("username");
        User user = users.findOneByUsername(username);

       if(petRating!=null){
           user.petRating += 1;
       }


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

    @RequestMapping("/editUser")
    public void editUser(HttpSession session,
                         HttpServletResponse response,
                         MultipartFile imageURL,
                         String petName,
                         String selectPetType,
                         int petAge,
                         @RequestParam(defaultValue = "unknown")String selectNeighborhood,
                         String aboutMe,
                         @RequestParam(defaultValue = "0")int petRating) throws Exception {
        String username = (String) session.getAttribute("username");
        if (session.getAttribute("username") == null) {
            throw new Exception("Not logged in.");
        }
        User user = users.findOneByUsername(username);
        user.petName = petName;
        user.petType = selectPetType;
        user.petAge = petAge;
        user.neighborhood = selectNeighborhood;
        user.aboutMe = aboutMe;


        File photoFile = File.createTempFile("imageURL", imageURL.getOriginalFilename(), new File("public"));
        FileOutputStream fos = new FileOutputStream(photoFile);
        fos.write(imageURL.getBytes());
        user.imageURL = photoFile.getName();

        users.save(user);
        response.sendRedirect("/#myPet");
    }

    @RequestMapping("/#homePage")
    public List<User> searchPetType(String petType)
    {
        return users.findByPetType(petType);
    }

    @RequestMapping("/neighborhood")
    public List<User> searchByNeighborhood (String neighborhood){
        return users.findAllByNeighborhood(neighborhood);
    }


    @RequestMapping("/petAge")
    public List<User> searchByPetAge (int petAge){
        return users.findAllByPetAge(petAge);
    }

  /*  @RequestMapping(path = "/comments", method= RequestMethod.PUT)
    public void addComment (HttpSession session,
                            String thoughts,
                            String receiver) throws Exception {
        String username = (String) session.getAttribute("username");
       int id = (int) session.getAttribute("id");
        if (username == null){
            throw new Exception("You're not logged in!!!!!");
        }
        User receiverUser = users.findOneById(id);
        Comments comment = new Comments();
        comment.comment = thoughts;
        comment.user = receiverUser;
        users.save(receiverUser);
        comments.save(comment);
    }
   /* @RequestMapping("/userComments")
    public List<Comments> userComments (HttpSession session){
        String username = (String) session.getAttribute("username");
        User user = users.findOneByUsername(username);
        return comments.findByUser(user);
    }
    @RequestMapping("/randomComment")
    private Comments randomComment (){
        return comments.findRandom();
    } */

    @RequestMapping(value = "/comments", method = RequestMethod.GET)
    public List<Comment> allComments (){
       return (List<Comment>) comments.findAll();
    }


}
