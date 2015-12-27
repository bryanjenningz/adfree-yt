(function() {
  var searchForm = document.querySelector('.search-form');
  var searchBox = searchForm.querySelector('.search-box');
  searchForm.addEventListener('submit', search);

  function search(event) {
    event.preventDefault();
    console.log(searchBox.textContent);
    searchBox.textContent = '';
  }
})();
