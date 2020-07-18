/*O código abaixo já tem a função comecaComMaiuscula(palavra) definida. 
Essa função retorna true caso a palavra passada no parâmetro seja iniciada por uma letra maiúscula e false caso contrário. 
Use um for para imprimir para cada palavra no array de palavras as seguintes frases: 
“Começa com maiúscula” caso a palavra comece com maiúscula e “Não começa com maiúscula” caso contrário.*/

function comecaComMaiuscula(palavra){
    return /^[A-Z]/.test(palavra)
 }
  
 var palavras = ["Amor", "copo", "Bolacha", "biscoito"];
  
 // Seu código vem aqui embaixo.
 
 for(var i=0; i < palavras.length; i++){
    var maiuscula = comecaComMaiuscula(palavras)
    if(maiuscula){
       console.log("Começa com maiúscula")
    } else {
       console.log("Não começa com maiúscula")
    }
 }
 