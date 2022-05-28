
var altura = 0
var largura = 0
var vidas = 1
var tempo = 15

var criaMosquitoTempo = 1500

// comando Search recupera tudo que esta a direita do ?
var nivel = window.location.search

//usar replace('?', '') para substituir ?

if (nivel === 'normal') {
	//1500
	criaMosquitoTempo = 1500
} else if (nivel === 'dificil') {
	//1000
	criaMosquitoTempo = 1000
} else if (nivel === 'chucknorris') {
	//750
	criaMosquitoTempo = 750
}

// pega a altura e largura da janela do navegador
function ajustaTamanhoPalcoJogo() {
	altura = window.innerHeight
	largura = window.innerWidth

}

ajustaTamanhoPalcoJogo()

var cronometro = setInterval(function() {

	tempo -= 1

	if (tempo < 0) {
		clearInterval(cronometro)
		clearInterval(criaMosquito)
		window.location.href = 'vitoria.html'
		alert('Vitoria')
	} else { 
	document.getElementById('cronometro').innerHTML = tempo
}
}, 1000 )

function posicaoRandomica() {
	
	//remover o mosquito anterior (caso exista)
	if (document.getElementById('mosquito')) { //condicao de remocao de mosquito
		document.getElementById('mosquito').remove()

		if (vidas > 3) {
			window.location.href = 'fim_de_jogo.html'
		} else { 
		document.getElementById('v' + vidas).src = '/imagens/coracao_vazio.png'
		
		vidas++
	}
	}


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
	mosquito.id = 'mosquito'
	mosquito.onclick = function() {
		this.remove()
	}

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