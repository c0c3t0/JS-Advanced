function solve() {
    document.querySelector('#add').addEventListener('click', validateInputs);

    function validateInputs(e) {
        e.preventDefault();
        const task = document.querySelector('#task');
        const description = document.querySelector('#description');
        const date = document.querySelector('#date');

        if (!task.value || !description.value || !date.value) {
            return;
        }
        // TODO: After validating the input fields, you need to add the new task (article) in “Open” section.
    }
}