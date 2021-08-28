reverseString = (words) => 
{   
    let str ='';
    for (let i = words.length; i >= 0; i--)
    {
        str += words[i];
    }
    return str;
};
console.log(reverseString("а роза упала на лапу азора"));


