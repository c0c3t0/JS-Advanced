function solve(inputText) {
    let text = inputText;
    let words = text.match(/\w+/gm);

    let result = words.join(', ')

    console.log(result.toUpperCase());
}

solve('Hi, h3ow are you?')
solve('hello')