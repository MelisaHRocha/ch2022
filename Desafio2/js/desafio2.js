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
            costoTotal+= parseFloat(CalculoHabitación());          
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


function CalculoHabitación(){

    const habitaciones = [];

    class Habitación {
        constructor(M2, costoTotal,costoConstruccion,costoInstalaciónEléctrica,costoManoObraConstrucción,costoMaterialConstrucción){
            this.M2 = parseFloat(M2);
            this.tipo= 'Habitación';
            this.costoTotal = parseFloat(costoTotal);
            this.costoConstruccion = parseFloat(costoConstruccion);
            this.costoInstalaciónEléctrica = parseFloat(costoInstalaciónEléctrica);
            this.costoManoObraConstrucción = parseFloat(costoManoObraConstrucción);
            this.costoMaterialConstrucción = parseFloat(costoMaterialConstrucción);
        }
    }

    var CTH = 0; // CTH = costo total de habitaciones.

    let habitacionesCant = prompt('Ingrese cantidad de Habitaciones que desea construir:');

    do {
        
        let cantidadM2 = parseFloat(prompt('Ingrese la cantidad de metros cuadrados que tiene la habitación n°' + (habitaciones.length)  + ': '));          
        var nuevaHabitacion = new Habitación(cantidadM2);
        habitaciones.push(nuevaHabitacion);
        
        nuevaHabitacion.costoTotal = parseFloat(costoHabitación(nuevaHabitacion).toFixed(2));

    } while (habitaciones.length < habitacionesCant)


    for (const habitacion of habitaciones){
       
        console.log('Costos para ' +habitacion.tipo+ ' n° '+ habitaciones.indexOf(habitacion)+ ': ');
        console.log('Costo de material de construcción es de:' + habitacion.costoMaterialConstrucción.toFixed(2)+ ' $');
        console.log('Costo de mano de obra de Construcción para es de:' +habitacion.costoManoObraConstrucción.toFixed(2)+ ' $');
        console.log('Costo de Total de Instalación Eléctrica es de:' +habitacion.costoInstalaciónEléctrica.toFixed(2)+ ' $');
        console.log('Costo Total de construcción es de:' +habitacion.costoTotal.toFixed(2) + ' $');
        CTH += habitacion.costoTotal;

    }
       
    console.log('El Costo Total de construcción para '+habitacionesCant+ ' habitacion/es es de : ' +CTH.toFixed(2)+ ' $');
    return CTH;

}

function Baño(){

    const baños = [];

    class Baño {
        constructor(M2, costoTotal,costoConstruccion,costoInstalaciónEléctrica,costoManoObraConstrucción,costoMaterialConstrucción,costoPlomería){
            this.M2 = parseFloat(M2);
            this.tipo= 'Baño';
            this.costoTotal = parseFloat(costoTotal);
            this.costoConstruccion = parseFloat(costoConstruccion);
            this.costoInstalaciónEléctrica = parseFloat(costoInstalaciónEléctrica);
            this.costoManoObraConstrucción = parseFloat(costoManoObraConstrucción);
            this.costoMaterialConstrucción = parseFloat(costoMaterialConstrucción);
            this.costoPlomería = parseFloat(costoPlomería);
        }
    }

    var CTB = 0; // CTB= costo total de baños
    
    let bañosCant = prompt('Ingrese la cantidad de Baños que desea construir:');

    do {
        
        let cantidadM2 = parseFloat(prompt('Ingrese la cantidad de metros cuadrados que tiene el baño n°' + (baños.length)  + ': '));          
        var nuevoBaño = new Baño(cantidadM2);
        baños.push(nuevoBaño);
        
        nuevoBaño.costoTotal = parseFloat(costoBaño(nuevoBaño).toFixed(2));

    } while (baños.length < bañosCant)

    for (const baño of baños){
       
        console.log('Costos para ' +baño.tipo+ ' n° '+ baños.indexOf(baño)+ ': ');
        console.log('Costo de material de construcción es de:' + baño.costoMaterialConstrucción.toFixed(2)+ ' $');
        console.log('Costo de mano de obra de Construcción para es de:' +baño.costoManoObraConstrucción.toFixed(2)+ ' $');
        console.log('Costo de Total de Instalación Eléctrica es de:' +baño.costoInstalaciónEléctrica.toFixed(2)+ ' $');   
        console.log('Costo de Total de Plomería es de:' +baño.costoPlomería.toFixed(2)+ ' $');
        console.log('Costo Total de construcción es de:' +baño.costoTotal.toFixed(2) + ' $');
        CTB += baño.costoTotal;

    }
       
    console.log('El Costo Total de construcción para '+bañosCant+ ' habitacion/es es de : ' +CTB.toFixed(2)+ ' $');
    return CTB;
    
}

