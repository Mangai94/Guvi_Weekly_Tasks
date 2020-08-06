function addFive(num)
{
    return num + 5;
}

console.log(addFive(10));
console.log(addFive(0));
console.log(addFive(-8));



function getOpposite(num)
{
   if(isNaN(num))
    return -1;
   else if(num === 0)
    return -1;
   else if(Math.floor(num) == num)
    return -num;
   else
    return -1;
}

console.log(getOpposite(5));
console.log(getOpposite(0));
console.log(getOpposite(-5));
console.log(getOpposite('5a'));
console.log(getOpposite(5.5));

function toSeconds(min) {
    if(isNaN(min))
    {
        console.log("Not a number");
        return;
    }
    
    return min * 60;
}

console.log(toSeconds(5))  
console.log(toSeconds(3))
console.log(toSeconds(2))

function toInteger(mystr) {
    if(isNaN(mystr))
        return;
        
    return +mystr;
}

console.log(toInteger(6))
console.log(toInteger(1000))
console.log(toInteger(12))

function toInteger(mystr) {
    if(isNaN(mystr))
        return;
        
    return +mystr;
}

console.log(toInteger(6))
console.log(toInteger(1000))
console.log(toInteger(12))

function nextNumber(myint) {
    if(isNaN(myint))
        return;
        
    return myint+1;
}

console.log(nextNumber(0))
console.log(nextNumber(9))
console.log(nextNumber(-3))

function getFirstElement(arr)
{
    return arr[0];
}

console.log(getFirstElement(5))
console.log(getFirstElement([1, 2, 3]))
console.log(getFirstElement([80, 5, 100]));

function hourToSeconds(arr) {
    return arr * 60 * 60;
}

console.log(hourToSeconds(2))
console.log(hourToSeconds(10))
console.log(hourToSeconds(24))

function findPerimeter(num1,num2) {
    return 2 * (num1 + num2);
}

console.log(findPerimeter(6, 7))
console.log(findPerimeter(20, 10))
console.log(findPerimeter(2, 9))

// Merge 2 strings and returns a single string

function getFullName(firstName, lastName){
    return `${firstName}-${lastName}`
}

console.log( getFullName("GUVI","GEEK"));


function getDistance(x1, y1, x2, y2)
{
    return Math.round(Math.sqrt((x1 - x2)* (x1 - x2) - (y1 - y2) * (y1 - y2)));
}

console.log(getDistance(100, 100, 400, 300));

  var obj = {
    mykey: 'value'
   };
   
   function removeProperty(obj, key){
       delete obj[key]    
   }
   
   console.log(removeProperty(obj, 'mykey'));
   console.log(obj[mykey]);

