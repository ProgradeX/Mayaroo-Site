/***************************************************
==================== JS INDEX ======================
01. Data Background Set

****************************************************/

(function ($) {
  "use strict";

  // // Text Invert With Scroll 
  // const split = new SplitText(".text-invert", {
  //   type: "lines"
  // });
  // split.lines.forEach((target) => {
  //   gsap.to(target, {
  //     backgroundPositionX: 0,
  //     ease: "none",
  //     scrollTrigger: {
  //       trigger: target,
  //       scrub: 1,
  //       start: 'top 60%',
  //       end: "bottom center",
  //     }
  //   });
  // });

  // Text Invert With Scroll
  gsap.utils.toArray(".text-invert .line").forEach((target) => {
    gsap.to(target, {
      backgroundPositionX: 0,
      ease: "none",
      scrollTrigger: {
        trigger: target,
        scrub: 1,
        start: "top 60%",
        end: "bottom center",
      }
    });
  });


  // rr_title_anim 
  if (document.querySelectorAll(".animation").length > 0) {
    let animation = document.querySelectorAll(".animation");

    animation.forEach((animation) => {
      let split = new SplitText(
        animation.querySelector(".rr_title_animation"),
        { type: "chars, words" }
      ),
        tl = gsap.timeline({
          scrollTrigger: {
            trigger: animation,
            start: "top bottom",
            toggleActions: "play none none reverse",
            onEnter: () => {
              tl.timeScale(2.3);
            },
            onLeaveBack: () => {
              tl.timeScale(2.3).reverse();
            },
          },
        });

      tl.to(animation.querySelector(".sup_animation"), {
        opacity: 1,
        x: -50,
        ease: "back",
      }).from(split.chars, {
        opacity: 0,
        y: 50,
        rotation: 1,
        duration: 2,
        ease: "back",
        stagger: 0.05,
      });
    });
  }

  // rr-char-animation
  if (
    document.querySelectorAll(".rr-char-animation").length > 0 &&
    window.innerWidth > 768
  ) {
    let char_come = gsap.utils.toArray(".rr-char-animation");
    char_come.forEach((splitTextLine) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: splitTextLine,
          start: "top 90%",
          end: "bottom 5%",
          scrub: false,
          markers: false,
          toggleActions: "play none none reverse",
        },
      });

      const itemSplitted = new SplitText(splitTextLine, {
        type: "chars, words",
      });
      gsap.set(splitTextLine, { perspective: 300 });

      itemSplitted.split({ type: "chars, words" });

      tl.from(itemSplitted.chars, {
        duration: 0.4,
        delay: 0.1,
        x: 100,
        autoAlpha: 0,
        stagger: 0.05,
      });
    });
  }



  // GSAP title animation
  if (document.querySelectorAll(".rr_title_anim").length > 0) {
    if ($('.rr_title_anim').length > 0) {
      let splitTitleLines = gsap.utils.toArray(".rr_title_anim");
      splitTitleLines.forEach(splitTextLine => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: splitTextLine,
            start: 'top 90%',
            end: 'bottom 60%',
            scrub: false,
            markers: false,
            toggleActions: 'play none none reverse'
          }
        });

        const itemSplitted = new SplitText(splitTextLine, { type: "words, lines" });
        gsap.set(splitTextLine, { perspective: 400 });
        itemSplitted.split({ type: "lines" })
        tl.from(itemSplitted.lines, {
          duration: 1,
          delay: 0.3,
          opacity: 0,
          rotationX: -80,
          force3D: true,
          transformOrigin: "top center -50",
          stagger: 0.1
        });
      });
    }
  }


  //fade-top gsap animation
  if ($(".fade-wrapper").length > 0) {
    $(".fade-wrapper").each(function () {
      var section = $(this);
      var fadeItems = section.find(".fade-top");

      fadeItems.each(function (index, element) {
        var delay = index * 0.15;

        gsap.set(element, {
          opacity: 0,
          y: 100,
        });

        ScrollTrigger.create({
          trigger: element,
          start: "top 100%",
          end: "bottom 60%",
          toggleActions: "play none none reverse",
          scrub: 0.5,
          onEnter: function () {
            gsap.to(element, {
              opacity: 1,
              y: 0,
              duration: 1,
              delay: delay,
            });
          },
          once: true,
        });
      });
    });
  }


  //split-text animation
  let heroes = document.querySelectorAll(".hero");

  heroes.forEach(hero => {
    let split = new SplitText(hero.querySelector("._split_text"), { type: "chars, words" }),
      tl = gsap.timeline({
        scrollTrigger: {
          trigger: hero,
          start: "top bottom",
          toggleActions: "play none none reverse",
          onEnter: () => {
            tl.timeScale(2.3);
          },

          onLeaveBack: () => {
            tl.timeScale(2.3).reverse();
          },
        }
      });
    tl.to(hero.querySelector(".sup_hero"), { opacity: 1, x: -50, ease: "back" })
      .from(split.chars, {
        opacity: 0,
        y: 50,
        rotation: 1,
        duration: 2,
        ease: "back",
        stagger: 0.05
      });
  });
  //split-text animation end

  // scale animation 
  var scale = document.querySelectorAll(".scale");
  var image = document.querySelectorAll(".scale img");
  scale.forEach((item) => {
    gsap.to(item, {
      scale: 1,
      duration: 1,
      ease: "power1.out",
      scrollTrigger: {
        trigger: item,
        start: 'top bottom',
        end: "bottom top",
        toggleActions: 'play reverse play reverse'
      }
    });
  });
  image.forEach((image) => {
    gsap.set(image, {
      scale: 1.3,
    });
    gsap.to(image, {
      scale: 1,
      duration: 1,
      scrollTrigger: {
        trigger: image,
        start: 'top bottom',
        end: "bottom top",
        toggleActions: 'play reverse play reverse'
      }
    });
  })

  // brand slider
  var swiper = new Swiper(".h1-brand__slider", {
    slidesPerView: "auto",
    spaceBetween: 0,
    centeredSlides: true,
    freemode: true,
    centeredSlides: true,
    loop: true,
    speed: 6000,
    allowTouchMove: false,
    autoplay: {
      delay: 1,
      disableOnInteraction: true,
    }
  });

  // brand slider reverse
  var swiperReverse = new Swiper(".h1-brand__slider--reverse", {
    slidesPerView: "auto",
    spaceBetween: 0,
    centeredSlides: true,
    freemode: true,
    loop: true,
    speed: 6000,
    allowTouchMove: false,
    autoplay: {
      delay: 1,
      disableOnInteraction: true,
      reverseDirection: true,
    }
  });

  // service-section-2__item 
  const items = document.querySelectorAll(".service-section-2__item");
  const thumb = document.querySelector(".service-section-2__thumb img");

  if (items.length > 0 && thumb) {
    const defaultImage = thumb.src;

    items.forEach((item) => {
      const imgPath = item.getAttribute("data-image");

      item.addEventListener("mouseenter", () => {
        if (imgPath) thumb.src = imgPath;
      });

      item.addEventListener("mouseleave", () => {
        thumb.src = defaultImage;
      });
    });
  }

  // Testi Carousel
  var swiperTesti = new Swiper(".testimonial-2-carousel", {
    slidesPerView: 1,
    spaceBetween: 10,
    slidesPerGroup: 1,
    loop: true,
    autoplay: true,
    grabcursor: true,
    speed: 600,
    navigation: {
      nextEl: ".rr-swiper-button-next",
      prevEl: ".rr-swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        slidesPerGroup: 1,
      },
      767: {
        slidesPerView: 2,
        slidesPerGroup: 1,
      },
      1024: {
        slidesPerView: 3,
        slidesPerGroup: 1,
      },
      1200: {
        slidesPerView: 3,
        slidesPerGroup: 1,
      },
      1400: {
        slidesPerView: 4,
        slidesPerGroup: 1,
      },
    },
  });

  // Testi Carousel
  var testimonial_3_active = new Swiper(".testimonial-3-active", {
    slidesPerView: 2,
    spaceBetween: 5,
    // slidesPerGroup: 1,
    loop: true,
    autoplay: true,
    speed: 600,
    navigation: {
      nextEl: ".rr-button-next",
      prevEl: ".rr-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        slidesPerGroup: 1,
      },
      767: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 3,
        slidesPerGroup: 1,
      },
      1200: {
        slidesPerView: 3,
        slidesPerGroup: 1,
      },
      1400: {
        slidesPerView: 3,
        slidesPerGroup: 1,
      },
    },
  });


  // Testi 11 Carousel
  var testimonial_3_active = new Swiper(".portfolio-11-active", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    autoplay: true,
    centeredSlides: true,
    speed: 900,
    navigation: {
      nextEl: ".rr-11-button-next",
      prevEl: ".rr-11-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    mousewheel: {
      invert: false,
      sensitivity: 1,
      releaseOnEdges: true,
    },

    breakpoints: {
      320: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        centeredSlides: false,
      },
      767: {
        slidesPerView: 2,
        spaceBetween: 20,
        centeredSlides: false,
      },
      1024: {
        slidesPerView: 3,
        centeredSlides: true,
      },
      1200: {
        slidesPerView: 3,
        centeredSlides: true,
      },
      1400: {
        slidesPerView: 3,
        centeredSlides: true,
      },
    },
  });



  //testimonial-4-active
  var testimonial_3_active = new Swiper(".testimonial-4-active", {
    slidesPerView: 2,
    spaceBetween: 5,
    loop: true,
    autoplay: true,
    speed: 600,
    navigation: {
      nextEl: ".rr-4-button-next",
      prevEl: ".rr-4-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        slidesPerGroup: 1,
      },
      1400: {
        slidesPerView: 1,
        slidesPerGroup: 1,
      },
    },
  });


  // brand slider
  var swiper = new Swiper(".h4-brand__slider", {
    slidesPerView: "auto",
    spaceBetween: 30,
    centeredSlides: true,
    freemode: true,
    centeredSlides: true,
    loop: true,
    speed: 4000,
    allowTouchMove: false,
    autoplay: {
      delay: 1,
      disableOnInteraction: true,
    }
  });



  // renamed to avoid naming conflicts
  const serviceItems = document.querySelectorAll(".service-section-5__item");
  const serviceThumb = document.querySelector(".service-section-5__thumb img");
  const serviceTitle = document.querySelector(".service-section-5__content .title");
  const serviceDesc = document.querySelector(".service-section-5__content .decs");
  serviceItems.forEach(item => {
    item.addEventListener("mouseenter", () => {
      const newImg = item.getAttribute("data-img");
      const newTitle = item.getAttribute("data-title");
      const newDesc = item.getAttribute("data-desc");

      // Smooth fade animation
      serviceThumb.style.opacity = "0";
      setTimeout(() => {
        serviceThumb.src = newImg;
        serviceTitle.textContent = newTitle;
        serviceDesc.textContent = newDesc;
        serviceThumb.style.opacity = "1";
      }, 200);
    });
  });


  // portfolio-slide-5
  if (document.querySelectorAll(".portfolio-8").length > 0) {
    let portfolio5_activ = new Swiper(".portfolio-8-activ", {
      modules: [EffectSlicer],
      effect: 'slicer',
      loop: true,
      clickable: true,
      slicerEffect: {
        split: 6,
      },
      direction: 'vertical',
      speed: 600,
      mousewheel: {
        releaseOnEdges: true,
      },

      navigation: {
        prevEl: ".portfolio-8__slider__arrow-prev",
        nextEl: ".portfolio-8__slider__arrow-next",
      },
      pagination: {
        el: ".portfolio-8-pagination",
        clickable: true,
      },

      on: {
        slideChange: function () {
          var bullets = document.querySelectorAll(".swiper-pagination-bullet");
          bullets.forEach((bullet, index) => {
            if (index <= this.realIndex) {
              bullet.classList.add("swiper-pagination-bullet-active");
            }
          });
        }
      }
    });
  }

  // testimonials-section 
  if ($('.pin-area-1').length > 0) {
    let mm = gsap.matchMedia();
    mm.add("(min-width: 768px)", () => {
      return gsap.to('.pin-element_1', {

        scrollTrigger: {
          trigger: '.pin-area-1',
          scrub: 1,
          start: 'top top',
          end: "bottom bottom",
          pin: '.pin-element_1',
          pinSpacing: false,
          markers: false,
          toggleActions: 'play reverse play reverse',
        }
      });
    });
  }

  // Portfolio-section 
  if ($('.pin-area-3').length > 0) {
    let mm = gsap.matchMedia();
    mm.add("(min-width: 768px)", () => {
      return gsap.to('.pin-element_3', {

        scrollTrigger: {
          trigger: '.pin-area-3',
          scrub: 1,
          start: 'top top',
          end: "bottom bottom",
          pin: '.pin-element_3',
          pinSpacing: false,
          markers: false,
          toggleActions: 'play reverse play reverse',
        }
      });
    });
  }


  // woking card


  //testimonial-4-active
  var testimonial_3_active = new Swiper(".portfolio-9-active", {
    slidesPerView: 1,
    spaceBetween: 5,
    loop: true,
    autoplay: true,
    speed: 600,
    navigation: {
      nextEl: ".rr-4-button-next",
      prevEl: ".rr-4-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        slidesPerGroup: 1,
      },
      1400: {
        slidesPerView: 1,
        slidesPerGroup: 1,
      },
    },
  });
  document.addEventListener('DOMContentLoaded', function () {
    const thumbs = document.querySelectorAll('.hero-section-4__thumb');
    const fullThumb = document.querySelector('.hero-section-4__full-thumb');
    const fullThumbImg = fullThumb ? fullThumb.querySelector('img') : null;

    if (fullThumbImg) {
      fullThumbImg.style.clipPath = 'inset(0 100% 0 0)';
    }

    // Handlers
    function mouseEnterHandler() {
      const newImage = this.getAttribute('data-image');
      if (newImage && fullThumbImg) {
        fullThumbImg.src = newImage;
        fullThumbImg.style.clipPath = 'inset(0 0% 0 0)';
      }
    }

    function mouseLeaveHandler() {
      if (fullThumbImg) {
        fullThumbImg.style.clipPath = 'inset(0 100% 0 0)';
      }
    }

    function enableHoverEffect() {
      if (fullThumb) fullThumb.style.display = 'block';
      thumbs.forEach(thumb => {
        thumb.addEventListener('mouseenter', mouseEnterHandler);
        thumb.addEventListener('mouseleave', mouseLeaveHandler);
      });
    }

    function disableHoverEffect() {
      if (fullThumb) fullThumb.style.display = 'none';
      thumbs.forEach(thumb => {
        thumb.removeEventListener('mouseenter', mouseEnterHandler);
        thumb.removeEventListener('mouseleave', mouseLeaveHandler);
      });
    }

    function checkScreen() {
      if (window.innerWidth > 767) {
        enableHoverEffect();
      } else {
        disableHoverEffect();
      }
    }
    checkScreen();
    window.addEventListener('resize', checkScreen);
  });


  // Page load এ check করি body.dark আছে কিনা
  const toggleBtn = document.getElementById('theme-toggle');
  if (document.body.classList.contains('dark')) {
    toggleBtn.classList.add('dark-mode');
  } else {
    toggleBtn.classList.add('light-mode');
  }

  toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark');

    if (document.body.classList.contains('dark')) {
      toggleBtn.classList.remove('light-mode');
      toggleBtn.classList.add('dark-mode');
    } else {
      toggleBtn.classList.remove('dark-mode');
      toggleBtn.classList.add('light-mode');
    }
  });


  ScrollTrigger.refresh();
})(jQuery);


