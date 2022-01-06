// PSEUDOCODE:
// ? I want to have the current date on the page
    // get from moment.js ==> moment().format("MMM Do, YYYY")
    // use jQuery to select div ==> $("#element-id").text((moment().format("MMM Do, YYYY"))

// ? I want a row of 3 columns for each hour of the workday
    // col 1 = Hour (9 A.M.)
    // col 2 = Description (editable)
    // col 3 = Save

// ? I want the colors of the timeblocks to change depending on current time
    // past = background grayed        
    // current = background red
    // future = background green

// ? I want to save timeblock info to localStorage 
    // I want an alert message to display "I just saved to localStorage" on save click





let scheduleDescriptions = [];
let timeBlockRows = $('.row');
let textArea = $('textarea');

$('#currentDay').text(moment().format('[Today\'s Date: ]dddd, MMMM Do, YYYY'));

function renderTextArea() {
    scheduleDescriptions = JSON.parse(localStorage.getItem('descriptions'));

    if (scheduleDescriptions === null) {
        scheduleDescriptions = [];
    }

    timeBlockRows.each(function() {
        // I want each row to be assigned text from the DB based on it's index

        

        console.log($(this).data('index'));
    })
}

$('.saveBtn').on('click', function() {
    // let textArea = $(this).siblings('textarea').val();
    // let rowIndex = $(this).parent().data('index');
    // let saveButton = $(this);

    // console.log(textArea);
    // console.log(rowIndex);
    // console.log(saveButton);
})