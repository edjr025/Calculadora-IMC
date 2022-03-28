let formulario = document.querySelector('form')
let cxNome = document.querySelector('#nome')
let cxidade = document.querySelector('#idade')
let cxPeso = document.querySelector('#peso')
let cxAltura = document.querySelector('#altura')
let cxImc = document.querySelector('#resultadoImc')

let aviso = document.querySelector('#aviso')
let dados = document.querySelectorAll('.pessoa')

let btnEnviar = document.querySelector('#btnEnviar')
let btnLimpar = document.querySelector('#btnLimpar')

btnEnviar.addEventListener('click', function(e){
    //pegar os valores de cada input
    let nome = cxNome.value
    let idade = cxidade.value
    let peso = cxPeso.value
    let altura = cxAltura.value
    let imc = (peso / (altura * altura)).toFixed(1)

    cxImc.value = imc
    let sit = situacaoDoPeso(imc)
    aviso.textContent = sit

    //cria objeto pessoa
    let pessoa = {
        nome: nome,
        idade: idade,
        peso: peso,
        altura: altura,
        imc: imc,
        sit: sit
    }

    dados[1].textContent = pessoa.nome
    dados[2].textContent = pessoa.idade + ' Anos'
    dados[3].textContent = pessoa.peso + ' Kg'
    dados[4].textContent = pessoa.altura + ' m'
    dados[5].textContent = pessoa.imc + ' ' + pessoa.sit

    //previnir o comportamento padrão
    e.preventDefault()
})

function situacaoDoPeso(imc){
    let situacao = ''

    if(imc < 18.5){
        situacao = 'Abaixo do Peso Ideal'
    }else if(imc >= 18.5 && imc < 24.9){
        situacao = 'Peso Ideal'
    }else if(imc >= 25 && imc < 29.9){
        situacao = 'Sobrepeso'
    }else if(imc >= 30 && imc < 34.9){
        situacao = 'Obesidade'
    }else if(imc >= 35 && imc < 39.9){
        situacao = 'Obesidade II'
    }else if(imc >= 40 ){
        situacao = 'Obesidade Morbida'
    }else{
        situacao = 'Informe seu peso correto'
    }

    return situacao
}
