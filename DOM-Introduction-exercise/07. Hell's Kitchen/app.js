function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick() {
      let input = JSON.parse(document.querySelector('#inputs textarea').value);
      let restaurantInfo = {};
      let bestRestaurant = '';
      let averageSalary = 0;
      let bestSalary = 0;


      for (let line of input) {
         let [restaurantName, restaurantWorkers] = line.split(' - ');
         let workers = restaurantWorkers.split(", ")

         for (let w of workers) {
            let [workerName, workerSalary] = w.split(" ");
            if(!restaurantInfo.hasOwnProperty('restaurantName')){
               restaurantInfo[restaurantName] = {};
            } else {
               restaurantInfo[restaurantName][workerName] = Number(workerSalary);
            }
         }

         console.log(restaurantInfo);
         // console.log(workerName);
         // console.log(workerSalary);

      }




   }
}