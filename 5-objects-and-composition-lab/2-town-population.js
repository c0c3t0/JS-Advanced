function registry(arr) {
    let data = {};

    for (let info of arr) {
        let [town, populationAsStr] = info.split(" <-> ");
        let population = Number(populationAsStr);

        if (!data[town]) {
            data[town] = 0;
        }
        data[town] += population;
    }
    for (town in data) {
        console.log(`${town} : ${data[town]}`);
    }
}
registry(['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000']);