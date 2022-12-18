// Capitalize the first letter of a word
function capitalize(word){
    let array = word.split("");
    array[0]=array[0].toUpperCase();
    word=array.join("")
    console.log(word)
}

// Check if a number is prime
function isPrime(a){
    for(let i=2; i<a; i++){
        if(a%i == 0) {
            console.log("false")
            return false;
        }
    }
    console.log("true")
    return true;
}

// Know what is the last letter in aw word
function lastLetter(word){
    let array = word.split("")
    console.log(array[array.length-1])
}

// fizzBuzz game
function checkFizzBuzz(n){
    if(n%3==0 && n%5==0){
        console.log("fizzBuzz");
    } else if(n%3==0){
        console.log("fizz");
    } else if(n%5==0){
        console.log("buzz");
    }else console.log(n)
}
function fizzBuzz(n){
    for(let i=1; i<=n; i++){
        checkFizzBuzz(i);
    }
}


//bottom_up function
function FirstFactorial(num) { 
    let array = new Array(num+1);
    array[1]=1;
    for(let i=2; i<=num; i++){
      array[i]=array[i-1]*i
    }
    return array[num]; 
}
     
function toUpper(string) {
    return string.toUpperCase();
  }
  

  