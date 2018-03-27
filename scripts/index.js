$(document).ready(function () {
    /*---------------------------- Page loader---------------- */
    $(window).on('load', function () {
        $(".page-loader").fadeOut("slow");;
    });

    /*---------------------------- Contact page google maps---------------- */
    //var position = [39.065318, -94.578109];
    //function showGoogleMaps() {
    //    var latLng = new google.maps.LatLng(position[0], position[1]);
    //    var mapOptions = {
    //        zoom: 16, // initialize zoom level - the max value is 21
    //        streetViewControl: false, // hide the yellow Street View pegman
    //        scaleControl: true, // allow users to zoom the Google Map
    //        mapTypeId: google.maps.MapTypeId.ROADMAP,
    //        center: latLng
    //    };
    //    map = new google.maps.Map(document.getElementById('googlemaps'),
    //        mapOptions);
    //    // Show the default red marker at the location
    //    marker = new google.maps.Marker({
    //        position: latLng,
    //        map: map,
    //        draggable: false,
    //        animation: google.maps.Animation.DROP
    //    });
       
    //}
    //google.maps.event.addDomListener(window, 'load', showGoogleMaps);

 
/*---------------------------- Portfolio Projects popups---------------- */
    $('#project1_popup').popup();
    $('#project2_popup').popup();
    $('#project3_popup').popup();
    $('#project4_popup').popup();
    $('#project5_popup').popup();
    $('#project6_popup').popup();
});

/*---------------------------- Home page on hover fontawesome icons ----------------------------- */
$('[tool-tip-toggle="tooltip-bottom"]').tooltip({
    placement: 'bottom'
});

/*---------------------------- Contact page on hover fontawesome icons ----------------------------- */
$('[tool-tip-toggle="tooltip-top"]').tooltip({
    placement: 'top'
});


/*---------------------------- Profile button click ----------------------------- */
$('.background-image-profile').on('click', function () {
    $(".menu").hide("slide", { direction: "right" }, 600);
    $(".home").hide("slide", { direction: "left" }, 600);
    $('.profile-page').show();
    $('.cancel-btn').delay(0).fadeIn(0);
});

/*---------------------------- Resume button click ----------------------------- */
$('.background-image-resume').on('click', function () {
    //$('.website-home-page').fadeOut(300);
    $(".menu").hide("slide", { direction: "right" }, 600);
    $(".home").hide("slide", { direction: "left" }, 600);
    $('.resume-page').delay(400).fadeIn(300);
    $('.cancel-btn').delay(400).fadeIn(300);
});

/*---------------------------- Potfolio button click ----------------------------- */
$('.background-image-portfolio').on('click', function () {
    $(".menu").hide("slide", { direction: "right" }, 600);
    $(".home").hide("slide", { direction: "left" }, 600);
    $('.portfolio-page').delay(400).fadeIn(300);
    $('.cancel-btn').delay(400).fadeIn(300);
    
});

/*---------------------------- Contact button click ----------------------------- */
$('.background-image-contact').on('click', function () {
    $(".menu").hide("slide", { direction: "right" }, 600);
    $(".home").hide("slide", { direction: "left" }, 600);
    $('.contact-page').delay(400).fadeIn(300);
    $('.cancel-btn').delay(400).fadeIn(300);
});

/*---------------------------- Cancel button click ----------------------------- */
$('.cancel-btn').on('click', function () {
    $(".home").show("slide", { direction: "left" }, 700);
    $(".menu").show("slide", { direction: "right" }, 700); -
    $('.profile-page, .resume-page, .portfolio-page, .contact-page').hide();
    //$('.website-home-page').delay(400).fadeIn(300);
    
});

/*---------------------------- Redirecting to home on back button click ----------------------------- */
$(window).on("navigate", function (event, data) {
    var direction = data.state.direction;
    if (direction == 'back') {
        $(".home").show("slide", { direction: "left" }, 700);
        $(".menu").show("slide", { direction: "right" }, 700); -
        $('.profile-page, .resume-page, .portfolio-page, .contact-page').hide();
    }
    if (direction == 'forward') {
        $(".home").show("slide", { direction: "left" }, 700);
        $(".menu").show("slide", { direction: "right" }, 700); -
        $('.profile-page, .resume-page, .portfolio-page, .contact-page').hide();
    }
});

//window.onpopstate = function() {
//    $(".home").show("slide", { direction: "left" }, 700);
//    $(".menu").show("slide", { direction: "right" }, 700); -
//    $('.profile-page, .resume-page, .portfolio-page, .contact-page').hide();
//}; 


/*----------------------------Resume page skills circular percentage bar easy pie chart ----------------------------- */
$(function() {
    $('.chart').easyPieChart({
        size: 150,
        animate: 2000,
        lineCap: 'butt',
        scaleColor: false,
        barColor: '#6A8D9D',
        lineWidth: 8
    });
});
   

/*------------------------------- Contact form validation----------------------------------------------------- */
$(function () {
    $("form[name='contactForm']").validate({
        rules: {
            name: "required",
            email: {
                required: true,
                email: true
            },
            message: "required"
        },
        messages: {
            name: "Please enter your name",
            email: "Please enter a valid email address",
            message: "Please enter your message"
        },
        submitHandler: function (form) {
            form.submit();
        }
    });
});


/*------------------------------- Projects division on click change projects----------------------------------------------------- */
$('#allProjects').on('click', function () {
    $('.item').show();
});

$('#appDev').on('click', function () {
    $('.item').show();
    $('#project5').hide();
    $('#project6').hide();
});

$('#etlDev').on('click', function () {
    $('.item').show();
    $('#project1').hide();
    $('#project2').hide();
    $('#project3').hide();
    $('#project4').hide();
});