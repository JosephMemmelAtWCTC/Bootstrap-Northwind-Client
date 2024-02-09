$(function () {
    const animations = [
        "bounce",
        "flash",
        "pulse",
        "rubberBand",
        "shakeX",
        "shake",
        "headShake",
        "swing",
        "tada",
        "wobble",
        "jello",
        "heartBeat",
    ];

    $('#happyBirthdayAnimated').addClass(`animate__${animations[Math.floor(Math.random() * animations.length)]}`);


    // preload audio
    var toast = new Audio('mixkit-correct-answer-reward-952.wav');

    const $liveToast = $('#liveToast');
    const $toastHeader = $('#toast-header');
    const $toastCode = $('#code');


    $(document).on("keydown", function (event) {
        if (event.key == "Escape") {
            $liveToast.toast('dispose')
        }
    });


    $('#birthday').pickadate({ format: 'mmmm, d' });

    let firstHasntRun = false;

    // event listener for check/uncheck
    $formCheckInput = $('.form-check-input');
    $formCheckInput.on('change', function () {
        $liveToast.toast('dispose');
        // make the image visible
        if (firstHasntRun) {
            $('#' + this.id + 'Img').css('visibility', 'visible')
        }
        // animate balloon in/out based on checkbox
        $(this).is(':checked') ?
            $('#' + this.id + 'Img').removeClass().addClass('animate__animated animate__bounceInDown') :
            $('#' + this.id + 'Img').addClass('animate__animated animate__bounceOutUp');
    });

    $formCheckInput.each(function (e) {
        // $(this).prop('checked', false);
        $(this).trigger('change');
    });
    firstHasntRun = true;



    $('#selectBallons').on('submit', function (e) {
        e.preventDefault();

        if ($(this).find('input[type="checkbox"]:checked').length == 0) {
            // first pause the audio (in case it is still playing)
            toast.pause();
            // reset the audio
            toast.currentTime = 0;
            // play audio
            toast.play();
            $liveToast.toast({
                autohide: false,
                // header: $(this).data("name")
            });
            $toastHeader.text($(this).find(':submit').data("name"));
            $toastCode.text($(this).find(':submit').data("code"));

            $liveToast.toast().toast('show');
        }

    });


    $('#selectAll').on('click', function (e) {
        $('#selectBallons').find('input[type="checkbox"]').each(function (e) {
            $(this).prop('checked', true);
            $(this).trigger('change');
        });
    });
    $('#clearAll').on('click', function (e) {
        $('#selectBallons').find('input[type="checkbox"]').each(function (e) {
            $(this).prop('checked', false);
            $(this).trigger('change');
        });
    });


    $('#selectBallons .form-check-label').on('mouseenter', function (e) {
        $('#happyBirthdayAnimated').css('color', $(this).attr('for'));
        $(this).css('color', $(this).attr('for'));
    });

    $('#selectBallons .form-check-label').on('mouseleave', function (e) {
        $(this).css('color', '#000');
        $('#happyBirthdayAnimated').css('color', '#000');
    });


});
