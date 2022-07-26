$(document).ready(function() {
    // listen for save button clicks
    $(".saveBtn").on("click", function() {
   
        let value = $(this).siblings(".textarea").val();
        let key = $(this).parent().attr("id");
    
        // save in localStorage
        localStorage.setItem(key, value);
    
      
        $(".alert").addClass("show");
    

        setTimeout(function() {
            $(".alert").removeClass("show");
        }, 5000);
    });
  
    function taskUpdate() {

        let currentTime = moment().hours();

        $(".hourly-plan").each(function() {
            let time = parseInt(
            $(this)
                .attr("id")
                .split("0")
            );
            console.log($(this).attr("id"));
            console.log(currentTime);
            console.log(time);
    
            if (time < currentTime) {
                $(this).addClass("past");
            } 
            else if (time === currentTime) {
                $(this).removeClass("past");
                $(this).addClass("present");
            } 
            else {
                $(this).removeClass("past");
                $(this).removeClass("present");
                $(this).addClass("future");
            }
        });
    }
  
    taskUpdate();
  
    // set up interval to check if current time needs to be updated
    let interval = setInterval(taskUpdate, 15000);


    $("#900pm-hour .textarea").val(localStorage.getItem("900pm-hour"));
    $("#1000pm-hour .textarea").val(localStorage.getItem("1000pm-hour"));
    $("#1100pm-hour .textarea").val(localStorage.getItem("1100pm-hour"));
    $("#1200pm-hour .textarea").val(localStorage.getItem("1200pm-hour"));
    $("#1300pm-hour .textarea").val(localStorage.getItem("1300pm-hour"));
    $("#1400pm-hour .textarea").val(localStorage.getItem("1400pm-hour"));
    $("#1500pm-hour .textarea").val(localStorage.getItem("1500pm-hour"));
    $("#1600pm-hour .textarea").val(localStorage.getItem("1600pm-hour"));
    $("#1700pm-hour .textarea").val(localStorage.getItem("1700pm-hour"));


    const todaysDate = moment().format("dddd, MMMM Do YYYY"); {
        document.getElementById("currentDay").innerHTML = todaysDate;
    };
})