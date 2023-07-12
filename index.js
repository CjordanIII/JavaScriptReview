/*

! A. Q + A
? 1. how do we assign a value to a variable?
 using the = sign
? 2. how do we change the value of a variable?
you can set it '=' to something else for example you can use let or var to declare 
then you can use the varable name and anothing '=' to to set it to something else
? 3. how do we assign as existing variable to a enw variable? 
let varable = 'something'
let varable2 - 'something2'
varable = varable2
?4. Remind me, what are declare, assign and define?
declareing
    let something = value
assign
    (=)
define 
    let, var, const
?5. What is pseudocoding and why should you do it?
its the proses of writing the code logily and its not particle to any language
?6. What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in coding to solve it?
41% of the time

*/




//!Strings

let firstVariable = "Hello World"

firstVariable = 12

let secondVariable = firstVariable

secondVariable = "any string"

let yourName = "Clarence Jordan"

let greeding = `Hello, my name is ` + yourName


//!C. Booleans


const a = 4
const b = 53
const c = 57
const d = 16
const e = 'Kevin'

console.log(a<b)
console.log(c>d)
console.log('Name' === 'Name')
// FOR THE NEXT TWO, USE ONLY %% OR ||

console.log(true || false)
console.log(false && false && false && false && false || true)
console.log(false === false)
console.log(e === 'Kevin')
console.log(a < b < c)
console.log(a && a < d)
console.log(48 == '48')


//!D The farm

let animal = "cow"
if(animal ==='cow'){
    console.log('Mooooo')
}
else{
    console.log("Hey! You're not a cow.")
}

//! E Driver's Ed

let personsAge = 22

if(personsAge>= 16){
    console.log('Here are the keys!')
}
else{
    console.log('Sorry, you/re to young.')
}

//! Loops

// !A.the basics

for(let i = 0; i<=10;i++){
    console.log(i)
}

for(let i = 10; i<=400;i++){
    console.log(i)
}


for(let i = 0; i<=4000; i++){
    let num = String(i)
    if(num[0] === '1' && num[1]==='2'){
        console.log(Number(num))
    }
    
}


//! B.Get even


for(let i = 1; i<=100; i++){

    if(i%2 === 0){
        console.log(`${i} is even`)
       
    }
    if(i%2 !== 0){
        console.log(i)
    }

}



//! C. Give me Five


for(let i = 1; i<=100; i++){
    if(i%5 === 0 && i%3 === 0 ){
        console.log(`I found a ${i}. Three is a crowd! and High five`)
        continue

        
    }
    if(i%5 === 0){
        console.log(`I found a ${i}. High five!`)
        
    }
    if(i%3 === 0){
        console.log(`I found a ${i}. Three is a crowd!`)
        
    }

}

//! D. Savings account

let maxNum = 10
let manNum2 = 100
let newArr = []
let newArr2 =[]

for(let i = 0; i<= maxNum;i++){
    newArr.push(i)
}
for(let i = 0; i<= manNum2;i++){
    newArr2.push(i)
}


let bankAccount = newArr.reduce((a,b)=>{

    return a + b


})
console.log(`your banke account has $${bankAccount}`)

let dubBankAccount = newArr2.reduce((a,b)=>{

    return (a + b)*2


})

console.log(`your banke account has $${dubBankAccount}`)





//! III. Arrays & Control flow



//! A. Talk about:


//? What are the things in an array called?
    //values

//? Do Arrays guarantee thoes things wil be in order?
// no
//? What real=life thing could you model an array?
// list of class mates names

//!B. Easy does it

const easyarray = ["Wake up to reality! Nothing ever goes as planned in this accursed world. The longer you live, the more you realize that the only things that truly exist in this reality are merely pain. suffering and futility. Listen, everywhere you look in this world, wherever there is light, there will always be shadows to be found as well. As long as there is a concept of victors, the vanquished will also exist. The selfish intent of wanting to preserve peace, initiates war. and hatred is born in order to protect love. There are nexuses causal relationships that cannot be separated - Madara Uchiha","no matter what you do for them they will hate you- green goblin","Where someone wears a mask it shows their true self -joker "]


//!C. Accessing elements

const randomThings = [1,10,'Hello',true]

//? how do you access the 1st element in the array?
randomThings[0]

//? change the value of "hello" to "world"
randomThings.splice(2,1,'world')
console.log(randomThings)

