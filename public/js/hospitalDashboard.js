$(document).ready(() => {
    const patientId = $('p.title');
   
    // Click function to send data
    patientId.click((event) => {
        console.log($(this).closest('p.title'))
    })
    
});