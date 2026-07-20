var user_name = "omar";  //string 
var age = 21;     //number     
var first_letter = 'o';  //char 
var city;  //undefined 
var is_student = true; //boolean
var grade =null; //null

console.log(`user_name is ${user_name} , age is ${age} grade is ${grade} `)

// *************************************

var grade =parseInt( prompt("enter your grade"));

if (grade >= 90)
{
    console.log("Excellent.");
}

else if(grade >= 80 && grade<=89)
{
    console.log("Good.");
}
    
else if (grade >= 70 && grade <= 79)
{
    console.log("Average.");
}
    
else if (grade >= 60 && grade <= 69)
{
    console.log("Average.");
}

else {
    console.log("Fail");
}