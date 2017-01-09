var C3D = {
    isDebug: false,

    init: function() {

        C3D.runDebug();
        C3D.setSpace();
    },

    setSpace: function () {
        $(window).scroll(function (event) {
            var st = $(this).scrollTop(),
                offset = 1 * Math.floor($(':root').css('font-size').replace(/px/g, ''));

            if(st > offset) {
                $('body').addClass('scrolled');
            } else {
                $('body').removeClass('scrolled');
            }
        });

        $(window).resize(function (event) {
        });

        $('html').removeClass('loading');

        $('nav a').on('click', function() {
            if ($(this).data('view')) {
                $(this).parents('ul').find('a').each(function () {
                    $('.observer').removeClass('view-' + $(this).data('view'));
                });
                $('.observer').addClass('view-' + $(this).data('view'));
            }
            if ($(this).data('style')) {
                $('.observer').toggleClass('style-' + $(this).data('style'));
            }
            if ($(this).data('object')) {
                $('.mbp').toggleClass('object-' + $(this).data('object'));
            }
        });

        $('.observer').addClass('view-1');
        $('.mbp').addClass('open');
    },

    track: function (selector) {
        $(selector).each(function () {
            var tracker = $('<div>').addClass('tracker'),
                width = $(this).css('width'),
                height = $(this).css('height');

            $(this).width(width).height(height);
            tracker.append($(this).clone())
            console.log(tracker);
            $(this).replaceWith(tracker);
        });
    },

    runDebug: function () {
        var queryParams = document.location.search.replace(/(^\?)/, '')
            .split('&')
            .map(function (n) {
                return n = n.split('='),this[n[0]] = n[1],this
            }.bind({}))[0];

        if('debug' in queryParams) {
            C3D.isDebug = true;
            $(':root').addClass('debug');
        }
    },

    isPortable: function() {
        return window.matchMedia('(max-width: 599px)').matches;
    }
};

$(document).ready(function() {
    C3D.init();
});
