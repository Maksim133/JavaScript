const  comparingNumbers = (num1, num2, num3) =>
// предусматриваем случай, когда все числа равны
{
    if ((num1===num2) && (num1==num3))
{
    console.log ("Все числа равны");
    
}
// условие, когда наибольшее число 1 число 
else if ((num1 > num2) && (num1 > num3)) 
{
    
    console.log("наибольшее число " + num1);
    if (num2 > num3) 
    {
    console.log ("наименьшее число " + num3);
    }
    else
    {
    console.log ("наименьшее число " + num2);
    }
}
//условие, когда наибольшее число 3 число 
else if ((num3 > num2) && (num3 > num2)) 
{
    console.log("наибольшее число " + num3);
    if (num1 > num2) 
    {
    console.log ("наименьшее число " + num2);
    }
    else
    {
    console.log ("наименьшее число " + num1);
    }
}
//условие, когда наибольшее число 2 число 
else if ((num2 > num1) && (num2 > num3)) 
{
    console.log("наибольшее число " + num2);
    if (num1 > num3) 
    {
    return console.log ("наименьшее число " + num3);
    }
    else
    {
    return console.log ("наименьшее число " + num1);
    }
}
//условие, когда числа 1  и 2 равны 
else if ((num1 === num2) && (num1 < num3)) 
{
    return console.log("наибольшее число " + num3, "наименьшее число " + num2);
}
else if ((num1 === num2) && (num1 > num3)) 
{
     console.log ("наименьшее число " + num3, "наибольшее число " + num2);
}

//условие, когда числа 2  и 3 равны
else if ((num2 === num3) && (num1 < num3)) 
{
    return console.log("наибольшее число " + num3, "наименьшее число " + num1);
}

else if ((num2 === num3) && (num1 > num3)) 
{
    console.log ("наименьшее число " + num3, "наибольшее число " + num1);
}
//условие, когда числа 1  и 3 равны
else if ((num1 === num3) && (num2 < num3)) 
{
    console.log("наибольшее число " + num3, "наименьшее число " + num2);
}
else if ((num1 === num3) && (num2 > num3))
{
    console.log ("наименьшее число " + num3, "наибольшее число " + num2);
}

};
console.log (comparingNumbers(1,2,3));