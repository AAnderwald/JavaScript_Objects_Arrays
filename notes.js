// create an array - an array is group of similiar values within brackets; mutlitple value in a single variable using []
let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']; //red etc are strings that are colors

colors.length   // the number of value in the array (7)

colors [3]    // if want to call about just green, if console.log this is just printing things will put green

//want print message "{color} is {length} characters long."; there are many ways to do this

//add values
colors.push("burlywood");   //pushes items into the colors array that was created, will add to the end of the array,this would make the array the lenght of 8 instead of 7 
colors.unshift("burlywood");          // adds to the first value of the arry

//remvoe array values
colors.pop();               // this would remove the last item in the array
colors.shift();             // removes the first index 

for (let i =0; i < colors.length; i++ )    {                              // use for loop, start with 0 because the first index/value is zero the red; i < colors.length  which is seven so it's saying i < 7 because it starts at 0; i++ will got from the 0 color to the next
    console.log(`${colors[i]} is ${colors[i].length} characters long.`)   //how access the first value of colors  ${colors[i]}; then by the length ${colors[i].length}, strings have a length property just like arrays. strings are just a list of characters
  }  
  
colors.forEach(function (value) {                                         //same result, its a method so you call in withe parenthesis. and will copy everything in the for function; forEach is excuted for every value of the array
    console.log(`${value} is ${value.length} characters long.`);     
});
 
// Objects

 const team = {         // basket ball team brookly nets information: how to define an object, 
    city: "Brooklyn",
    teamName: "Nets",   // these strings
    inPlayoffs: false,  //boolean so not quotes
    record: {    //these are numbers they consist of home wins/losses; away wins/losses
        wins: 42,
        losses: 26,
    },
 };

 //bracket notation
 team["city"]  //how to access the city value; note need the quyotes without quotes it's a variable which will make it undefined. 

//dot notation; to acces the city value
team.city

//what if access the teams wins
team.record.wins  //city is a string dot notation is used to access properites on an object whereas city is an object (so take the city out.): this will give the number 42
