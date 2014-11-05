$(document).ready(function () {
    var $fotorama = $('.quotes')
        .on('fotorama:showend', function (e, fotorama) {
            var $frame = fotorama.activeFrame.$stageFrame;

            if (!$frame.data('state')) {
                $frame.on('f:load f:error', function () {
                    resizeSlider(fotorama, $frame);
                });
            }
            else {
                resizeSlider(fotorama, $frame);
            }
        }).fotorama({
            width: '100%',
            height: 440,
            loop: true,
            shadows: false,
            click: false,
            arrows: 'always'
        });

    function resizeSlider(fotorama, $frame) {
        setTimeout(function () {
            fotorama.resize({height: $('.fotorama__html > *', $frame).height()}, 300);
        }, 1);
    }

    $(window).resize(function () {
        var fotorama = $fotorama.data('fotorama'),
            $frame = fotorama.activeFrame.$stageFrame;

        resizeSlider(fotorama, $frame)
    });
});