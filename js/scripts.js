/********** Run Preloader **********/
/**********************************/

$(document).ready(function() {
	
	setTimeout(function(){
		$('body').addClass('loaded');
	}, 3000);

	$('#floating-menu a').click(function(){
		$('#main').removeClass('menu-open');
		$('#menu-btn').removeClass('active');
	});
	
});

/********** Floating mobile menu **********/
/*****************************************/
	var btn = document.getElementById('menu-btn'),
		 	main = document.getElementById('main');


		btn.onclick = function(){
			(this.classList.contains("active") === true) ? this.classList.remove("active") : this.classList.add("active");
			(main.classList.contains("menu-open") === true) ? main.classList.remove("menu-open") : main.classList.add("menu-open");
		};



		window.onscroll = function(){

			/********** Floating mobile menu **********/
			/*****************************************/

			var floatingMenu = document.getElementById('floating-menu'),
					menuItem = floatingMenu.getElementsByTagName('li'),
			    curPosition = window.pageYOffset || document.body.scrollTop,
			    menuPosition = curPosition + 100;
			floatingMenu.style = "top:"+menuPosition+"px";

			/********** Spy menu **********/
			/*****************************/


			if (curPosition >= document.getElementById('home').offsetTop &&
			 		curPosition < document.getElementById('services').offsetTop){
				menuItem[0].setAttribute('class','active');
			}
			else {
				menuItem[0].removeAttribute('class','active');
			};
			if (curPosition >= document.getElementById('services').offsetTop &&
			 		curPosition < document.getElementById('portfolio').offsetTop){
				menuItem[1].setAttribute('class','active');
			}
			else {
				menuItem[1].removeAttribute('class','active');
			};
			if (curPosition >= document.getElementById('portfolio').offsetTop &&
			 		curPosition < document.getElementById('default').offsetTop){
				menuItem[3].setAttribute('class','active');
			}
			else {
				menuItem[3].removeAttribute('class','active');
			};
			if (curPosition >= document.getElementById('default').offsetTop &&
			 		curPosition < document.getElementById('contact').offsetTop){
				menuItem[2].setAttribute('class','active');
			}
			else {
				menuItem[2].removeAttribute('class','active');
			};
			if (curPosition >= document.getElementById('contact').offsetTop){
				menuItem[4].setAttribute('class','active');
			}
			else {
				menuItem[4].removeAttribute('class','active');
			};
			
		};

		
		
		
/********** jQuery scripts **********/
/***********************************/


	$(document).ready(function() {

		/***** Comments slider *****/

		$('.slider').owlCarousel({
			items: 1,
		  loop:true,
		  autoplay:true,
		  autoplayTimeout:3000,
		  autoplaySpeed: 3000,
		  nav:false,
		  animateOut: 'slideOutDown',
		  animateIn: 'zoomIn'  
		})

	/***** ScrollTo Animation *****/

		$('a[href^="#"]').click(function(){
		//Сохраняем значение атрибута href в переменной:
		var target = $(this).attr('href');
		$('html, body').animate({scrollTop: $(target).offset().top}, 800);
		return false;
		});

	/***** Isotop Filter *****/
  	$( window ).load(function() {

  		$('.portfolio-container').isotope({
  	      itemSelector: '.portfolio-item'
  	    });
  	 
  	    $('#filter a').click(function(){
  	 
  	      $('#filter a').removeClass('active');
  	      $(this).addClass('active');
  	      var selector = $(this).attr('data-filter');
  	 
  	        $('.portfolio-container').isotope({
  	          filter: selector,
  	          animationOptions: {
  	            duration: 1000,
  	            easing: 'easeOutQuart',
  	            queue: false
  	          }
  	        });
  	    return false;    
  	    });
  	});
	});




