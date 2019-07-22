// variables
const express = require("express");
const app = express();
const fakeData = require("faker");
var image;
var product = [];
var navOption = fakeData.company.bsNoun();
var fakeDataArray =[];
var title =  fakeData.commerce.productName();
var link1;
var link2;
var link3;
var link4;


app.engine('html', require('ejs').renderFile);
app.use(express.static("public"));

// create routes for navigation 
// Index -------------------------
app.get("/", function(req,res){
  image = fakeData.image.business();
 for(var i = 0; i < 6; i++){
    fakeDataArray[i] = fakeData.company.catchPhrase();
  }
  res.render("index.html", {"product":title,
                            "navOption":navOption,
                            "image": image,
                            "fakeDataArray":fakeDataArray,
                            "link1":"current_page",
                            "link2":"not_current_page",
                            "link3":"not_current_page",
                            "link4":"not_current_page"});
});

// Benefits -------------------------
app.get("/benefits", function(req,res) {
  image = fakeData.image.business();
  for(var i = 0; i < 4; i++){
    fakeDataArray[i] = fakeData.company.bsNoun();
  }
  res.render("benefits.html", {"product":title,
                               "navOption":navOption,
                               "image": image,
                               "fakeDataArray":fakeDataArray,
                               "link1":"not_current_page",
                               "link2":"current_page",
                               "link3":"not_current_page",
                               "link4":"not_current_page"});
})

// Protocols -------------------------
app.get("/protocols", function(req,res) {
  image = fakeData.image.business();
  for(var i = 0; i < 4; i++){
    fakeDataArray[i] = fakeData.company.bsNoun();
  }
  res.render("protocols.html", {"product":title,
                                "navOption":navOption,
                                "image": image,
                                "fakeDataArray":fakeDataArray,
                                "link1":"not_current_page",
                                "link2":"not_current_page",
                                "link3":"current_page",
                                "link4":"not_current_page"});
});

// providers -------------------------
app.get("/providers", function(req,res) {
  image = fakeData.image.business();
  res.render("providers.html", {"product":title,
                                "navOption":navOption,
                                "image": image,
                                "link1":"not_current_page",
                                "link2":"not_current_page",
                                "link3":"not_current_page",
                                "link4":"current_page"});
});


// Listener
// app.listen("8081","0.0.0.0", function(){
//   console.log("Express Server is Running...")
// });
app.listen(process.env.PORT, process.env.IP, function(){
  console.log("Running Express Server...")
});