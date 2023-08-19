function show(value = 'EN') {
  document.querySelector('.header__language').value = value;
}

document.querySelector('.EN').onclick = () => show('EN');

document.querySelector('.UA').onclick = () => show('UA');

let dropdown = document.querySelector('.header__dropdown');
dropdown.onclick = () => dropdown.classList.toggle('active');

show();
