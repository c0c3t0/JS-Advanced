function radar(speed, area) {
    const residentialSpeedLimit = 20;
    const citySpeedLimit = 50;
    const interstateSpeedLimit = 90;
    const motorwaySpeedLimit = 130;

    let result;
    let speedStatus;
    let speedLimit;
    // let difference;


    if (area == 'residential') {
        speedLimit = residentialSpeedLimit;
    } else if (area == 'city') {
        speedLimit = citySpeedLimit;
    } else if (area == 'interstate') {
        speedLimit = interstateSpeedLimit;
    } else if (area == 'motorway') {
        speedLimit = motorwaySpeedLimit;
    }

    let difference = speed - speedLimit;

    if (speed <= speedLimit) {
        result = `Driving ${speed} km/h in a ${speedLimit} zone`;
    }
    else if (difference > 40) {
        speedStatus = 'reckless driving';
        result = `The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${speedStatus}`;
    }
    else if (difference <= 40 && speed - speedLimit > 20) {
        speedStatus = 'excessive speeding';
        result = `The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${speedStatus}`;
    }
    else if (difference <= 20) {
        speedStatus = 'speeding';
        result = `The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${speedStatus}`;
    }
    console.log(result);
}

// radar(40, 'city');
// radar(21, 'residential');
// radar(120, 'interstate');
// radar(200, 'motorway');