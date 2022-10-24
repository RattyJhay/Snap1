const feature = document.querySelector('.feature')
const featureList = document.querySelector('.feature-list')

const company = document.querySelector('.company')
const companyList = document.querySelector('.company-list')

const companyImage = document.querySelector('.company img');
const featureImage = document.querySelector('.feature img')

const burgerMenu = document.querySelector('.burger img')

const wrapper = document.querySelector('.wrapper')
const shadow = document.querySelector('.shadow')

// Event Listeners

feature.addEventListener('click', () => {
  if (!featureList.classList.contains('active')) {
    featureImage.src = "./images/icon-arrow-up.svg"

    featureList.classList.add('active')
  } else {
    featureImage.src = "./images/icon-arrow-down.svg"

    featureList.classList.remove('active')
  }
})


company.addEventListener('click', () => {
  if (!companyList.classList.contains('active')) {
    companyImage.src = "./images/icon-arrow-up.svg"

    companyList.classList.add('active')
  } else {
    companyImage.src = "./images/icon-arrow-down.svg"

    companyList.classList.remove('active')
  }
})


burgerMenu.addEventListener('click', () => {
  burgerMenuFunc();
})


// functions

function burgerMenuFunc() {
  if (!burgerMenu.classList.contains('open')) {
    burgerMenu.classList.add('open')
    burgerMenu.src = "./images/icon-close-menu.svg";

    wrapper.style.left = "8.35rem";
    shadow.style.opacity = "1"
  } else {
    burgerMenu.classList.remove('open')
    burgerMenu.src = "./images/icon-menu.svg";

    wrapper.style.left = "25.5rem";
    shadow.style.opacity = "0"
  }
}
