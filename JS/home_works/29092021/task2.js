const number = (num) => {

    let str = String(num);
    let strNum = str.length;
    let result = 0; 
    let check = 2;
    let figure = 0;

while (check != 1) {
    for (let i = 0; i != strNum; ++i) {
        figure = Number(str[i]);
        result += figure; 
    }

    strNum = String(result); 
    strNum = strNum.length;
    check = strNum;
    if (check === 1) {
        return result;
    }
    figure = 0;
    str = String(result);
    result = 0;
}

};
console.log (number(43547));
