//Criar a função para coletar o cep 

function Coletar() {
    // Criar uma variavel utiliza let 
    // '=' receber
    // 'value' pegar o valor do input
    // console.log mostrar o resultado
    let input = document.querySelector('.input-cep').value
    //teste
    console.log(input)
    Dados(input)

}

//Função para consumir a API Via CEP
async function Dados(input) {
    let dados = await fetch(`https://viacep.com.br/ws/${input}/json/`).then(Response => Response.json())
    console.log(dados)
    ExibirDados(dados)
}

//Função inserir dados na tela

function ExibirDados(dados){
document.querySelector('.estado').value = dados.uf
document.querySelector('.cidade').value = dados.localidade
document.querySelector('.endereco').value = dados.logradouro
document.querySelector('.ddd').value = dados.ddd

}

function LimparDados(estado,cidade,endereco,ddd){
    document.querySelector('.estado').value = 
document.querySelector('.cidade').value = 
document.querySelector('.endereco').value = 
document.querySelector('.ddd').value = ''

}