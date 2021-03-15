let files=["f1.txt","f2.txt","f3.txt","f4.txt"]
let fs=require("fs");
console.log("before");
for(let i=0;i<files.length;i++){
    fs.readFile(files[i],"utf8",cb)
    console.log(i+1," file sent to read")
}
function cb(err,content){
    if(err){
        console.log(err)
    }else{
        console.log("content->",content)
    }
}
console.log("after")
