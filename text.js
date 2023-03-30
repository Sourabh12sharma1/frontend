console.log("hello world");
console.log(2+2);
var fs  = require("fs")

fs.writeFile(__dirname+"/index1.html","</h1>html is great </h1>",function(error){
    if (error){
        return console.log(error)
    }else{
        return console.log("Congrats")
    }
})