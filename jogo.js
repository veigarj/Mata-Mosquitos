
var altura = 0
var largura = 0

// pega a altura e largura da janela do navegador
function ajustaTamanhoPalcoJogo() {
	altura = window.innerHeight
	largura = window.innerWidth

	console.log(largura, altura)
}

ajustaTamanhoPalcoJogo()

function posicaoRandomica() {

	// posicao aleatorios usando Math.floor para aredondar valor para baixo
	var posicaoX = Math.floor(Math.random() * largura) - 90
	var posicaoY = Math.floor(Math.random() * altura) - 90
	
	console.log(posicaoX, posicaoY)
	
	//criar o elemento html
	var mosquito = document.createElement('img')
	mosquito.src = 'imagens/mosca.png' // inclui a imagem src na Variavel = mosquito
	mosquito.className = 'mosquito1' // atribuir o stylo da class
	mosquito.style.left = posicaoX + 'px' //atribui a posiçao X
	mosquito.style.top = posicaoY + 'px' //atribui a posiçao Y
	mosquito.style.position = 'absolute'



	document.body.appendChild(mosquito) //add filho para body
}
