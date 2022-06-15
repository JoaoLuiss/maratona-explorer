const respostaElement = document.querySelector('#resposta')
const inputPergunta = document.querySelector('#inputPergunta')
const buttonFazerPergunta = document.querySelector('#buttonFazerPergunta')
const respostas = [
  "Certeza!",
  "Não tenho tanta certeza.",
  "É decididamente assim.",
  "Não conte com isso.",
  "Sem dúvidas!",
  "Pergunte novamente mais tarde.",
  "Sim, definitivamente!",
  "Minha resposta é não.",
  "Você pode contar com isso.",
  "Melhor não te dizer agora.",
  "A meu ver, sim.",
  "Minhas fontes dizem não.",
  "Provavelmente.",
  "Não é possível prever agora.",
  "Perspectiva boa.",
  "As perspectivas não são tão boas.",
  "Sim.",
  "Concentre-se e pergunte novamente.",
  "Sinais apontam que sim.",
  'É possível...',
  'Pode contar com isso',
  'Com certeza',
  'Não faz bem ficar pensando nisso...',
  'O destino disso ainda não foi escrito',
  'É improvavel...',
  'Não dessa vez',
  'O futuro está se fechando para isso',
  'Pare de pensar nisso',
  'Esqueça dessa possibilidade',
  'Não acredite isso',
]

function fazerPergunta() {
  if (inputPergunta.value == '') {
    window.alert('Digite uma pergunta para obter uma resposta!')
    return
  } else {
    buttonFazerPergunta.disabled = true
    respostaElement.style.opacity = 1
    const pergunta = '<div id="pergunta">' + inputPergunta.value + '</div>'
    const totalRespostas = respostas.length
    const respostaAleatoria = Math.floor(Math.random() * totalRespostas)
    pergunta.innerHTML = inputPergunta.value
    respostaElement.innerHTML = pergunta + respostas[respostaAleatoria]

    setTimeout(function () {
      respostaElement.style.opacity = 0
      buttonFazerPergunta.disabled = false
    }, 6000)
  }
}
