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