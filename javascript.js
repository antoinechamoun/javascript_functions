function capitalize(word){
    let array = word.split("");
    array[0]=array[0].toUpperCase();
    word=array.join("")
    console.log(word)
}

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

function lastLetter(word){
    let array = word.split("")
    console.log(array[array.length-1])
}