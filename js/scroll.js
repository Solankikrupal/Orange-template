var navBar = document.querySelector('.nav-bar');

window.addEventListener('scroll',()=>{
  navBar.classList.toggle('sticky',window.scrollY > 0);
});
