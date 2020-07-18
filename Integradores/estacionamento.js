/*Um estacionamento deseja automatizar a cobrança de mensalistas. 
Para isso decidiu simplificar a forma de calcular o valor devido pelo seu cliente. 
A quantia a ser paga pelos seus usuários depende do número de entradas que o veículo realiza no estacionamento. 
A cada entrada, a placa do veículo é registrada. 
Ao final do mês, conta-se o número de entradas que o veículo realizou e faz-se o seguinte cálculo:

Se o motorista realizou até 20 entradas, ele deve pagar R$ 10,00 por entrada realizada.
Da vigésima primeira entrada em diante, cada entrada custa R$ 5,00 ao cliente.

Agora, você vai deve ajudar na automatização da cobrança escrevendo duas funções.

A primeira função se chama calcularNumeroDeEntradas(placa). 
Ela deve receber um único parâmetro que representa a placa de um carro.
 A função deve retornar o número de entradas que esse carro realizou no estacionamento. 
 Em outras palavras, o número de vezes que a placa passada como parâmetro aparece no array placas.

A segunda função se chama calcularValorDevido(placa). 
Ela deve receber um único parâmetro que representa a placa de um carro. 
A função deve calcular o valor que o proprietário do carro tem que pagar segundo a política de preços estabelecida. 
Naturalmente, será necessário utilizar a primeira função dentro da segunda.*/

// Esse array é utilizado dentro das funções. Cada placa neste array representa
// uma entrada do respectivo veículo no estacionamento. Não é necessário alterar
// esse array.
var placas = [
    'RXB-2525', 'AKX-3333', 'ORO-7142','RXB-2525', 'AKX-3333', 'ORO-7142',
    'AKX-3333', 'RXB-2525', 'AKX-3333','AKX-3333', 'RXB-2525', 'AKX-3333',   'RXB-2525', 'AKX-3333', 'ORO-7142','AKX-3333', 'AKX-3333', 'RXB-2525',
    'AKX-3333', 'ORO-7142', 'ORO-7142','AKX-3333', 'AKX-3333', 'RXB-2525',
    'AKX-3333', 'AKX-3333', 'RXB-2525','AKX-3333', 'AKX-3333', 'RXB-2525',
    'AKX-3333', 'ORO-7142', 'ORO-7142','AKX-3333', 'ORO-7142', 'ORO-7142',
    'ORO-7142', 'RXB-2525', 'AKX-3333','AKX-3333', 'ORO-7142', 'ORO-7142',
    'AKX-3333', 'RXB-2525', 'AKX-3333','AKX-3333', 'RXB-2525', 'AKX-3333',
    'RXB-2525', 'AKX-3333', 'ORO-7142','AKX-3333', 'AKX-3333', 'RXB-2525',
    'AKX-3333', 'ORO-7142', 'ORO-7142','AKX-3333', 'AKX-3333', 'RXB-2525',
    'AKX-3333', 'AKX-3333', 'RXB-2525','AKX-3333', 'AKX-3333', 'RXB-2525'
 ]
 
 function calcularNumeroDeEntradas(placa){
    // Seu código vem aqui...
     var n
    for(var i =0; i < placas.length; i++){
       if(placas[i] == placa){
          n++
       }
    }
    return n
 }
  
 function calcularValorDevido(placa){
    // Seu código vem aqui...
       var valor
    var aux = calcularNumeroDeEntradas(placa)
    if(aux <= 20){
       valor = 10 * n
    }else{
       valor = (10 * n) + ((n - 20) * 5)
    }
    return valor
 }
 
 