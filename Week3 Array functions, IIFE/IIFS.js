(function (array)
{
    var output =""
    for(var elemt of array)
    {
      output+= (elemt % 2 !== 0 ? elemt : "");
      output+= " "
    }
    console.log(output.trim());
})([1,2,3,4,5])


(function (array)
{
  var sum = array.reduce((previousValue, currentvalue) =>{
       return  previousValue+currentvalue;
    });
    console.log(sum);
})([1,2,3,4,5])

(function(array)
{
    function findPrime(num)
    {
        for(let i = 2; i <= Math.sqrt(num); i++)
        {
            if(num % i == 0)
                return false;
        }
        
        return true;
    }
    var output = [];
    array.forEach(x => {
        if(findPrime(x))
            output.push(x)
    });
    
    console.log(output);
       
})([1, 2, 3, 4, 5, 8, 10, 13]);

(function(array)
{
   function findPalindrome(word)
   {
       let len = word.length/2;
       let len1 = word.length;
       for(let i = 0 ; i < len; i++)
       {
           if(word[i] !== word[len1 -i -1])
            return false;
       }
       return true;
   }
   var output = [];
   array.forEach(x => {
       if(findPalindrome(x))
        output.push(x)
   });
   
   console.log(output);
})(["MANAM", "MADAM", "MADA", "nursesrun"]);


(function(array1, array2)
{
  let output = [];
  let p1 = 0;
  let p2 = 0;
  let n = array1.length + array2.length;
  while(output.length < n)
  {
      if(array1[p1] < array2[p2])
      {
          output.push(array1[p1]);
          p1++;
          if(p1 == array1.length)
          {
                for(let i = p2; i < array2.length; i++)
                    output.push(array2[i])
          }    
      }
      else
      {
        output.push(array2[p2]);
        p2++;
        if(p2 == array2.length)
        {
            for(let i = p1; i < array1.length; i++)
                output.push(array1[i])
        }
      }
  }
  
  console.log(output);
})([1,9,13], [6,7])


(function(array)
{
    var output = [];
    array.forEach((x,i,a) =>{
        if(a.indexOf(x) == i)
            output.push(x);
    })
    
    console.log(output);
})([1,2,2,3,4,5,3,5,6,7,6,3, 3])

(function(array)
{
   array.forEach((x, i) => {
       array[i] = x.charAt(0).toUpperCase() + x.substr(1).toLowerCase()
   })
   console.log(array);
})(["MANGAI", "RAMA", "ANANTHI", "GAVS"])

(function(array, k)
{
    k = Math.floor(k%array.length);
    console.log(k)
    var b = [];
    let n = array.length;
    if(k === 0)
    {
        console.log(array);
        return;
    }
        
    for(let i = 0; i < n; i++)
    {
        if(i < k)
            b[i] = array[(n - k) + i];
        else
            b[i] = array[i - k];
    }
     
    console.log(b);
    
})([1,2,3,4, 5, 6], 2)