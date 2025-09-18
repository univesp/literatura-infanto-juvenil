let btnavancarsecaocapa = document.getElementById("bt-avancar-secaocapa");


let btnavancarsecao1 = document.getElementById("bt-avancar-secao1");
let btnavancarsecao2 = document.getElementById("bt-avancar-secao2");
let btnavancarsecao3 = document.getElementById("bt-avancar-secao3");
let btnavancarsecao4 = document.getElementById("bt-avancar-secao4");
let btnavancarsecao5 = document.getElementById("bt-avancar-secao5");

let btnvoltarsecaocapa = document.getElementById("bt-voltar-secaocapa");

let btnvoltarsecao1 = document.getElementById("bt-voltar-secao1");
let btnvoltarsecao2 = document.getElementById("bt-voltar-secao2");
let btnvoltarsecao3 = document.getElementById("bt-voltar-secao3");
let btnvoltarsecao4 = document.getElementById("bt-voltar-secao4");
let btnvoltarsecao5 = document.getElementById("bt-voltar-secao5");
let btnvoltarsecao6 = document.getElementById("bt-voltar-secao6");


let btimprimirsalvar = document.getElementById("bt-imprimir-salvar");

let btiniciarsecao2 = document.getElementById("bt-iniciar-secao2");

let folhaatencao = document.getElementById("folhaatencao");

let secaocapa = document.getElementById("secao-capa")
let secao1 = document.getElementById("secao-1")
let secao2 = document.getElementById("secao-2")
let secao3 = document.getElementById("secao-3")
let secao4 = document.getElementById("secao-4")
let secao5 = document.getElementById("secao-5")
let secao6 = document.getElementById("secao-6")



btnavancarsecaocapa.addEventListener("click",function(){
    secaocapa.style.display="none"
    secao1.style.display="initial"

})
  

btnavancarsecao1.addEventListener("click",function(){
    secao1.style.display="none"
    secao2.style.display="flex"

    
})

btnavancarsecao2.addEventListener("click",function(){
    secao2.style.display="none"
    secao3.style.display="flex"
})

btnavancarsecao3.addEventListener("click",function(){
    secao3.style.display="none"
    secao4.style.display="flex"
})

btnavancarsecao4.addEventListener("click",function(){
    secao4.style.display="none"
    secao5.style.display="flex"
})

btnavancarsecao5.addEventListener("click",function(){
    secao5.style.display="none"
    secao6.style.display="flex"
})





btnvoltarsecao1.addEventListener("click",function(){
    secao1.style.display="none"
    secaocapa.style.display="initial"
})

btnvoltarsecao2.addEventListener("click",function(){
    secao2.style.display="none"
    secao1.style.display="flex"
})

btnvoltarsecao3.addEventListener("click",function(){
    secao3.style.display="none"
    secao2.style.display="flex"
})



btnvoltarsecao4.addEventListener("click",function(){      
    secao4.style.display="none"
    secao2.style.display="flex"
})

btnvoltarsecao5.addEventListener("click",function(){
    secao5.style.display="none"
    secao4.style.display="flex"
})

btnvoltarsecao6.addEventListener("click",function(){
    secao6.style.display="none"
    secao5.style.display="flex"
})

btiniciarsecao2.addEventListener("click",function(){
    folhaatencao.style.display="none"
    btnvoltarsecao2.style.display="initial"
})



// Navegação Seção-4-trechos----------------------------------------------------------------


let secao4Trecho = document.getElementById ("secao-4-trechos");


let trecho1 = document.getElementById("trecho-1");
let trecho2 = document.getElementById("trecho-2");
let trecho3 = document.getElementById("trecho-3");
let trecho4 = document.getElementById("trecho-4");
let trecho5 = document.getElementById("trecho-5");
let trecho6 = document.getElementById("trecho-6");
let trecho7 = document.getElementById("trecho-7");
let trecho8 = document.getElementById("trecho-8");
let trecho9 = document.getElementById("trecho-9");
let trecho10 = document.getElementById("trecho-10");

