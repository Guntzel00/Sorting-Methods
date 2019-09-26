let randomNumbers = [];
let sizeOfArray = 5;

function generatingRandomNumber(array, sizeOfArray) {
    for (var i = 0; i < sizeOfArray; i++) {
    let x = Math.floor (Math.random()*100);   
    console.log(x);
    array.push(x);
}
}
generatingRandomNumber(randomNumbers ,sizeOfArray); 

console.log(randomNumbers);


console.log('=============================================================================================');



function bubbleSorting(anArray) {
    // You don't need to loop all the array length
        for (let i = 0; i < anArray.length - 1; i++ ){
            for (let j = 0;j < anArray.length -1; j++) {
                if (anArray[j] > anArray[j+1]) {
                    console.log(anArray[j], anArray[j+1])
                    // You don't need two temp variables, only one 
                    let x = anArray[j];
                    anArray[j] = anArray[j+1];
                    anArray[j+1] = x;
                }
            }
    }
}

bubbleSorting(randomNumbers);
console.log(randomNumbers);