function Cocina(){

    const cocinas = [];

    class Cocina {
        constructor(M2, costoTotal,costoConstruccion,costoInstalaciónEléctrica,costoManoObraConstrucción,costoMaterialConstrucción,costoPlomería){
            this.M2 = parseFloat(M2);
            this.tipo= 'Cocina';
            this.costoTotal = parseFloat(costoTotal);
            this.costoConstruccion = parseFloat(costoConstruccion);
            this.costoInstalaciónEléctrica = parseFloat(costoInstalaciónEléctrica);
            this.costoManoObraConstrucción = parseFloat(costoManoObraConstrucción);
            this.costoMaterialConstrucción = parseFloat(costoMaterialConstrucción);
            this.costoPlomería = parseFloat(costoPlomería);
        }
    }

    var CTC = 0; // CTH= costo total de cocinas

    let cocinasCant = prompt('Ingrese la cantidad de Cocinas que desea construir:');
    
    do {
        
        let cantidadM2 = parseFloat(prompt('Ingrese la cantidad de metros cuadrados que tiene la cocina n°' + (cocinas.length)  + ': '));          
        var nuevaCocina = new Cocina(cantidadM2);
        cocinas.push(nuevaCocina);
        
        nuevaCocina.costoTotal = parseFloat(costoCocina(nuevaCocina).toFixed(2));

    } while (cocinas.length < cocinasCant)

    for (const cocina of cocinas){
       
        console.log('Costos para ' +cocina.tipo+ ' n° '+ cocinas.indexOf(cocina)+ ': ');
        console.log('Costo de material de construcción es de:' + cocina.costoMaterialConstrucción.toFixed(2)+ ' $');
        console.log('Costo de mano de obra de Construcción para es de:' +cocina.costoManoObraConstrucción.toFixed(2)+ ' $');
        console.log('Costo de Total de Instalación Eléctrica es de:' +cocina.costoInstalaciónEléctrica.toFixed(2)+ ' $');   
        console.log('Costo de Total de Plomería es de:' +cocina.costoPlomería.toFixed(2)+ ' $');
        console.log('Costo Total de construcción es de:' +cocina.costoTotal.toFixed(2) + ' $');
        CTC += cocina.costoTotal;

    }
       
    console.log('El Costo Total de construcción para '+cocinasCant+ ' habitacion/es es de : ' +CTC.toFixed(2)+ ' $');
    return CTC;
    
}

function costoHabitación(habitacion){
    habitacion.costoConstruccion = costoConstrucción(habitacion);  
    habitacion.costoInstalaciónEléctrica = costoInstalaciónEléctrica(habitacion);
    return (suma(habitacion.costoConstruccion,habitacion.costoInstalaciónEléctrica));
}

function costoBaño(baño){

    baño.costoConstruccion = costoConstrucción(baño);  
    baño.costoInstalaciónEléctrica = costoInstalaciónEléctrica(baño);
    baño.costoPlomería = costoPlomería(baño);
    return (suma(suma(baño.costoConstruccion,baño.costoInstalaciónEléctrica),baño.costoPlomería));
}

function costoCocina(cocina){
    cocina.costoConstrucción = costoConstrucción(cocina);  
    cocina.costoInstalaciónEléctrica = costoInstalaciónEléctrica(cocina);
    cocina.costoPlomería = costoPlomería(cocina);
    return (suma(suma(cocina.costoConstrucción,cocina.costoInstalaciónEléctrica),cocina.costoPlomería));
}

function costoConstrucción(locacion){   

    const costoPorM2 = '20';  // Costos de material de construcción por M2.
    locacion.costoMaterialConstrucción = multiplica(costoPorM2,locacion.M2); // Costo de Construcción.
    locacion.costoManoObraConstrucción =multiplica(costoAlbañilM2(locacion.M2),CAPH); // Costo de Mano de Obra de Albañileria
    locacion.costoConstruccion =suma(locacion.costoMaterialConstrucción,locacion.costoManoObraConstrucción);  
    return (locacion.costoConstruccion);

}

function costoInstalaciónEléctrica(locacion){
    const costoPorM2 = 50; // Costos de material de instalación eléctrica por M2.
    const CIE = multiplica(costoPorM2,locacion.M2); //costo Instalación Eléctrica
    const CMI = multiplica(costoElectM2(locacion.M2),CEPH); //costo de mano de obra de instalación eléctrica
    locacion.costoInstalaciónEléctrica =suma(CIE,CMI);

    return(locacion.costoInstalaciónEléctrica);
}

function costoPlomería(locacion){
    const costoPorM2 = 30; // Costos de material de plomería por M2.
    const CIP = multiplica(costoPorM2,locacion.M2);   //costo Instalación de Plomería
    const CMIP = multiplica(costoPlomM2(locacion.M2),CPPBC); //costo de mano de obra de plomería
    locacion.costoPlomería= suma(CIP,CMIP);

    return(locacion.costoPlomería);
}


