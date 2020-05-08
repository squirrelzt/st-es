var obj = {b:222};
obj.a = 111;
console.log(obj);
console.log(obj.a)
for(var i =0; i < 3; i++) {
    setTimeout(function(){
        console.log(i)
    },1000)
}
for(let j =0; j < 3; j++) {
    setTimeout(function(){
        console.log(j)
    },1000)
}