var obj1 = {"name":"GUVI","class":"FS" ,  "age":"20"};
var obj2 = {"class":"FS","name":"GUVI", "age":"20"};

function checkIfequal(obj1, obj2)
{
    var compareObject= {};
    if(Object.keys(obj1).length > Object.keys(obj2).length)
        compareObject = obj1;
    else
        compareObject = obj2;
    
    for(var prop in compareObject)
    {
        if(obj2[prop] != obj1[prop])
            return false;
    }
    
    return true;
}

console.log(checkIfequal(obj1, obj2));
