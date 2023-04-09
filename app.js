//Backend
var express = require("express");

var bodyParser = require("body-parser");
var app=express();
var mongoose=require("mongoose");
const nodemon = require("nodemon");

app.use(bodyParser.json())
app.use(express.static('public'))
app.use(bodyParser.urlencoded({
  extended:true
}))

mongoose.connect('mongodb://127.0.0.1:27017/myapp',{
  useNewUrlParser:true,
  useUnifiedTopology:true
});
var db=mongoose.connection;
db.on('error',()=>console.log("Error in connecting to Database"));
db.once('open',()=>console.log("Connected to Database"))

app.post('/public/index.html',(req,res)=>{
  var name=req.body.name;
  var phone=req.body.phone;
  var email=req.body.email;
  var desc=req.body.desc;

  var data={
    "name":name,
    "phone":phone,
    "email":email,
    "desc":desc
  }
  db.collection('myapp').insertOne(data,(err,collection)=>{
    if(err){
      throw err;
    }
    console.log("Record inserted successfully!");
  });
  return res.redirect('http://127.0.0.1:5500/public/feedbacksuccessful.html');
})

app.get('/',(req,res)=>{
  res.set({
    "Allow-access-Allow-Origin":'*'
  })
  return res.redirect('/public/index.html');
}).listen(5500);
