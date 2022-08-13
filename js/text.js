//project hover text event
$(function(){
    $('.text1').textillate({
        in: { 
            effect:  'fadeInUp',
            delay: 50,
        },
        out: {
            effect:  'fadeOutUp',
            reverse: true,
            delay: 40,
        },
    });
});