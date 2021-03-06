const IngresarNombre=_=>prompt("Ingresá tu nombre:");

function IngresarNumero(){
    let numeroIngresado=parseInt(prompt("Ingresá un número"));
    while(isNaN(numeroIngresado)){
        alert("No ingresaste un número");
        numeroIngresado=parseInt(prompt("Volvé a ingresar un número"));
    }
    return numeroIngresado;
}

const Continuar=_=>(prompt("Querés continuar? Ingresar SI/NO").toUpperCase());

const IngresarOperador=_=>prompt("Ingresá un operador matemático");

const Suma=(primerNumero,segundoNumero)=>primerNumero+segundoNumero;

const Resta=(primerNumero,segundoNumero)=>primerNumero-segundoNumero;

const Division=(primerNumero,segundoNumero)=>primerNumero/segundoNumero;

const Multiplicacion=(primerNumero,segundoNumero)=>primerNumero*segundoNumero;

const Saludo=()=>document.write('<h3 class="px-3">Adios!</h3>');

function QuiereContinuar(decision){
    while((decision!="SI")&&(decision!="NO")){
        alert('No ingresaste SI o NO, volvé a ingresar!')
        decision=Continuar();
    }
    if(decision=="SI"){
        return true;
    }if (decision=="NO"){
        return false;
    }
}

function VerificarOperador(operador){
    switch(operador){
        case "+":
            return true;
        case "-":
            return true;
        case "/":
            return true;
        case "*":
            return true;
        default:
            alert('No ingresate un operador válido, volvé a ingresarlo.');
            return false;
    }
}

function Operacion(operador,primerNumero,segundoNumero){
    switch(operador){
        case "+":
            document.write(`
              <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    La suma entre ${primerNumero} y ${segundoNumero} es: ${Suma(primerNumero,segundoNumero)}
                </div>
              </div>
           </div>
          </div>
        </div>`);
            console.log('entro suma');
            break;
        case "-":
            document.write(`<div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              La resta entre ${primerNumero} y ${segundoNumero} es: ${Resta(primerNumero,segundoNumero)}
            </div>
          </div>
       </div>
      </div>
    </div>`);
            console.log('entro rest');
            break;
        case "/":
            document.write(`<div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              La división entre ${primerNumero} y ${segundoNumero} es: ${Division(primerNumero,segundoNumero)}
            </div>
          </div>
       </div>
      </div>
    </div>`);
            console.log('entro divi');
            break;
        case "*":
            document.write(`<div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div class="accordion-body">
                La multiplicación entre ${primerNumero} y ${segundoNumero} es: ${Multiplicacion(primerNumero,segundoNumero)}
            </div>
          </div>
       </div>
      </div>
    </div>`);
            console.log('entro multi');
            break;  
    }
}

function RealizarOperacion(primerNumero,segundoNumero,operador){
    console.log(`el operador ingresado es: ${operador}`);
    while(!VerificarOperador(operador)){
        operador=IngresarOperador();
        VerificarOperador(operador);
    }
    Operacion(operador,primerNumero,segundoNumero);    
}

const OperacionMatematica= class{
    constructor(){
        this.primerNumero=IngresarNumero()
        this.segundoNumero=IngresarNumero()
        this.operador=IngresarOperador();
    }
    MostrarOperacion(operador, primerNumero,segundoNumero){
        document.write(`
        <div class="align-items-start w-25 px-3"
            <div class="accordion" id="accordionExample">
                <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Realizaste la operación: ${primerNumero}${operador}${segundoNumero}
                </button>
            </h2>`)
    }
}


function main(){
    document.write(`<h3 class="px-3">Hola ${IngresarNombre()}</h3>`);
    let operacionMatematica=new OperacionMatematica();
    let continuar=Continuar();
    while (QuiereContinuar(continuar)){
        alert(`Ingresaste los números ${operacionMatematica.primerNumero} y ${operacionMatematica.segundoNumero}`);
        operacionMatematica.MostrarOperacion(operacionMatematica.operador,operacionMatematica.primerNumero,operacionMatematica.segundoNumero);
        RealizarOperacion(operacionMatematica.primerNumero,operacionMatematica.segundoNumero,operacionMatematica.operador);
        continuar=Continuar();
        if(QuiereContinuar(continuar)){
            operacionMatematica.primerNumero=IngresarNumero();
            operacionMatematica.segundoNumero=IngresarNumero(); 
            operacionMatematica.operador=IngresarOperador();
        }        
    }
    Saludo();
}

main();