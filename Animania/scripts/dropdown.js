document.addEventListener('DOMContentLoaded', function() {
    var dropdownToggle = document.getElementById('dropdownMenuButton');
    var dropdownMenu = document.querySelector('.dropdown-menu');

    // Example of toggling dropdown manually, adapt as needed
    dropdownToggle.addEventListener('click', function() {
        dropdownMenu.classList.toggle('show');
    });
});
