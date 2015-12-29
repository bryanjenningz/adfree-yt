var searchForm = $('.search-form');
var searchBox = $('.search-box');
searchForm.submit(search);

function search(event) {
  event.preventDefault();
  var url = "http://suggestqueries.google.com/complete/search?hl=en&ds=yt&client=youtube&hjson=t&jsonp=loadVideos&q=" 
    + encodeURIComponent(searchBox.val()) + "&cp=1";
  $.ajax({
    type: "GET",
    url: url,
    dataType: "script"
  });
  searchBox.val('');
}

function loadVideos(data) {
  console.log(data);
}
