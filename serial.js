//now how to make this async programming serial using async functions
let fs=require("fs");
let files=["f1.txt","f2.txt","f3.txt","f4.txt"]

/*console.log("before");
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
/*
//this below wont be exeuctued i mean after wonnt be executed 
//because the call back function wont be get in stack because of the infinite
loop or we can say as like this deadlock coz for loop is waiting for incrementing the ith 
value which is inside call bacck function and call back function is waiting to get into main stack
which wont be happen coz of infinite loop


for(let i=0;i<files.length;i++){
    fs.readFile(files[i],"utf8",function cb(err , content){
        if(errr){
            console.log(err)
        }else{
            console.log(content)
            i++;
        }
    })
 
}
*/

//but we can print sequentially using async functions using recursion
//console.log("after")
function seq(n){
    if(n==files.length){
        return
    }
    fs.readFile(files[n],"utf8",function cb(err,content){
        if(err){
            console.log(err)
        }else{
            console.log("content->",content)
            seq(n+1)//instead of here if we write this statement after readfile the no sequential error
        }
    })
    //seq(n+1) here if we write seq function then it wont be serial execution
    //it will become async or parallel execution
}


seq(0)
