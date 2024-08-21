function comprar() {
    let qtd = document.getElementById('qtd').value;

    if (isNaN(qtd) || qtd <= 0) {
        alert("Insira uma quantidade válida!");
        document.getElementById('qtd').value = '';
        return; }
     

    let tipoIngresso = document.getElementById('tipo-ingresso').value;

        if (tipoIngresso === 'pista') {
            let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);
            if (qtd > qtdPista) {
                alert("Insira uma quantidade válida!");
                document.getElementById('qtd').value = '';
                return; }
            qtdPista -= qtd;
            document.getElementById('qtd-pista').textContent = qtdPista;
            document.getElementById('qtd').value = ''

        } else if (tipoIngresso === 'superior') {
            let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);
            if (qtd > qtdSuperior) {
                alert("Insira uma quantidade válida!");
                document.getElementById('qtd').value = '';
                return; }
            qtdSuperior -= qtd;
            document.getElementById('qtd-superior').textContent = qtdSuperior;
            document.getElementById('qtd').value = ''

        } else if (tipoIngresso === 'inferior') {
            let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);
            if (qtd > qtdInferior) {
                alert("Insira uma quantidade válida!");
                document.getElementById('qtd').value = '';
                return; }
            qtdInferior -= qtd;
            document.getElementById('qtd-inferior').textContent = qtdInferior;
            document.getElementById('qtd').value = ''
        }
        
    }

function limpar() {
    qtd.value = '';
    let qtdPista = document.getElementById('qtd-pista').textContent= '10000';
    let qtdSuperior = document.getElementById('qtd-superior').textContent = '20000';
    let qtdInferior = document.getElementById('qtd-inferior').textContent = '40000';
    };
