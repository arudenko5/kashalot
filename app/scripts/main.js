$(document).ready(function(){
  console.log(12345);
  $('.js-base-carousel').owlCarousel({
    responsive:{
      0:{
        items:1,
        dots: true
      },
      768:{
        items:3,
        dots: false
      }
    }
  });


  $('.js-auctions-carousel').owlCarousel({
    responsive:{
      0:{
        items:1,
        dots: true
      },
      768:{
        items:3,
        dots: false
      },
      990:{
        items:5,
        dots: false
      }
    }
  });

  $('.js-stuff-carousel').owlCarousel({
    loop: true,
    nav: true,
    margin: 20,
    responsive:{
      0:{
        items:1,
        dots: true,
        nav: false
      },
      768:{
        items:2,
        dots: false
      },
      990:{
        items:3,
        dots: false
      }
    }
  });

  $('.js-reviews-carousel').owlCarousel({
    loop: true,
    nav: true,
    margin: 15,
    responsive:{
      0:{
        items:1,
        dots: true,
        nav: false
      },
      768:{
        items:2,
        dots:false
      },
      990:{
        items:3,
        dots: false
      }
    }
  });
});