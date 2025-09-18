$(document).ready(function(){

  //////////////////////////////////////////////////////////////////
  // HEADER DINÂMICO
  // Mostra header somente no início da página.
  // Descomentar caso utilizada a classe .header-dinamico. Caso contrário, deletar.

    $(window).scroll(function(){
      var nav = $(".header-dinamico .container");
      var scroll = $(window).scrollTop();
      if(scroll == 0){
        nav.fadeIn();
      } else {
        nav.fadeOut();
      }
    });

  //////////////////////////////////////////////////////////////////

  // Seu código abaixo

})


/*const items = document.querySelectorAll('.balao p span'); 
const dropZone = document.querySelector('#res');


//quando segura o elemento com o click do mouse, inicia o evento
function onDragStart(e) {
    setTimeout(function() {
        e.target.classList.add('move');
    },1);
}

//quando o elemento é arrastado para o campo, aparece, uma borda pontilhada
function onDragEnter(){
    dropZone.classList.add('enter');

}

//quando o elemento é solto, seria o fim do evento
function onDragEnd(e) {
    console.log(this.innerHTML)
    dropZone.classList.remove('enter');
    dropZone.classList.add('dropped');

    const value = e.target.textContent;
    dropZone.textContent = value;

    let gula = this.innerHTML
    if(gula=='gula') {
        console.log('Acertou');
    }   else {
        console.log ('Errou');
    }
}
   

//Adicionando eventos
dropZone.addEventListener('dragenter', onDragEnter);

items.forEach(function(item) {
    item.addEventListener('dragstart', onDragStart);
    item.addEventListener('dragend', onDragEnd);


});*/

// const itens = document.querySelectorAll('.balao p span');
// const dropzones = document.querySelectorAll('#res');

// itens.forEach(function(item) {
//     item.addEventListener('dragstart' , dragstart)
//     item.addEventListener('drag' , drag)
//     item.addEventListener('dragend' , dragend)

// })

// function dragstart(e) {
//     setTimeout(function() {
//     //console.log('inicio arrastar')
//     e.target.classList.add('move')
//     },1);
// }

// function drag() {
//     //console.log('arrastando')

// }

// function dragend() {
//     //console.log('fim de arrastar')

// }

// dropzones.forEach(function(dropzone) {
//     dropzone.addEventListener('dragenter' , dragenter) 
//     dropzone.addEventListener('dragover' , dragover)
//     dropzone.addEventListener('dragleave' , dragleave)
//     dropzone.addEventListener('drop' , drop)
// })

// function dragenter() {
//     dropzones.forEach(dropzone => dropzone.classList.add('enter'));
//     console.log('entrou')
// }

// function dragover(e) {
//     console.log('esta na zona')
//      //pegando o item
//     dropzones.forEach(dropzone => dropzone.classList.add('dropped'));
//     //const itemArrastado = document.querySelector('.is-dragging')
//     //this = dropzone
//     //this.appendChild(itemArrastado)
// }

// function dragleave() {
//     dropzones.forEach(dropzone => dropzone.classList.remove('enter'));
//     console.log('deixou a zona')
// }

// function drop() {
//     console.log('soltar')
// }

// ---------------  Parte Etapa 3   -------------------


