var curScroll = 0;

$(window).on('mousewheel DOMMouseScroll', function(e){
    var evt = window.event || e;
    var delta = evt.detail? evt.detail*(-999) : evt.wheelDelta;
    var loc = $('#wrapper').scrollTop() + $('#wrapper').innerHeight();
    var height = $('#wrapper')[0].scrollHeight - 10;
    var height2 = $('#wrapper')[0].scrollHeight - $('#wrapper').innerHeight();
    if(delta < 0) {
        //scroll down
        if (curScroll < height2) {
            curScroll += 8;
        }
    }
    else {
        //scroll up
        if (curScroll > 0) {
            curScroll -= 8;
        }
    }
    if (loc >= height && !$('#wrapper').hasClass('appended')) {
        var moreContent ='';
        $('#wrapper').append(moreContent);
        $('#wrapper').addClass('appended');
        console.log('appended');
    }
    $('#wrapper').scrollTop(curScroll);
    return true;
}); 
