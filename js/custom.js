$(function () {
    /* banner silder js*/
    $('.carousel').carousel({
        interval: 1000,
    });

    $('.port_slide').slick({
        dots: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        prevArrow:'.prev-btn',
        nextArrow:'.next-btn',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
    },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
    },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    }
  ]
    });
    $(document).ready(function(){
        $('.html').animate({width:'90%'},3000);
         $('.css').animate({width:'75%'},3000);
         $('.js').animate({width:'50%'},3000);
         $('.php').animate({width:'70%'},3000);
         $('.ajax').animate({width:'45%'},3000);
    });
    
    $('.counter').counterUp({
    delay: 10,
    time: 3000
});


})
const text = document.getElementById("text");
const prog = "KanaK das!";

let idx = 1;

setInterval(writeText, 100);

function writeText() {
    text.innerText = prog.slice(0, idx)
	
	idx++;
	
	if(idx > prog.length){
      idx = 1;
    }

}







const scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    // prevent default
    e.preventDefault();
    // navigate to specific spot
    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);

    const navHeight = navbar.getBoundingClientRect().height;
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const fixedNav = navbar.classList.contains("fixed-nav");
    let position = element.offsetTop - navHeight;

    if (!fixedNav) {
      position = position - navHeight;
    }
    if (navHeight > 82) {
      position = position + containerHeight;
    }

    window.scrollTo({
      left: 0,
      top: position,
    });
    // close
    linksContainer.style.height = 0;
  });
});
// calculate heights
