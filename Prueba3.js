let array = new Array(1, 2, 3, 4, 5, 6, 8, 9, 10)

const arrayRun = (arr) => {

    let suma = 0

    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 == 0){
            suma += arr[i]
        }
    }

    return suma
}  

console.log(arrayRun(array));