let Btntvoltartrecho1 = document.getElementById("bt-voltar-trecho1");
let Btntvoltartrecho2 = document.getElementById("bt-voltar-trecho2");
let Btntvoltartrecho3 = document.getElementById("bt-voltar-trecho3");
let Btntvoltartrecho4 = document.getElementById("bt-voltar-trecho4");
let Btntvoltartrecho5 = document.getElementById("bt-voltar-trecho5");
let Btntvoltartrecho6 = document.getElementById("bt-voltar-trecho6");
let Btntvoltartrecho7 = document.getElementById("bt-voltar-trecho7");
let Btntvoltartrecho8 = document.getElementById("bt-voltar-trecho8");
let Btntvoltartrecho9 = document.getElementById("bt-voltar-trecho9");
let Btntvoltartrecho10 = document.getElementById("bt-voltar-trecho10");



let Btntavancartrecho2 = document.getElementById("bt-avancar-trecho2");
let Btntavancartrecho3 = document.getElementById("bt-avancar-trecho3");
let Btntavancartrecho4 = document.getElementById("bt-avancar-trecho4");
let Btntavancartrecho5 = document.getElementById("bt-avancar-trecho5");
let Btntavancartrecho6 = document.getElementById("bt-avancar-trecho6");
let Btntavancartrecho7 = document.getElementById("bt-avancar-trecho7");
let Btntavancartrecho8 = document.getElementById("bt-avancar-trecho8");
let Btntavancartrecho9 = document.getElementById("bt-avancar-trecho9");
let Btntavancartrecho10 = document.getElementById("bt-avancar-trecho10");
let Btntavancartrechocontinue = document.getElementById("bt-avancar-trecho-continuar");




Btntavancartrecho2.addEventListener("click",function(){
    trecho1.style.display="none"
    trecho2.style.display="initial"
})

Btntavancartrecho3.addEventListener("click",function(){
    trecho2.style.display="none"
    trecho3.style.display="initial"

})

Btntavancartrecho4.addEventListener("click",function(){
    trecho3.style.display="none"
    trecho4.style.display="initial"

})

Btntavancartrecho5.addEventListener("click",function(){
    trecho4.style.display="none"
    trecho5.style.display="initial"

})

Btntavancartrecho6.addEventListener("click",function(){
    trecho5.style.display="none"
    trecho6.style.display="initial"

})

Btntavancartrecho7.addEventListener("click",function(){
    trecho6.style.display="none"
    trecho7.style.display="initial"

})

Btntavancartrecho8.addEventListener("click",function(){
    trecho7.style.display="none"
    trecho8.style.display="initial"

})


Btntavancartrecho9.addEventListener("click",function(){
    trecho8.style.display="none"
    trecho9.style.display="initial"

})

Btntavancartrecho10.addEventListener("click",function(){
    trecho9.style.display="none"
    trecho10.style.display="initial"

})

Btntavancartrechocontinue.addEventListener("click",function(){
    trecho10.style.display="none"
    secao4.style.display="initial"
    secao4Trecho.style.display="none"

})

// Botão voltar


Btntvoltartrecho1.addEventListener("click",function(){
    trecho2.style.display="none"
    trecho1.style.display="initial"
})

Btntvoltartrecho2.addEventListener("click",function(){
    trecho3.style.display="none"
    trecho2.style.display="initial"

})

Btntvoltartrecho3.addEventListener("click",function(){
    trecho4.style.display="none"
    trecho3.style.display="initial"

})

Btntvoltartrecho4.addEventListener("click",function(){
    trecho5.style.display="none"
    trecho4.style.display="initial"

})

Btntvoltartrecho5.addEventListener("click",function(){
    trecho6.style.display="none"
    trecho5.style.display="initial"

})

Btntvoltartrecho6.addEventListener("click",function(){
    trecho7.style.display="none"
    trecho6.style.display="initial"

})

Btntvoltartrecho7.addEventListener("click",function(){
    trecho8.style.display="none"
    trecho7.style.display="initial"

})


Btntvoltartrecho8.addEventListener("click",function(){
    trecho9.style.display="none"
    trecho8.style.display="initial"

})

Btntvoltartrecho9.addEventListener("click",function(){
    trecho10.style.display="none"
    trecho9.style.display="initial"

})

Btntvoltartrecho10.addEventListener("click",function(){
    secao4.style.display="none"
    secao4Trecho.style.display="initial" 
    trecho10.style.display="initial"
})






