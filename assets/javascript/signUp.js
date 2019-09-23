$(document).ready(function() {   

$("#signUp").hide();
//to not to show jquery validation error
// $('#signUp').validate({
//     errorPlacement: function(error,element) {
//       return true;
//     }
//   });
$("#signupBtn").on("click",function(event){
    $("#signUp").show();
});

$("#close").on("click",function(event){
    $("#signUp").hide();

});

});
