var cabecera = jQuery("header").height();

jQuery(document).ready(function(){

	jQuery("#nav-icon1").click(function(){
		cerrar();
	});

	if(window.location.hash)
    {
        var target = window.location.hash;
        var punto = jQuery(target).offset().top;
		jQuery('header nav > a').removeClass('active');        
        if(jQuery(target).length > 0)
        {
			jQuery('html,body').stop().animate({
			scrollTop: punto},600, 'swing',function(){
			    jQuery("header nav > a[href ='"+target+"']").addClass('active')
			});
    	}
    }


	jQuery("header nav > a[href^='#']").click(function(e){
		e.preventDefault();
        jQuery(document).off("scroll");		
        var target = this.hash;
        var menu = target;
        jQuery("header nav > a").removeClass("active");
        if(jQuery(target).length > 0)
        {
        	var punto = jQuery(target).offset().top;
			jQuery(this).addClass("active");
		    jQuery('html, body').stop().animate({
	            "scrollTop": punto } , 600, 'swing', function () {
	            	jQuery(document).on("scroll", onScroll);
	            	window.location.hash = menu;
	        });

			if(jQuery(window).width() < 1200)
			{
				cerrar();
			}else{
				jQuery("body").removeClass("open");
			}
		}/*else{
            window.location.href = "/"+menu;
		}*/
	})


	jQuery("a.abajo").click(function(e){
        e.preventDefault();
        var padre = jQuery(this).closest(".seccion");
        var seccion = padre.nextAll(".seccion");
        jQuery('html, body').stop().animate({
            'scrollTop': seccion.offset().top
        }, 600, 'swing', function() {});
	})

});

jQuery(document).on("scroll", onScroll);

function onScroll(event){
    var scrollPos = jQuery(document).scrollTop();
    jQuery('section.seccion').each(function () {
        var currLink = jQuery(this);

        if (Math.round(currLink.offset().top) <= Math.round(scrollPos) && Math.round(currLink.offset().top) + Math.round(currLink.outerHeight()) > Math.round(scrollPos)) {
			var id = "#"+currLink.attr("id");
			jQuery('header nav a').removeClass('active');
			jQuery("header nav a[href ='"+id+"']").addClass('active');
			//window.location.hash = id;
        }
    })
}

function cerrar()
{
	jQuery("#nav-icon1").stop().toggleClass("open");
	jQuery("header .menu").stop().toggleClass("open");
	jQuery("#nav-icon1").find("i").stop().toggleClass("fa-times");
	jQuery("body").stop().toggleClass("open");
}

jQuery(window).resize(function(){
	cabecera = jQuery("header").height();
	/*jQuery("#nav-icon1").removeClass("open");
	jQuery(".carrusel-grupo-1,.carrusel-grupo-2").attr("style","")*/

	if(jQuery(window).width() < 1200)
	{
		jQuery("#nav-icon1").removeClass("open");
		jQuery("header .menu").removeClass("open");
		jQuery("#nav-icon1").find("i").removeClass("fa-times");
		jQuery("body").removeClass("open");
	}else{
		jQuery("body").removeClass("open");
	}
});