var target = document.querySelector('#testimonial');
var card = document.querySelector('.end-middle-container');
target.getBoundingClientRect().top;
window.addEventListener('scroll',function(){
  console.log('window '+window.innerHeight);
  console.log('target '+target.getBoundingClientRect().top);
  if(target.getBoundingClientRect().top < window.innerHeight){
     card.style.animation = 'move 1.5s ease-out';
  }
})
