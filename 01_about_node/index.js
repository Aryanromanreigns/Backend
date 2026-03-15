const fs = require('fs')
fs.writeFile('hello.txt','hi my name is aryan kumar',function(err){
    if(err) console.err(err);
    else console.log('done')
})
fs.appendFile('hello.txt',' currently i am in b.tech third year',function(err){
    if(err) console.err(err);
    else console.log('done')
})
fs.rename('hello.txt','hii.txt',function(err){
    if(err) console.err(err)
    else console.log('done')
})
fs.copyFile('hii.txt','./copy/copy.txt',function(err){
    if(err) console.err(err.message)
    else console.log('done')
})
fs.unlink('hii.txt',function(err){
    if(err) console.err(err.message);
    else console.log('remove')
})
fs.rm('./copy',{recursive:true},function(err){
    if(err) console.err(err)
    else console.log('remove')
})
//how to make folder from fs and read from fs
fs.mkdir('myfolder',function(err){
    if(err) console.err(err)
    else console.log('done')
})
fs.readFile('hii.txt','utf8',function(err,data){
    if(err) console.err(err)
    else console.log(data)
})


const http = require('http')
const server = http.createServer(function(req,res){
    res.end('hello world')
})
server.listen(3000);

