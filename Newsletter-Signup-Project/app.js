const express =require("express");
const request =require("request");
const bodyParser = require("body-parser");
const { post } = require("request");

const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

//app.use(bodyParser.urlencoded({extended: true}));
app.get("/", function(req, res){
    res.sendFile(__dirname + "/signup.html");
})
app.post("/", function(req, res){
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    console.log("First Name : "+req.body.firstName);
    console.log("Last Name : "+req.body.firstName);
    console.log("Email : "+req.body.firstName);
    const data = {
        member: [
            {
                email_address: email,
                status: "subscribed",
                merge_fields: {
                    FNAME: firstName,
                    LNAME: lastName
                }
            }
        ]
    };
    const jsonData = JSON.stringify(data);
    const url = "https://us4.api.mailchimp.com/3.0/lists/4bcf3cbb34";
    const options ={
        method: "POST",
        auth: "anjali1:fd8d2a94f77b14c7c113e1d4a29c6120-us4"
    }

    https.request(url, options, function(response){
      response.on("data", function(data)
      {
          console.log(JSON.parse(data));
      })
    })
})

app.listen(3000, function(){
    console.log("Listening to port 3000!");
})

//fd8d2a94f77b14c7c113e1d4a29c6120-us4
//c14afa9c9d5aec3becec84afaa64c151-us4
//4bcf3cbb34