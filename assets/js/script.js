const todaysDate = moment().format("dddd, MMMM Do YYYY"); {
    document.getElementById("currentDay").innerHTML = todaysDate;
};


//  add event listener to target button for save textarea content value
$(".saveBtn").click(function () {
    let time = $(this).parent().attr("id");
    let value = $(this).siblings(".textarea").val();
    localStorage.setItem(time, value);
})

    
// use moment to get current time, converting it to military time, 
//  check method: is before, is after
// retrieve time block and check it against current time
// save it: localStorage setitem to save things, getItem to retrieve things
$("#900pm-hour .textarea").val(localStorage.getItem("900pm-hour"));
$("#1000pm-hour .textarea").val(localStorage.getItem("1000pm-hour"));
$("#1100pm-hour .textarea").val(localStorage.getItem("1100pm-hour"));
$("#1200pm-hour .textarea").val(localStorage.getItem("1200pm-hour"));
$("#1300pm-hour .textarea").val(localStorage.getItem("1300pm-hour"));
$("#1400pm-hour .textarea").val(localStorage.getItem("1400pm-hour"));
$("#1500pm-hour .textarea").val(localStorage.getItem("1500pm-hour"));
$("#1600pm-hour .textarea").val(localStorage.getItem("1600pm-hour"));
$("#1700pm-hour .textarea").val(localStorage.getItem("1700pm-hour"));