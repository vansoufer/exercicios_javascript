/*Temos no código abaixo uma função que já foi definida. 
Ela se chama validaCPF.

Ela definida para receber um parâmetro que representa um possível CPF. 
Tudo que ela faz resumi-se em um único objetivo: 
Retornar true caso o parâmetro seja um CPF válido ou false caso contrário. 
Eis aqui algo legal sobre funções: tudo que você precisa para utilizá-las é saber o que ela faz. 
Você não precisa saber o como ela faz.

Execute utilize a função validaCPF para imprimir “CPF válido” caso o “576.524.020-85” seja um cpf válido. 
Caso contrário, imprima “CPF inválido”*/

valido = validaCPF("576.524.020-85")

if(valido){
    console.log("CPF válido")
} else{
    console.log("CPF inválido")
}