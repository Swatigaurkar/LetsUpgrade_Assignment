// Question 1
// Write a JavaScript program to display the reading status (i.e. display book name, author name,
// and reading status) of the following books.
var library = [
{
author: 'Bill Gates',
title: 'The Road Ahead',
readingStatus: true
},
{
author: 'Steve Jobs',
title: 'Walter Isaacson',
readingStatus: true
},
{
author: 'Suzanne Collins',
title: 'Mockingjay: The Final Book of The Hunger Games',
readingStatus: false
}];

for(var i=0;i<library.length;i++){
    if(library[i].readingStatus){
        console.log("Already read "+"'"+library[i].author+"'"+" by "+library[i].title+".");
    }else{
        console.log("You still need to read '"+library[i].title+"' by",library[i].author+".");
    }
}


// Question 2
//Write a javascript program that generates an alert "Not legal age to drive" if the driver age is
// below 18 years old, if driver age is greater than or equal to 18, it generates an alert "Drive safe".
/*
<html lang="en">
    <head>
        <title>Welcome</title>
    </head>
    <body>
        <h1>Javascript Demo</h1>
         <button onclick="validate()">ok</button>
        <script src="Day_3.js">
          
        </script>
    </body>
</html>

*/
 function validate(){
    var age=parseInt(prompt("Enter age"));
    if(age>=18){
        alert("Drive safe");
        console.log("Drive safe");
    }else{
        alert("Not legal age to drive");
        console.log("The driver age is below 18 years old")
    }
 }

