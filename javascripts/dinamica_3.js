let text_area_secao_5 = document.getElementById('text_area_secao_5')

let max_lines = 25;
let max_line_size = 50

const uri = '../recurso-educacional-aberto/rea/monteiro-lobato'
// https://apps.univesp.br/recurso-educacional-aberto/rea/monteiro-lobato
let req = new Request(uri, {
    method: 'POST',
    mode: 'cors'
});

let textarea = document.querySelector('textarea')
textarea.addEventListener('click', function(){
    this.focus()
})

let valueTextArea = function(){
    return(text_area_secao_5.value)
}

text_area_secao_5.style.overflowY = "hidden";


$('textarea').keydown(function(e) {
    let lines = 10
    newLines = $(this).val().split("\n").length;
    if(e.keyCode == 13 && newLines >= lines) {
        return false;
    }
});

btimprimirsalvar.addEventListener('click', function(){
    let body = {}
    let text = valueTextArea().match(/.{1,60}/g);

    while (text.length > 25) {
        text.pop()
    }

    body.text = text
    body.fileId = "645432602bad9a44a92c85f4"
    envia(body)
})

let envia = function(body){
fetch(req,
    {
        headers : 
            { 
                'Content-Type': 'application/json'
                // 'Accept': 'application/json'
            },
        body: JSON.stringify(body)
    })
    .then(async res => ({
        filename: 'Monteiro Lobato',
        blob: await res.blob()
    }))
    .then(resObj => {
        // It is necessary to create a new blob object with mime-type explicitly set for all browsers except Chrome, but it works for Chrome too.
        const newBlob = new Blob([resObj.blob], { type: 'application/pdf' });

        // MS Edge and IE don't allow using a blob object directly as link href, instead it is necessary to use msSaveOrOpenBlob
        if (window.navigator && window.navigator.msSaveOrOpenBlob) {
            window.navigator.msSaveOrOpenBlob(newBlob);
        } else {
            // For other browsers: create a link pointing to the ObjectURL containing the blob.
            const objUrl = window.URL.createObjectURL(newBlob);

            let link = document.createElement('a');
            link.href = objUrl;
            link.download = resObj.filename;
            link.click();

            // For Firefox it is necessary to delay revoking the ObjectURL.
            setTimeout(() => { window.URL.revokeObjectURL(objUrl); }, 250);
        }
    })
    .catch((error) => {
        console.log('DOWNLOAD ERROR', error);
    });
}




