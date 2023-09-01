//Calculadora do preço

var preco = $('#preco_produto');


$("#quantidade").on('input', function(){
  let quantidadeValor = $("#quantidade").val();
  console.log(quantidadeValor);
  total = 350 *quantidadeValor;
  preco.text(total);
  })


  //slider
  const swiper = new Swiper('.swiper', {
    
    direction: 'horizontal',
    loop: true,
  
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets'
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });