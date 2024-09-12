
mission1 = (arr) => {
    return arr.filter((num) => num % 2 === 0);
};


mission2 = (arr) => arr.filter((num) => num.length === 4).length;


mission3 = function (arr) {
    newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr = newArr.concat(arr[i]);
    }
    return newArr;
};





mission6 = (num) => {
    let fibArray = [0, 1];
    for (let i = 0, j = 1, k = 0; k < num; i = j, j = x, k++) {
        x = i + j;
        fibArray.push(x);
    }
    return fibArray[num];
};


module.exports = { mission1, mission2, mission3, mission6 };
