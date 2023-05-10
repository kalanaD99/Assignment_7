$('.nav-btn').click(function(e){
    var location;
    $('#Home').css("display", "none");
    $('#Home').css("display", "none");
    $('#Item').css("display", "none");
    $('#Customer').css("display", "none");
    switch (e.target.id){
        case "btnHome": location = "Home";break;
        case "btnOrder": location = "Home";break;
        case "btnItems": location = "Item";break;
        case "btnCustomer": location = "Customer";break;
    }
    $('#'+location).css("display", "block");
});
