const exerciseBreak = function(string) {
    console.log(`\n\n>>>---------------- ${string.toUpperCase()} ----------------<<<`)
}

exerciseBreak("Exercise 1")
/* 1. Create a function to calculate the sum of the two given integers. If the two values are the same, return triple their sum. */

let triple = (x , y) => {
    let sum = x + y
    if (x === y) {
        return (sum*3)
    } else {
        return sum
    }

}
console.log(triple(1, 2));

exerciseBreak("Exercise 2")


/* 2. Create a function to check two given integers. Return `true` if one of them is 50 or if their sum is 50. */


let TwoIntegerCheck = (x , y) => {
    let sum = x + y ; 
    if (x > 50 || y > 50 || sum > 50) {
        return `true`
    } else {
        return `false`
    }
}

console.log(TwoIntegerCheck(26,25))


exerciseBreak("Exercise 3")
/* 3. Create a function to remove a character at a specified position from a given string: pass the position and the string as parameters, return the new string. */


let removeChar = (string, position)=>{

    let str = string
    str = str.substring(position)
    return str
}

console.log(removeChar("where is my shoe", 1))

exerciseBreak("Exercise 4")
/* 4. Create a function to find and return the largest of three given integers. */


const largestInteger = (x, y, z) =>{
    let largest = 0
    if (x > z && x > y) {
        largest = x
        
    } else if (z > x && z > y) {
        largest = z
    } else{
        largest = y
    };
    return `The largest number between ${x} , ${y} and ${z} is ${largest}`
}

console.log(largestInteger(3, 2, 6))


/* 5. Create a function to check if two numbers are in the range 40-60 or 70-100. 
    Return `true` if they do, return `false` if one (or both) don't. */
    exerciseBreak("Exercise 5")

    let InRange = (x, y)=> {
        let xInRange = ""
        let yInRange = ""

        if ( (x >= 40 &&  x <= 60) || (x >= 70 &&  x <= 100)   ) {
            xInRange = "true"

        } else {
            xInRange = "false"
        };


        if ( (y >= 40 &&  y <= 60) || (y >= 70 &&  y <= 100)   ) {
            yInRange = "true"

        } else {
            yInRange = "false"
        };


        if (yInRange === xInRange) {
            return "true"
            
        } else {
            return "false"
        }


    }

    console.log(InRange(30,60))

/* 6. Create a function to create a new string composed of a specified number of copies of a given string. 
    Pass the string and the number of copies as parameters. */
    exerciseBreak("Exercise 6")

    const duplicatedString = (string, copies) => {

        let newString =""
        for (let i = 0; i < copies; i++) {
            newString += string

        }

        return newString
    }

    console.log(duplicatedString("why?", 6))

    

/* 7. Create a function to display the city name if the string begins with "Los" or "New". 
    Pass the city name as a parameter. Return `false` if they start with a different string. */
    exerciseBreak("Exercise 7")


    const cityCheck = (city) => {

        if (city.startsWith("Los") || city.startsWith("New")) {
            return `The city does have a correct prefix`

        } else{
            return `false`
        }

    }

    console.log(cityCheck("Los Angeles"))
/* 8. Create a function to calculate and return the sum of all elements from an array with 3 elements. 
    Pass the array as a parameter. */
    exerciseBreak("Exercise 8")

    let sampleArray = [5, 6, 8]

    const sumArray = (array) => {
        let sum = 0
        for (let i = 0; i < array.length; i++) {
            let element = array[i];
            
            sum += element
            
        }
        return sum
    }

    console.log(sumArray(sampleArray))



/* 9. Create a function to test if an array of length 2 contains 1 OR 3. 
    Return `true` is it does, `false` if it doesn't. */
    exerciseBreak("Exercise 9")


    const numbers = [6,5];

    let numberCheck = (array) =>{
    let contains =  array.includes(1) || array.includes(3)
    return contains

    }
        
  console.log(numberCheck(numbers))


