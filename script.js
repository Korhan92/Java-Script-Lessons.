// HOW TO CREATE ARRAY
const array = ["this","is","aray"]
const array2= new Array("this","is","aray")
console.log(array);//[ 'this', 'is', 'aray']


//to create array form strings

let text ="today is monday.  i am not happy. i have to go scholl."

const newArray =text.split("")//her gördüğünü ayırır
console.log(newArray)//[ 't','o','d','a','y',' ','i','s',' ','m','o','n','d','a','y','.',' ',' ','i',' ','a','m',' ','n','o','t',' ','h','a','p','p','y','.',' 'i', ' ', 'h','a','v','e',' ','t','o',' ','g','o',' ','s','c','h','o','l','l','.' ]

const newArray1 =text.split(" ")//BOSLUGA GÖRE AYIRIR
console.log(newArray1)//[ 'today', 'is', 'monday.', '','i','am','not','happy.','i','have','to','go','scholl.' ]

const newArray2 =text.split(".")//noktaya göre cümle cümle ayırır
console.log(newArray2);//[ 'today is monday','  i am not happy',' i have to go scholl','' ]


//JavaScript Array toString()

const myNewArr = [ 'today', 'is', 'monday.', '','i','am','not','happy.','i','have','to','go','scholl.' ]
let text1 =myNewArr.toString()
console.log(text1)//today,is,monday.,,i,am,not,happy.,i,have,to,go,scholl.virgülsüz nasıl olur?????

//Access Elements of an Array
const myName = ["s","e","l","i","m"]
console.log(myName[0])//s
console.log(myName[1])//e
console.log(myName[2])//l
console.log(myName[3])//i
console.log(myName[4])//m
// chanege elements of array with using index number 

const sports =["basketball","fothball","table tenis","handball"]
sports[3] ="tenis"
console.log(sports)//[ 'basketball', 'fothball', 'table tenis', 'tenis' ]

//Add an Element to an Array

const aboutMe = ["i am","selim","my age","is"];
aboutMe.push(35);//to add to end of array
console.log(aboutMe)//[ 'i am', 'selim', 'my age', 'is', 35 ]

aboutMe.unshift("hello");//to add at beggining of array
console.log(aboutMe);//[ 'hello', 'i am', 'selim', 'my age', 'is', 35 ]
// we can add element to array with using index number 

aboutMe[6]=".";
console.log(aboutMe)//[ 'hello', 'i am', 'selim', 'my age', 'is', 35, '.' ]

//Remove an Element from an Array
aboutMe.pop();// to remove last item
console.log(aboutMe)//[ 'hello', 'i am', 'selim', 'my age', 'is', 35 ]
aboutMe.shift()
console.log(aboutMe);//[ 'i am', 'selim', 'my age', 'is', 35 ] to remove first ithem


//Array length


console.log(aboutMe.length);//5

         //array methods
// concat()joins two or more arrays and returns a result
const frontEnd =["HTML","CSS","JAVASCRİPT","REACT"];
const backend =["NODE JS","MANGO","PAYTON"];
const fullStackDevoloper =frontEnd.concat(backend);

console.log(fullStackDevoloper)//[ 'HTML', 'CSS','JAVASCRİPT','REACT','NODE JS','MANGO','PAYTON']


//indexOf():	searches an element of an array and returns its position

const uefaGruopE = ["Galatasaray","Lazio","Marsillie","L.Moskov"];
const indexofGS=uefaGruopE.indexOf("Galatasaray");
console.log(indexofGS)//0(galatasaray)

//find():	returns the first value of an array element that passes a test

const days =["monday","tuesday","thursday","wednesday","friday","saturday","sunday"]
function sevenDays (day) {
  return day==="tuesday"//
}
function findTrue () {
  console.log(days.find(sevenDays))
}
findTrue()//tuesday

//findIndex():	returns the first index of an array element that passes a test.

const myFavouriteNumbers =[3,16,61,37]
function numbers(number) {
  return number >37
}
function findIndex () {
  console.log(myFavouriteNumbers.findIndex(numbers))
}
findIndex()// index 2 (61)


//forEach()	calls a function for each element
const num =[23,14,9,5] ;
 num.forEach((item)=>{
  console.log(item+7)
} )



const a = ["a", "b", "c"];
a.forEach((element) => {
    console.log(element+2);
});

//includes()	checks if an array contains a specified element true or false 

const myColors = ["yellow","red","white","blue"]

console.log(myColors.includes("sarı"))//false

const furniture = ['table', 'chair', 'cupboard', 'wardrobe', 'stool'];
console.log(furniture.includes('chair'));//true


// push()	aads a new element to the end of an array and returns the new length of an array

const month = ["december","january","february"]
month.push("march")
console.log(month)//[ 'december', 'january', 'february', 'march' ]

// unshift().	adds a new element to the beginning of an array and returns the new length of an array

const myTeam =["galatasaray",1905]
myTeam.unshift("champion");
console.log(myTeam);//[ 'champion', 'galatasaray', 1905 ]


//pop()	removes the last element of an array and returns the removed element

const season = ["autumn","winter","april","summer"];
season.pop()
console.log(season);//[ 'autumn', 'winter', 'april' ] sondaki item ı cıkaır isim yazmaya gerek yok

//shift()	:removes the first element of an array and returns the removed element

const programming = ["html","css","javascript","react"];
programming.shift();
console.log(programming)//[ 'css', 'javascript', 'react' ] ilk bastakini çıkaracak yazmaya gerek yok


//sort()	sorts the elements alphabetically in strings and in ascending order

const myFullName =["s","e","l","i","m","c","i","h","a","n"];
myFullName.sort()
console.log(myFullName)//[ 'a', 'c', 'e', 'h', 'i', 'i', 'l', 'm', 'n', 's' ] alfabetik sıraya göre düzenler

//slice()	selects the part of an array and returns the new array


const animal = ["dog","cat","mause","bird","sheep"]
const iLike = animal.slice(1,3);//1 den basla 3 e kadar all
console.log(iLike)//[ 'cat', 'mause' ]

const myFullNames =["s","e","l","i","m","c","i","h","a","n"]
let myNames = myFullNames.slice(0,5);
console.log(myNames);//[ 's', 'e', 'l', 'i', 'm' ]


//splice()	removes or replaces existing elements and/or adds new elements

const fruits = ["apple","peach","lemon","orange","strawberry"];
fruits.splice(2,0 ,"mango","kiwi")//2 den basla hi.ç silmeden mango ve kiwi ekle

console.log(fruits)//[ 'apple','peach','mango','kiwi','lemon','orange','strawberry' ]


const sentences = ["ben","bugun","derse","elma","armut","bos","ver"];
sentences.splice(3,4,"gec","kaldım");//3 den başla sonraki 4 taneyi sill yerine "gec","kaldım" ekle

console.log(sentences)//[ 'ben', 'bugun', 'derse', 'gec', 'kaldım' ]

 
 