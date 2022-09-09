let items;
async function loadItems()
{
    items=await fetch('data/items-prod.json').then((response) => response.json());
    processItems();
}

function processItems()
{   //console.log( "processItems!" );
    let html='';
$("#items").empty();
items.forEach((item,index)=>{
    let itemTemplate=`<div class="col item-holder" onclick="window.location='detail.html?item=${index}'">
<div class="card" title="${item.name}">
    <img src="${item.thumbnail}" class="card-img">
    <div class="card-img-overlay">
        <h5 class="card-title vip-text">${item.name}</h5>
        <div class="price">${item.price}€</div>
      </div>
  </div>
</div>`;
html+=itemTemplate;
});
$("#items").append(html);
}


$( document ).ready(function() {
    //console.log( "ready!" );
    loadItems();
});


