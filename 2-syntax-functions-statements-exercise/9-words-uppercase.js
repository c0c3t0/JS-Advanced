function solve(inputText) {
    let text = inputText;
    let words = text.match(/\w+/gm);

    let result = words.join(', ')

    console.log(result.toUpperCase());
}

solve('Hi, how are you?')
solve('hello')