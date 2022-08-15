function argumentInfo() {
    let info = {};

    for (let arg of arguments) {
        let type = typeof (arg);
        console.log(`${type}: ${arg}`);
        if (!info[type]) {
            info[type] = 1;
        } else {
            info[type]++;
        }
    }

    Object.keys(info)
        .sort((a, b) => info[b] - info[a])
        .forEach(key => console.log(`${key} = ${info[key]}`));
}

argumentInfo('cat', 42, 44, 'fas', function () { console.log('Hello world!'); })