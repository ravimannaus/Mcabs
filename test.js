// Add your code here


var myString = "";
function Recurssion(x)
{
  
  if (x > 0)
  {
    myString += "Reccursion\n";
    
    
    //recurssion(x-1);
  }
 else
  {
    return myString;
  }

}
var funcCheck = Recurssion(prompt("Enter the reccursion value for the function"));
alert(funcCheck);