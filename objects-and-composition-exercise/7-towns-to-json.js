function solve(input) {
    result = [];

    let [town, lat, lon] = input[0].slice(2, -2).split(" | ")

    for (let i = 1; i < input.length; i++) {
        let [name, latitude, longitude] = input[i].slice(2, -2).split(" | ");

        result.push({
            [town]: name,
            [lat]: Number(latitude).toFixed(2),
            [lon]: Number(longitude).toFixed(2)
        })
    }
    console.log(JSON.stringify(result, function (key, value) {
        if (key == "Latitude") {
            return Number(value);
        } else if (key == "Longitude") {
            return Number(value);
        } else {
            return value;
        }
    }));

}

solve([
    '| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |'
])

solve([
    '| Town | Latitude | Longitude |',
    '| Veliko Turnovo | 43.0757 | 25.6172 |',
    '| Monatevideo | 34.50 | 56.11 |'])