const  comparingNumbers = (num1, num2, num3) => 
{
    // находим наибольшее число из 3
    let number1 = (num1 > num2 && num1 > num3) ? "Наибольшее число " + num1 :"";
    console.log (number1);

    let number2 = (num2 > num1 && num2 > num3) ? "Наибольшее число " + num2 :"";
    console.log (number2);

    let number3 = (num3 > num1 && num3 > num2) ? "Наибольшее число " + num3 :"";
    console.log (number3);

    // находим наименьшее число из 3

    
    number1 = (num1 < num2 && num1 < num3) ? "Наименьшее число " + num1 :"";
    console.log (number1);

    number2 = (num2 < num1 && num2 < num3) ? "Наименьшее число " + num2 :"";
    console.log (number2);

    number3 = (num3 < num1 && num3 < num2) ? "Наименьшее число " + num3 :"";
    console.log (number3);
};

console.log (comparingNumbers(45,23,123))
