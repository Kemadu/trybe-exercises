// Exercício de aritmetica
/*
let num1 = 7
let num2 = 5

let soma = num1 + num2
console.log(soma)

let subtracao = num1 - num2
console.log(subtracao)

let multiplicacao = num1 * num2
console.log(multiplicacao);

let divisao = num1 / num2
console.log(divisao);

let resto = num1 % num2 
console.log(resto);*/

/*let num1 = 25
let num2 = 24

if (num1 > num2){
    console.log(num1 + " é maior que " + num2)
} else if (num1 === num2) {
    console.log("Os números são iguais")
} else if (num1 < num2) {
    console.log(num1 + " é menor que " + num2)
} else {
    console.log("")
}*/

/*let num1 = 123
let num2 = 120
let num3 = 121

if (num1 > num2 && num1 > num3) {
    console.log("O maior número é: " + num1);
} else if (num2 > num1 && num2 > num3) {
    console.log("O maior número é: " + num2);
} else if (num3 > num1 && num3 > num2) {
    console.log("O maior número é: " + num3);
} else {
    console.log("Vish, tem algum número igual");
}*/


/*let triangulo = 180

if (angulo1 + angulo2 + angulo3 == triangulo) {
    console.log(true)
} else if (angulo1 + angulo2 + angulo3 > triangulo) {
    console.log(false)
} else {
    console.log("Erro os angulos apresentandos nao represantam um triangulo")
}*/

/*let triangulo = 180

if (angulo1 + angulo2 + angulo3 == triangulo) {
    console.log(true)
} else if (angulo1 + angulo2 + angulo3 > triangulo) {
    console.log(false)
} else {
    console.log("Erro os angulos apresentandos nao represantam um triangulo")
}*/

/*let angulo1 = 0     //degreeAngleA
let angulo2 = 100   //degreeAngleB
let angulo3 = 15    //degreeAngleC

let sumOfAngles = angulo1 + angulo2 + angulo3;

let allAnglesArePositives = angulo1 > 0 && angulo2 > 0 && angulo3 > 0;

if (allAnglesArePositives) {
    if (sumOfAngles === 180) {
        console.log(true);
    } else {
        console.log(false);
    }
} else {
    console.log("Erro: ângulo inválido!")
}*/

/*let xadrez = 'cavalo'

switch (xadrez.toLowerCase()) {
    case 'cavalo':
        console.log('Cavalo -> "L" pode pular sobre as peças');
        break;
    case 'peão':
        console.log('Peão -> Uma casa para frente, no primeiro movimento podem ser duas casas');
        break;
    case 'bispo':
        console.log('Bispo -> Diagonais')
        break;
    case 'torre':
        console.log('Torre -> Horizontal e vertical');
        break;
    case 'rei':
        console.log('Rei -> Uma casa para qualquer direção');
        break;
    case 'rainha':
        console.log('Rainha -> Diagonal, horizontal e vertical');
       break;
    default:
        console.log('Erro, peça inválida');
}*/

/*const num1 = 2
const num2 = 1
const num3 = 4

let isEven = false;

if ((num1 % 2 === 0 || num2 % 2 === 0 || num3 % 2 === 0)) {
    isEven = true;
} 

console.log(isEven);*/

let aliquotINSS;
let aliquotIR;

let salarioBruto = 9500

if (salarioBruto <= 1556,94) {
    aliquotINSS = salarioBruto * 0.08;
} else if (salarioBruto === 1556.95 < 2594.92) {
    aliquotINSS = salarioBruto * 0.09;
} else if (salarioBruto === 2594.93 < 5189.82) {
    aliquotINSS = salarioBruto * 0.11;
} else {
    aliquotINSS = 570.88;
}

let salarioBase = salarioBruto - aliquotINSS;

if (salarioBase <= 1903.98) {
    aliquotIR = 0; 
} else if (salarioBase <= 2826.65) {
    aliquotIR = (salarioBase * 0.075) - 142,8 
} else if (salarioBase <= 3751.05) {
    aliquotIR = (salarioBase * 0.15) - 354,8
} else if (salarioBase <= 4664.68) {
    aliquotIR = (salarioBase * 0.225) - 636.13
} else {
    aliquotIR = (salarioBase * 0.275) - 869.36
}

console.log("Salário: R$" +(salarioBase - aliquotIR));

