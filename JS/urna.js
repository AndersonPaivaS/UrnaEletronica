
function inserir(valor) {
    let digito1 = document.querySelector('#campo1').value;
    let digito2 = document.querySelector('#campo2').value;

    if(digito1 == "") {
        document.querySelector('#campo1').value = valor;

    } else if(digito2 == "") {
        document.querySelector('#campo2').value = valor;
    }
}

function corrigir() {
    document.querySelector('#campo1').value = "";
    document.querySelector('#campo2').value = "";
}

function anular() {
    let fim = document.querySelector('#urna')
    fim.innerHTML = "<h1> FIM </h1>"
    fim.style.fontSize = '50px'
    fim.style.color = 'rgba(20, 20, 20, 0.904)'
}

function votar() {
    let digito1 = parseInt(document.querySelector('#campo1').value);
    let digito2 = parseInt(document.querySelector('#campo2').value);
    let confirmar = document.querySelector('#confirme');

    let urna = document.querySelector('#urna')
    let lula = document.querySelector('#tse')

    if((digito1 * 10) + digito2 == 13) {

        urna.style.background = 'green';
        urna.innerHTML = "<img src='../images/lula-foto-tse.jpeg'>";
        urna.innerHTML += "<p>VOTO CONFIRMADO</p>"
        urna.innerHTML += "<h1> LULA 13 - PT </h1>";
        urna.style.color = 'white';
        urna.style.gap = '5px';
        
    } else if((digito1 * 10) + digito2 == 22) {
        urna.style.background = 'green';
        urna.innerHTML = "<img src='../images/jair-bolsonaro.jpeg'>"
        urna.innerHTML += "<p>VOTO CONFIRMADO</p>"
        urna.innerHTML += "<h1> BOLSONARO 22 - PL </h1>"
        urna.style.color = 'white'
        urna.style.gap = '5px';
    } else if((digito1 * 10)+ digito2 == 12) {
        urna.style.background = 'green'
        urna.innerHTML = "<img src='../images/ciro-gomes.jpeg'>"
        urna.innerHTML += "<p>VOTO CONFIRMADO</p>"
        urna.innerHTML += "<h1> CIRO GOMES 12 - PDT </h1>"
        urna.style.color = 'white'
        urna.style.gap = '5px'
    } else if((digito1 * 10)+ digito2 == 15) {
        urna.style.background = 'green'
        urna.innerHTML = "<img src='../images/simone-tebet.jpeg'>"
        urna.innerHTML += "<p>VOTO CONFIRMADO</p>"
        urna.innerHTML += "<h1> SIMONE TEBET 15 - MDB </h1>"
        urna.style.color = 'white'
        urna.style.gap = '5px'
    } else {
        urna.innerHTML = "<h1> FIM </h1>"
        urna.style.fontSize = '50px'
        urna.style.color = 'rgba(20, 20, 20, 0.904)'
        return;
    }
        urna.innerHTML += 'Presione F5 para votar novamente!'
    }


