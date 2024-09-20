var express = require('express');
var router = express.Router();
const usermodel = require('./users')
const postmodel = require('./post');
const passport = require('passport');
const localStrategy = require("passport-local");
const upload = require('./multer')
passport.use(new localStrategy(usermodel.authenticate()))

/* GET home page. */
router.get('/login', function(req, res){
  res.render('login',{error: req.flash('error')});
})
router.get('/profile',isLoggedIn, async function(req, res, next){
  const user = await usermodel.findOne({
    username: req.session.passport.user
  }).populate('posts')
 console.log(user);
  res.render('profile',{user});
});
router.get('/feed',function(req, res, next){
res.render('feed');
});
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.post('/register',function(req, res){
  const { username, email, fullname } = req.body;
  console.log(username, email, fullname);
  const userData = new usermodel({ username, email,fullname});

    usermodel.register(userData,req.body.password)
    .then(function(){
      passport.authenticate("local")(req,res, function(){
        res.redirect("/profile");
      })
    })
});

router.post("/login" ,passport.authenticate('local', { 
  successRedirect: '/profile',
   failureRedirect: '/login',
   failureFlash: true
   }));

router.get("/logout",function(req,res){
  req.logout(function(err) {
    if (err) { return next(err); }
    res.redirect('/');
  });
});

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.redirect('/login');
  }
}

router.post('/upload',isLoggedIn, upload.single('file'),async function(req,res){
  if(!req.file){
    return res.status(400).send('No files were uploaded')
  }
  const user = await usermodel.findOne({username: req.session.passport.user});
  const postdata = await postmodel.create({
    Image : req.file.filename,
    postText : req.body.imagecaption,
    user :user._id 
  });

  user.posts.push(postdata._id);
  await user.save();
  res.redirect('/profile');
})



/* router.get('/create',async function(req, res, next){
  let createduser = await usermodel.create({
    username:"jashan",
    password:"jass123",
    posts: [],
    email:"jashanpreetsingh@gmail.com",
    fullName: "jashanpreet singh"
    });

    res.send(createduser);
});

router.get('/createpost',async function(req, res, next){
  let createpost = await postmodel.create({
    postText: "hello everyone",
    user :  "663a1caba0fb48cc288bdede"
    });
    let user =await usermodel.findOne({_id: "663a1caba0fb48cc288bdede"})
    user.posts.push(createpost._id);
    await user.save()

    res.send("done");
});
router.get('/alluser',async function(req, res, next){
  let user =await usermodel.findOne({_id: "663a1caba0fb48cc288bdede"}).populate('posts')
    res.send(user);
}); */


module.exports = router;
