function rectangle(size) {
    let defaultStarsCount = 5;
    const star = '* ';

    if (size === null || size === '' || size === 0) {
        for (let i = 0; i < defaultStarsCount; i++) {
            console.log(`${(star.repeat(defaultStarsCount)).trim()}`);
        }
    } else {
        for (let i = 0; i < size; i++) {
            console.log(`${(star.repeat(size)).trim()}`);
        }
    }
}

rectangle('')
rectangle(0)
rectangle(2)
rectangle(5)
rectangle(7)