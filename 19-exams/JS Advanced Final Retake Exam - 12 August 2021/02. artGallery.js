class ArtGallery {
    constructor(creator) {
        this.creator = creator;
        this.possibleArticles = { "picture": 200, "photo": 50, "item": 250 };
        this.listOfArticles = [];
        this.guests = [];
    }

    addArticle(articleModel, articleName, quantity) {
        articleModel = articleModel.toLowerCase();
        quantity = Number(quantity);

        let model = Object.keys(this.possibleArticles).find(key => key === articleModel);
        if (!model) {
            throw new Error('This article model is not included in this gallery!');
        }

        let name = this.listOfArticles.find(name => name.articleName === articleName);
        if (!name) {
            this.listOfArticles.push({ articleModel, articleName, quantity });
        }
        else {
            if (name.articleModel === articleModel) {
                name.quantity += quantity;
            }
        }
        return `Successfully added article ${articleName} with a new quantity- ${quantity}.`
    }

    inviteGuest(guestName, personality) {
        let name = this.guests.find(name => name.guestName === guestName);
        if (name) {
            throw new Error(`${guestName} has already been invited.`);
        } else {
            let points = 0;

            if (personality === "Vip") {
                points = 500;
            } else if (personality === "Middle") {
                points = 250;
            }

            this.guests.push({ guestName, points, purchaseArticle: 0 });
        }
        return `You have successfully invited ${guestName}!`

    }

    buyArticle(articleModel, articleName, guestName) {
        let name = this.listOfArticles.find(name => name.articleName === articleName);

        if (!name) {
            throw new Error('This article is not found.');
        } else {
            if (name.articleModel !== articleModel) {
                throw new Error('This article is not found.');
            }
            if (name.quantity === 0) {
                return `The ${articleName} is not available.`;
            }

        }

        let guest = this.guests.find(name => name.guestName === guestName);
        if (!guest) {
            return 'This guest is not invited.';
        } else {
            if (guest.points < this.possibleArticles.articleModel) {
                return 'You need to more points to purchase the article.';
            } else {
                guest.points -= this.possibleArticles.articleModel;
                name.quantity -= 1;
                guest.purchaseArticle +=1;
            }
        }
        return `${guestName} successfully purchased the article worth ${this.possibleArticles[`${articleModel}`]} points.`

    }

    showGalleryInfo(criteria) {
        let result = '';
        if (criteria === 'article') {
            result = 'Articles information:\n';
            this.listOfArticles.map(el => result += `${el.articleModel} - ${el.articleName} - ${el.quantity}\n`);
        } else if (criteria === 'guest') {
            result = 'Guests information:\n';
            this.guests.map(el => result += `${el.guestName} - ${el.purchaseArticle}\n`);
        }
        return result.trim();
    }
}

// const artGallery = new ArtGallery('Curtis Mayfield');
// console.log(artGallery.addArticle('picture', 'Mona Liza', 3));
// console.log(artGallery.addArticle('Item', 'Ancient vase', 2));
// console.log(artGallery.addArticle('PICTURE', 'Mona Liza', 1));

// const artGallery = new ArtGallery('Curtis Mayfield');
// console.log(artGallery.inviteGuest('John', 'Vip'));
// console.log(artGallery.inviteGuest('Peter', 'Middle'));
// console.log(artGallery.inviteGuest('John', 'Middle'));

// const artGallery = new ArtGallery('Curtis Mayfield');
// artGallery.addArticle('picture', 'Mona Liza', 3);
// artGallery.addArticle('Item', 'Ancient vase', 2);
// artGallery.addArticle('picture', 'Mona Liza', 1);
// artGallery.inviteGuest('John', 'Vip');
// artGallery.inviteGuest('Peter', 'Middle');
// console.log(artGallery.buyArticle('picture', 'Mona Liza', 'John'));
// console.log(artGallery.buyArticle('item', 'Ancient vase', 'Peter'));
// console.log(artGallery.buyArticle('item', 'Mona Liza', 'John'));

// const artGallery = new ArtGallery('Curtis Mayfield'); 
// artGallery.addArticle('picture', 'Mona Liza', 3);
// artGallery.addArticle('Item', 'Ancient vase', 2);
// artGallery.addArticle('picture', 'Mona Liza', 1);
// artGallery.inviteGuest('John', 'Vip');
// artGallery.inviteGuest('Peter', 'Middle');
// artGallery.buyArticle('picture', 'Mona Liza', 'John');
// artGallery.buyArticle('item', 'Ancient vase', 'Peter');
// console.log(artGallery.showGalleryInfo('article'));
// console.log(artGallery.showGalleryInfo('guest'));

const art = new ArtGallery("Curtis Mayfield");

console.log(art.addArticle('picture', 'Mona Liza', 3));
console.log(art.addArticle('Item', 'Ancient vase', 2));
console.log(art.addArticle('picture', 'Mona Liza', 1));

console.log(art.inviteGuest('John', 'Vip'));
console.log(art.inviteGuest('Peter', 'Middle'));

console.log(art.buyArticle('picture', 'Mona Liza', 'John'))//, "John successfully purchased the article worth 200 points.");
console.log(art.buyArticle('item', 'Ancient vase', 'Peter'))//, "Peter successfully purchased the article worth 250 points.");
console.log(art.buyArticle('item', 'Mona Liza', 'John'))//.to.throw(Error,"This article is not found.");