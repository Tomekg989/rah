const nav = document.querySelector('.nav');
const navbtn = document.querySelector('.burger-btn');
const navitem =  document.querySelectorAll('.nav__item')
const handlenav = () => {
 nav.classList.toggle('nav--active')

 navitem.forEach(item => {
  item.addEventListener('click',() => {
   nav.classList.remove('nav--active')
  })
 })
 handlenavitemanimation();
}
const handlenavitemanimation = () => {
 let delayTime = 0;
 navitem.forEach(item => {
   item.classList.toggle('nav-item-animation')
   item.style.animationDelay = '.'+delayTime+'s'
   delayTime++
 })
}
navbtn.addEventListener('click',handlenav)