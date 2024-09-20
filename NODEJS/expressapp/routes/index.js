var express = require('express');
var router = express.Router();

/* const usermodel = require("./users")
 GET home page.
 router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/create", async function (req,res){
 const createduser = await usermodel.create(
    {
      username : "jashan",
      name :"jashanpreet",
      age:20
    }
  )
  res.send(createduser);
})
router.get("/alluser", async function (req,res){
  let alluser = await usermodel.find();
   res.send(alluser);
 })

 router.get("/delete", async function (req,res){
  const deleteduser = await usermodel.findOneAndDelete(
     {
       username : "jashan"
     }
   )
   res.send(deleteduser + '  ' +  ' the data has beeen deleted');
 })

router.get("/",function (req,res){
  res.render("index");
})
module.exports = router; */
router.get("/",function (req,res){
  res.cookie("age", 25);
  res.render("index");
})

router.get("/read",function (req,res){
  console.log(req.cookies);
  res.send("check");
})

router.get("/remove",function (req,res){
  res.clearCookie("age");
  res.send("clear hogayi");
})
/* router.get("/checkban",function (req,res){
  if(req.session.ban === true)
  {
  res.send("You Are Banned")
  }
  else{
    res.send("not banned");
  }
})
router.get("/removeban",function (req,res){
  
  req.session.destroy(function(err){
    if(err) throw err;
    res.send("ban is removed");
  })
}) */

module.exports = router;