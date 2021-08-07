let navbarLinks = document.getElementById('navBarLinks');
let toggleButton = document.getElementById('burgerBar');


toggleButton.addEventListener('click', function(){
    navbarLinks.classList.toggle('active');
})