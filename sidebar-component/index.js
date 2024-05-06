const sidebar = document.getElementById('sidebar');
const btn = document.getElementById('trigger-btn');
const menuText = document.getElementsByClassName('menu-text');

let sidebarActive = true;

btn.addEventListener('click', () => {
    if (sidebarActive) {
        sidebar.style.width='100px';
        sidebarActive = false;
        for (let i = 0; i < menuText.length; i++) {
            menuText[i].style.display = 'none';
        }
    }
    else {
        sidebar.style.width='250px';
        sidebarActive = true;
        for (let i = 0; i < menuText.length; i++) {
            menuText[i].style.display = 'flex';
        }
    }
});