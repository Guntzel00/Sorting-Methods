let randomNumbers = [];
let sizeOfArray = 20;

function generatingRandomNumber(array, sizeOfArray) {
    for (var i = 0; i < sizeOfArray; i++) {
    let x = Math.floor (Math.random()*101);   
    console.log(x);
    array.push(x);
}
}
generatingRandomNumber(randomNumbers ,sizeOfArray);

console.log(randomNumbers);


console.log('=============================================================================================');

function quickSorting(anArray) {
    let pivot = anArray [Math.floor(anArray.length/2)];
    let lessThanPivot = [];
    let moreThanPivot = [];

    
    for(var i = 0; i < [Math.floor(anArray.length/2)]; i++) {
        if (pivot < anArray[i]) {
            for (var j = anArray.length - 1; j > [Math.floor(anArray.length/2)]; i--) {
                if (pivot > anArray[j]) {
                    var x = anArray[i];
                    anArray[i] = anArray[j];
                    anArray[j] = x;
                    break;
                }
                else{
                    continue;
                }
            }
        }
        else {
            continue;
        }
    }
    console.log(pivot);
    console.log(moreThanPivot, lessThanPivot);
}

quickSorting(randomNumbers);