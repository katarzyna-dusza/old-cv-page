function showElement(){$(".hide-element").each(function(a){var b=$(this).offset().top+$(this).outerHeight(),c=$(window).scrollTop()+$(window).height();c>b&&$(this).animate({opacity:"1"},500)})}function showTopScroll(){var a=$(".about-me").offset().top+$(".about-me").outerHeight(),b=$(window).scrollTop()+$(window).height();return b>a?$(".scroll").css("visibility","visible"):$(".scroll").css("visibility","hidden")}function goToAbout(){var a=$(".about");scrollToElement(a)}function goToSkills(){var a=$(".skills");scrollToElement(a)}function goToExperience(){var a=$(".work");scrollToElement(a)}function goToTop(){var a=$("body");scrollToElement(a)}function scrollToElement(a){$("html, body").animate({scrollTop:a.offset().top},1e3)}$(document).ready(function(){$(window).on("scroll",function(){showElement(),showTopScroll()})});