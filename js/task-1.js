document.addEventListener('DOMContentLoaded', function() {
    let name = 'Protective field generator';
    let price;
    document.getElementById('task-1-button-1').addEventListener('click', function() {
        price = 1000;
        alert(`«${name}» selected, price per unit ${price} credits`)
    });
    document.getElementById('task-1-button-2').addEventListener('click', function() {
        price = 2000;
        alert('«${name}» selected, price per unit ${price} credits')
    });
});