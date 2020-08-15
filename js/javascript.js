const headerTxtTransition = document.querySelector('.visible-view');
const headerTxtHeight = headerTxtTransition.offsetHeight;
const txtTransition = headerTxtTransition.querySelectorAll('.carousel-txt-wrap div');
const showcase = document.querySelector('.carousel-img-wrapper');
const dots = document.querySelectorAll('.dots span');
let count = 0;


console.log()
function carouselTransition() {
	setInterval(()=>{
		dots.forEach(dot =>{
			if(dot.className === undefined){
               return null;
			}else{
			   dot.classList.remove('active');
		    }
		})
	    count++;
	    if(count === 3){
	    	count = 0;
	    	txtTransition.forEach(div =>{
	   	    div.style.top = '0';
	   	    dots[0].classList.add('active');
	    })
	    	showcase.style.top = '0';
	    }else{
	        txtTransition.forEach(div =>{
	   	    div.style.top = `-${headerTxtHeight * count}px`;
	    })
	     	showcase.style.top = '-100' * count + '%';
	   	    dots[count].classList.add('active');
	    }
	}, 4000);
}
carouselTransition();

$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#scroll-top-btn i').fadeIn();
        } else {
            $('#scroll-top-btn i').fadeOut();
        }
    });
	$('#scroll-top-btn i').click(function(){
	    $('html, body').animate({scrollTop:0}, 'slow');
	    return false;
	});
})