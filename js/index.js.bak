

let items;
async function loadItems()
{
    //items=await fetch('/data/items.json').then((response) => response.json());
	items=[
    {
        "name":"Nombre",
        "desc":"<p>Descripción de un producto cualquier un poco más larga. Para ver cómo queda el texto si alguien quiere describirlo todo bien.</p><p>Esto es otro párrafo, por si fuese necesario.</p>",
        "price": 5.0,
        "images":["https://picsum.photos/500?rnd=0","https://picsum.photos/500?rnd=10","https://picsum.photos/500?rnd=110","https://picsum.photos/500?rnd=1110"]
    },
    {
        "name":"Nombre 1",
        "desc":"Descripción 1",
        "price": 2.0,
        "images":["https://picsum.photos/500?rnd=1"]
    },
    {
        "name":"Nombre 2",
        "desc":"Descripción 2",
        "price": 6.0,
        "images":["https://picsum.photos/500?rnd=2"]
    },
    {
        "name":"Nombre 3",
        "desc":"Descripción 3",
        "price": 10.0,
        "images":["https://picsum.photos/500?rnd=3"]
    },
    {
        "name":"Nombre 4",
        "desc":"Descripción 4",
        "price": 12.0,
        "images":["https://picsum.photos/500?rnd=4"]
    },
    {
        "name":"Nombre 5",
        "desc":"Descripción 5",
        "price": 4.0,
        "images":["https://picsum.photos/500?rnd=5"]
    },
    {
        "name":"Nombre 6",
        "desc":"Descripción 6",
        "price": 25.0,
        "images":["https://picsum.photos/500?rnd=6"]
    },
    {
        "name":"Nombre 7",
        "desc":"Descripción 7",
        "price": 8.0,
        "images":["https://picsum.photos/500?rnd=7"]
    }
];
    processItems();
}

function processItems()
{   console.log( "processItems!" );
    let html='';
$("#items").empty();
items.forEach((item,index)=>{
    let itemTemplate=`<div class="col item-holder" onclick="window.location='detail.html?item=${index}'">
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


