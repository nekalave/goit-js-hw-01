document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('task-3-button').addEventListener('click', function() {
            const ADMIN_PASSWORD = 'jqueryismyjam';
            let password = prompt('Enter password');
            if (password === null) {
                alert('Rejected by the user!')
            } else if (password === ADMIN_PASSWORD) {
                alert('Welcome!')
            } else {
                alert('Access denied, incorrect password!')
            }
    });
});