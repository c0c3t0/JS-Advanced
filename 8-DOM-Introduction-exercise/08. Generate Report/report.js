function generateReport() {
    let checkboxes = document.querySelectorAll('thead tr th input');
    let rows = document.querySelectorAll('tbody tr');
    let result = [];

    for (let i = 0; i < rows.length; i++) {
        let report = {};
        for (let j = 0; j < checkboxes.length; j++) {
            if (checkboxes[j].checked) {
                report[checkboxes[j].name] = rows[i].children[j].textContent;
            }
        }
        result.push(report);
    }
    document.querySelector('#output').textContent = JSON.stringify(result);
}