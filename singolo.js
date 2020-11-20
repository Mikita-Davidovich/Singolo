const burgerMenu = document.querySelector('.burger-menu-button')
const burger = document.querySelector('.navigation-menu')
const burgerLine = document.querySelector('.burger-line')
const navigationItems = document.querySelectorAll('.navigation-menu-items')
const buttonsImageRight = document.querySelector('.button-right')
const buttonsImageLeft = document.querySelector('.button-left')
const sliderImage = document.querySelector('.phone-image-blue')
const imageBlue = document.querySelector('.phone-image-blue-active')
const phoneImageRed =document.querySelector('.phone-image-red')
const mainImage = document.querySelector('.phone-image')
const slider = document.querySelector('.slider')
const portfolioImage = document.querySelector('.portfolio-image')
const firstNavigationItemPortfolio = document.querySelector('.first-navigation-items')
const secondNavigationItemPortfolio = document.querySelector('.second-navigation-items')
const thirdNavigationItemPortfolio = document.querySelector('.third-navigation-items')
const lastNavigationItemPortfolio = document.querySelector('.last-navigation-items')
const portfolioImageFirst = document.querySelector('.portfolio-image-first')
const portfolioImageSecond = document.querySelector('.portfolio-image-second')
const portfolioImageThird = document.querySelector('.portfolio-image-third')
const navigationMenuItemHome = document.getElementById('itemHome')
const navigationMenuItemServices = document.getElementById('itemServices')
const navigationMenuItemPortfolio = document.getElementById('itemPortfolio')
const logo = document.querySelector('.logo')
const symbolLogo = document.querySelector('.symbol-logo')
const opacity = document.querySelector('.opacity')

// Portfolio

firstNavigationItemPortfolio.addEventListener('click', () =>{
  portfolioImageFirst.classList.remove('potrfolio-image-active')
  portfolioImageSecond.classList.remove('potrfolio-image-active')
  portfolioImageThird.classList.remove('potrfolio-image-active')
  firstNavigationItemPortfolio.classList.add('navigation-items-active')
  secondNavigationItemPortfolio.classList.remove('navigation-items-active')
  thirdNavigationItemPortfolio.classList.remove('navigation-items-active')
  lastNavigationItemPortfolio.classList.remove('navigation-items-active')
})
secondNavigationItemPortfolio.addEventListener('click', () =>{
  portfolioImageFirst.classList.add('potrfolio-image-active')
  secondNavigationItemPortfolio.classList.add('navigation-items-active')
  firstNavigationItemPortfolio.classList.remove('navigation-items-active')
  thirdNavigationItemPortfolio.classList.remove('navigation-items-active')
  lastNavigationItemPortfolio.classList.remove('navigation-items-active')
  firstNavigationItemPortfolio.classList.remove('first-navigation-items')
  portfolioImageSecond.classList.remove('potrfolio-image-active')
  portfolioImageThird.classList.remove('potrfolio-image-active')
})
thirdNavigationItemPortfolio.addEventListener('click', () =>{
  portfolioImageSecond.classList.add('potrfolio-image-active')
  thirdNavigationItemPortfolio.classList.add('navigation-items-active')
  firstNavigationItemPortfolio.classList.remove('navigation-items-active')
  secondNavigationItemPortfolio.classList.remove('navigation-items-active')
  lastNavigationItemPortfolio.classList.remove('navigation-items-active')
  firstNavigationItemPortfolio.classList.remove('first-navigation-items')
  portfolioImageThird.classList.remove('potrfolio-image-active')

}) 
lastNavigationItemPortfolio.addEventListener('click', () =>{
  portfolioImageThird.classList.add('potrfolio-image-active')
  lastNavigationItemPortfolio.classList.add('navigation-items-active')
  firstNavigationItemPortfolio.classList.remove('navigation-items-active')
  secondNavigationItemPortfolio.classList.remove('navigation-items-active')
  thirdNavigationItemPortfolio.classList.remove('navigation-items-active')
  firstNavigationItemPortfolio.classList.remove('first-navigation-items')
})

// Slider

buttonsImageRight.addEventListener('click',()=>{
  slider.classList.add('slider-active')
  mainImage.classList.add('phone-image-active')
  sliderImage.classList.add('phone-image-blue-active')
  phoneImageRed.classList.remove('phone-image-red-active')
})
buttonsImageLeft.addEventListener('click',()=>{
  slider.classList.remove('slider-active')
  mainImage.classList.add('phone-image-active')
  phoneImageRed.classList.add('phone-image-red-active')
  sliderImage.classList.remove('phone-image-blue-active')
})

// Burger

for(let i = 0; i < navigationItems.length; i++) {
  navigationItems[i].addEventListener('click', ()=>{
    burger.classList.remove('active')
    burgerLine.classList.remove('burger-line-active')
  })
}
const updateMenu = () => {
  burger.classList.toggle('active')
  burgerLine.classList.toggle('burger-line-active')
  logo.classList.toggle('logo-active')
  symbolLogo.classList.toggle('symbol-logo-active')
  opacity.classList.toggle('opacity-active')
}
burgerMenu.addEventListener('click', updateMenu)

// Header 

window.addEventListener('scroll', () =>{
  if(window.pageYOffset >= 0 && window.pageYOffset < 510){
    navigationMenuItemHome.classList.add('navigation-menu-items-active')
    navigationMenuItemServices.classList.remove('navigation-menu-items-active')
    navigationMenuItemPortfolio.classList.remove('navigation-menu-items-active')
  }
  else if (window.pageYOffset >= 510 && window.pageYOffset < 1080){
    navigationMenuItemServices.classList.add('navigation-menu-items-active')
    navigationMenuItemHome.classList.remove('navigation-menu-items-active')
    navigationMenuItemPortfolio.classList.remove('navigation-menu-items-active')
  }
  else if (window.pageYOffset >= 1080 ){
    navigationMenuItemPortfolio.classList.add('navigation-menu-items-active')
    navigationMenuItemServices.classList.remove('navigation-menu-items-active')
    navigationMenuItemHome.classList.remove('navigation-menu-items-active')
    navigationMenuItemHome.classList.remove('item-home')
  }
})
