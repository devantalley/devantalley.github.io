// Everything OK?
console.log('OK');

// animation
let spans = document.querySelectorAll('.word span');
spans.forEach((span, idx) => {
	span.addEventListener('click', (e) => {
		e.target.classList.add('active');
	});
	span.addEventListener('animationend', (e) => {
		e.target.classList.remove('active');
	});
	
	// Initial animation
	setTimeout(() => {
		span.classList.add('active');
	}, 750 * (idx+1))
});
// Gallery
var full=false;

$('.imgWrap').hover(function () {
 // $(this).css('width', '36%');
   $(this).addClass('current');
  //$(this).siblings().css('width', '16%');  
   $(this).siblings().addClass('notCurrent');
}, function () {
  //$('.imgWrap').css('width', '20%');  
  $('.imgWrap').siblings().removeClass('notCurrent');
  $('.imgWrap').removeClass('current');
 });

$('.imgWrap').click(function () {  
  
  if(!full){
    full = true;
    // $(this).css('width', '100%');
    $(this).addClass('current-full');
  //$(this).siblings().css('width', '0%');  
   $(this).siblings().addClass('notCurrent-full');
  }
});

$('.mfp-close').click(function () {
  full = false;
  $('.imgWrap').siblings().removeClass('notCurrent-full');
  $('.imgWrap').removeClass('current-full');
 
});


$('.gallery').magnificPopup({
  delegate: 'a',
  type: 'image',
  removalDelay: 300,
  mainClass: 'mfp-fade',
  gallery: {
    enabled: true,
    navigateByImgClick: true,
    preload: [0,1]
  }
});



