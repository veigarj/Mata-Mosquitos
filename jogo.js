
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

	posicaoX = posicaoX < 0 ? 0 : posicaoX
	posicaoY = posicaoY < 0 ? 0 : posicaoY

	
	console.log(posicaoX, posicaoY)
	
	//criar o elemento html
	var mosquito = document.createElement('img')
	mosquito.src = 'imagens/mosca.png' // inclui a imagem src na Variavel = mosquito
	mosquito.className = tamanhoAleatorios() + ' ' + ladoAleatorio() // atribuir o stylo da tamanho concatenado com ladoAleatorio
	mosquito.style.left = posicaoX + 'px' //atribui a posiçao X
	mosquito.style.top = posicaoY + 'px' //atribui a posiçao Y
	mosquito.style.position = 'absolute'

	document.body.appendChild(mosquito) //add filho para body

	console.log(ladoAleatorio())
}

function tamanhoAleatorios() {
	var classe = Math.floor(Math.random() * 3)

	switch (classe) {
		case 0:
			return 'mosquito1'

		case 1:
			return 'mosquito2'
		
		case 2:
			return 'mosquito3'
	}
}

function ladoAleatorio() {
	var classe = Math.floor(Math.random() * 2)

	switch (classe) {
		case 0:
			return 'ladoA'

		case 1:
			return 'ladoB'
		
		
	}
}