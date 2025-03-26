function reverse(x: number): number {
    let temp: string = x.toString();
    //console.log(`temp before : ${temp}`);
    temp = temp.split('').reverse().join('');
    //console.log(`temp: ${temp}`);
    let result: number = parseInt(temp);
    if (x < 0) {
        result = -result;
    }   
    if (result > Math.pow(2, 31) - 1 || result < -Math.pow(2, 31)) {
        return 0;
    }
    return result;
};


reverse(123); // 321
reverse(-123); // -321