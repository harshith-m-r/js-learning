let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://syntaxdb.com/api/v1/languages/javascript/categories');
xhr.send();
xhr.onload = function () {
  addItemsToDOM(JSON.parse(xhr.response));
};
var arr = ["category_name", "category_search", "language_permalink"];

function addItemsToDOM(categories) {
  for(let i = 0; i<1;i++){
  var container = document.querySelector('.categories');
  categories.forEach((category) => {
        var elem = document.createElement('button');
        elem.setAttribute('class', 'navlinks');
        elem.textContent = category[arr[i]];
        container.appendChild(elem);
        
      });
    }
}
