$('.categ__list').slick({
    infinite: true,
    dots: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    variableWidth: true
  });

  $('.hero__slider').slick({
    infinite: true,
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 10000,
    fade: false,
    slidesToShow: 1,
    slidesToScroll: 1

  });

  $('.brand__slider').slick({
    infinite: true,
    dots: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    variableWidth: true


  });


$('.prod__things-1').slick({
  infinite: true,
  dots: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  dots: false,
  variableWidth: true,
  autoplay: false,
    autoplaySpeed: 3000
  })
  $('.prod__things-2').slick({
    infinite: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    variableWidth: true,
    autoplay: false,
    autoplaySpeed: 3000
    })



    $('.shop__blocks').slick({
      infinite: true,
      dots: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      dots: false,
      variableWidth: true,
      autoplay: true,
        autoplaySpeed: 3000
      })
   
   
    let menuBtn = document.querySelector('.burg__menu--btn');
    let menu = document.querySelector('.burg__menu');
    menuBtn.addEventListener('click', function(){
      menuBtn.classList.toggle('active');
      menu.classList.toggle('active');

    })

