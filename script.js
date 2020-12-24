(function($){

    $.fn.snow = function(settings){

        var defaults = {
                minSize				: 5,
                maxSize				: 30,
                fallTimeMultiplier	: 20,
                fallTimeDifference 	: 10000,
                spawnInterval		: 700,
                target				: $('body'),
                elements			: [
                    {
                        html: '<i class="fa fa-snowflake-o" aria-hidden="true"></i>',
                        color: '#ffffff'
                    }
                ]
            },
            settings		= $.extend({}, defaults, settings),
            targetHeight 	= settings.target.outerHeight(),
            targetWidth		= settings.target.innerWidth(),
            $element 		= $('<div class="flake" />').css({'position': 'absolute', 'top': '-50px'}).html('')
        ;


        return setInterval( function(){
            var startPosX 		= Math.random() * targetWidth ,
                opacity			= 0.5 + Math.random(),
                sizeFlake		= settings.minSize + Math.random() * settings.maxSize,
                startPosY		= targetHeight,
                endPosX			= startPosX  + Math.random() * 800,
                fallTime		= targetHeight * settings.fallTimeMultiplier + Math.random() * settings.fallTimeDifference,
                currentElement 	= settings.elements[Math.floor(Math.random()*settings.elements.length)];

            $element
                .clone()
                .html(currentElement.html)
                .appendTo(settings.target)
                .css({
                    'left': startPosX,
                    'opacity': opacity,
                    'font-size': sizeFlake,
                    'width' : sizeFlake,
                    'height': sizeFlake,
                    'color': currentElement.color
                })
                .animate(
                    {
                        top: startPosY,
                        left: endPosX,
                        opacity: 1
                    },
                    fallTime,
                    'linear',
                    function() {
                        // Change this to handle fall end action
                        $(this).fadeOut('fast', function() {
                            $(this).remove();
                        })
                    }
                );
        }, settings.spawnInterval);
    };

})(jQuery);

var snowEffectInterval = jQuery.fn.snow({
    minSize: 5,

    maxSize: 30,

    fallTimeMultiplier: 20,

    fallTimeDifference: 100,

    spawnInterval: 100,

    target: jQuery("body"),

    elements	: [

        {
            html: '<i class="fa fa-snowflake-o" aria-hidden="true"></i>',
            color: 'orange'
        },

        {
            html: '<i class="fa fa-snowflake-o" aria-hidden="true"></i>',
            color: '#F0BA03'
        },

        {
            html: '<i class="fa fa-snowflake-o" aria-hidden="true"></i>',
            color: '#ffffff'
        },
    ]
});