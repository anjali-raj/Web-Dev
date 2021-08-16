const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");


const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.set('view engine', 'ejs');

const items = ["Buy Food", "Eat Food", "Cook Food"];
const workItems =[];

app.get("/", function(req, res){
   
   /* var currDay = today.getDay();
    var day ="";
    if(currDay===0) 
    {
        day = "Sunday";
        //res.write("<h1>Yeyy!, It's the weekend</h1>");
        //res.write("<p>We'll have fun today</p>");
    }
    else if (currDay===1){
        day = "Monday";
       // res.write("<h1>Ugh!, It's the weekday</h1>");
       // res.write("<p>OMG we have to work today</p>");
    }
    else if (currDay===2){
        day = "Tuesday";
    }
    else if (currDay===3){
        day = "Wednesday";
    }
    else if (currDay===4){
        day = "Thursday";
    }
    else if (currDay===5){
        day = "Friday";
    }
    else if (currDay===6){
        day = "Saturday";
    }
    else{
        console.log("Wrong data");
    }*/
    const day = date.getDate();
    
    res.render("list", {listTitle : day, newItemsAdd : items});
    //res.send();
    
});
app.post("/", function(req, res){
    //console.log(req.body);
    const item = req.body.newItem;
    if(req.body.list ==="Work")
    {
       workItems.push(item);
       res.redirect("/work");
    }
    else{
        items.push(item);
        // res.render("list", {newItemsAdd : item});
        res.redirect("/");
    }
        //console.log(item);
});
app.get("/work", function(req, res){
   res.render("list",{listTitle : "Work List", newItemsAdd : workItems });
});
// app.post("/work", function(req, res){
//     item = req.body.newItem;
//     workItems.push(item);
//     res.redirect("/work");
// });

app.listen(3000, function(){
    console.log("App is listening to port 3000...");
});