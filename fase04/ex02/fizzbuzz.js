function fizzbuzz(num1,num2){
    var c = num1
    while(c <= num2){
        if(c % 3 === 0 && c % 5 === 0){
     console.log( + "FizzBuzz")
     c++
    }
    if(c % 5 === 0){
        console.log(c + "Buzz")
        c++
    }
    if(c % 3 === 0){
        console.log(c + "Fizz")
        c++
    }
    console.log(c)
    c++
    }
}
