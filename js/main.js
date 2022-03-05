// Scrolling logo appear
const logo = document.querySelector('#logo');

window.addEventListener('scroll', function(){
  if(window.scrollY > 150) {
    logo.classList.add('block');
    logo.classList.remove('hidden');
  }
})

