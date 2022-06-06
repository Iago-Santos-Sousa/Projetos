// cria referência aos elementos da página 
const frm = document.querySelector("form")
const resp = document.querySelector("h3")



// cria um "ouvinte" de evento, acionado quando o botão submit for clicado
frm.addEventListener("submit", (e) => {
    
   // obtém conteúdo dos campos de entrada
  const nome = frm.inNome.value
  const altura = Number(frm.inAltura.value)
  const masculino = frm.inMasculino.checked // verifica a opção do botão
  
  let peso // declaramos a variável fora do escopo do if para ser acessada dentro do if
  if(masculino == true) {
    peso = 22 * Math.pow(altura, 2)
  } else {
    peso = 21 * Math.pow(altura, 2)
  }
  
  resp.innerText = `Seu peso ideal ${nome} é: ${peso.toFixed(3)} kg.`
  e.preventDefault()   // evita envio do formulário
})

frm.addEventListener("reset", () => { // ouvinte que  limpa os campos incluindo a resposta
  resp.innerText = ""
})


