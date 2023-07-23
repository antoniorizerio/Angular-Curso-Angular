/* Declarações de Funções
 Funções podem ser nomeadas ou anonimas que nem em JScript;
 Mas em TS argumentos são tipados e checados pelo compilador;
 Retorno tbm pode ser tipado;
*/
/* Função anônima

*/
var shortestRun = function (parsecs) {
    return parsecs < 12;
};
console.log(shortestRun(9)); // Saída no console;
/* Função Nomeada e Sem Retorno - VOID
   Os argumentos são tipados e passam a ser checados pelo compilador;
*/
function useTheForce(name) {
    console.log("Use the force," + name);
}
/* Arrow Function: não precisa do termo Function e nem Return;

// Serve para filtrar objetos em um Array: Uso de uma Função Anônima passada como CallBack;
let tieFighters = ships.filter (
    function(ship) {
       return ship.type === 'TieFighters';
});

// Arrow Function correspondente;
// Parametros vem do lado esquerdo da Seta - ship - e do lado direito da seta a implementação;

let ties = ships.filter(ship => ship.type === 'TieFighters');

*/
// Declarando que a variável será uma função, não estou atribuindo uma função nesse momento;
var call;
// informando os tipos dos argumentos e o retorno, que no caso é void: sem retorno nenhum;
// Declaro o valor da variável que será a própria função;
call = function (name) { return console.log("Do you copy, " + name + "?"); };
//
call("LYOTO"); // Chamo a função;
/* Incrementa o valor de speed com o valor de inc */
function inc(speed, inc) {
    return speed + inc;
}
console.log("Função (inc): " + inc(2, 7));
/* Função que indica um parâmetro opcional:
   " inc? " significa que esse parametro é opcional...
*/
function incOptional(speed, inc) {
    console.log("speed || 1: " + speed || 1);
    console.log("inc: " + inc);
    return speed + inc;
}
console.log(incOptional(5));
// Caso o segundo parametro não seja informado, o TS permite vc indicar um valor ou expressao
// logo apos a declaração do parametro
function incValorInitial(speed, inc) {
    if (inc === void 0) { inc = 1; }
    console.log("speed || 1: " + speed || 1);
    console.log("inc: " + inc);
    return speed + inc;
}
console.log("chamando função: incValorInitial(5)= " + incValorInitial(5));
console.log("chamando função: incValorInitial(5,6)= " + incValorInitial(5, 6));
/* Último parâmetro de uma função pode receber muitos valores: Parametro REST
   Transformando em um array dentro da Função;
   EX: sem parametros REST
*/
function countJedis(jedis) {
    return jedis.reduce(function (accumulator, currentValue) { return accumulator + currentValue; }, 0);
}
console.log("Chamando a função countJedis([2,3,4]): " + countJedis([2, 3, 4]));
/* O Parâmetro continua sendo um array, mas a chamada é mais simples;
   EX: Com parâmetros REST ;
*/
function countJedisRest() {
    var jedis = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        jedis[_i] = arguments[_i];
    }
    return jedis.reduce(function (a, b) { return a + b; }, 0);
}
console.log("Chamando a função countJedisRest(2,3,4): " + countJedisRest(2, 3, 4));
function countJedisSemArrow(jedis) {
    return jedis.reduce(function (accumulator, currentValue) {
        if (accumulator == 0)
            accumulator = 1;
        return accumulator * currentValue;
    }, 0);
}
console.log(countJedisSemArrow([2, 3, 4]));
/* Função com um Parametro Number e um retorno Boolean;
   A variavel é uma função;
*/
var isEnoughToBeatMF = function (parsecs) {
    return parsecs < 12;
};
function isParsecsMenor(parsecs) {
    if (parsecs < 12) {
        return "YES";
    }
    else
        return "NO";
}
var distance = 11;
// Uso de Crase `` (template String) para colocar o valor da variavel ${distance} e da função: ${isEnoughToBeatMF(distance)}
// Diferente de aspas ""
/*
   A lógica fica dentro das chaves ${}
   ex: ${isEnoughToBeatMF(distance) ? 'YES' : 'NO'}
*/
console.log("1-A distancia de " + distance + " - Chamando a fun\u00E7\u00E3o = \n           " + (isEnoughToBeatMF(distance) ? 'YES' : 'NO') + " ");
console.log("2- A distancia de " + distance + " - Chamando a função = " +
    isParsecsMenor(distance));
/* Arrow Function
   Criamos uma função chamada varFuncao; Declaramos uma variável e declaramos nossa
   função; Lado esquerdo da seta ficam declarações de parâmetros e do lado direito
   fica a implementação;
   Não precisa da expressão function e da expressão de retorno;
*/
var varFuncao = function (name) { return console.log("varFuncao= Voc\u00EA entendeu?, " + name); };
varFuncao('RAfael');
function varFuncaoAlternativa(name) {
    console.log("varFuncaoAlternativa= Voc\u00EA entendeu?, " + name);
}
varFuncaoAlternativa('RAfael');
