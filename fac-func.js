function addItemsToDOM2(data, querySel, ele, attr_id, attr_val, data_name){
    var container = document.querySelector(querySel);
    data.forEach((data_field) => {
        var elem = document.createElement(ele);
        elem.setAttribute(attr_id, attr_val);
        elem.textContent = data_field[data_name];
        container.appendChild(elem);
    });
}
