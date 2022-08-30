class Company {
    constructor() {
        this.departments = {};
    }

    addEmployee(name, salary, position, department) {
        if (!name || !salary || salary < 0 || !position || !department) {
            throw new Error('Invalid input!');
        }

        let employee = {
            name,
            salary: Number(salary),
            position,
        }

        if (!this.departments[department]) {
            this.departments[department] = [];
        }
        this.departments[department].push(employee);
        return `New employee is hired. Name: ${name}. Position: ${position}`;
    }

    bestDepartment() {
        let bestDepartment = '';
        let bestAverageSalary = 0;

        for (let dep in this.departments) {
            let employees = Object.values(this.departments[dep]);

            let averageSalary = 0;
            employees.forEach((x) => {
                averageSalary += x['salary'];
            })
            averageSalary /= employees.length;

            if (averageSalary > bestAverageSalary) {
                bestAverageSalary = averageSalary;
                bestDepartment = dep;
            }
        }

        let result = `Best Department is: ${bestDepartment}\nAverage salary: ${bestAverageSalary.toFixed(2)}\n`;
        
        let sortedEmployees = Object.values(this.departments[bestDepartment])
            .sort((a, b) => b.salary - a.salary || a.name.localeCompare(b.name))
            .map(x => `${x.name} ${x.salary} ${x.position}`);
        
            result += sortedEmployees.join('\n');

        return result;
    }
}

let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());
