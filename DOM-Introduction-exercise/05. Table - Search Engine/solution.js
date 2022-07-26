function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let inputElement = document.getElementById('searchField');
      let rows = document.querySelectorAll('tbody tr');

      for (let row of rows) {
         row.classList.remove('select')

         if (row.innerHTML.includes(inputElement.value) && inputElement.value !== '') {
            row.className = 'select';
         }
      }
      inputElement.value = '';
   }
}