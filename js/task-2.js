document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('task-2-button').addEventListener('click', function() {
        let total = 100;
        let ordered = prompt('Enter quantity');
        let props = ordered !== null ? parseInt(ordered) : null;

        function order(total, ordered, props) {
            if (props !== null && /^\d+$/.test(ordered)) {
                if (total >= ordered) {
                    alert('The order has been placed, the manager will contact you');
                } else {
                    alert('There are not enough goods in stock!');
                }
            } else if (props === null) {
                alert('Rejected by user');
            } else {
                alert('Input error');
            }
        }
        order(total, ordered, props);
    });
});