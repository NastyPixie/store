


let items;
let item;
async function loadItem()
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

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    

    const idx=parseInt(urlParams.get('item'));

    if(!items[idx]){
        window.location='/';
    }

    item=items[idx];

    document.title=`Nasty Pixie - ${item.name}`;
    $('#itemName').text(item.name);
    $('#itemDesc').html(item.desc);
    $('#itemPrice').text(`Precio: ${item.price}€`);
    $('#itemGallery').prop("src",item.images[0]);


    $('.swiper-wrapper').empty();
    item.images.forEach(image => {

         $('.swiper-wrapper').append(`<div class="swiper-slide"><div class="swiper-zoom-container"><img class="swiper-zoom-target" src='${image}'></div></div>`);
    });


    const swiper = new Swiper('.swiper', {
        // Optional parameters
        autoHeight: true,
        zoom: true,
        centeredSlides: true,
        loop: true,
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      
      });

}


$( document ).ready(function() {

  

    console.log( "ready!" );
    loadItem();
});

