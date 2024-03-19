var num=(Math.ceil(Math.random()*100));
var count=1;
console.log(num);
function findNumber() 
{
    var numuser=parseInt(document.getElementById("n1").value);
    if(numuser==num)
    {
        document.getElementById("result").textContent="***Congratualtions the number is correct.You guess the number in "+count+" tries";
    }
    else if(numuser<num)
    {
        document.getElementById("result").textContent="oops! try greatest number.";

    }
    else
    {
        document.getElementById("result").textContent="oops!try with Smaller number.";
    }
    document.getElementById("tries").textContent = count;
    count++;

}