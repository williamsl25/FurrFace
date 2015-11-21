module.exports = {
  pet: [
    '<img src="<%= imageURL %>"><h3><%= petName %></h3>',
    '<h4><%= petAge %></h4>',
    '<p><%= neighborhood %></p>',
    '<p><%= aboutMe %></p>',
    '<div class="notes">',
    '<h4>Comments:</h4>',
    '<form class="noteForm">',
    '<input type="text" name="thoughts" class="noteWO" placeholder="Add a comment">',
    '<button type="submit" name="button" class="btn notesubmit">Submit</button>',
    '</form>'

  ].join(""),

  newUserForm: [
      '<form class= "petForm" action="addUser" enctype="multipart/form-data" method="post">',
        '<input type="text" name="username" class="form-control" id="username" placeholder="Username"><br>',
        '<input type="password" name="password" class="form-control" id="password" placeholder="Password"><br> ',
        '<h3>Now is the time to introduce your FurrFace!</h3>',
        '<input type="file" name="imageURL" class="form-control" id="imageURL" placeholder="Paste an image of your pet here!">',
        '<input type="text" name="petName" class="form-control" id="petName" placeholder="What is your pets name?">',
        '<input type="text" name="petType" class="form-control" id="petType" placeholder="What type of pet do you have?">',
        '<input type="number" name="petAge" class="form-control" id="petAge" placeholder="How old is your pet?">',
        '<label for="male">What neighborhood do you live in?</label>',
        '<select name="selectNeighborhood">',
          '<option value="James Island">James Island</option>',
          '<option value="West Ashley" selected>West Ashley</option>',
          '<option value="Mount Pleasant">Mount Pleasant</option>',
          '<option value="South of Broad">South of Broad</option>',
          '<option value="Cannonborough">Cannonborough</option>',
          '<option value="Wagner Terrace">Wagner Terrace</option>',
        '</select>',
        '<input type="text" name="aboutMe" id="aboutMe" class="form-control" placeholder="My Pet\'s Interests">',
      '<button type="submit" class="btn btn-default">Submit</button>',
      '</form>'

  ].join(""),

loginform: [
  '<div class="dogPic">',
  '<img class= "logginPic" src="http://fullyfeline.com/wp-content/uploads/2013/03/cats-and-dogs-group.jpg">',
  '</div>',
  '<form class= "loginForm" action="login" enctype="multipart/form-data" method="post">',
    '<input type="text" name="username" class="form-control" id="username" placeholder="Username"><br>',
    '<input type="password" name="password" class="form-control" id="password" placeholder="Password"><br> ',
    '<button type="submit" class="btn btn-default">Submit</button>',
    '</form>',
    '<a href="#newUser">Create New Login</a>'
].join(""),

aside:[
  '<nav>',
    '<ul>',
      '<li><a href="#homePage">Home</a></li>',
      '<li><a href="#homePage">Edit My Pet Page</a></li>',
      '<li><a href="#homePage">See Pets Like Me</a></li>',
      '<li><a href="#homePage">See Pets in My Neighborhood</a></li>',
      '<li><a href="#homePage">Top Fuzzies</a></li>',
    '</ul>',
  '</nav>'
].join(""),
  header: [
  '<h1>Furr Face</h1>'

  ].join(""),
  footer: [
    '<h5>FurrFace | Facebook For Your Pet</h5>'

  ].join(""),

};
