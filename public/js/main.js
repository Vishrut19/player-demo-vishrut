// Toggle Password text show
document
  .querySelector('.toggle-password')
  ?.addEventListener('click', function () {
    const passwordInput = document.getElementById('password');
    const type =
      passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
    this.classList.toggle('toggle-password--show');
  });
const rightSidebarCta = document.getElementsByName('rightSidebarCta');
rightSidebarCta.forEach((el) => {
  el.addEventListener('click', () => {
    const rightSidebar = document.getElementById('rightSidebar');
    if (rightSidebar.classList.contains('translate-x-full')) {
      rightSidebar.classList.remove('translate-x-full');
      rightSidebar.classList.add('translate-x-0');
    } else {
      rightSidebar.classList.add('translate-x-full');
      rightSidebar.classList.remove('translate-x-0');
    }
  });
});

const navMenuToggle = document.getElementsByName('navMenuToggle');
navMenuToggle.forEach((el) => {
  el.addEventListener('click', () => {
    const leftNavMenu = document.getElementById('leftNavMenu');
    if (leftNavMenu.classList.contains('translate-x-full')) {
      leftNavMenu.classList.remove('translate-x-full');
      leftNavMenu.classList.add('translate-x-0');
    } else {
      leftNavMenu.classList.add('translate-x-full');
      leftNavMenu.classList.remove('translate-x-0');
    }
  });
});
