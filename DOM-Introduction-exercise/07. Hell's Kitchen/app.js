function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick() {
      let input = JSON.parse(document.querySelector('#inputs textarea').value);
      let restaurantInfo = {};
      let bestRestaurant = '';
      let averageSalary = 0;
      let totalSalaries = 0;


      for (let line of input) {
         let [restaurantName, restaurantWorkers] = line.split(' - ');
         let workers = restaurantWorkers.split(", ")

         for (let w of workers) {
            let [workerName, workerSalary] = w.split(" ");

            if (!restaurantInfo.hasOwnProperty(restaurantName)) {
               restaurantInfo[restaurantName] = {};
            }
            restaurantInfo[restaurantName][workerName] = Number(workerSalary);
         }
      }

      let entries = Object.entries(restaurantInfo);

      for (let entry of entries) {
         console.log(entry);
         let nameRes = entry[0];
         let salaries = Object.values(entry[1]);

         for (let salary of salaries) {
            totalSalaries += salary;
         }

         let currentAverageSalary = totalSalaries / salaries.length;

         if (currentAverageSalary > averageSalary) {
            averageSalary = currentAverageSalary;
            bestRestaurant = nameRes;
            totalSalaries = 0;
         }
      }
      let result = Object.entries(restaurantInfo[bestRestaurant]).sort((a, b) => b[1] - a[1]);
      let outputWorkers = '';
      
      result.forEach(w => outputWorkers += `Name: ${w[0]} With Salary: ${w[1]} `);

      document.querySelector('#outputs p').textContent = `Name: ${bestRestaurant} Average Salary: ${averageSalary.toFixed(2)} Best Salary: ${result[0][1].toFixed(2)}`;
      document.querySelector('#workers p').textContent = outputWorkers;
   }
}