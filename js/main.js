
const IngresarNombre=_=>prompt("Ingresá tu nombre:");

function IngresarNumero(){
    let numeroIngresado=parseInt(prompt("Ingresá un número"));
    while(isNaN(numeroIngresado)){
        alert("No ingresaste un número");
        numeroIngresado=parseInt(prompt("Volvé a ingresar un número"));
    }
    return numeroIngresado;
}

const Continuar=_=>(prompt("Querés continuar?").toUpperCase());

const IngresarOperador=_=>prompt("Ingresá un operador matemático");

const Suma=(primerNumero,segundoNumero)=>primerNumero+segundoNumero;

const Resta=(primerNumero,segundoNumero)=>primerNumero-segundoNumero;

const Division=(primerNumero,segundoNumero)=>primerNumero/segundoNumero;

const Multiplicacion=(primerNumero,segundoNumero)=>primerNumero*segundoNumero;

const Saludo=()=>document.write('<h3>Adios!</h3>');

function QuiereContinuar(decision){
    if(decision=="SI"){
        return true;
    }else{
        return false;
    }

}

function VerificarOperador(operador,primerNumero,segundoNumero){
    switch(operador){
        case "+":
            document.write(`La suma entre ${primerNumero} y ${segundoNumero} es: ${Suma(primerNumero,segundoNumero)} <br>`);
            return true;
        case "-":
            document.write(`La resta entre ${primerNumero} y ${segundoNumero} es: ${Resta(primerNumero,segundoNumero)}<br>`);
            return true;
        case "/":
            document.write(`La división entre ${primerNumero} y ${segundoNumero} es: ${Division(primerNumero,segundoNumero)}<br>`);
            return true;
        case "*":
            document.write(`La multiplicación entre ${primerNumero} y ${segundoNumero} es: ${Multiplicacion(primerNumero,segundoNumero)}<br>`);
            return true;
        default:
            alert("No ingresaste un valor correcto. solo se permite +,-,* o / <br>")
            return false;     
    }
}

function OperacionMatematica(primerNumero,segundoNumero){
    let operador=IngresarOperador();
    console.log(`el operador ingresado es: ${operador}`);
    while(!VerificarOperador(operador, primerNumero, segundoNumero)){
        operador=IngresarOperador();
        VerificarOperador(operador,primerNumero,segundoNumero);
    }
    alert(resultado=(`${primerNumero}${operador}${segundoNumero}`));
    
}

function main(){
    document.write(`<h3>Hola ${IngresarNombre()}</h3>`);
    let primerNumero=IngresarNumero();
    let segundoNumero=IngresarNumero();
    let continuar=Continuar();
    while (QuiereContinuar(continuar)){
        alert(`Ingresaste los números ${primerNumero} y ${segundoNumero}`);
        OperacionMatematica(primerNumero,segundoNumero);
        continuar=Continuar();
        if(QuiereContinuar(continuar)){
            primerNumero=IngresarNumero();
            segundoNumero=IngresarNumero();
        }        
    }
    Saludo();
}

main();