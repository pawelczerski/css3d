$(document).ready(function () {
    var open = function () {
        $('.laptop').toggleClass('open');

        if ($('.laptop').hasClass ('open')) {
            $(this).text('close')
        }
        else {
            $(this).text('open')
        }

    }

    $('.open').on('click', open).trigger('click');
    $('.position-1').on('click', function () {
        $('.observer').removeClass('position-2');
        $('.observer').addClass('position-1');
    });
    $('.position-2').on('click', function () {
        $('.observer').removeClass('position-1');
        $('.observer').addClass('position-2');
    });

    $('.observer').addClass('position-1');
})