//!D Change values

const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]


//? what would you write to access the 3rd element of the array?
// I would use . or [2]

//? Change the value of "Github to "otocal"
ourClass.splice(4,1,'Octocat')
//? add a new element, "Cloutd city" to the array

ourClass.push('Cloud City')



//! Mix it up

const myArray = [5, 10, 500, 20]

myArray.push('Aegon','Clarence')
myArray.shift()
myArray.unshift('Bob Marley')
myArray.pop()
myArray.reverse()
console.log(myArray)




//! G. Biggie Smalls



let theNumber = 100

if(theNumber<100){
    console.log("little number")
}
else if(theNumber>=100){
    console.log("big number")
}




/* 

Write an if ... else if ... elsestatement:

console.log()little numberif the number entered is less than 5.
If the number entered is more than 10, log big number.
Otherwise, log "monkey".


*/

//! G.Monkey in the Middle

let theNumber2 = 4

if(theNumber<5){
    console.log("little number")
}
else if(theNumber>=10){
    console.log("big number")
}
else{
    console.log('Monkey')
}


//!H. what's in your closet?

const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "Per Scholas hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
  ];
  
  // Thom's closet is more complicated. Check out this nested data structure!!
  const thomsCloset = [
    [
      // These are Thom's shirts
      "grey button-up",
      "dark grey button-up",
      "light blue button-up",
      "blue button-up",
    ],[
      // These are Thom's pants
      "grey jeans",
      "jeans",
      "PJs"
    ],[
      // Thom's accessories
      "wool mittens",
      "wool scarf",
      "raybans"
    ]
  ];

  //?What's Kristyn wearing today? Using bracket notation to access items in kristynsCloset, log the sentence "Kristyn is rocking that " + the third item in Kristyn's closet + " today!" to the console.

const kristynsThird =  kristynsCloset[3]

console.log(`Kristyn is rocking that ${kristynsThird}`)


//? Kristyn just bought some sweet shades! Add "raybans"to her closet after "yellow knit hat".

kristynsCloset.splice(5,1, "stained knit hat")
console.table(kristynsCloset)

//?Put together an outfit for Thom! Using bracket notation, access the first element in Thom's shirtsarray.

const shirt = thomsCloset[0][0]


//? In the same way, access one item from Thom's pants array.

const pants = thomsCloset[1][1]

//?Access one item from Thom's accessories array.

const accessories = thomsCloset[2][1]

//?Log a sentence about what Thom's wearing. Example: "Thom is looking fierce in a grey button-up, jeans and wool scarf!"

console.log(`Thom is looking fierce in a ${shirt},${pants},${accessories} `)

//?Get more specific about what kind of PJs Thom's wearing this winter. Modify the name of his PJ pants to Footie Pajamas.


thomsCloset[1].splice(2,1, "Footie Pajamas")
console.table(thomsCloset)


//!IV.Functions


//!B.printCool


function printCool(name){
    return `${name} is cool`
}

console.log(printCool("Captain Reynolds"))



//!C.calculatecube

//?Write a function calculateCubethat takes a single number and prints the volume of a cube made from that number.

function calculateCube(valume){
    return valume*valume*valume
}
console.log(calculateCube(5))

//!D. isVowel

function isVawel(char){


    let lowercase=char.toLowerCase()
    if('a'=== lowercase||'e'=== lowercase|| 'i'=== lowercase||'o'=== lowercase||'u'=== lowercase||'y'=== lowercase){

        return true
        
    }
    else{
        return false
    }
}


console.log(isVawel('x'))



//!getTwoLengths


function getTwoLengths(str1,str2){
    let array = [str1.length,str2.length]
    return array  
}


console.log(getTwoLengths('length','growth'))



//!F getMultipleLengths
function getMultipleLengths(num){

    let lenghtof = []
    for(let i = 0; i<=num.length;i++){
        lenghtof.push(i)
    }

    return lenghtof

}
console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]))


//!G maxOfThree


function maxOfThree(arr,arr1,arr2){
   return Math.max(arr,arr1,arr2)
}



console.log(maxOfThree(6, 9, 1))


//!H printLongestWorld
function printLongestWorld(arr){
    for(let i = 0;i<=arr.length;i++){
        let exit=  Math.max(arr[i])
        return exit
    }
    return exit
   
}
console.log(printLongestWorld(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]))

//TODO need to finish this returning NaN
