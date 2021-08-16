//jshint esversion:6

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended : true}))

app.get("/", function(req, res){
   res.sendFile(__dirname + "/index.html");
});
app.post("/", function(req, res){
   console.log(req.body);
   var num1= Number(req.body.num1);
   var num2= Number(req.body.num2);
   var result = num1 + num2;
   res.send("The result of both the num is : "+result);
 });

 app.get("/bmicalculator", function(req, res){
    res.sendFile(__dirname + "/bmiCalculator.html");
 });
 app.post("/bmicalculator", function(req, res){
    console.log(req.body);
    var height= parseFloat(req.body.height);
    var weight= parseFloat(req.body.weight);
    var bmiResult = Math.round(weight / Math.pow(height,2));
    res.send("The BMI is  : "+bmiResult);
  });


app.get("/contact", function(request, response){
    response.send("Contact me at anjali raj");
 });

app.get("/about", function(request, response){
    response.send("Name : Anjali; Age : 22; Occupation : Engineer ");
});
app.get("/hobbies", function(request, response){
    response.send("Name : Anjali; Age : 22; Occupation : Engineer ");
});
app.listen(3000, function(){
    console.log("Your express server is 3000...");
});
