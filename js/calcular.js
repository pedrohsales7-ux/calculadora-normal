/* Operadores
+soma
-subtraçao
* multiplcaçao
/ divisao
++ incremento (coma mais 1)
-- decremento (subtrai menos 1) 

Operadores de atribuiçao
= igual
+= mais ou igual
-= menos ou igual
/= dividido ou igual
*=multiplicado ou =

Operadores de sequencia
+ (serve para concatenar valores
    (stringg ou variáveis))
- (serve para subtrair valores
    (string ou variáveis))
    
    Operadores de comparaçao
    RETORNA TRUE OU FALSE
    == (comparar 2 valores)
    === (comparar valores e tipo de dado
    != (difetente) de valores apenas
    !== (comparar a diferença de valores e tipo de dado)
    
    < menor     > maior
    <= menor ou igual       >= maior ou igual */

    function somar(){
    let n1 = Number(document.getElementById("num1").value);
    let n2 = Number(document.getElementById("num2").value);
    let resultado = n1 + n2
    document.getElementById("resultado")
    .innerHTML = resultado;
    
    //alterar a cor do resultado caso seja menor que zero
    const corResultado = document.getElementById("resultado"); 

if (resultado < 0) 
    corResultado.style.backgroundColor = "#ff0000";

else
    corResultado.style.backgroundColor = "#3498db";

}

function subtrair(){
    let n1 = Number(document.getElementById("num1").value);
    let n2 = Number(document.getElementById("num2").value);
    let resultado = n1 - n2
    document.getElementById("resultado")
    .innerHTML = resultado;

    const corResultado = document.getElementById("resultado"); 

if (resultado < 0) 
    corResultado.style.backgroundColor = "#ff0000";

else
    corResultado.style.backgroundColor = "#3498db";

}

function multiplicar(){
    let n1 = Number(document.getElementById("num1").value);
    let n2 = Number(document.getElementById("num2").value);
    let resultado = n1 * n2
    document.getElementById("resultado")
    .innerHTML = resultado;

    const corResultado = document.getElementById("resultado"); 

if (resultado < 0) 
    corResultado.style.backgroundColor = "#ff0000";

else
    corResultado.style.backgroundColor = "#3498db";
}

function dividir(){
    let n1 = Number(document.getElementById("num1").value);
    let n2 = Number(document.getElementById("num2").value);
    let resultado = n1 / n2
    document.getElementById("resultado")
    .innerHTML = resultado;

    const corResultado = document.getElementById("resultado"); 

if (resultado < 0) 
    corResultado.style.backgroundColor = "#ff0000";

else
    corResultado.style.backgroundColor = "#3498db";
}

function limpar(){
    let n1 = Number(document.getElementById("num1").value = "");
    let n2 = Number(document.getElementById("num2").value = "");
    document.getElementById("resultado").innerHTML = "---";
    document.getElementById("resultado").style.backgroundColor = "#3498db";
}



