let idArray = [];
let con_id = 0;
let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://syntaxdb.com/api/v1/languages/javascript/categories');
xhr.send();
xhr.onload = function () {
    addItemsToDOM(JSON.parse(xhr.response));
    //alert(idArray);
}
var arr = ["id", "category_name"];
let j=0;

for(i=0; i<idArray.length;i++){
    document.getElementById(`navlinks${i}`).addEventListener("click", getConcepts);
}


function addItemsToDOM(categories) {

    for(let i = 0, j=0; i<1;i++){
    var container = document.querySelector('#navlinks');
    categories.forEach((category) => {
    
        var elem = document.createElement('div');
        elem.setAttribute('id', `navlinks${j}`);
        j++;
        elem.textContent = category[arr[i+1]];
        container.appendChild(elem);
        
        idArray.push(category[arr[i]]);
        //alert(idArray)
      });
      //alert(idArray);
    }

}




function getConcepts() {
    let conxhr = new XMLHttpRequest();
    conxhr.open('GET',`https://syntaxdb.com/api/v1/languages/javascript/categories/33/concepts`)
    conxhr.send()
    conxhr.onload = function () {
        addItemsToInnerDom(JSON.parse(conxhr.response))
    }
}



function addItemsToInnerDom(concepts){
    let container = document.querySelector('.concepts')
    concepts.forEach((concept) =>{
        let elem2 = document.createElement('div')
        elem2.setAttribute('class', 'concepts');
        elem2.textContent = concept["concept_name"];
        container.appendChild(elem2)
    }); 
}
 //   document.getElementById(`navlink${con_id}`).removeEventListener("mouseout", )





/*function addItemsToDOM2(data, querySel, ele, attr_id, attr_val, data_name){
    var container = document.querySelector(querySel);
    data.forEach((data_field) => {
        var elem = document.createElement(ele);
        elem.setAttribute(attr_id, attr_val);
        elem.textContent = data_field[data_name];
        container.appendChild(elem);
    });
}*/

