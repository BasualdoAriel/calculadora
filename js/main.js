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

const Suma=(numeros)=>numeros[0]+numeros[1];

const Resta=(numeros)=>numeros[0]-numeros[1];

const Division=(numeros)=>numeros[0]/numeros[1];

const Multiplicacion=(numeros)=>numeros[0]*numeros[1];

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

function Operacion(infoOperacion){
    let numeros=infoOperacion.filter(item=>!isNaN(item));
    switch(infoOperacion[2]){
        case "+":
            document.write(`
              <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    La suma entre ${infoOperacion[0]} y ${infoOperacion[1]} es: ${Suma(numeros)}
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
              La resta entre ${infoOperacion[0]} y ${infoOperacion[1]} es: ${Resta(numeros)}
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
              La división entre ${infoOperacion[0]} y ${infoOperacion[1]} es: ${Division(numeros)}
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
                La multiplicación entre ${infoOperacion[0]} y ${infoOperacion[1]} es: ${Multiplicacion(numeros)}
            </div>
          </div>
       </div>
      </div>
    </div>`);
            console.log('entro multi');
            break;  
    }
}

function RealizarOperacion(infoOperacion){
    console.log(`el operador ingresado es: ${infoOperacion[2]}`);
    while(!VerificarOperador(infoOperacion[2])){
        operador=IngresarOperador();
        VerificarOperador(infoOperacion[2]);
    }
    Operacion(infoOperacion);    
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
    let arrayInfoIngresada=[operacionMatematica.primerNumero,operacionMatematica.segundoNumero,operacionMatematica.operador];
    while (QuiereContinuar(continuar)){
        alert(`Ingresaste los números ${arrayInfoIngresada[0]} y ${arrayInfoIngresada[1]}`);
        operacionMatematica.MostrarOperacion(arrayInfoIngresada[2],arrayInfoIngresada[0],arrayInfoIngresada[1]);
        /* RealizarOperacion(arrayInfoIngresada[0],arrayInfoIngresada[1],arrayInfoIngresada[2]); */
        RealizarOperacion(arrayInfoIngresada);
        continuar=Continuar();
        if(QuiereContinuar(continuar)){
            arrayInfoIngresada[0]=IngresarNumero();
            arrayInfoIngresada[1]=IngresarNumero();
            arrayInfoIngresada[2]=IngresarOperador();
        }        
    }
    Saludo();
}
main();