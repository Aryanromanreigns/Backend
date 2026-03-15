//express is npm package
//express is  framework

const express = require('express')
const app = express();

app.use(function(req,res,next){
    console.log('middle ware');
    next();
});
//app.use means repeating same work

app.get('/',function(req,res){
    app.send("hello world")
});
//means if that route then run 

app.get('/profile',function(req,res){
    app.send('profle section')
});

app.get('/about',function(req,res,err){
    return next(new Error('not empliment'));//consoel view
})

app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})

app.listen(3000);

