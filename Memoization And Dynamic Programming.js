function fib(n, prevValues = []){
    if(prevValues[n] != null){
        return prevValues[n]
    }
    let result
    if(n <= 2){
        result = 1 
    } else {
        result = fib(n - 1, prevValues) + fib(n - 2, prevValues)
    }
    prevValues[n] = result
    return result
}

function fib1(n){
    if(n <= 2){
        return 1
    } else {
        return fib(n - 1) + fib(n - 2)
    }
}
console.log(fib(100))
console.log(fib1(100))