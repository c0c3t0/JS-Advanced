function solve(input) {
    let register = [];

    for (let info of input) {
        let [name, level, items] = info.split(" / ");
        level = Number(level);
        items = items ? items.split(', ') : [];

        let hero = { name, level, items };
        register.push(hero);

    }
    console.log(JSON.stringify(register));
}

solve([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']
);