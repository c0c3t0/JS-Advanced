function sumFirstLast (arr) {
    let firstElement = Number(arr.shift(arr));
    let lastElement = Number(arr.pop());

    return (firstElement + lastElement);
}

sumFirstLast(['20', '30', '40']);