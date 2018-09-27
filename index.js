let bindEventHandlers = () => {
    $('.js-date-picker').datepicker({}).datepicker('update', new Date());

    $('.mobile-list-button').on('click', () => {
        $('.mobile-list').toggle('fast');
    });

    $(window).on('resize', function() {
        //Add overflow when needed. 10 is offset
        let headerImageHeight = $('.header__image img').height() - 10; 
        $('.main').css('height', `calc(100% - ${headerImageHeight}px)`);

        //Resize tooths width. There are 16 tooths. 5 is offset
        let toothContainerWidth = $('.images-list-superior').width();
        let singleToothWidth = parseInt(toothContainerWidth / 16) - 5;
        $('.images-list img').css('width', `${singleToothWidth}px`);

        //Keep list height equal to tooths list height. 40 represents list`s padding
        let toothListHeight = parseInt($('.images-list').height()) + 40;
        $('.work-elements-options').css('height', `${toothListHeight}px`);
    })

    $(document).on('click', (e) => {
        let $mobileList = $('.mobile-list');
        let $mobileListBtn = $('.mobile-list-button')

        if (!$mobileListBtn.is(e.target) && $mobileListBtn.has(e.target).length === 0) {
            $mobileList.hide();
        }
    });
};

$(document).ready(() => {
    bindEventHandlers();
    $(window).trigger('resize');
})