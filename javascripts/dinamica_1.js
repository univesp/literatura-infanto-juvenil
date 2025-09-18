let dropado = ''
let draggado = ''
let contador = 0
let parabens_arrasta_solta = document.getElementById('parabens_arrasta_solta')
let dropFunction = function(event, ui){
   $(ui.draggable).css.display='none'
   document.getElementById(draggado).style.opacity = '0'
   document.getElementById(draggado).style.cursor = 'initial'
   document.getElementById(draggado).querySelector('span').style.cursor = 'initial'
   $('#' + draggado).draggable( 'disable' )
   document.getElementById(dropado).style.opacity = '1'
   contador++
   if(contador == 22){
    let drags = document.getElementsByClassName('draggable')
    for (let i = 0; i < drags.length; i++) {
        drags[i].style.opacity  = '0'
        drags[i].style.position =  'absolute'; 
    }
    parabens_arrasta_solta.style.opacity = '1'
    setTimeout(() => {
        btnavancarsecao2.style.display = 'initial'
    }, "1000");
   }
}
let dragFunction = function(){
    dropado  = this.dataset.idbalaogabarito
    draggado = this.id
}

$('.baloesCuca').droppable({accept: '#Balaomaldade, #Balaomisterio',drop:dropFunction})
$('.baloesTioBarnabe').droppable({accept: '#Balaoforte',drop:dropFunction})
$('.baloesViscondeSabugosa').droppable({accept: '#Balaointeligente, #Balaoerudito',drop:dropFunction})
$('.baloesSaci').droppable({accept: '#Balaotrapaca, #Balaomalandro',drop:dropFunction})
$('.baloesTiaNastacia').droppable({accept: '#Balaotrabalhadora, #Balaoacolhimento',drop:dropFunction})
$('.baloesRabico').droppable({accept: '#Balaomedo, #Balaogula',drop:dropFunction})
$('.baloesaNarizinho').droppable({accept: '#Balaoatenciosa,#Balaocarinhosa, #Balaoesperta',drop:dropFunction})
$('.baloesDonaBenta').droppable({accept: '#Balaoperspicaz, #Balaosabedoria',drop:dropFunction})
$('.baloesPedrinho').droppable({accept: '#Balaolider, #Balaocuriosidade, #Balaocorajoso',drop:dropFunction})
$('.baloesEmilia').droppable({accept: '#Balaoambiciosa, #Balaolevada, #Balaoteimosa',drop:dropFunction})


$(".draggable").draggable({
     revert: "invalid", 
     containment:"#secao-2",
     drag: dragFunction})


