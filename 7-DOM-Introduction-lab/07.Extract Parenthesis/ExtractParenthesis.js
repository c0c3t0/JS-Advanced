function extract(content) {
    let contentElement = document.getElementById(content);

    let pattern = /\(([^(]+)\)/g;
    let matches = contentElement.textContent.matchAll(pattern);
    let result = [];
    for (const match of matches) {
        result.push(match[1])
    }

    return result.join('; ');
}