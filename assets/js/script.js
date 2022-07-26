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