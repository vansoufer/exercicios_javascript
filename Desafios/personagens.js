/*Programar uma função filme que recebe três arrays com os nomes de personagens, filmes e aestréiano de  no cinema. 
A função deve receber também um valor de id escolhido pelo usuário com intervalo de 1 até o tamanho máximo dos arrays fornecidos 
e retornar uma frase com o seguinte modelo: "personagem é um personagem do filme filme que estreou no cinema em lançamento." 
Se o valor de id for inválido, a função deve retornar a frase "Essa não é uma opção válida."*/

function filme(personagens, filmes, lancamentos, id)
{
  // Escreva abaixo o seu código:

   if( id > personagens.length || id < 1){
     return ('Essa não é uma opção válida.')
  } else{
    id--
    return (personagens[id] + " é um personagem do filme " + filmes[id] + " que estreou no cinema em " + lancamentos[id]+ ".")
    }
}

