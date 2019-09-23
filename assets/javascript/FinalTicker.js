// On Load of Document
$(document).ready(function () {

    // API URL - I have put the number of results, but we can increase this value or decrease this value, via 'page=""'
    var queryURL = "https://api.coingecko.com/api/v3/coins?order=market_cap_&per_page=85";
    
    // Requesting data from Coingecko API
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {

        // Empty string for the marquee
        var finalMarqueeString = "";

        // Loop through the response data
        for (i = 0; i < response.length; i++) {
            // Data stored in variables for Cryto currency ticker
            var name = response[i].name;
            // The .toUpperCase() method on the end to UPPERCASE the coin symbol
            var symbol = response[i].symbol.toUpperCase();
            // The .toFixed(2) method on the end to round the digits to two decimal places
            var currentPrice = response[i].market_data.current_price.usd.toFixed(2);
            var hourChange = response[i].market_data.price_change_percentage_24h;
            
            // Using Template Literals https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
            // adding iteration to the total marquee string
            // ** Issue I was having was that the only data that was being returned was index[4] of the array.  In the "for loop"
            // I was rewriting the data by using the "=".  Using "+=" ensures that the data doesn't just continuously write on itself
            finalMarqueeString += `${name}: ${symbol} - $${currentPrice}  Mkt-Chg: ${hourChange} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`;

            // Adding the final marquee string to the actual marquee
            document.getElementById("updatePrices").innerHTML = finalMarqueeString;
            










        }
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
    })
    
})