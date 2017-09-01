var  friendData = require('../data/friends.js');


app.get("/api/friends", function(req, res) {
    res.json(friend);
});

app.post("/api/friends", function(req, res) {
  var friends = req.body;
  
  console.log(friends);
  
  friendData.push(friends);
  
  res.json(friends);
});