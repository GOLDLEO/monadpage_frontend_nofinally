// Navigation
const tabs = document.querySelectorAll('.section');
const menuButtons = document.querySelectorAll('.menu_button');

const clearTabs = function () {
  window.scrollTo(0, 0);
  tabs.forEach(function (tab) {
    tab.style.display = 'none'
  });
  menuButtons.forEach(function (button) {
    button.classList.remove('active')
  });
}

menuButtons.forEach(function (button, key) {
  button.addEventListener('click', function () {
    clearTabs();
    tabs[key].style.display = 'block';
    menuButtons[key].classList.add('active');
  });
});

// Learn
const arrow = document.querySelector('.learn__trigger');
const collapsingBlock = document.querySelector('.main__together__learn');

arrow.addEventListener('click', function () {
  if (collapsingBlock.classList.contains('collapsed')) {
    collapsingBlock.classList.remove('collapsed');
  } else {
    collapsingBlock.classList.add('collapsed');
  }
});

// services
const servicesButtons = document.querySelectorAll('.services__buttons, .main__discount__button');

servicesButtons.forEach(function (button) {
  button.addEventListener('click', function () {
    clearTabs();
    tabs[4].style.display = 'block';
    menuButtons[4].classList.add('active');
  })
});

// Contacts form
const form = document.querySelector('.contacts_form');
const success = document.querySelector('.contacts__success');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  var http = new XMLHttpRequest();
  http.open("POST", form.action, true);
  http.send(new FormData(form));
  http.onload = function () {
    form.style.display = 'none';
    success.style.display = 'block';

    setTimeout(function () {
      form.style.display = 'flex';
      success.style.display = 'none';
    }, 5000);
  };

  return false;
});

document.querySelector('.contacts__success__link').addEventListener('click', function () {
  clearTabs();
  tabs[0].style.display = 'block';
  menuButtons[0].classList.add('active');
})