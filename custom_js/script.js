let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () => {
  navbar.classList.toggle('active');
}

/* pricing table */

let month = document.querySelector('.price-toggler .month');
let year = document.querySelector('.price-toggler .year');

let monthAmount = document.querySelectorAll('.package-plan .month');
let yearAmount = document.querySelectorAll('.package-plan .year');

year.onclick = () => {
  year.classList.add('active');
  month.classList.remove('active');

  monthAmount.forEach(mo => {
    mo.style.display = 'none';
  });

  yearAmount.forEach(yr => {
    yr.style.display = 'block';
  });

};

month.onclick = () => {
  year.classList.remove('active');
  month.classList.add('active');

  monthAmount.forEach(mo => {
    mo.style.display = 'block';
  });

  yearAmount.forEach(yr => {
    yr.style.display = 'none';
  });
};

/* testimonial section*/

$(document).ready(function(){
  $('.testimonial-slider').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    speed: 800,
    prevArrow: '<button type="button" class="slick-prev_blog"><i class="fas fa-long-arrow-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next_blog"><i class="fas fa-long-arrow-right"></i></button>',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });
});




/* blog slider */

  $(document).ready(function () {
    $('.blog-slider').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1000,
      responsive: [{
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
  
          }
        }
      ],
      prevArrow: '<button type="button" class="slick-prev_blog"><i class="fas fa-long-arrow-left"></i></button>',
      nextArrow: '<button type="button" class="slick-next_blog"><i class="fas fa-long-arrow-right"></i></button>'
    });
  });

/* blog slider */

