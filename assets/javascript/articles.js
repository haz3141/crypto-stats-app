/*var url = 'https://newsapi.org/v2/top-headlines?' +
          'country=us&' +
          'apiKey=c9fa72dafb6c489b8638928ad9262ac0';

$.ajax({
  url: url,
  method: 'GET'
}).then(function(response) {
   console.log(response);

  for (var i = 0; i < response.articles.length; i++) {

    var article = response.articles[i].url;
    var title = response.articles[i].title;
    var articleDiv = $("<div>");
    var articleImage = $("<img>");

    articleDiv.addClass("carousel-item")
    articleImage.addClass("image-carousel")
    articleImage.attr("src", response.articles[i].urlToImage);

    articleDiv.append(articleImage);
    $(".carousel-inner").append(articleDiv);

    console.log(article);
    console.log(title);
    console.log(articleImage);

    // $(".image-carousel").attr("src", articleImage);
    // $(".carousel-item").append(articleImage);
  }
  $('.carousel').show();
  
}).fail(function(err) {
  throw err;
});*/
$(document).ready(function() {
  var url = 'https://newsapi.org/v2/everything?' +
          'q=' + Apple + '&' +
          'from=2018-07-03&' +
          'sortBy=popularity&' +
          'apiKey=92a33ab165d642e59afe9cdf667782a2';

          // Jeff's API key - d780f118dfdb4609bda3e8cf8e6d1612
          
          

var req = new Request(url);

fetch(req)
    .then(function(response) {
        console.log(response.json());
    })
});