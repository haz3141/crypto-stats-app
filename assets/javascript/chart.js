$(document).ready(function() {
    
    var queryURL = "https://api.coingecko.com/api/v3/global";
    var btc = 0; 
    var eth = 0;
    var bch = 0;
    var ltc = 0;
    var other = 0;

    $.ajax({
        url: queryURL,
        method: "GET"
    })
    .then(function(response) {

        console.log(response);

        var results = response;
        var marketCapData = Object.values(results.data.market_cap_percentage);

        console.log(marketCapData);
        console.log(Object.values(marketCapData));

        btc = marketCapData[0];
        eth = marketCapData[1];
        bch = marketCapData[2];
        ltc = marketCapData[3];
        other = 100 - marketCapData[0] - marketCapData[1] - marketCapData[2] - marketCapData[3];

        console.log(btc + eth + bch + ltc + other); 
        
        var ctx = document.getElementById("myChart").getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: ["Bitcoin", "Ethereum", "Bitcoin Cash", "Litecoin", "Others"],
                datasets: [{
                    label: '# of Votes',
                    data: [btc, eth, bch, ltc, other],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255,99,132,1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                title: {
                    display: true,
                    text: 'Crypto Market Dominance',
                    fontSize: 36
                },
                scales: {
                    yAxes: [{
                        gridLines: {
                            display: false
                        },
                        ticks: {
                            display: false
                        }
                    }]
                }
            }
        });
    myChart.resize(9999999999999999999);
    });
});