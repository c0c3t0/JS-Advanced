function create(words) {
   let contentElement = document.querySelector('#content');

   words.forEach(x => {
      let divCreate = document.createElement('div');
      let pCreate = document.createElement('p');
      pCreate.textContent = x;
      pCreate.style.display = 'none'

      divCreate.addEventListener('click', (e) => {
         e.target.children[0].style.display = 'block';
      })
      
      contentElement.appendChild(divCreate);
      divCreate.appendChild(pCreate);
   });
}