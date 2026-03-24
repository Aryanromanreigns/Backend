const express = require('express');
const app = express();
const usermodel = require('./models/user')
const postmodel = require('./models/post')

app.get("/", function (req, res) {
  res.send("hey");
});


app.get('/create',async function (req,res) {
  let user = await usermodel.create({
    username:'aryan',
    age:55,
    email:'aryan@gmail.com'
  })
  res.send(user);
  
})

app.get('/post/create',async function (req,res) {
  let post = await postmodel.create({
    postdata:'hi bhai log',
    user:'69c2cd8a111ab2eba8d74223'
  })

  let user = await usermodel.findOne({_id:'69c2cd8a111ab2eba8d74223'})
  user.posts.push(post._id);
  await user.save();

  res.send({post,user});



  
})
app.listen(3000);

