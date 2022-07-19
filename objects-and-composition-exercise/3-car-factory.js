function factory(order) {

    function createEngine(hp) {
        let engine = {};
        if (hp <= 90) {
            engine['power'] = 90;
            engine['volume'] = 1800;
        } else if (hp <= 120) {
            engine['power'] = 120;
            engine['volume'] = 2400;
        } else if (hp <= 200) {
            engine['power'] = 200;
            engine['volume'] = 3500;
        }
        return engine;
    }

    function createCarritage(type, color) {
        return { type, color };
    }

    function makeWheels(size) {
        if (size % 2 == 0) {
            size--;
        }
        let wheels = new Array(4).fill(size);
        return wheels;
    }

    return {
        model: order.model,
        engine: createEngine(order.power),
        carriage: createCarritage(order.carriage, order.color),
        wheels: makeWheels(order.wheelsize)
    }
}


console.log(factory({
    model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17
}));

console.log(factory({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
}));