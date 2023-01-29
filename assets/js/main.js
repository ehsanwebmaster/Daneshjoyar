// OWlcarousel main slider
$("#indexslide").owlCarousel({
  rtl: true,
  loop: true,
  margin: 30,
  nav: false,
  center: true,
  dots: false,
  autoplay: true,
  autoplayTimeout: 5000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
    1200: {
      items: 1,
    },
  },
});
$("#indexslide2").owlCarousel({
  rtl: true,
  loop: true,
  margin: 15,
  nav: false,
  center: true,
  dots: false,
  autoplay: true,
  autoplayTimeout: 5000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 2,
    },
    1200: {
      items: 3,
    },
  },
});
$("#indexslide3").owlCarousel({
  rtl: true,
  loop: true,
  margin: 15,
  nav: false,
  center: true,
  dots: true,
  autoplay: true,
  autoplayTimeout: 5000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 2,
    },
    1200: {
      items: 3,
    },
  },
});