console.log('This is my first java script code');

var countryname = prompt('Tell us, from any country you are?');
alert('You are welcomed! we sure that '+ countryname + ' is great country');


var pic = prompt ('how many picture would you see?')
 for (i= 1; i <= pic ; i++) { document.write ( '<p>'+ i+'</p>' +'<img width="500",height="1000" src="turkey.jpg">') }

 

var userName = prompt('What is your name?');
var validName = CheckUserInput(userName,'What is your name?')
var Age = prompt('How old are you?');
var validAge = CheckUserInput(Age,'How old are you')
 
 function CheckUserInput (valid,message){
   
    while (valid === '' || valid==='null'|| valid==='undefined') 
    {valid=prompt(message)};
    return valid;
 }
