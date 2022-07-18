/*Este pequeño simulacro calcula el costo total de construcción de la casa que deseas construir, dependiendo de este caso tres tipos
de locaciones: habitaciones, baños o cocinas*/

console.log('Calcula el costo de tu casa!!');
console.log('Elije como estará formada tu casa o construcción: ');

var costoTotal = 0; /*costo total de la construcción*/
var CAPH = 2;   /* Cantidad de Albañiles en promedio que se necesita por cada locación.*/
var CEPH = 1;   /* Cantidad de Electricistas en promedio por cada locación.*/
var CPPBC = 1;  /* Cantidad de Plomeros en promedio por baño o cocina.*/

const suma = (a,b) =>  a + b;
const multiplica = (a,b) => a * b;
const costoAlbañilM2 = a => a*12.5;  /* Un albañil cobra 250 $ por cada 20 M2.*/
const costoElectM2 = a => a*6.5;    /* Un electricista cobra 130 $ por cada 20 M2.*/
const costoPlomM2 = a => a*7;     /* Un plomero cobra 140 $ por cada 20 M2.*/


Menu();      

function Menu(){

    let opción= prompt('Agrega locaciones a  tu casa o costrucción:: \n  1). Habitación \n  2). Baño \n  3). Cocina \n  4). Finalizar');

    switch (opción){
        case '1':
            costoTotal+= parseFloat(Habitación());          
            Menu();
            break;                       
        case '2':
            costoTotal+=parseFloat(Baño());
            Menu();
            break;
        case '3':
            costoTotal+=parseFloat(Cocina());
            Menu();
            break;   
        case '4':          
            console.log('El costo Total de la Construcción de tu casa es de: '+costoTotal.toFixed(2)+ ' $');
            break; 

        default:
            console.log('La opción seleccionada no es válida.');
            break;
    }

}



function Habitación(){

    var CH = 0; // CH = costo de habitación.
    var CTH = 0; // CTH = costo total de habitaciones.

    let habitaciones = prompt('Ingrese cantidad de Habitaciones que desea construir:');

        for (let i=1; i<=habitaciones; i++) {

            let cantidadM2 = parseFloat(prompt('Ingrese la cantidad de metros cuadrados que tiene la habitación n°' +[i]+ ': '));
            CH = parseFloat(costoHabitación(cantidadM2,+i).toFixed(2));

            console.log('Costo de construcción para habitación n° '+[i]+ ': ' +CH.toFixed(2) + ' $');

            CTH += CH;

        }

    CTH=CTH.toFixed(2);

    console.log('El Costo Total de construcción para '+habitaciones+ ' habitacion/es es de : ' +CTH+ ' $');
    return CTH;

}

function Baño(){

    var CB = 0; // CB= costo de baño
    var CTB = 0; // CTB= costo total de baños
    
    let baños = prompt('Ingrese la cantidad de Baños que desea construir:');
    
        for (let i=1; i<=baños; i++) {
            let cantidadM2 = parseFloat(prompt('Ingrese cantidad de metros cuadrados que tiene el baño n°' +[i]+ ': '));
            CB = parseFloat((costoBaño(cantidadM2,+i)).toFixed(2));
            console.log('Costo de construcción para el baño n°'+[i]+ ': ' +CB+ ' $');
            CTB += CB;
        }

    CTB=CTB.toFixed(2);
    
    console.log('El Costo Total de construcción para '+baños+ ' baño/s es de : ' + CTB + ' $');
    return CTB;
    
}


function Cocina(){

    var CCO = 0; // CCO= costo de cocina
    var CTC = 0; // CTH= costo total de cocinas

    let cocinas = prompt('Ingrese la cantidad de Cocinas que desea construir:');
    
        for (let i=1; i<=cocinas; i++) {
            let cantidadM2 = parseFloat(prompt('Ingrese cantidad de metros cuadrados que tiene la cocina n°' +[i]+ ': '));
            CCO = parseFloat((costoCocina(cantidadM2,+i)).toFixed(2));
            console.log('Costo de construcción para la cocina n° '+[i]+ ': ' +CCO+ ' $');
            CTC= CTC + CCO;
        }
    
    CTC=CTC.toFixed(2);

    console.log('El Costo Total de construcción para '+cocinas+ ' cocina/s es de : ' +CTC + ' $');
    return CTC;
    
}

function costoHabitación(cantidadM2,i){
    var tipo = 'Habitación';
    const CC = costoConstrucción(cantidadM2, tipo, i);  
    const CI = costoInstalaciónEléctrica(cantidadM2,i);
    return (suma(CC,CI));
}

function costoBaño(cantidadM2,i){
    var tipo = 'Baño';
    const CC = costoConstrucción(cantidadM2, tipo, i);  
    const CI = costoInstalaciónEléctrica(cantidadM2,i);
    const CP = costoPlomería(cantidadM2,i);
    return (suma(suma(CC,CI),CP));
}

function costoCocina(cantidadM2,i){
    var tipo = 'Cocina';
    const CC = costoConstrucción(cantidadM2, tipo, i);  
    const CI = costoInstalaciónEléctrica(cantidadM2,i);
    const CP = costoPlomería(cantidadM2,i);
    const CTC = suma(suma(CC,CI),CP);  // CTC = Costo Total de Cocina
    return (CTC);
}

function costoConstrucción(cantidadM2, tipo, i){   

    const costoPorM2 = '20';  // Costos de material de construcción por M2.
    const CC = multiplica(costoPorM2,cantidadM2); // Costo de Construcción.

    console.log('Costos para ' +tipo+ ' n° ' +i+ ':');
    console.log('Costo de material de construcción es de:' +CC.toFixed(2)+ ' $');

    const CMOA =multiplica(costoAlbañilM2(cantidadM2),CAPH); // Costo de Mano de Obra de Albañileria
    console.log('Costo de mano de obra de Construcción para es de:' +CMOA.toFixed(2)+ ' $');
    
    const CTCN =suma(CC,CMOA);  // CTNC =Costo Total de Construcción
    return (CTCN);

}

function costoInstalaciónEléctrica(cantidadM2){
    const costoPorM2 = 50; // Costos de material de instalación eléctrica por M2.
    const CIE = multiplica(costoPorM2,cantidadM2); //costo Instalación Eléctrica
    const CMI = multiplica(costoElectM2(cantidadM2),CEPH); //costo de mano de obra de instalación eléctrica
    const CTIE =suma(CIE,CMI);

    console.log('Costo de Total de Instalación Eléctrica es de:' +CTIE.toFixed(2)+ ' $');

    return(CTIE);
}

function costoPlomería(cantidadM2){
    const costoPorM2 = 30; // Costos de material de plomería por M2.
    const CIP = multiplica(costoPorM2,cantidadM2);   //costo Instalación de Plomería
    const CMIP = multiplica(costoPlomM2(cantidadM2),CPPBC); //costo de mano de obra de plomería
    const CTP = suma(CIP,CMIP);

    console.log('Costo de Total de Plomería es de:' +CTP.toFixed(2)+ ' $');

    return(CTP);
}

