var curScroll = 0;

$(window).on('mousewheel DOMMouseScroll', function(e){
    var evt = window.event || e;
    var delta = evt.detail? evt.detail*(-999) : evt.wheelDelta;
    var loc = $('#circleFrame').scrollTop() + $('#circleFrame').innerHeight();
    var height = $('#circleFrame')[0].scrollHeight - 10;
    var height2 = $('#circleFrame')[0].scrollHeight - $('#circleFrame').innerHeight();
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
    if (loc >= height && !$('#circleFrame').hasClass('appended')) {
        var moreContent ='';
        $('#circleFrame').append(moreContent);
        $('#circleFrame').addClass('appended');
        console.log('appended');
    }
    $('#circleFrame').scrollTop(curScroll);
    return true;
}); 
