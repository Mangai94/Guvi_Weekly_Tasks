var cat = {
    name: 'Fluffy',
    activities: ['play', 'eat cat food'],
    catFriends: [
    {
    name: 'bar',
    activities: [ 'be grumpy', 'eat bread omblet'],
    weight: 8,
    furcolor: 'white'
    }, 
    {
    name: 'foo',
    activities: ['sleep', 'pre-sleep naps'],
    weight: 3
    }
    ]
   }
   
   cat.height = "40";
   cat.weight = "20";
   
   cat["name"]  = "Fluffyy";
   let weight = 0;
   
   let catarray = cat.catFriends;
   
   for(let i = 0; i < catarray.length; i++)
   {
      console.log(catarray[i].activities);
      console.log(catarray[i].name);
      weight+= catarray[i].weight;
   }
   
   let activitiescount = 0;
   
   for(let i =0 ; i < cat.catFriends.length; i++)
   {
       activitiescount+= cat.catFriends[i].activities.length;
       cat.catFriends[i].activities.push('Play');
       cat.catFriends[i].activities.push('Cuddle');
   }
   
   activitiescount+= cat.activities.length;
   
   console.log(activitiescount);
   
   cat.catFriends[0].furcolor = "black";
   
   console.log(cat.catFriends[0].furcolor);
   
   
   console.log(weight);
   
   console.log(cat);
   