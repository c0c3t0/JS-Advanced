function solution(command) {

    if (command === 'upvote') {
        return this.upvotes++;
    } else if (command === 'downvote') {
        return this.downvotes++;
    }

    let upvotes = this.upvotes;
    let downvotes = this.downvotes;
    let totalVotes = upvotes + downvotes;
    let balance = upvotes - downvotes;

    function ratingState() {
        if (totalVotes < 10) {
            return 'new';
        } else if (upvotes > totalVotes * 0.66) {
            return 'hot';
        } else if (balance >= 0 && totalVotes > 100) {
            return 'controversial'
        } else if (balance < 0) {
            return 'unpopular';
        } else {
            return 'new';
        }
    }

    if (totalVotes > 50) {
        let obfuscate = Math.ceil(Math.max(upvotes, downvotes) * 0.25);
        return [upvotes + obfuscate, downvotes + obfuscate, balance, ratingState()];
    }

    return [upvotes, downvotes, balance, ratingState.call(this)];

}


let post = {
    id: '3',
    author: 'emil',
    content: 'wazaaaaa',
    upvotes: 100,
    downvotes: 100
};
// let post = {
//     id: '3',
//     author: 'emil',
//     content: 'wazaaaaa',
//     upvotes: 0,
//     downvotes: 0
// };
solution.call(post, 'upvote');
solution.call(post, 'downvote');
let score = solution.call(post, 'score');
console.log(score); // [127, 127, 0, 'controversial']
solution.call(post, 'downvote');         // (executed 50 times)

score = solution.call(post, 'score');
console.log(score);    // [139, 189, -50, 'unpopular']
