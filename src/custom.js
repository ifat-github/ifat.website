/* show and hide menu */
$(document).ready(function () {
    'use strict';

    $(window).scroll(function () {
        'use strict';

        $('.navbar').css({
            'margin-top': '0px',
            'opacity': '1'
        });

        $('.navbar-default').css({
            'background-color': 'rgba(59, 59, 59, 0.7)',
            'border-color': '#444'
        });

        $('.navbar-brand img').css({
            'height': '35px',
            'padding-top': '0px'
        });

        $('.navbar-nav > li > a').css({
            'padding-top': '15px'
        });
    });
});

/* active menu item on click */
$(document).ready(function () {
    'use strict';

    $('.navbar-nav li a').click(function () {
        'use strict';

        $('.navbar-nav li a').parent().removeClass("active");

        $(this).parent().addClass("active");
    });
});

/* highlight menu item on scroll */
$(document).ready(function () {
    'use strict';

    $(window).scroll(function () {
        'use strict';

        $("section").each(function () {
            'use strict';

            var bb = $(this).attr("id");
            var hei = $(this).outerHeight();
            var grttop = $(this).offset().top - 50;

            if ($(window).scrollTop() > grttop && $(window).scrollTop() < grttop + hei) {
                $(".navbar-nav li a[href='#" + bb + "']").parent().addClass("active");
            } else {
                $(".navbar-nav li a[href='#" + bb + "']").parent().removeClass("active");
            }
        });
    });
});

/* add animations - initialize wow */
$(document).ready(function () {
    'use strict';
    new WOW().init();
});

/* collapse the menu when an item was selected */
$('.navbar-nav>li>a').on('click', function () {
    $('.navbar-collapse').collapse('hide');
});

/* contact form on submit */
function sendMail(e) {
    console.log('sending');
    var name = $('#contact #contact_name').val();
    var email = $('#contact #contact_email').val();
    var subject = $('#contact #subject').val();
    var message = $('#message').val();
    window.open('mailto:ifat.email@gmail.com?subject=' + subject + ' - ' + name + ' (' + email + ')' + '&body=' + message);
    /* window.location.href = 'mailto:ifat.email@gmail.com?subject=' + subject + ' - ' + name + ' (' + email + ')' + '&body=' + message; */
    return false;
};

$('#contact').submit(function (e) {
    e.preventDefault();
    sendMail();
});

/* header padding */
$(document).ready(function () {
    'use strict';

    setInterval(function () {
        'use strict';

        var windowHeight = $(window).height();
        var headerHeight = $('#header-container').height();
        var paddingHeight = windowHeight - headerHeight;

        $('#header-container').css({
            'padding-top': Math.round(paddingHeight / 2) + 'px',
            'padding-bottom': Math.round(paddingHeight / 2) + 'px'
        });
    }, 10)
});
