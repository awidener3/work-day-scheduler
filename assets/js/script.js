let timeBlockRows = $('.row');
let textArea = $('textarea');
let currentTime = Number(moment().format('H'));


// -------- CURRENT DAY -------- \\
$('#currentDay').text(moment().format('[Today\'s Date: ]dddd, MMMM Do, YYYY'));

// -------- TIME BLOCK RENDERING -------- \\
$(function renderTextArea() {
    timeBlockRows.each(function (i) {
        let rowText = $(this).children('textarea');
        let storedText = JSON.parse(localStorage.getItem('row ' + i))

        if (currentTime === $(this).data('time')) {
            $(this).children('textarea').addClass('present');
            $(this).prevAll().children('textarea').addClass('past');
            $(this).nextAll().children('textarea').addClass('future');
        }

        if (storedText === null) {
            return;
        }

        rowText.val(storedText);
        return;
    });

    if (currentTime < 9) {
        // set background to gray if before 9 AM
        $('.container').find('textarea').addClass('future');

    } else if (currentTime > 17) {
        $('.container').find('textarea').addClass('past');
    }
});

// -------- ROW SAVE BUTTON --------\\
$('.saveBtn').on('click', function () {
    let textArea = $(this).siblings('textarea').val();
    let rowIndex = $(this).parent().data('index');
    let textValue = textArea;

    localStorage.setItem('row ' + rowIndex, JSON.stringify(textValue));
})