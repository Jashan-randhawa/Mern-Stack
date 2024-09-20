var express = require('express');
var router = express.Router();


const usermodel = require('./users'); 

const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy(
  (username, password, done) => {
      // demo credentials
      if (username === 'admin' && password === 'gfg') {
          return done(null, { id: 1, username: 'user' });
      } else {
          return done(null, false,
              { message: 'Hey Geek! Incorrect username or password.' });
      }
  }
));
/* GET home page. */
 router.get('/', function(req, res) {
  res.render('index');
});

router.get('/login', function(req, res) {
  req.flash("age",25);
  res.send("bangaya");
});

router.get('/check', function(req, res) {
  console.log(req.flash('age'));
  res.send("check your terminal");
});

router.get("/create", async function (req,res){ 
  let userdata = await usermodel.create({
    username: 'harshita',
    nickname : 'sexy',
    description :'asyncjavascripoter',
    categories :['js','node', 'react' , 'grap']
  });
  res.send(userdata)
});

router.get('/alluser',async function(req, res) {
 var user =  new RegExp("^Harshita$",'i');
 var date1 = new Date('2024-5-5');
 var date2 = new Date('2024-5-6');

  let alluser = await usermodel.find({datecreated :{ $gte : date1,$lte:date2}});

  res.send(alluser);
}); 

router.get('/profile',isloggedin, function(req, res) {
  res.send("welcome to profile");
});

router.post('/register',  function(req,res){
  var userdata = new usermodel({
    username : req.body.username,
    secret : req.body.secret
  });

  usermodel.register(username,req.body.password).then(function (registeresuser){
    passport.authenticate("local")(res,req, function (){
    res.redirect('/profile');
    })
  })

});

router.post("/login",passport.authenticate("local",{
  successRedirect : "/profile",
  failureRedirect : "/"
}), function (req,res){})

router.get("/logout", function (req,res,next){
  req.logout(function(err){
    if(err) return next(err);
    res.redirect("/");
  })
});

function isloggedin(req,res,next){
  if(req.isAuthenticated()){
    return next();
  }
  res.redirect("/")
}

module.exports = router;
