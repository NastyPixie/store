


let items;
let item;
async function loadItem()
{
    items=await fetch('/data/items.json').then((response) => response.json());

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

