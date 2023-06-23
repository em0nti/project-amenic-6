export function switchTheme(params) {
  const hero = document.querySelector('.hero__bagraundTwo');
  const heroHome = document.querySelector('.hero__bagraundTwo');
  const heroHom = document.querySelector('.hero__bagraundTwo');
  const switchNight = document.querySelector('.switch-night');
  const switchDay = document.querySelector('.switch-day');
  document.addEventListener('DOMContentLoaded', () => {
    init();
  });
  switchBtnHiden();
  heroLeftImg();
  function init() {
    if (localStorage.getItem('theme')) {
      document.documentElement.setAttribute('theme', 'dark');
    } else {
      document.documentElement.removeAttribute('theme');
    }
  }
  const toggleBtn = document.querySelector('.button-switch');
  if (params) {
    return;
  } else {
    toggleBtn.addEventListener('click', () => {
      if (document.documentElement.hasAttribute('theme')) {
        document.documentElement.removeAttribute('theme');

        localStorage.removeItem('theme');
        switchBtnHiden();
        heroLeftImg();
      } else {
        document.documentElement.setAttribute('theme', 'dark');

        localStorage.setItem('theme', 1);
        switchBtnHiden();
        heroLeftImg();
      }
    });
  }

  function heroLeftImg() {
    if (!hero) {
      return;
    }
    if (localStorage.getItem('theme')) {
      hero.classList.add('hero-white');
      heroHome.classList.add('hero-white');
      heroHom.classList.add('hero-white');
    } else {
      hero.classList.remove('hero-white');
      heroHome.classList.remove('hero-white');
      heroHom.classList.remove('hero-white');
    }
  }
  function switchBtnHiden() {
    if (localStorage.getItem('theme')) {
      switchNight.classList.add('switch-hidden');
    } else {
      switchNight.classList.remove('switch-hidden');
    }
  }
}
