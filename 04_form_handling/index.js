//cookie helps to mange to help in the login process so that the server can not forget that you login 



const express = require('express')
const app = express();

app.use(express.json())
app.use(express.urlencoded({extended:true}));

app.use(function(req,res,next){
    console.log('middle ware');
    next();
});


app.get('/',function(req,res){
    app.send("hello world")
});


app.get('/profile',function(req,res){
    app.send('profle section')
});

app.get('/about',function(req,res,err){
    return next(new Error('not empliment'));
})

app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})

app.listen(3000);

