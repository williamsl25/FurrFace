module.exports = {
  pet: [
    '<img src="<%= imageURL %>">',
    '<h3><%= petName %></h3>',
    '<h4><%= petAge %></h4>',
    '<p><%= petType %></p>',
    '<p><%= neighborhood %></p>',
    '<p><%= aboutMe %></p>',

  ].join(""),

  newUserForm: [
      '<form class= "petForm" action="addUser" enctype="multipart/form-data" method="post">',
        '<input type="text" name="username" class="form-control" id="username" placeholder="Username"><br>',
        '<input type="text" name="password" class="form-control" id="password" placeholder="Password"><br> ',
        '<h3>Now is the time to introduce your FurrFace!</h3>',
        '<input type="text" name="imageURL" class="form-control" id="imageURL" placeholder="Paste an image of your pet here!">',
        '<input type="text" name="petName" class="form-control" id="petName" placeholder="What is your pets name?">',
        '<input type="text" name="petType" class="form-control" id="petType" placeholder="What type of pet do you have?">',
        '<input type="text" name="petAge" class="form-control" id="petAge" placeholder="How old is your pet?">',
        '<label for="male">What neighborhood do you live in?</label>',
        '<select name="selectNeighborhood">',
          '<option value="value1">James Island</option>',
          '<option value="value2" selected>West Ashley</option>',
          '<option value="value3">Mount Pleasant</option>',
          '<option value="value3">South of Broad</option>',
          '<option value="value3">Cannonborough</option>',
          '<option value="value3">Wagner Terrace</option>',
        '</select>',
        '<input type="text" name="aboutMe" id="aboutMe" class="form-control" placeholder="My Pets Interests">',
      '<button type="submit" class="btn btn-default">Submit</button>',
      '</form>'

  ].join(""),

loginform: [

  '<form class= "loginForm" action="login" enctype="multipart/form-data" method="post">',
    '<input type="text" name="username" class="form-control" id="username" placeholder="Username"><br>',
    '<input type="text" name="password" class="form-control" id="password" placeholder="Password"><br> ',
    '<button type="submit" class="btn btn-default">Submit</button>',
    '</form>'

].join(""),
};
