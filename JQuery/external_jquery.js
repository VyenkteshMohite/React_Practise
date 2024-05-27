
$(document).ready(function () {

    // 1. Element Selector: means when we click on an specific id or Selector and that Counting
    //     the above code is for that
    // $().ready  is the default selector
    console.log("Here we are using the Jquery")
    // $('p').click(); //when click on p then
    $('p').click(function () {
        console.log("clicked on p ")
        console.log('you clicked on this',this)
        //to hide which one is clicked then
        $(this).hide();

    });
    // $('p').hide();
})

//there are three types of selectors 
// 1.Element Selector 
// 2.id selector
// 3.class selector

// 2.Id Selector 
$('#second').click();  

// 3.class selector
//this will return the class 
$('.odd').click();