/* 10. Create a function to test if an array of lenght 2 DOES NOT contain 1 or 3. 
    Return `true` if it doesn't, `false` if it does. */ 
    exerciseBreak("Exercise 10")

    const numberArray = [3,5];

    let negativeNumberCheck = (array) =>{
    let contains =  array.includes(1) || array.includes(3)
        if (contains = true) {
            return "false"
        } else {
            return "true"
        }

    }
        
  console.log(negativeNumberCheck(numbers))


/* 11. Create a function to find the longest string from a given array of strings. 
    Pass the array as parameter and return the longest string. */ 

    exerciseBreak("Exercise 11")

 const sentenceArray = ["who","what","when","where","however"]

 const lengthCheck = (array) => {
        
    let longestString = ""
    for (let i = 0; i < array.length; i++) {
        const element = array[i];

        if (element.length > longestString.length) {
            longestString = element
        }
        
    }
        return `The longest string in the array is ${longestString}`

 }

 console.log(lengthCheck(sentenceArray))





/* 12. Create a function to find the types of a given angle:
  1. Acute angle â‡’ between 0 and 90 degrees. Return `acute`.
    2. Right angle â‡’ 90 degree. Return `right`
    3. Obtuse angle â‡’ between 90 and 180. Return `obtuse`
    4. Straight angle â‡’ 180 degrees. Return `straight`

    Pass the angle as a parameter.
*/

exerciseBreak("Exercise 12")

let angleType ={
        "0-89": "acute",
        90: "right",
        "91-179": "obtuse",
        180: "straight",
}

let angle = 80

const checkAngle = (val) => {

         for( var range in angleType ) {
             var split = range.split("-");
     
             if( val >= parseInt(split[0]) && val <= parseInt(split[1] || split[0]) )
                 return `The angle is ${angleType[range]}`}}
        
console.log(checkAngle(180))



/* 13. Create a function to find and return the index of the greatest element of a given array of integers that you passed as a parameter. */

exerciseBreak("Exercise 13")

let manyElementArray = [1, 10, 11, 5, 16, 7, 99, 2]


const findGreatestElementIndex = (array) =>{
    let positionOfGreatest = 0

    let greatestElement = 0
    for (let i = 0; i < array.length; i++) {
        const element = array[i];

        if (element > greatestElement) {
            greatestElement = element
            positionOfGreatest = i
        }
        
    }

    return `The index of the greatest elemnt is ${positionOfGreatest}`
}

console.log(findGreatestElementIndex(manyElementArray))

/* 14. Create a function to find and return the largest **even** number from an array of integers that is passed a parameter. */

exerciseBreak("Exercise 14")

let someNumbers = [1, 10, 11, 5, 16, 7, 100, 2]


const findGreatestEvenInteger = (array) =>{


    let greatestEvenNumber = 0
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        
        if ((element % 2 === 0) && (element > greatestEvenNumber)) {
            greatestEvenNumber = element
        }
        
    }


    return `The greatest even integer is ${greatestEvenNumber}`
}

console.log(findGreatestEvenInteger(someNumbers))




/* 15. Create a function to check from two given integers (passed as parameters) if one is positive and the other is negative. 
    Return `true` if that's the case, return `false` if it's not. */


/* 16. Create a function to create and return a new string where the first 3 characters and in lower case and the others are in upper case. 
    If the string's length is less than 3, convert the whole string into uppercase. Pass the original string as a parameter. */


/* 17. Create a function to calculate the sum of two integers (passed as parameters). 
    If the sum is in the 50-80 range, return `65`, otherwise, return `80`. */


/* 18. Create a function to convert a number (passed as a parameter) into a string, basing yourself on this example: 
    The number has 3 as a factor â‡’ return `Diego`
    The number has 5 as a factor â‡’ return `Riccardo`
    The number has 7 as a factor â‡’ return `Stefano`
    If the number does not have 3,5, or 7, return the original number. 
    âš ï¸ The factor is an integer which evenly divides a number without leaving a remainder. One number can have more than one factor, in that case you should return both names. 
Ex. 15 has both 3 and 5 has factors: the function will return `DiegoRiccardo` */


/* 19. Create a function that that takes a phrase as a parameter and returns its acronym.
Ex. British Broadcasting Corporation returns `BBC` */