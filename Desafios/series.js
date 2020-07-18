/*Programe uma função series que recebe dois parâmetros, 
um prefixo com o nome da série e um array com a lista de todos os episódios da série. 
A função deve retornar um novo array com a lista de episódios iniciando com o nome da série.*/

function series(prefixo, array)
{
    // Escreve sua função abaixo:
    var resultado= []
    for(var i=0; i < array.length; i++){
        resultado.push(prefixo + " " + array[i])
    }
    return resultado
}