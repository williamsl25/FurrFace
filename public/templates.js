module.exports = {
  pet: [
    '<a href="#selectedUser/<%=id%>"><img src="<%= imageURL %>"></a><br>',
    '<h3><%= petName %></h3>  ',
    '<h4><%= petAge %> yrs old</h4> <p class="neighb"><%= neighborhood %></p>',
    '<p><%= aboutMe %></p>',
    '<div class="notes">',
    '<h4>My Messages!</h4>',
    '<form class="noteForm">',
    '<input type="text" name="thoughts" class="noteWO" placeholder="Add a comment">',
    '<button type="submit" name="button" class="btn notesubmit">Submit</button>',
    '</form>',
    '<div class="likesDiv">',
    '<img class="theLike likes" src="redheart.png" style="height:60px; width:60px;">',
    '<h5><%= likes %></h5>',
    '</div>'



  ].join(""),

  newUserForm: [
      '<div class="theNewForm">',
      '<form class= "petForm" action="addUser" enctype="multipart/form-data" method="post">',
        '<input type="text" name="username" class="form-control" id="username" placeholder="Username"><br>',
        '<input type="password" name="password" class="form-control" id="password" placeholder="Password"><br> ',
        '<h3>Now is the time to introduce your FurrFace!</h3>',
        '<input type="file" name="imageURL" class="form-control" id="imageURL" placeholder="Paste an image of your pet here!">',
        '<input type="text" name="petName" class="form-control theName" id="petName" placeholder="What is your pets name?">',
        '<label for="male">What type of pet do you have?</label>',
        '<select name="selectPetType">',
          '<option value="Dog">Dog</option>',
          '<option value="Cat" >Cat</option>',
          '<option value="Bunny">Bunny</option>',
          '<option value="Hedgehog">Hedgehog</option>',
          '<option value="Bird">Bird</option>',
          '<option value="Fish">Fish</option>',
        '</select>',
        '<input type="number" name="petAge" class="form-control" id="petAge" placeholder="How old is your pet?">',
        '<label for="male">What neighborhood do you live in?</label>',
        '<select name="selectNeighborhood">',
          '<option value="James Island">James Island</option>',
          '<option value="West Ashley" selected>West Ashley</option>',
          '<option value="Mount Pleasant">Mount Pleasant</option>',
          '<option value="South of Broad">South of Broad</option>',
          '<option value="Cannonborough">Cannonborough</option>',
          '<option value="Wagner Terrace">Wagner Terrace</option>',
          '<option value="Isle of Palms">Isle of Palms</option>',
        '</select>',
        '<input type="text" name="aboutMe" id="aboutMe" class="form-control" placeholder="My Pet\'s Interests">',
      '<button type="submit" class="btn btn-default">Submit</button>',
      '</form>',
      '</div>'

  ].join(""),

loginform: [
  '<div class="dogPic">',
  '<img class= "logginPic" src="http://fullyfeline.com/wp-content/uploads/2013/03/cats-and-dogs-group.jpg">',
  '<form class= "loginForm" action="login" enctype="multipart/form-data" method="post">',
    '<input type="text" name="username" class="form-control" id="username" placeholder="Username"><br>',
    '<input type="password" name="password" class="form-control" id="password" placeholder="Password"><br> ',
    '<button type="submit" class="btn btn-default">Submit</button>',
    '</form>',
    '<div class="newuserLink">',
    '<a href="#newUser">Create a Profile for your Pet!</a>',
    '</div>',
    '</div>'

].join(""),

aside:[
  '<nav>',
    '<ul>',
      '<button class="btn"><a href="#homePage">Home</a></button>',
      '<button class="btn"><a href="#myPet">Edit My Pet Page</a></button>',
      '<button class="btn"><a href="#petsLikeMe">See Pets Like Me</a></button>',
      '<button class="btn"><a href="#neighbors">See Pets in My Neighborhood</a></button>',
      '<button class="btn"><a href="#top">Top Fuzzies</a></button>',
    '</ul>',
  '</nav>'
].join(""),
  header: [
  '<h1>Furr Face</h1>',
  '<form id="logoutBtn" action="logout" method="post">',
  '<button class="logout btn hidden">Logout</button>',
  '</form>'

  ].join(""),
  footer: [
    '<h5>FurrFace | Facebook For Your Pet</h5>'

  ].join(""),
  ownProfile: [
    // '<div class="editPage"',
    '<img src="<%= imageURL %>"><br><h3><%= petName %>, ',
    '<%= petAge %></h3>',
    '<p class="neighb"><%= neighborhood %></p>',
    '<p><%= aboutMe %></p>',
    '<form class= "editForm" action="editUser" enctype="multipart/form-data" method="post">',
      '<input type="file" name="imageURL" class="form-control" id="imageURL">',
      '<input type="text" name="petName" class="form-control theName" id="petName" value="<%= petName %>">',
      '<label for="male">What type of pet do you have?</label>',
      '<select name="selectPetType" value="<%= petType %>">',
        '<option value="Dog">Dog</option>',
        '<option value="Cat">Cat</option>',
        '<option value="Bunny">Bunny</option>',
        '<option value="Hedgehog">Hedgehog</option>',
        '<option value="Bird">Bird</option>',
        '<option value="Fish">Fish</option>',
      '</select>',
      '<input type="number" name="petAge" class="form-control" id="petAge" value="<%= petAge %>">',
      '<label for="male">What neighborhood do you live in?</label>',
      '<select name="selectNeighborhood" value="<%= neighborhood %>">',
        '<option value="James Island">James Island</option>',
        '<option value="West Ashley" selected>West Ashley</option>',
        '<option value="Mount Pleasant">Mount Pleasant</option>',
        '<option value="South of Broad">South of Broad</option>',
        '<option value="Cannonborough">Cannonborough</option>',
        '<option value="Wagner Terrace">Wagner Terrace</option>',
        '<option value="Isle of Palms">Isle of Palms</option>',
      '</select>',
      '<input type="text" name="aboutMe" id="aboutMe" class="form-control" value="<%= aboutMe %>">',
    '<button type="submit" class="btn btn-default">Submit</button>',
    '</form>'
    // '</div>'
  ].join(""),
  otherProfile: [
    '<img src="<%= imageURL %>"><br><h3><%= petName %>, ',
    '<%= petAge %></h3>',
    '<br><p class="neighb"><%= neighborhood %></p>',
    '<br><h4><%= aboutMe %></h4>',
    '<div class="likesDiv">',
    '<img class="theLike likes" src="redheart.png" style="height:60px; width:60px;">',
    '<h5><%= likes %></h5>',
    '</div>'
  ].join(""),
};
