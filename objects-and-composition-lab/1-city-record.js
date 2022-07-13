function cities(name, population, treasury) {
    let city = {
        name,
        population,
        treasury,
    };
    return city;
}

console.log(cities('Tortuga',
7000,
15000));