const menuIcon = document.getElementById('menuIcon');
const navigation = document.getElementById('navigation');
const body = document.body;

menuIcon.addEventListener('click', () => {
    navigation.classList.toggle('active');
    body.classList.toggle('no-scroll');
    menuIcon.classList.toggle('open');

    const icon = menuIcon.querySelector('i');
    const isOpen = menuIcon.classList.contains('open');
    
    icon.classList.toggle('fa-bars', !isOpen);
    icon.classList.toggle('fa-times', isOpen);
    icon.style.color = isOpen ? '#fff' : '#5712A6';
});