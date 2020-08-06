let array = [5643,23,36,43,54];

var oddarray = array.filter(x => x%2 !== 0);

console.log(oddarray);


var stringarray = ['mangai','raji', 'ananthi']

var output = stringarray.map(x => 
`${x.charAt(0).toUpperCase()}${x.substr(1)}`);

console.log(output);

var array = [2,3,45,6]

let output = array.reduce((sum, currentValue) =>{return sum+= currentValue}  )
console.log(output)

function findPrime(num)
{
    for(let i = 2 ; i <= Math.sqrt(num); i++)
    {
        if(num % i ==0)
            return false;
    }
    
    return true;
}

let array = [1, 2,3,4,7,8,9]
let output = [];
output = array.filter(x => findPrime(x));

console.log(output);

let array = ["MADAM", "MANGAI", "nursesrun"]

function findPalindrome(word)
{
    let charArray = word.split('');
    let n = charArray.length;
    return charArray.every((x,i,arr) => arr[i] === arr[n - i -1])
}

let output = [];
output = array.filter(x => findPalindrome(x));
console.log(output);