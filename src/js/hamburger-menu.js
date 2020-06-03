const navigaton = document.querySelector(`.navigaton--js`);
const menu = document.querySelector(`.header__menu--js`);


menu.addEventListener(`click`, () => {
  navigaton.classList.toggle(`navigation--show`);
});
navigaton.addEventListener(`mouseleave`, () => {
  navigaton.classList.remove(`navigation--show`);
});

