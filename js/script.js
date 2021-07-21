function scrollpage(target, duration) {
  var target = document.querySelector(target);
  var targetPosition = target.getBoundingClientRect().top;
  var startPosition = window.pageYOffset;
  var distance = targetPosition - startPosition;
  // console.log(target);
  // console.log(targetPosition);
  // console.log(startPosition);
  // console.log(distance);
  var startTime = null;

  function animation(currentTime) {
    // console.log('animation')
    // console.log('before ct '+currentTime);
    if (startTime === null) {
      startTime = currentTime;
    }
    // console.log('after ct '+currentTime);
    // console.log('start time '+startTime);
    var timeElapsed = currentTime - startTime;
    // console.log('timeElapsed '+timeElapsed);
    var run = ease(timeElapsed,startPosition,distance,duration);
    window.scrollTo(0,run);
    if (timeElapsed<duration){
      requestAnimationFrame(animation);
    }
  }

  function ease(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
  };
  requestAnimationFrame(animation);

}


var Links = document.querySelectorAll('.links');
var discover =document.querySelector('.content-btn');
discover.addEventListener('click',()=>{
  var goto =  discover.getAttribute('href');
  scrollpage(goto,1000);
})

Links.forEach((item,index)=>{
Links[index].addEventListener('click',function(){
    var goto = Links[index].childNodes[1].getAttribute('href');
    scrollpage(goto, 1000);
  })
    /*alert(links.childNodes[1].getAttribute('href'));
    /*console.log(links[1].getAttribute("href"));*/


});
scrollpage('#home',1000);
