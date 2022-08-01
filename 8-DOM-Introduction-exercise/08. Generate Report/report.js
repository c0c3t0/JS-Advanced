function generateReport() {
    let checkboxes = document.querySelectorAll('thead tr th input');
    let rows = document.querySelectorAll('tbody tr');
    let result = [];
    let report = {};

    for (let i = 0; i < rows.length; i++) {
        for (let j = 0; j < checkboxes.length; j++) {
            if (checkboxes[j].checked) {
                report[checkboxes[j].name] = rows[i].children[j].textContent;
            }
        }
        result.push(report);
    }
    document.querySelector('#output').textContent = JSON.stringify(result);
}