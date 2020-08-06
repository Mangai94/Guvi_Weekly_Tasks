function printAllValues(object)
{
    return Object.values(object);
}

function printAllKeys(object)
{
    return Object.keys(object);
}

console.log(printAllKeys(object));
console.log(printAllValues(object));


var object1 = {name: 'ISRO' , age: 35, role: 'Scientist'};
var keys = Object.keys(object1);
var output = [];
for(let i = 0 ; i < keys.length; i++)
{
    output.push([keys[i], object1[keys[i]]]);
}

console.log(output);
var object = {name: 'RajiniKanth', age: 33, hasPets : false};



var array = ['GUVI', 'I', 'am', 'Geek'];
function transformFirstAndLast(array)
{
    let object= {}
    object[array[0]]= array[array.length - 1];
    return object;
}

console.log(transformFirstAndLast(array));



var array = [['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]];

function fromListToObject(array)
{
    var object = {};
    for(let i = 0; i < array.length; i++)
    {
        object[array[i][0]] = array[i][1];
    }
    
    return object;
}

console.log(fromListToObject(array));

var array = [[['firstName', 'Vasanth'], ['lastName', 'Raja'], ['age', 24], ['role', 'JSWizard']], [['firstName', 'Sri'], ['lastName', 'Devi'], ['age', 28], ['role', 'Coder']]];



function transformGeekData(array)
{
    var outputArray = [];
    for(let i = 0; i < array.length; i++)
    {
        var object = {};
        for(let j = 0; j < array[i].length; j++)
        {
            object[array[i][j][0]] = array[i][j][1];
        }
        outputArray.push(object);
    }
    
    return outputArray;
}

console.log(transformGeekData(array));

var expected = {foo: 6, bar: 5};
var actual = {foo: 5, bar: 6}
function assertObjectsEqual(object1, object2)
{
    if(JSON.stringify(object1) == JSON.stringify(object2))
        return 'PASSED'
    else
        return 'FAILED';
}

console.log(assertObjectsEqual(expected, actual))


   var securityQuestions = [
    {
    question: 'What was your first pet’s name?',
    expectedAnswer: 'FlufferNutter'
    },
    {
    question: 'What was the model year of your first car?',
    expectedAnswer: '1985'
    },
    {
    question: 'What city were you born in?',
    expectedAnswer: 'NYC'
    }
  ]
  
  function chksecurityQuestions(securityQuestions,question, ans) 
  {
      for(let i = 0; i < securityQuestions.length; i++)
      {
          if(securityQuestions[i]["question"].trim() == question.trim())
          {
              if(securityQuestions[i]["expectedAnswer"].trim() == ans.trim() )
                return true;
              else
                return false;
          }   
      }
  }
  
  var ques = 'What was your first pet’s name?';
  var ans  = 'FlufferNutter';
  
  console.log(chksecurityQuestions(securityQuestions, ques, ans));


  var students = [
    {
    name: 'Siddharth Abhimanyu', age: 21}, { name: 'Malar', age: 25},
    {name: 'Maari',age: 18},{name: 'Bhallala Deva',age: 17},
    {name: 'Baahubali',age: 16},{name: 'AAK chandran',age: 23},   {name:'Gabbar Singh',age: 33},{name: 'Mogambo',age: 53},
    {name: 'Munnabhai',age: 40},{name: 'Sher Khan',age: 20},
    {name: 'Chulbul Pandey',age: 19},{name: 'Anthony',age: 28},
    {name: 'Devdas',age: 56} 
    ];
    
    function returnMinors(arr)
    {
        arr = arr.filter(function(x, i, a){
         if(x.age < 20)
            return true;
        })
        
        return arr;
    }
    
    console.log(returnMinors(students));