function comprar() {
    let qtd = document.getElementById('qtd').value;

    if (isNaN(qtd) || qtd <= 0) {
        alert("Insira uma quantidade válida!");
        document.getElementById('qtd').value = '';
        return; }
     

    let tipoIngresso = document.getElementById('tipo-ingresso').value;
    
    comprarIngresso(tipoIngresso, qtd);
    document.getElementById('qtd').value = '';

    }

    function comprarIngresso(tipoIngresso, qtd) {
        
        let qtdDisponivel = parseInt(document.getElementById(`qtd-${tipoIngresso}`).textContent);    
        
        if (qtd <= qtdDisponivel){   
            alert("Compra efetuada com sucesso!");         
            qtdDisponivel -= qtd;
            document.getElementById(`qtd-${tipoIngresso}`).textContent = qtdDisponivel;                      
            
        } else {            
            alert("Quantidade indisponível!");            
        }
    }



function limpar() {
    document.getElementById('qtd').value = '';
    let qtdPista = document.getElementById('qtd-pista').textContent= '10000';
    let qtdSuperior = document.getElementById('qtd-superior').textContent = '20000';
    let qtdInferior = document.getElementById('qtd-inferior').textContent = '40000';
    };
