/****************SCROLL******************* */
gsap.registerPlugin(ScrollTrigger);

function myscripts() {
  const locoScroll = new LocomotiveScroll({
    /*  el: document.querySelector("[data-scroll-container]"),*/
    el: document.querySelector(".container-main"),

    smooth: true,
    multiplier: 1,
    smartphone: {
      smooth: true,
    },
    tablet: {
      smooth: true,
    },
  });

  ScrollTrigger.scrollerProxy(".container-main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    pinType: document.querySelector(".container-main").style.transform
      ? "transform"
      : "fixed",
  });
/*
  gsap.to("body", {
    background: "blue",
    scrollTrigger: {
      trigger: ".section-1",
      scroller: ".container",
      scrub: true,
    },
  });*/
  gsap.to(".letterlogo", {
    color: "#191817",
    immediateRender: false,
    scrollTrigger: {
      trigger: ".section-1",
      scroller: ".container-main",
      scrub: true,
      end: '+=100%'
    },
  });
  gsap.to(".color-a", {
    fill: "#191817",
    immediateRender: false,
    scrollTrigger: {
      trigger: ".section-1",
      scroller: ".container-main",
      scrub: true,
      end: '+=100%'
    },
  });
  gsap.to(".navbar a", {
    color: "#191817",
    immediateRender: false,
    scrollTrigger: {
      trigger: ".section-1",
      scroller: ".container-main",
      scrub: true,
      end: '+=100%'
    },
  });

  gsap.to("nav", {
    border: "1px solid #8b8b8b",
    immediateRender: false,
    scrollTrigger: {
      trigger: ".section-1",
      scroller: ".container-main",
      scrub: true,
      end: '+=100%'
    },
  });
  gsap.to(".lines", {
    border: "1px solid #8b8b8b",
    immediateRender: false,
    scrollTrigger: {
      trigger: ".section-1",
      scroller: ".container-main",
      scrub: true,
      end: '+=100%'
    },
  });

 gsap.to(".ul-nav a", {
    color: "#191817",
    immediateRender: false,
    scrollTrigger: {
      trigger: ".section-1",
      scroller: ".container-main",
      scrub: true,
      end: '+=100%'
    },
  });
  gsap.to(".icons-option-nav", {
    color: "#191817",
    immediateRender: false,
    scrollTrigger: {
      trigger: ".section-1",
      scroller: ".container-main",
      scrub: true,
      end: '+=100%'
    },
  });
  gsap.to(".icons-option-nav a", {
    color: "#191817",
    immediateRender: false,
    scrollTrigger: {
      trigger: ".section-1",
      scroller: ".container-main",
      scrub: true,
      end: '+=100%'
    },
  });


  gsap.to("body", {
    "background": "#f4f7f6",
    immediateRender: false,
    scrollTrigger: {
      trigger: ".s2",
      scroller: ".container-main",
      scrub: true,
    },
  });
  gsap.to(".move-img", {
  
    "transform": "translate3d(-28rem, 40rem, 10px)",
    immediateRender: false,
    scrollTrigger: {
      trigger: ".s2",
      scroller: ".container-main",
      scrub: true,
    },
  });
  gsap.to("body", {
    "background": "#fff",
    immediateRender: false,
    scrollTrigger: {
      trigger: ".s3",
      scroller: ".container-main",
      scrub: true,
    },
  });
  gsap.to(".move-img", {
  
    "transform": "translate3d(7rem, 75rem, 10px)",
    immediateRender: false,
    scrollTrigger: {
      trigger: ".s3",
      scroller: ".container-main",
      scrub: true,
    },
  });
  /*
  gsap.to("body", {
    "background": "red",
    immediateRender: false,
    scrollTrigger: {
      trigger: ".section-2",
      scroller: ".container",
      scrub: true,
    },
  });

  gsap.to("body", {
    "background": "green",
    immediateRender: false,
    scrollTrigger: {
      trigger: ".section-3",
      scroller: ".container",
      scrub: true,
    },
  });*/

  /*locoScroll.on("scroll", ScrollTrigger.update);
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());*/
  

  /**************************************/
  /* Animacio de lteras (logo) */
  /*
$(window).on("load", function () {
  $('header').appendTo('body');
});*/
$('.slick-carousel').slick({
  infinite: true,
  slidesToShow: 3, // Shows a three slides at a time
  slidesToScroll: 1, // When you click an arrow, it scrolls 1 slide at a time
  arrows: true, // Adds arrows to sides of slider
  dots: true, // Adds the dots on the bottom,
  autoplay:true
});
  const div = document.querySelectorAll(".letterlogo");
  setTimeout(function () {
    TweenMax.staggerFrom(div[0].children, 0.45, { y: 50, opacity: 0 }, 0.1);
    document.getElementById("color-letter").style.color = "#fff";
    document.getElementById("letter-invert").style.opacity = "1";
  }, 3000);

  /***********************color************************ */
  $(document).ready(function () {
    $("#color_mode").on("change", function () {
      colorModePreview(this);
    });
  });

  function colorModePreview(ele) {
    if ($(ele).prop("checked") == true) {
      $("body").addClass("dark-preview");
      $("body").removeClass("white-preview");
    } else if ($(ele).prop("checked") == false) {
      $("body").addClass("white-preview");
      $("body").removeClass("dark-preview");
    }
  }

  /**********************banner transition*************************** */

  /* Animacion de entrada banner */
  const hero = document.querySelector(".hero");
  const slider = document.querySelector(".slider");
  const logo = document.querySelector("#logo");
  const hamburger = document.querySelector(".hamburger");
  const headline = document.querySelector(".headline");

  //TimelineMax.fromTo('.hero',1,{height:'0%'},{height:'80%'});

  const tl = new TimelineMax();

  tl.fromTo(
    hero,
    1,
    { height: "0%" },
    { height: "100%", ease: Power2.easeInOut }
  )
    .fromTo(
      hero,
      1.2,
      { width: "80%" },
      { width: "100%", ease: Power2.easeInOut }
    )
    .fromTo(
      slider,
      1.2,
      { x: "-100%" },
      { x: "0%", ease: Power2.easeInOut },
      "-=1.2"
    )

    .fromTo(logo, 0.5, { opacity: 0, x: 30 }, { opacity: 1, x: 0 }, "-=0.5")
    .fromTo(
      hamburger,
      0.5,
      { opacity: 0, x: 30 },
      { opacity: 1, x: 0 },
      "-=0.5"
    )
    .fromTo(
      headline,
      0.5,
      { opacity: 0, x: 30 },
      { opacity: 1, x: 0 },
      "-=0.5"
    );

  var $info = $(".tooltip");
  $info.each(function () {
    var dataInfo = $(this).data("tooltip");
    $(this).append('<span class="inner" >' + dataInfo + "</span>");
  });

  /************************mini cart****************************** */
  $('.cart-menu').on('click', function () {
    $('.container-main').toggleClass('open');
    $('header').toggleClass('open');
    $('body').toggleClass('mini-cart');
    

  })
  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav-categories'
  });
  $('.slider-nav-categories').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    focusOnSelect: true
  });
 
  $('a[data-slide]').click(function(e) {
    e.preventDefault();
    var slideno = $(this).data('slide');
    $('.slider-nav-categories').slick('slickGoTo', slideno - 1);
  });

}
/****************SCROLL******************* */

