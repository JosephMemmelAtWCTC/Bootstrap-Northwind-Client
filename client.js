$(function () {
    // preload audio
    var toast = new Audio('mixkit-correct-answer-reward-952.wav');

    const $liveToast = $('#liveToast');
    const $toastHeader = $('#toast-header');
    const $toastCode = $('#code');

    $('.code').on('click', function (e) {
        e.preventDefault();
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
        $toastHeader.text($(this).data("name"));
        $toastCode.text($(this).data("code"));

        $liveToast.toast().toast('show');

    });


    $(document).on("keydown", function (event) {
        if (event.key == "Escape") {
            $liveToast.toast('dispose')
        }
    });
});