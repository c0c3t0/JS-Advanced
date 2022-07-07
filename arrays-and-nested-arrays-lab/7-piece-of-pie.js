function solve(arr, flavor1, flavor2) {
    firstFlavorIndex = arr.find((el) => el == flavor1);
    secondFlavorIndex = arr.find((el) => el == flavor2);
    return arr.slice(arr.indexOf(firstFlavorIndex), arr.indexOf(secondFlavorIndex) + 1);
}

solve(['Pumpkin Pie',
    'Key Lime Pie',
    'Cherry Pie',
    'Lemon Meringue Pie',
    'Sugar Cream Pie'],
    'Key Lime Pie',
    'Lemon Meringue Pie');

solve(['Apple Crisp',
    'Mississippi Mud Pie',
    'Pot Pie',
    'Steak and Cheese Pie',
    'Butter Chicken Pie',
    'Smoked Fish Pie'],
    'Pot Pie',
    'Smoked Fish Pie')