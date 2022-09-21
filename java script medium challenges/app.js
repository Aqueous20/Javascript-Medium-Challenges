/**falsy or truty
 * given two values return the first one if it falsy otherwise return the second one.
 * filterOutFalsy(0,500) --> 0
 * filterOutFalsy(false, 100) --> false
 * filterOutFalsy([true, `Dog`]) --> `Dog`
*/

function filterOutFalsy(element1, element2){
    return !element1 ? element1 : element2
}
console.log(filterOutFalsy(true, "Dog"))

/**return the length of any given array
 * given an array return its lenght
 * arrlength([1,2,3]) --> 3
 * arrlength([5,0,-4,1]) --> 4
 * arrlength([]) --> 0
*/
function arrlength(arr){
    return arr.length
}
console.log(arrlength(([1,2,3,5])))

/**Get the last element in an array
 * given an array return the first element
 * lastElem([3,2,0,6,2]) --> 2
 * lastElem(['dog', 'cat', 'ball']) --> ball
 * lastElem([null, 5, false]) --> false
*/

function lastElem(arr) {
    return arr[arr.length-1]
}
console.log(lastElem([null, 5, false]))

/**Find the summ of an array
 * given an array return the sum of every element
 * arrSum([2,2,2]) --> 6
 * arrSum([100, 200, 500]) --> 800
 * arrSum([0,-5,-10]) --> -15
*/

function arrSum(arr){
    let newArr = 0
    for ( let i = 0; i < arr.length; i++){
        newArr += arr[i];
    }
    return newArr
}
console.log(arrSum([100, 200, 500]))

/**Add up the numbers from a single number
 * given a number add up all the numbers from one to the number that is given 
 * eg an input of 4 will give you 1+2+3+4 which equals 10
 * progressiveSum(3) --> 6
 * progressiveSum(4) --> 10
 * progressiveSum(600) --> 180300
*/

function progressiveSum(num1){
    let sum = 0
    for (let i = 0; i <= num1; i++){
        sum += i
    }
    return sum
}
console.log(progressiveSum(600))

/**Calculate the time
 * given a number in seconds return this number in mm:ss format
 * calctime(66) --> '01:06'
 * calctime(50) --> '00:50'
 * calctime(300) --> '05:00'
*/

function calcTime(seconds){
    let timerMinutes = Math.floor(seconds/60)
    let timerSeconds = seconds % 60;

    if (timerMinutes.toString().length === 1) {
        timerMinutes = '0' + timerMinutes
        if(timerSeconds <= 9){
            timerSeconds = '0' + timerSeconds
        }
    }
    return timerMinutes + ':' + timerSeconds
}
console.log(calcTime(66))

/**Find the largest number
 * given an array of numbers return the largest number of that array
 * getMax([5, 100, 0]) --> 100
 * getMax([12, 10, -20]) --> 12
 * getMax([-300, -100, -200]) --> -100
*/

function getMax(arr){
    let num1 = arr[0];
    for (let i = 0; i < arr.length; i++){
        if (arr[i] > num1){
            num1 = arr[i]
        } 
    }
    return num1
}
console.log(getMax([-300, -100, -200]))

/**Reverse a string
 * given a string return the reversed string
 * reverseString('abc') --> 'cba'
 * reverseString('David') --> 'divaD'
 * reverseString('This is cool') --> 'looc si sihT'
*/

// Reverse string using a incrementing for loop
function reverseString(str){
    let newString = '' ;
    for (let i = 0; i < str.length; i++){
        newString = str[i] + newString
    }
    return newString
}
console.log(reverseString('abc'))

// reverse string using a decrementing for loop
function reverseString2(str2){
    let newString2 = '' ;
    for (let i = str2.length -1; i >= 0; i--){
        newString2 += str2[i]
    }
    return newString2
}
console.log(reverseString2('David'))

// reverse string using array reverse property
function reverseString3(str3) {
    return str3.split('').reverse().join('')   
}
console.log(reverseString3('This is cool'))

/**Turn every element in an array into 0
 * Given an array of elements return the same length array filled with 0s
 * convertToZeris([5,100,0]) --> [0, 0, 0]
 * convertToZeris([12]) --> [0]
 * convertToZeris([1,2,3,4,5]) --> [0, 0, 0, 0, 0]
*/

// Solution using for loop
function convertToZeros4(arr4){
    let newArr2 = []
    for (let i = 0; i < arr4.length; i++){
        newArr2[i] = 0;
    }
    return newArr2
}
console.log(convertToZeros4([5,100,0]))

// my for loop method
function convertToZeros(arr){
    let newArr = []
    for (let i = 0; i < arr.length; i++){
        newArr.push(arr[i] * 0);
    }
    return newArr
}
console.log(convertToZeros([5,100,0,4]))

//solution using array fill method
function convertToZeroes5(arr5){
    return new Array(arr5.length).fill(0)
}
console.log(convertToZeroes5([12,3]))

// my method
function convertToZeros2(arr2) {
    return arr2.fill(0)
}
console.log(convertToZeros2([12]))

//solution using array map method

//one line solution with e6 latest java script that has invisible return funtion after =>
function convertToZeroes6(arr6){
    return arr6.map((elem => 0))
}
console.log(convertToZeroes6([1,2,3,4,5,6,7]))


// my solution used if we have an object {} afterwards
function convertToZeros3(arr3){
    let newArr1 =[]
    newArr1 = arr3.map((x) =>  {
        return 0
    })
    return newArr1
}
console.log(convertToZeros3([1,2,3,4,5]))

/**Filter out all the apples
 * given an array of fruits if it is an apple remove it from the array
 * 
 * removeApples(['Banana', 'Apple', 'Orange', 'Apple']) --> ['Banana', 'Orange']
 * removeApples(['Tomato', 'Banana', 'Orange']) --> ['Tomato', 'Banana', 'Orange']
 * removeApples(['Banana', 'Orange', 'Apple']) --> ['Banana', 'Orange']
*/

// using a For loop
function removeApples(arr){
    let newArr = []
    for (let i = 0; i < arr.length; i++){
        if (arr[i] !== 'Apple') {
            newArr.push(arr[i])
        }
    }
    return newArr
}
console.log(removeApples(['Banana', 'Apple', 'Orange', 'Apple']))

// using array filter method
function removeApples2(arr1){
    let newArr1 = []
    newArr1 = arr1.filter((x) => {
        if (x !== 'Apple'){
            return x
        }
    })
    return newArr1
}
console.log(removeApples2(['Banana', 'Orange', 'Apple']))

// one line array filter
function removeApples3(arr3){
    return arr3.filter((x) => x !== 'Apple')
}
console.log(removeApples3(['Banana', 'Apple', 'Tomato']))

/**Filter out all the falsy values 
 * given an array of values filter out all the falsy values and only return the truty values
 * 
 * filterOutFalsy(["", [], 0, null, undefined, "0"]) --> [[], '0']
 * filterOutFalsy(["Tomato", "Orange", "Banana", false,]) --> ["Tomato", "Orange", "Banana"]
 *  filterOutFalsy(["Apple", "Orange", "Banana"]) --> ["Apple", "Orange", "Banana"]
*/

// filter out falsy using For Loop
function filterOutFalsy1(arr){
    let newArr = [];
    for (let i = 0; i < arr.length; i++){
        if (!!arr[i] === true){
            newArr.push(arr[i])
        }
    }
    return newArr
}
console.log(filterOutFalsy1(["Tomato", "Orange", "Banana", false,]))

// using array filter
function filterOutFalsy2(arr){
    return arr.filter((elem) => !!elem === true)
}
console.log(filterOutFalsy2(["", [], 0, null, undefined, "0"]))

/**Truthy to true Falsy to false 
 * Given an array of truthy and falsy values return the same array of elements into its boolean value
 * convertToBoolean([500,0,"David","",[]]) --> [true,false,true,false,true]
*/

//using for loop
function convertToBoolean(arr){
    let newArr = [];
    for (let i = 0 ; i < arr.length; i++){
        if(!!arr[i] === true){
            newArr.push(true)
        }
        else{
            newArr.push(false)
        }
    }
    return newArr
}
console.log(convertToBoolean([500,0,"David","",[]]))

// using array maps
function convertToBoolean2(arr){
    return arr.map((elem) => !!elem)
}
console.log(convertToBoolean2([500,0,"David",[]]))