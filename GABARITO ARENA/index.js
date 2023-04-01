cadastrar = document.getElementById("botaocad")
pesquisar = document.getElementById("botaopesq")

cadastrar.addEventListener("click", exibecadastrar)
pesquisar.addEventListener("click", exibepesquisar)

function exibepesquisar() {
    var div = document.getElementById("box")
    div.innerHTML = `
    <div class="Pesquisar">
    <div class="cadastro">
        <h2>Pesquisar</h2>
        <div class="input-group mb-3">
            <span class="input-group-text" id="inputGroup-sizing-default">Questão</span>
            <input type="number" id="alternativa_pesq" class="form-control" aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-default">
        </div>
        <div class="input-group mb-3">
            <span class="input-group-text" id="inputGroup-sizing-default">Alternativa</span>
            <input type="number" class="form-control" aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-default" disabled>

        </div>
        <button type="button"  id="btnpesquisa2" class="btn btn-outline-success">Pesquisar</button>
    </div>`
}

function exibecadastrar() {
    let div = document.getElementById("box");
    div.innerHTML = `
    <div class="cadastro">
    <h2>Cadastro</h2>
    <div class="input-group mb-3">
        <span class="input-group-text" id="inputGroup-sizing-default">Questão</span>
        <input type="number" class="form-control" aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default">
    </div>
    <div class="input-group mb-3">
        <span class="input-group-radio" style="padding-right:8%;">Alternativa</span>
        <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1"
                value="option1">
            <label class="form-check-label" for="inlineRadio1">A</label>
        </div>
        <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2"
                value="option2">
            <label class="form-check-label" for="inlineRadio2">B</label>
        </div>
        <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3"
                value="option3">
            <label class="form-check-label" for="inlineRadio3">C</label>
        </div>
        <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3"
                value="option3">
            <label class="form-check-label" for="inlineRadio3">D</label>
        </div>
    </div>
    <button type="button" class="btn btn-outline-success">Cadastrar</button>
    </div>  `
}

tabela = document.getElementById("tabela")

function criarElem(num, jogo, alternativa) {
    var div = document.createElement("tr")
    div.innerHTML = `
        <th scope="row">${num}</th>
        <td>${jogo}</td>
        <td>${alternativa}</td>`
    document.getElementById("tbody").appendChild(div)
}

btncad = document.getElementById("btn_cad")
btncad.addEventListener("click", getElementos)

function getElementos() {
    numero = document.getElementById("input_questao").value
    alternativa = document.querySelector('input[name=inlineRadioOptions]:checked').value
    jogo = "Jogo teste"
    criarElem(numero, jogo, alternativa)
    numero.value = ""
    alternativa.value = ""
}

const btnpesquisa = document.getElementById("btnpesquisa2")

btnpesquisa.addEventListener("click", pesquisa)

/*function pesquisa() {
    nomePesquisa = document.getElementById("alternativa_pesq").value
    var pesquisa = document.getElementById("tbody").querySelectorAll("tr")
    var resultado = []
    for (var i = 0; i < pesquisa.length; i++) {
        if (pesquisa[i].innerHTML.includes(nomePesquisa)) {
            resultado.push(pesquisa[i])
        }
    }
    document.getElementById("tbody").innerHTML = ""
    resultado.forEach




}*/