/****************TRANSICION ENTRE PAGINAS******************* */

function delay(n) {
  n = n || 2000;
  return new Promise((done) => {
    setTimeout(() => {
      done();
    }, n);
  });
}

function pageTransition() {
  var tl = gsap.timeline();

  tl.to("ul.transition li", {
    duration: 0.4,
    scaleY: 1,
    transformOrigin: "bottom left",
    stagger: 0.2,
  });

  tl.to("ul.transition li", {
    duration: 0.4,
    scaleY: 0,
    transformOrigin: "bottom left",
    stagger: 0.1,
    delay: 0.1,
  });
}

function contentAnimation() {
  var tl = gsap.timeline();
  tl.from(".left", { duration: 1.5, translateY: 50, opacity: 0 });
  tl.to(
    ".img",
    { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" },
    "-=1.1"
  );
}
barba.init({
  sync: true,
  transitions: [
    {
      async leave(data) {
        const done = this.async();

        pageTransition();
        await delay(1500);
        done();
      },
      async enter(data) {
        contentAnimation();
      },
      async once(data) {
        contentAnimation();
      },
      async after() {
        myscripts();
        ScrollTrigger.refresh();
      },
    },
  ],
});
myscripts();
/****************TRANSICION ENTRE PAGINAS******************* */
