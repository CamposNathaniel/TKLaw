$( document ).ready(function() {
    $('body').scrollspy({ target: '#main-navbar' })
    
    $('#slider_1').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        dots: true,
        items: 1,
    })
    $('#test-slider').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        dots: true,
        items: 1,
    })

    $("#contactForm").submit(function(e){

        e.preventDefault();
        var $ = jQuery;

        var postData        = $(this).serializeArray(),
            formURL         = $(this).attr("action"),
            $cfResponse     = $('#contactFormResponse'),
            $cfsubmit       = $("#cfsubmit"),
            cfsubmitText    = $cfsubmit.text();

        $cfsubmit.text("Sending...");


        $.ajax(
            {
                url : formURL,
                type: "POST",
                data : postData,
                success:function(data)
                {
                    $cfResponse.html(data);
                    $cfsubmit.text(cfsubmitText);
                },
                error: function(data)
                {
                    alert("Error occurd! Please try again");
                }
            });

        return false;

    });
});
/*------------------------------------------
 Subscribe form ajax
 ------------------------------------------*/


$('#subscription-form').submit(function(e) {

    e.preventDefault();
    var $form           = $('#subscription-form');
    var submit          = $('#subscribe-button');
    var ajaxResponse    = $('#subscription-response');
    var email           = $('#subscriber-email').val();

    $.ajax({
        type: 'POST',
        url: 'php/subscribe.php',
        dataType: 'json',
        data: {
            email: email
        },
        cache: false,
        beforeSend: function(result) {
            submit.html("Working...");
        },
        success: function(result) {
            if(result.sendstatus == 1) {
                ajaxResponse.html(result.message);
                $form.fadeOut(500);
            } else {
                ajaxResponse.html(result.message);
                submit.html('<i class="ion-heart"></i> Get it');
            }
        },
        error: function(){
            submit.html('<i class="ion-heart"></i> Get it');
        }
    });

});

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}