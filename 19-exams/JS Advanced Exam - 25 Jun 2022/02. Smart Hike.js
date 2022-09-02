class SmartHike {
    constructor(username) {
        this.username = username;
        this.goals = {};
        this.listOfHikes = [];
        this.resources = 100;
    }

    addGoal(peak, altitude) {
        if (!this.goals[peak]) {
            this.goals[peak] = altitude;
            return `You have successfully added a new goal - ${peak}`
        } else {
            return `${peak} has already been added to your goals`;
        }
    }

    hike(peak, time, difficultyLevel) {
        if (!this.goals[peak]) {
            throw new Error(`${peak} is not in your current goals`);
        } else {
            if (this.resources === 0) {
                throw new Error("You don't have enough resources to start the hike");
            }
            if (this.resources - (time * 10) < 0) {
                return "You don't have enough resources to complete the hike";
            } else {
                this.resources -= time * 10;
                this.listOfHikes.push({ peak, time, difficultyLevel });
                return `You hiked ${peak} peak for ${time} hours and you have ${this.resources}% resources left`
            }
        }
    }

    rest(time) {
        this.resources += (Number(time) * 10);
        if (this.resources < 100) {
            return `You have rested for ${time} hours and gained ${time * 10}% resources`;
        } else {
            this.resources = Math.min(100, this.resources);
            return `Your resources are fully recharged. Time for hiking!`;
        }
    }

    showRecord(criteria) {
        if (this.listOfHikes.length === 0) {
            return `${this.username} has not done any hiking yet`;
        }
        let diff = [];

        if (criteria === 'all') {
            let result = "All hiking records:\n";
            this.listOfHikes.forEach((x) => {
                result += `${this.username} hiked ${x.peak} for ${x.time} hours\n`;
            })
            return result.trim();
        }
        this.listOfHikes.forEach((x) => {
            if (x.difficultyLevel === criteria) {
                diff.push(x);
            }
        });

        if (diff.length === 0) {
            return `${this.username} has not done any ${criteria} hiking yet`;
        }
        let sorted = diff.sort((a, b) => {
            return a.time - b.time
        })
        return `${this.username}'s best ${criteria} hike is ${sorted[0].peak} peak, for ${sorted[0].time} hours`

    }

}

// // Input 1
// const user = new SmartHike('Vili');
// console.log(user.addGoal('Musala', 2925));
// console.log(user.addGoal('Rui', 1706));
// console.log(user.addGoal('Musala', 2925));

// Output 1
// You have successfully added a new goal - Musala
// You have successfully added a new goal - Rui 
// Musala has already been added to your goals

// Input 2
// const user = new SmartHike('Vili');
// console.log(user.addGoal('Musala', 2925));
// console.log(user.addGoal('Rui', 1706));
// console.log(user.hike('Musala', 8, 'hard'));
// console.log(user.hike('Rui', 3, 'easy'));
// console.log(user.hike('Everest', 12, 'hard'));

// Output 2
// You have successfully added a new goal - Musala
// You have successfully added a new goal - Rui
// You hiked Musala peak for 8 hours and you have 20% resources left 
// You don't have enough resources to complete the hike 
// Uncaught Error: Everest is not in your current goals

// Input 3
// const user = new SmartHike('Vili');
// console.log(user.addGoal('Musala', 2925));
// console.log(user.hike('Musala', 8, 'hard'));
// console.log(user.rest(18));
// console.log(user.hike('Musala', 1, 'hard'));

// console.log(user.rest(5));
// console.log(user.showRecord('hard'));


// Output 3
// You have successfully added a new goal - Musala
// You hiked Musala peak for 8 hours and you have 20% resources left 
// You have rested for 4 hours and gained 40% resources 
// Your resources are fully recharged. Time for hiking!

// Input 4
// const user = new SmartHike('Vili');
// console.log(user.showRecord('all'));

// Output 4
// Vili has not done any hiking yet


// Input 5
const user = new SmartHike('Vili');
user.addGoal('Musala', 2925);
user.hike('Musala', 8, 'hard');
console.log(user.showRecord('easy'));
user.addGoal('Vihren', 2914);
user.hike('Vihren', 4, 'hard');
console.log(user.showRecord('hard'));
user.addGoal('Rui', 1706);
user.hike('Rui', 3, 'easy');
console.log(user.showRecord('all'));

// Output 5
// Vili has not done any easy hiking yet
// Vili's best hard hike is Musala peak, for 8 hours
// All hiking records:
// Vili hiked Musala for 8 hours
