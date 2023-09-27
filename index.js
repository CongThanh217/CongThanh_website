// var subNavs = document.querySelectorAll('.sub-nav')

// subNavs.forEach((nav)=>{
//     console.log([nav])
// })

var heading = document.querySelector('.exercise-head');

var $ = document.querySelector.bind(document);

var $$ = document.querySelectorAll.bind(document);

var subNavs = $$('.sub-nav')
console.log(subNavs)
var line = $('.line')

var nav = document.querySelector('.nav')
console.log([nav])
subNavs.forEach((subNav,index)=>{

        subNav.onclick = ()=>{
         
            line.style.left =  subNav.offsetLeft + 'px';
            line.style.width =  subNav.offsetWidth + 'px';;
        }
})

// nav.addEventListener('onwheel', function(event) {
//     console.log('on wheel')
//      nav.style.backgroundColor =  'rgba(255,255,255)';
 
// })
// function scrollFunction() {
//     nav.style.border = '1px #7f00ff solid';
//     nav.style.backgroundColor = 'rgba(255,255,255,1)';
//     // line.style.backgroundColor = 'rgba(233, 233, 241, 0.3)'
// }
// window.addEventListener('scroll', scrollFunction);
// window.onscroll = function() {
//     if (nav.offsetTop === 22) {
//         console.log('hello');
//         window.removeEventListener('scroll', scrollFunction);
//     }
   
// }
// console.log(nav.offsetTop)

function scrollFunction() {
    // console.log(window.scrollY)
    if (window.scrollY  > 50 && window.scrollY<760) {
    
        nav.style.boxShadow = '20px 20px 50px grey'
        nav.style.backgroundColor = 'rgba(255,255,255,1)';
        line.style.left =  25 + 'px';
        line.style.width =  92 + 'px';
        // line.style.backgroundColor = 'rgba(233, 233, 241, 0.3)'
    }
   else if(window.scrollY  < 50){
        nav.style.boxShadow = 'none'
        nav.style.backgroundColor = 'rgba(200, 200, 242, 0.2)';

        nav.style.border = '1px #7f00ff solid';
        nav.style.border = 'none';
        // nav.style.backgroundColor = ' rgba(200, 200, 242, 0.2)';
    } 
 else if(window.scrollY>760)
    {   
        nav.style.backgroundColor= 'rgba(239, 209, 235, 0.9)'
        nav.style.boxShadow = '20px 20px 50px purple';
        line.style.left =  117 + 'px';
        line.style.width =  131 + 'px';
       
    }
  if(window.scrollY>335)
    {
        heading.classList.add('active');
    }
    else{
        heading.classList.remove('active');
    }
}

window.addEventListener('scroll', scrollFunction);


var typingEffect = new Typed(".multiText",{
    strings: ["Thành,","coder,"],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay : 1500
})