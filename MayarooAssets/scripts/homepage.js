// document.addEventListener('DOMContentLoaded', function () {
//     new Swiper('.industry-slider', {
//     slidesPerView: 1.2,
//     spaceBetween: 24,
//     speed: 700,
//     grabCursor: true,
//     freeMode: {
//         enabled: true,
//         momentum: true,
//         momentumRatio: 0.6,
//     },
//     breakpoints: {
//         480: { slidesPerView: 1.5 },
//         640: { slidesPerView: 2.2 },
//         900: { slidesPerView: 3.2 },
//         1200: { slidesPerView: 4.2 },
//     }
//     });
// });

document.addEventListener('DOMContentLoaded', function () {

  // ── Industry Slider ─────────────────────────────────────────────────────────
  // On mobile/tablet keep the free-drag Swiper; on desktop use scroll-driven pan
  const DESKTOP_BREAKPOINT = 1200;

  function initIndustrySlider() {
    const section   = document.querySelector('.team-section-2');
    const wrapper   = document.querySelector('.industry-slider .swiper-wrapper');
    if (!section || !wrapper) return;

    const isMobile = window.innerWidth < DESKTOP_BREAKPOINT;

    if (isMobile) {
      // ── Mobile: plain Swiper ------------------------------------------------
      if (!section._swiperInstance) {
        section._swiperInstance = new Swiper('.industry-slider', {
          slidesPerView: 1.2,
          spaceBetween: 24,
          speed: 700,
          grabCursor: true,
          freeMode: { enabled: true, momentum: true, momentumRatio: 0.6 },
          breakpoints: {
            480: { slidesPerView: 1.5 },
            640: { slidesPerView: 2.2 },
            900: { slidesPerView: 3.2 },
          },
        });
      }

    } else {
      // ── Desktop: scroll-driven horizontal pan --------------------------------

      // Destroy Swiper if it was previously initialised
      if (section._swiperInstance) {
        section._swiperInstance.destroy(true, true);
        section._swiperInstance = null;
      }

      // Kill any previous ScrollTrigger on this section
      if (section._scrollTrigger) {
        section._scrollTrigger.kill();
        section._scrollTrigger = null;
      }

      // Reset any leftover transform
      gsap.set(wrapper, { x: 0 });

      // How far the wrapper must travel to show all slides
      // (full scrollable width minus the visible container width)
      const getScrollDistance = () =>
        wrapper.scrollWidth - wrapper.closest('.industry-slider').offsetWidth;

      section._scrollTrigger = ScrollTrigger.create({
        trigger : section,
        start   : 'top top',          // pin when section hits the viewport top
        end     : () => `+=${getScrollDistance()}`,   // unpin after full travel
        pin     : true,                // freeze the section in place
        scrub   : 1,                  // smooth 1-second lag behind scroll
        anticipatePin: 1,
        invalidateOnRefresh: true,    // recalculate on resize
        animation: gsap.to(wrapper, {
          x          : () => -getScrollDistance(),
          ease       : 'none',
          invalidateOnRefresh: true,
        }),
      });
    }
  }

  initIndustrySlider();

  // Re-initialise on resize so mobile ↔ desktop switch works cleanly
  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      ScrollTrigger.refresh();
      initIndustrySlider();
    }, 250);
  });

});