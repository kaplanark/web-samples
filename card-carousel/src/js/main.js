//carousel colthree script
$('#carouselcolthree').on('slide.bs.carousel', function (e) {
    var $e = $(e.relatedTarget);
    var idx = $e.index();
    var itemsPerSlide = 4;
    var totalItems = $('.colthree-carousel-item').length;
    
    if (idx >= totalItems-(itemsPerSlide-1)) {
        var it = itemsPerSlide - (totalItems - idx);
        for (var i=0; i<it; i++) {
            // append slides to end
            if (e.direction=="left") {
                $('.colthree-carousel-item').eq(i).appendTo('.colthree-carousel-inner');
            }
            else {
                $('.colthree-carousel-item').eq(0).appendTo('.colthree-carousel-inner');
            }
        }
    }
});
$('#carouselcolthree').carousel({ interval: 1500});

//carousel colfour script
$('#carouselcolfour').on('slide.bs.carousel', function (e) {
    var $e = $(e.relatedTarget);
    var idx = $e.index();
    var itemsPerSlide = 3;
    var totalItems = $('.colfour-carousel-item').length;
    
    if (idx >= totalItems-(itemsPerSlide-1)) {
        var it = itemsPerSlide - (totalItems - idx);
        for (var i=0; i<it; i++) {
            // append slides to end
            if (e.direction=="left") {
                $('.colfour-carousel-item').eq(i).appendTo('.colfour-carousel-inner');
            }
            else {
                $('.colfour-carousel-item').eq(0).appendTo('.colfour-carousel-inner');
            }
        }
    }
});
$('#carouselcolfour').carousel({ interval: 2000});

//carousel colsix script
$('#carouselcolsix').on('slide.bs.carousel', function (e) {
    var $e = $(e.relatedTarget);
    var idx = $e.index();
    var itemsPerSlide = 2;
    var totalItems = $('.colsix-carousel-item').length;
    
    if (idx >= totalItems-(itemsPerSlide-1)) {
        var it = itemsPerSlide - (totalItems - idx);
        for (var i=0; i<it; i++) {
            // append slides to end
            if (e.direction=="left") {
                $('.colsix-carousel-item').eq(i).appendTo('.colsix-carousel-inner');
            }
            else {
                $('.colsix-carousel-item').eq(0).appendTo('.colsix-carousel-inner');
            }
        }
    }
});
$('#carouselcolsix').carousel({ interval: 2500});

$(document).ready(function() {
$('a.thumb').click(function(event){
  event.preventDefault();
  var content = $('.modal-body');
  content.empty();
    var title = $(this).attr("title");
    $('.modal-title').html(title);        
    content.html($(this).html());
    $(".modal-profile").modal({show:true});
});
});