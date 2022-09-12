let items;
let item;
async function loadItem()
{
    items=await fetch('data/items-prod.json').then((response) => response.json());
   

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    

    const id=parseInt(urlParams.get('item'));

    var filtered=items.filter((it)=>{return it.id===id});

    if(filtered.length<1){
        window.location='/';
    }

    item=filtered[0];

    document.title=`Nasty Pixie - ${item.name}`;
    $('#itemName').text(item.name);
    $('#itemDesc').html(item.desc);
    $('#itemPrice').text(`Precio: ${item.price}€`);
    $('#itemGallery').prop("src",item.images[0]);


    $('.swiper-wrapper').empty();
    item.images.forEach(image => {

         $('.swiper-wrapper').append(`<div class="swiper-slide"><div class="swiper-zoom-container"><img class="swiper-zoom-target" width="500px" src='${image}'></div></div>`);
    });


    const swiper = new Swiper('.swiper', {
        // Optional parameters
        autoHeight: true,
        zoom: true,
        centeredSlides: true,
        loop: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      
      });

}


$( document ).ready(function() {

    //console.log( "ready!" );
    loadItem();
});

