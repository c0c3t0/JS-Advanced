function solve(number, operator1, operator2, operator3, operator4, operator5) {
    let num = Number(number);
    let operators = [operator1, operator2, operator3, operator4, operator5];

    let chop = function (num) {
        return num / 2;
    };
    let dice = function (num) {
        return Math.sqrt(num)
    };
    let spice = function (num) {
        return num + 1;
    };
    let bake = function (num) {
        return num * 3;
    };
    let fillet = function (num) {
        return num * 0.80;
    };

    for (let i = 0; i < operators.length; i++) {
        let currentOperator = operators[i];
        switch (currentOperator) {
            case 'chop':
                num = chop(num);
                break;
            case 'dice':
                num = dice(num);
                break;
            case 'spice':
                num = spice(num);
                break;
            case 'bake':
                num = bake(num);
                break;
            case 'fillet':
                num = fillet(num);
                break;       
        }
        console.log(num);
    }
}

solve('32', 'chop', 'chop', 'chop', 'chop', 'chop')
solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet')