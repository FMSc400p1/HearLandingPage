                        /*Butão de mudar o tema*/
/*--------------------------------------------------------*/
function cor(){
    var corNova = document.getElementById("muda");
    var butao1 = document.getElementById("butao1");
    var butao2 = document.getElementById("butao2");
    corNova.style.backgroundColor = 'black';
    corNova.style.color = 'white';
    butao1.style.display = 'none';
    if(butao1.style.display = 'none'){
        butao2.style.display = 'block';
    }
    
}
function corTroca(){
    var corNova1 = document.getElementById("muda");
    var butao2 = document.getElementById("butao2");
    var butao1 = document.getElementById("butao1");
    corNova1.style.backgroundColor='white';
    corNova1.style.color = '#1463F3';
    butao2.style.display = 'none';
    if(butao2.style.display = 'none'){
        butao1.style.display='block';
    }
}
/*--------------------------------------------------------*/

                    /*Swiper do Carrossel*/
/*--------------------------------------------------------*/
var swiper = new Swiper(".mySwiper", {
	spaceBetween: 30,
	centeredSlides: true,
	autoplay: {
		delay: 1750,
		disableOnInteraction: false,
	},
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	});
/*--------------------------------------------------------*/