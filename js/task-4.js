document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('task-4-button').addEventListener('click', function() {
        let credits = 23580;
        const pricePerDroid = 3000;
        let numberOfDroids = prompt('Enter number of droids');
        let totalPrice = numberOfDroids*pricePerDroid;
        let balance = credits - totalPrice;
        function order(credits, pricePerDroid, numberOfDroids, totalPrice, balance) {
            if (numberOfDroids !== null && /^\d+$/.test(numberOfDroids)){
                if (credits >= totalPrice) {
                    alert(`You bought ${numberOfDroids} droids, ${balance} of credits left in your account.`)
                } else {
                    alert('not enough credits')
                }
            } else if (numberOfDroids === null) {
                alert('Rejected by user');
            } else {
                alert('Input error');
            }
        }
        order(credits, pricePerDroid, numberOfDroids, totalPrice, balance);
    });
});