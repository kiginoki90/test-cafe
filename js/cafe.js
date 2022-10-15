const backBtn = document.getElementById('back-btn');

/**window.addEventListener('scroll',() =>{

const scrollValue = document.scrollingElement.scrollTop;

if(scrollValue >= 300){
  backBtn.style.opacity = '1';
}
else{
  backBtn.style.opacity = '0';
}
});**/


$(".openbtn1").click(function () {
  $(this).toggleClass('active');
});


backBtn.addEventListener( 'click' , scroll_to_top );

function scroll_to_top(){
	window.scroll({top: 0, behavior: 'smooth'});
};


window.addEventListener( 'scroll' , scroll_event );

function scroll_event(){
	
	if(window.pageYOffset > 300){
		backBtn.style.opacity = '1';

	}else	if(window.pageYOffset < 300){
		backBtn.style.opacity = '0';
   
	}
	
};

$(".openbtn1").click(function () {
 $('.nav_cafe').toggleClass('open');

});
