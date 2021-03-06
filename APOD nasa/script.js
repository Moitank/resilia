let apod = new XMLHttpRequest(); // criando o obj que faz a requisição
apod.open("GET", 'https://api.nasa.gov/planetary/apod?api_key=KnUtXB2S01SFPTgeEhE6EWV1zTxwXSzfimxTWkPo'); //abrindo req

       // TRATAR OS EVENTOS ANTES DE ENVIAR A REQUISIÇÃO !!!
    apod.onload = function (){ 
        if(this.status == 200){
            let objeto = JSON.parse(apod.responseText);
                console.log(objeto.copyright);
        
            let data = document.getElementById('data');
            data.innerText = `Data ${objeto.date}`;
            
            let foto = document.getElementById('imagem');
            foto.src = objeto.url;
        
            let rodape = document.getElementById('rodape');
            rodape.innerText = `Image Credit & Copyright: ${objeto.copyright}`;

            let legenda = document.getElementById('legenda');
            legenda.innerText = objeto.explanation;
        }
            
    }
                
apod.send();    