const primeNumbers = () => 
{   
    for(let i = 2; i<=1000; i++) 
    {   
        let share = 0;
    
    for (let j = 1; j<=1000; j++) {
        if (i % j === 0 || i === 2) {
        share += 1;     }
    }
    
    if (share <= 2) {
    console.log(i);
    }
    }
};

console.log (primeNumbers()); 