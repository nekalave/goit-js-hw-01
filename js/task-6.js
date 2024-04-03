document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('task-6-button').addEventListener('click', function () {
        let total = 0;
        let input;

        do {
            input = prompt(`Enter a number to add it to the total sum of numbers. Press cancel to finish. Current = ${total}`);
            if (input !== null) {
                let currentNumber = parseInt(input);
                if (/^\d+$/.test(input)) {
                    total += currentNumber;
                    alert(`Total number = ${total}`);
                } else {
                    alert("Please enter a valid number!");
                }
            }
        } while (input !== null);
        alert(`Final total is ${total}`);
    });
});