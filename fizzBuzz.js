var arr = [];
var count =  1;

function crix(){
    arr.push(count);

    if (count % 3 == 0 && count % 5 == 0 ){
        arr.push("fizzBuzz")
    }
    else if(count % 3 == 0){
        arr.push("fizz")
    }
    else if (count % 5 ==0){
        arr.push("buzz")
    }
    
    
    count++;
    console.log(arr);
}


