function solve() {
    let movie = document.querySelector('#container input:nth-of-type(1)');
    let hall = document.querySelector('#container input:nth-of-type(2)');
    let price = document.querySelector('#container input:nth-of-type(3)');
    let onScreenBtn = document.querySelector('#container button');
    let clearBtn = document.querySelector('#archive button');

    let moviesOnScreen = document.querySelector('#movies');
    let archive = document.querySelector('#archive');

    function createElement(type, text, placeholder) {
        let result = document.createElement(type);
        if (text) {
            result.textContent = text;
        }
        if (placeholder) {
            result.placeholder = placeholder;
        }

        return result;
    }

    onScreenBtn.addEventListener('click', (e) => {
        e.preventDefault();

        if (movie.value === '' || hall.value === '' || price.value === '') {
            return;
        }
        if (!Number(price.value)) {
            return;
        }

        let ul = moviesOnScreen.children[1];

        let li = createElement('li');
        let span = createElement('span', movie.value);
        let strong = createElement('strong', `Hall: ${hall.value}`);

        let div = createElement('div');
        let strongPrice = createElement('strong', Number(price.value).toFixed(2));
        let inputSoldTickets = createElement('input', undefined, 'Tickets Sold');
        let archiveBtn = createElement('button', 'Archive');

        div.appendChild(strongPrice);
        div.appendChild(inputSoldTickets);
        div.appendChild(archiveBtn);

        li.appendChild(span);
        li.appendChild(strong);
        li.appendChild(div);

        ul.appendChild(li);

        movie.value = '';
        hall.value = '';
        price.value = '';

        archiveBtn.addEventListener('click', (e) => {
            e.preventDefault();
            console.log(inputSoldTickets.value === '0');
            console.log(Number(inputSoldTickets.value));
            if (inputSoldTickets.value === '0' || Number(inputSoldTickets.value)) {
            

            let totalPrice = (Number(inputSoldTickets.value) * Number(strongPrice.textContent)).toFixed(2);
            let archiveUl = archive.children[1];
            let archiveLi = createElement('li');
            let archiveSpan = createElement('span', span.textContent);
            let archiveStrong = createElement('strong', `Total amount: ${totalPrice}`);
            let deleteBtn = createElement('button', 'Delete');

            archiveLi.appendChild(archiveSpan);
            archiveLi.appendChild(archiveStrong);
            archiveLi.appendChild(deleteBtn);
            archiveUl.appendChild(archiveLi);

            e.currentTarget.parentElement.parentElement.remove();
            console.log((document.querySelector('#movies > ul').children.length));

            deleteBtn.addEventListener('click', (e) => {
                e.currentTarget.parentElement.parentElement.remove();
            })

            clearBtn.addEventListener('click', (e) => {
                e.preventDefault();

                let allLi = e.currentTarget.parentElement.children[1].children;
                console.log(allLi);
                for (let li of allLi) {
                    li.remove();
                }
            })
        }
        })
    })

}

    // // fill inputs
    // document.querySelector("#container > input[type=text]:nth-child(1)").value = 'Avengers: Endgame';
    // document.querySelector("#container > input[type=text]:nth-child(2)").value = 'Main';
    // document.querySelector("#container > input[type=text]:nth-child(3)").value = '12.00';
    // // click On Screen
    // document.querySelector("#container > button").click();
    // // fill input ticket count
    // document.querySelector("#movies > ul > li > div > input").value = 0;
    // // click Archive
    // document.querySelector("#movies > ul > li > div > button").click(); 
    
    // // Delete movie from archive functions;
    // document.querySelector("#archive > ul > li > button").click();
    // let archLiArr = Array.from(document.querySelector("#archive > ul").children);
    // expect(archLiArr.length).to.be.equal(0,'The archived movie must be deleted from the archive ul'); 
     
 