//rr : create a cryto image array
var cryptos = ["assets/images/btc.png","assets/images/eth.png","assets/images/eos.png","assets/images/xrp.png","assets/images/ltc.png","assets/images/trx.png","assets/images/xmr.png","assets/images/neo.png","assets/images/ada.png","assets/images/dash.png" ]


    //renderButtons function
    //rr :loop through the cryptos array and create an empty "<img>" with classes and attribute.
    //rr:comments:display all crypto images to the html, crytoDiv.
function renderButtons() { 

    for (var i = 0; i < cryptos.length; i++) {
  
        var a = $("<img width = '95' height='60'>");

        a.addClass("crypto-btn");
        a.addClass("img-rounded");
        a.addClass("imagestyle");
        a.attr("src", cryptos[i]);
        $("#crytoDiv").append(a);
    }
}
renderButtons();

//Click listener to capture number of clicks for each crypto
/*$(".crypto-btn").on("click", function(event){
    event.preventDefault();
    var count = 0;

    
})*/