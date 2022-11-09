// function myFunction()//here we create JS function which return void value. no need write void after function. js automatically takes it.
// {
// document.getElementById('demo2').innerHTML='Dyanamic paragragh created by javascript which override paragragh text with id demo2 on click event';
// document.getElementById('demo2').style.fontSize='50px';
// document.getElementById('demo2').style.background='red';
//  document.getElementById('demo2').style.color='white';
// };
function myFunction()//here we create JS function which return void value
{
   var docElement2=document.getElementById('demo2');//here we declare variable and assign it with document.getElementById('demo2'). result is same.
   docElement2.innerHTML='Dyanamic paragragh created by javascript which override paragragh text with id demo2 on click event';
   docElement2.style.fontSize='50px';
   docElement2.style.background='red';
   docElement2.style.color='white';
};