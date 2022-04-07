let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://syntaxdb.com/api/v1/languages/javascript/categories');
xhr.send();
xhr.onload = function () {
  addItemsToDOM(JSON.parse(xhr.response));
};

var arr = ["category_name", "category_search", "language_permalink"];

function addItemsToDOM(categories) {
            var container = document.querySelector('.categories');
            categories.forEach((category) => {
                    var elem = document.createElement('td');
                    elem.setAttribute('class', 'labels');
                    elem.textContent = category["category_name"];
                    var elem2 = document.createElement('td');
                    elem2.setAttribute('class', 'labels');
                    elem2.textContent = category["category_search"];
                    var elem3 = document.createElement('td');
                    elem3.setAttribute('class', 'labels');
                    elem3.textContent = category["language_permalink"];
                    container.appendChild(elem);
                });
}
