const express =require("express");
const https =require("https");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html");
})
app.post("/",function(req, res){
    //console.log(req.body.cityName);
    const cityName= req.body.cityName;
    const appID ="e72ca729af228beabd5d20e3b7749713";
    const unit = "metric";
    const weather = "https://api.openweathermap.org/data/2.5/weather?q="+cityName+"&appid="+appID+"&units="+unit;
   https.get(weather, function(response){
      console.log(response.statusCode);

      response.on("data", function(data){
          const wheatherData = JSON.parse(data);
          const icon = wheatherData.weather[0].icon;
          const iconURL = "http://openweathermap.org/img/wn/"+icon+"@2x.png";
          console.log(wheatherData);
          res.write("Temp in "+cityName+" is " +temp+ "degree celcius");
          res.write("<img src="+iconURL+">");
          res.send();

      })
   })
  // res.send("Server is up");
  } )
/*  */

app.listen(3000, function(){
    console.log("Listening to port 3000!!");
})