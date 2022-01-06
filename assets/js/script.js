let timeBlockRows = $('.row');
let textArea = $('textarea');
// let currentTime = moment().format('ha');
let currentTime = '10am';

// live current day div
$('#currentDay').text(moment().format('[Today\'s Date: ]dddd, MMMM Do, YYYY'));

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
    })
});

$('.saveBtn').on('click', function () {
    let textArea = $(this).siblings('textarea').val();
    let rowIndex = $(this).parent().data('index');
    let textValue = textArea;

    localStorage.setItem('row ' + rowIndex, JSON.stringify(textValue));
})