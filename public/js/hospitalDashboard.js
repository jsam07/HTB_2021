$(document).ready(() => {
    const patientId = $('p.title');
   
    // Click function to send data
    patientId.click((event) => {
        console.log($(this).attr('inner html'))
    })


    // Click?
    $(document).on("click",".appDetails", function () {
        var clickedBtnID = $(this).attr('class'); // or var clickedBtnID = this.id
        alert('you clicked on button #' + clickedBtnID);
     });
    
});