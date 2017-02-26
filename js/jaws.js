$(window).scroll(function() {
    if($(this).scrollTop() > 50)  
    {
        $('.top-navbar').addClass('top');
        $('.btn-phone .main-phone, .btn-phone small').css('color', '#fff');
    } else {
        $('.top-navbar').removeClass('top');
         $('.btn-phone .main-phone, .btn-phone small').css('color', '#000');
    }
});

$('.call-mobile').on('click', function() {
	$('.call-mobile-popup').fadeIn();
	
})

$('.call-mobile-close').on('click', function() {
	$('.call-mobile-popup').fadeOut();
})

$('.open-menu-mobile').on('click', function() {
	$('.mobile-menu').addClass('active');
    $('.call-mobile').addClass('active');
    $('.email-mobile').addClass('active');
    $('.navbar-brand-top').css("display", "none");
    $('body').addClass('overflow');
})

$('.mobile-mobile-close').on('click', function() {
    $('.mobile-menu').removeClass('active');
    $('.call-mobile').removeClass('active');
    $('.email-mobile').removeClass('active');
    $('.navbar-brand-top').css("display", "block");
    $('body').removeClass('overflow');
});

var hamburgerMenuOpened = false;

$('.burger').on('click', function() {
	if(hamburgerMenuOpened == false) {
		$('.right-nav').css("margin-right", "0");
		$('.send-request').css("opacity", "0");
		hamburgerMenuOpened = true;
	} else {
		$('.right-nav').css("margin-right", "-450px");
		$('.send-request').css("opacity", "1");
		hamburgerMenuOpened = false;
	}
})

function showModal(button) {
    var backgroundModal = $('#background');
    $(backgroundModal).addClass('loader-background');
    var modalWindow = $(button).data('target');
    var image = $(modalWindow).find('img');
    var imageSrc = image.data('src');
    image.attr('src', imageSrc);
    image.attr('data-init', 1);
    $(modalWindow).modal('show');
}

$('.modal').on('hide.bs.modal', function (e) {
    $(background).removeClass('loader-background');
});

  
$('.action-link').on('click', function() { 
  if ($(window).width() <= '767'){
    $('.action-list > li').removeClass('active');
    $(this).parent().addClass('active');
    $('.action-content').css("display", "none");
    $(this).next('.action-content').css("display", "block");
    
  } else {
    $('.action-link').on('click', function() {
          $('.action-list > li').removeClass('active');
          $(this).parent().addClass('active');
          $('.action-right').html($(this).next('.action-content').html());
      }); 

  }
})

$('.action-link').first().trigger('click');


function mapInit() {
    var mapOptions = {
        zoom: 17,
        center: new google.maps.LatLng(50.395734, 30.636403), 
        styles: [ {
                    "featureType": "poi",
                    "elementType": "labels",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                    }]
    };

    var mapElement = document.getElementById('map');
    var map = new google.maps.Map(mapElement, mapOptions);
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(50.395734, 30.636403),
        map: map,
        icon: 'img/Point_on_the_map.svg'
    });
}

mapInit();
