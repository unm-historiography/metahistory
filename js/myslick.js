$(document).ready(function(){
  $('.carousel').slick({
    infinite: false,
    slidesToShow: 1,
    dots: true,
    adaptiveHeight:true,
    slidesToScroll: 1
    //prevArrow: '<div class="slick-prev"><i class="fa fa-angle-left"></span><span class="sr-only">Prev</span></div>',
    //nextArrow: '<div class="slick-next"><i class="fa fa-angle-right"></span><span class="sr-only">Next</span></div>'
  });
});
