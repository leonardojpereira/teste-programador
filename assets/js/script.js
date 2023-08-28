const menuIcon = document.getElementById('menuIcon');
const navigation = document.getElementById('navigation');
const body = document.body;



menuIcon.addEventListener('click', () => {
    navigation.classList.toggle('active');
    body.classList.toggle('no-scroll');
    menuIcon.classList.toggle('open');

    const icon = menuIcon.querySelector('i');
    if (menuIcon.classList.contains('open')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
        icon.style.color = '#ffffff'; // Change to white
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
        icon.style.color = '#5712A6'; // Change to purple
    }
});

// Create Login and Signup links dynamically
