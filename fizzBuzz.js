var arr = [];
var count = 1;

function fizzBuzz(){

    if(count % 3 == 0){
        arr.push("Fizz");
    }
    else{
        arr.push(count);
    }
    

    count++

    console.log(arr);
}
