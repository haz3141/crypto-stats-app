$(document).ready(function() {
    
    var queryURL = "https://api.coingecko.com/api/v3/coins?order=market_cap_&per_page=15";

    $.ajax({
        url: queryURL,
        method: "GET"
    })
    .then(function(response) {
        
        console.log(response);
        

        var results = response;

        for (i = 0; i < results.length; i++) {

            var name = results[i].name;
            var idG = results[i].id;
            var symbol = results[i].symbol;
            var image = results[i].image.small;
            var currentPrice = results[i].market_data.current_price.usd;
            var hourChange = results[i].market_data.price_change_percentage_24h;

            var idDiv = $("<div>").text("ID: " + idG);
            var symbolDiv = $("<div>").text("Ticker: " + symbol.toUpperCase());
            var nameDiv = $("<div>").text("Name: " + name);
            var currentPriceDiv = $("<div>").text("Current Price: " + currentPrice + "USD");
            var hourChangeDiv = $("<div>").text("Change 24H: " + hourChange + "%");
            var imgDiv = $("<img>").attr("src", image);
            

            $("#testDiv01").append(imgDiv);
            $("#testDiv01").append(idDiv);
            $("#testDiv01").append(symbolDiv);
            $("#testDiv01").append(nameDiv);
            $("#testDiv01").append(currentPriceDiv);
            $("#testDiv01").append(hourChangeDiv);
            
            var a = $("<img>");
    
            a.addClass("crypto-btn");
            a.addClass("img-rounded");
            a.addClass("imagestyle");
            a.attr("src", image);
            a.attr("id", idG);
            
            
            $("#crytoDiv").append(a);
             
        }
    });

    $(document).on("click", ".crypto-btn", function(event){
        event.preventDefault();

        console.log(this.id);
        var queryURL = "https://api.coingecko.com/api/v3/coins/" + this.id;
        console.log(queryURL);

        $.ajax({
            url: queryURL,
            method: "GET"
        })
        .then(function(response) {
            console.log(response);
            var results = response;

            var name = results.name;
            var idG = results.id;
            var symbol = results.symbol;
            var image = results.image.small;
            var currentPrice = Math.round(results.market_data.current_price.usd);
            var hourChange = Math.round(results.market_data.price_change_percentage_24h);
            var description = results.description.en;

            var idDiv = $("<div>").text("ID: " + idG);
            var symbolDiv = $("<div>").text("Ticker: " + symbol.toUpperCase());
            var nameDiv = $("<div>").text("Name: " + name);
            var currentPriceDiv = $("<div>").text("Current Price: $" + currentPrice + "USD");
            var hourChangeDiv = $("<div>").text("Change 24H: " + hourChange + "%");
            var imgDiv = $("<img>").attr("src", image);
            var descDiv = $("<div>").text(description);
            
            $("#dataDiv").html("");
            $("#dataDiv").append(imgDiv);
            $("#dataDiv").append(idDiv);
            $("#dataDiv").append(symbolDiv);
            $("#dataDiv").append(nameDiv);
            $("#dataDiv").append(currentPriceDiv);
            $("#dataDiv").append(hourChangeDiv);
            $("#dataDiv").append(descDiv);

            
            var QueryURL = 'https://newsapi.org/v2/everything?' +
                    'q=' + idG + '&' +
                    'sortBy=popularity&' +
                    'apiKey=92a33ab165d642e59afe9cdf667782a2';
              
            $.ajax({
                url: QueryURL,
                method: "GET"
            })
            .then(function(response) {
                var results = response.articles;
                console.log(results);

                for (i = 0; i < results.length; i++) {
                    console.log("---------");
                    var auth = results[i].author;

                    var desc = results[i].description;
                    var src = results[i].source.name;
                    var title = results[i].title;
                    var articleURL = results[i].url;
                    var imgURL = results[i].urlToImage;

                    console.log("test" + auth);
                    var titleDiv = $("<div>").text("Title: " + title);
                    var authDiv = $("<div>").text("Author: " + auth);
                    var descDiv = $("<div>").text(desc);

                    var sourceDiv = $("<div>").text(src);
                    //Rie's comment : I added attr("target","_blank") to open an article in a new tab. 
                    var linkDiv = $("<a>").attr("href", articleURL).attr("target","_blank");
                    

                    var imgDiv = $("<img>").attr({
                        src: imgURL,
                        alt: title,
                        width: "55%",
                    });

                

                    //$(linkDiv).text(title);
                    var monkDiv = linkDiv.append(imgDiv);

                    
                    $("#articleDiv").prepend(titleDiv);
                    $("#articleDiv").prepend(monkDiv);
                    $("#articleDiv").append("<br>");
                    /*$("#articleDiv").append(titleDiv);
                    $("#articleDiv").append(authDiv);
                    $("#articleDiv").append(descDiv);
                    $("#articleDiv").append(sourceDiv);*/
                
                    
                }

            });

            
        }); 
    });
});