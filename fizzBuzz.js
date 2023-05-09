var arr = [];
var count =  1;

function crix(){
    arr.push(count);

    if(count % 3 == 0){
        arr.push("fizz")
    }
    else if (count % 5 ==0){
        arr.pusj("buzz")
    }
    
    count++;
    console.log(arr);
}


