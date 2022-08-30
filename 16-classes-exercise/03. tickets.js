function solve(ticketInfo, sortingInfo) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = Number(price);
            this.status = status;
        }
    }

    let tickets = [];

    ticketInfo.forEach(ticket => {
        let [destination, price, status] = ticket.split('|');
        tickets.push(new Ticket(destination, price, status));

    })
    let sorted = sortingInfo === 'price'
        ? tickets.sort((a, b) => (a[sortingInfo] - b[sortingInfo]))
        : tickets.sort((a, b) => (a[sortingInfo].localeCompare(b[sortingInfo])));
    return sorted;
}

// console.log(solve([
//     'Philadelphia|94.20|available',
//     'New York City|95.99|available',
//     'New York City|95.99|sold',
//     'Boston|126.20|departed'],
//     'destination'));

console.log(solve([
    'Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'status'));