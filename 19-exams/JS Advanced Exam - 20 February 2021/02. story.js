class Story {
    constructor(title, creator) {
        this.title = title;
        this.creator = creator;
        this._comments = [];
        this._likes = [];
    }

    get likes() {
        if (this._likes.length === 0) {
            return `${this.title} has 0 likes`;
        } else if (this._likes.length === 1) {
            return `${this._likes[0]} likes this story!`;
        } else {
            return `${this._likes[0]} and ${this._likes.length - 1} others like this story!`
        }
    }

    like(username) {
        
        if (this._likes.includes(username)) {
            throw new Error("You can't like the same story twice!");
        }
        if (username === this.creator) {
            throw new Error("You can't like your own story!");
        }
        this._likes.push(username)
        return `${username} liked ${this.title}!`
    }

    dislike(username) {
        if (!this._likes.includes(username)) {
            throw new Error("You can't dislike this story!");
        }
        console.log(this._likes);
        this._likes = this._likes.filter(el => el !== username);
        console.log(this._likes);

        return `${username} disliked ${this.title}`;
    }
}

let art = new Story("My Story", "Anny");
art.like("John");
// art.like("Johnhy");
console.log(art.likes);
art.dislike("John");
console.log(art.likes);