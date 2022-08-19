

let items;
async function loadItems()
{
    items=await fetch('data/items.json').then((response) => response.json());
    processItems();
}

function processItems()
{   console.log( "processItems!" );
    let html='';
$("#items").empty();
items.forEach((item,index)=>{
    let itemTemplate=`<div class="col item-holder" onclick="window.location='/detail.html?item=${index}'">
<div class="card" title="${item.desc}">
    <img src="${item.images[0]}" class="card-img">
    <div class="card-img-overlay">
        <h5 class="card-title">${item.name}</h5>
        <div class="price">${item.price}€</div>
      </div>
  </div>
</div>`;
html+=itemTemplate;
});
$("#items").append(html);
}

$( document ).ready(function() {
    console.log( "ready!" );
    loadItems();
});


