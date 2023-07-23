/* Declarações de Funções 
 Funções podem ser nomeadas ou anonimas que nem em JScript;
 Mas em TS argumentos são tipados e checados pelo compilador;
 Retorno tbm pode ser tipado;
*/

/* Função anônima 

*/
let shortestRun = function (parsecs:number): boolean { // Função retorna um Boolean;
    return parsecs < 12;
}
console.log(shortestRun(9)); // Saída no console;

/* Função Nomeada e Sem Retorno - VOID 
   Os argumentos são tipados e passam a ser checados pelo compilador;
*/
function useTheForce( name: string ): void {
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
let call: (name: string) => void; 
// informando os tipos dos argumentos e o retorno, que no caso é void: sem retorno nenhum;

// Declaro o valor da variável que será a própria função;
call = name => console.log("Do you copy, "+ name + "?"); 
//
call("LYOTO"); // Chamo a função;

/* Incrementa o valor de speed com o valor de inc */
function inc( speed: number, inc: number): number {
    return speed + inc;
}
console.log("Função (inc): " + inc(2, 7));

/* Função que indica um parâmetro opcional: 
   " inc? " significa que esse parametro é opcional...
*/
function incOptional( speed: number, inc?: number): number {
    console.log("speed || 1: " + speed || 1);
    console.log("inc: "+ inc);
    return speed + inc;
}
console.log(incOptional(5));

// Caso o segundo parametro não seja informado, o TS permite vc indicar um valor ou expressao
// logo apos a declaração do parametro
function incValorInitial( speed: number, inc: number = 1) : number {
    console.log("speed || 1: "+ speed || 1);
    console.log("inc: "+ inc);
    return speed + inc;
}
console.log("chamando função: incValorInitial(5)= " + incValorInitial(5));
console.log("chamando função: incValorInitial(5,6)= " + incValorInitial(5,6));

/* Último parâmetro de uma função pode receber muitos valores: Parametro REST 
   Transformando em um array dentro da Função;
   EX: sem parametros REST 
*/
function countJedis ( jedis:number[] ): number {
    return jedis.reduce( (accumulator, currentValue) => accumulator + currentValue, 0 );
}
console.log("Chamando a função countJedis([2,3,4]): " + countJedis([2,3,4]));

/* O Parâmetro continua sendo um array, mas a chamada é mais simples;
   EX: Com parâmetros REST ;
*/
function countJedisRest (...jedis:number[] ): number {
    return jedis.reduce( (a,b) => a + b, 0 );
}
console.log("Chamando a função countJedisRest(2,3,4): "+ countJedisRest(2,3,4));

function countJedisSemArrow ( jedis:number[] ): number {
    return jedis.reduce( function(accumulator, currentValue) {
            if(accumulator == 0) accumulator = 1;
            return accumulator * currentValue; }, 0)
}
console.log(countJedisSemArrow([2,3,4]));

/* Função com um Parametro Number e um retorno Boolean;
   A variavel é uma função;
*/
let isEnoughToBeatMF = function (parsecs: number) : boolean {
    return parsecs < 12;
}

function isParsecsMenor (parsecs: number) : string {
    if( parsecs < 12 ) {
        return "YES";
    } else return "NO";
}

let distance = 11;
// Uso de Crase `` (template String) para colocar o valor da variavel ${distance} e da função: ${isEnoughToBeatMF(distance)}
// Diferente de aspas ""
/* 
   A lógica fica dentro das chaves ${}
   ex: ${isEnoughToBeatMF(distance) ? 'YES' : 'NO'}
*/
console.log(`1-A distancia de ${distance} - Chamando a função = 
           ${isEnoughToBeatMF(distance) ? 'YES' : 'NO'} `);

console.log("2- A distancia de " + distance + " - Chamando a função = " + 
isParsecsMenor(distance) );

/* Arrow Function
   Criamos uma função chamada varFuncao; Declaramos uma variável e declaramos nossa
   função; Lado esquerdo da seta ficam declarações de parâmetros e do lado direito
   fica a implementação;
   Não precisa da expressão function e da expressão de retorno;
*/
let varFuncao = (name: string) => console.log(`varFuncao= Você entendeu?, ${name}`)
varFuncao('RAfael');

function varFuncaoAlternativa (name: string): void {
    console.log(`varFuncaoAlternativa= Você entendeu?, ${name}`);
}

varFuncaoAlternativa('RAfael');


