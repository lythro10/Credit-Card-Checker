// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9]
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6]
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5]
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6]

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4]
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5]
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4]
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9]
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3]
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3]
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3]

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5]


// Add your functions below:

const validateCred = array => {
    var reversed = array.map(function reverse(item) {
        return Array.isArray(item) && Array.isArray(item[0]) ?
            item.map(reverse) :
            item.reverse();
    });
    
    var getCorrectNumbers = array => {
    for (var i = 0; i < reversed.length; i++) {
        var revera = reversed[i];
        var tempArray = []
        let workingArrey = []
         //Has numbers of the new array which we did -9 from
        let sum = 0;
        for (var j = 1; j < revera.length; j += 2) {
            if (true) {
                //console.log(revera[j] +' ok')
                tempArray.push(revera[j] * 2) // Multiplies everyOther element by 2
            }
        } //console.log(tempArray) //Logs every other elemnt * 2
        //Does for the array tempArray if number is more than 9 to subtract 9
        for (var y = 0; y < tempArray.length; y++) {
            if (tempArray[y] > 9) {
                //console.log(tempArray[y] - 9);
                workingArrey.push(tempArray[y] - 9)
                //Next to do is to find a way to replace the array with the new result
                //console.log(workingArrey[y])


            } else {
                //console.log(tempArray[y])
                workingArrey.push(tempArray[y])
                //console.log(workingArrey[y])

            }
        }

        for (var x = 0; x < revera.length; x += 2) {
            workingArrey.push(revera[x])
        }

        //This prints the whole array corrected with double everyOther and if more than 9 to minus 9. 

        //To summ all
         
        var TrueOrFalse = findSum(workingArrey);
        console.log(TrueOrFalse)

        
    } //return getCorrectNumbers(reversed)
    return TrueOrFalse
}

    //Here we use the workingArrey
    const findSum = arr => {
        //console.log(arr)
        let sum = 0;
        for (var q = 0; q < arr.length; q++) {
            if (true) {
                sum += arr[q];
            }else{

            }

        }//console.log(sum)
        if (sum % 10 === 0) {
            //console.log(sum)
           return true
        } else {
            //console.log(sum)
           return false
        }console.log(sum)
    
         //return sum

    };


}

const findInvalidCards = array =>{
    console.log(array)
}

//validateCred(batch)
findInvalidCards(validateCred(batch))

