/** Vercel Analytic */
import { inject } from "@vercel/analytics/*";

inject()

$(window).on("load", function() {
    $(".animate").fadeOut(5000);
})


/** ScrollScript */

AOS.init({
    disable: function() {
      var maxWidth = 780;
      return window.innerWidth < maxWidth;
    }
  })




/** TypeScript */


const txtAnim = document.getElementById("anim");

new Typewriter(txtAnim, {
    loop: true,
})
.typeString("Developpeur.")
.pauseFor(500)
.deleteChars(12)
.typeString("Designer.")
.pauseFor(500)
.deleteChars(7)
.start()




/** PROJET */


$(document).ready(function(){
    $(".list").click(function(){
        const value = $(this).attr('data-filter');
        if (value == 'all'){
            $('.itemBox').show('1000');
        }
        else{
            $('.itemBox').not('.'+value).hide('1000');
            $('.itemBox').filter('.'+value).show('1000');
        }
    })

    $('.list').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
    });
});



/** TILT.JS */

$(document).ready(function(){
    VanillaTilt.init(document.querySelector(".your-element"), {
		max: 25,
		speed: 400
	});
})
