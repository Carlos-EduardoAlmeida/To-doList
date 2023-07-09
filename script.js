//Locais de inserção
const headerEle = document.body.querySelector("header")
const inserBotao = document.body.querySelector("p#botao")
const insercaoBlock = document.body.querySelector("main#insertBlocks")

let contagem = 0

//criando conteúdo header
const textoHea = document.createElement("h1")
textoHea.innerText = "To-do List"
headerEle.appendChild(textoHea)


//criando botao
const botao = document.createElement("button")
botao.innerText = "Novo Post-it"
botao.addEventListener("click", criarTabela)
inserBotao.appendChild(botao)


//criando Tabelas
function criarTabela(){

    let textoh = document.body.querySelector("input#textH1")
    let conTex = textoh.value

    if(Number(conTex.length) > 0){
        if ( contagem < 8 ){
            const novaTabela = document.createElement("div")
            novaTabela.innerHTML = `<h1>${textoh.value}</h1>`
            novaTabela.innerHTML += `<p>Post-it adicionado, clique novamente para criar outra</p>`
            insercaoBlock.appendChild(novaTabela)
            contagem ++
            console.log(textoh)
        }else{
            insercaoBlock.innerHTML = ""
            contagem = 0
            alert("Limite de tabelas atingido, vamos reiniciar")
        }
    }else{
        alert("Insira um título")
    }
    
}