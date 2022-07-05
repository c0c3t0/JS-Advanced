function largest(first, second, third) {
    let result;

    if (first > second && first > third) {
        result = first;
    }
    else if (second > first && second > third) {
        result = second;
    }
    else if (third > first && third > second) {
        result = third;
    }

    console.log(`The largest number is ${result}.`);
}

largest(5, -3, 16)
largest(-3, -5, -22.5)