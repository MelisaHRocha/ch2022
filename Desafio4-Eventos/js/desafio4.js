/*Este pequeño simulacro calcula el costo total de construcción de la casa que deseas construir, dependiendo de este caso tres tipos
de locaciones: habitaciones, baños o cocinas*/

console.log('Calcula el costo de tu casa!!');
console.log('Elije como estará formada tu casa o construcción: ');

var CAPH = 2;   /* Cantidad de Albañiles en promedio que se necesita por cada locación.*/
var CEPH = 1;   /* Cantidad de Electricistas en promedio por cada locación.*/
var CPPBC = 1;  /* Cantidad de Plomeros en promedio por baño o cocina.*/

const suma = (a,b) =>  a + b;
const multiplica = (a,b) => a * b;
const costoAlbañilM2 = a => a*12.5;  /* Un albañil cobra 250 $ por cada 20 M2.*/
const costoElectM2 = a => a*6.5;    /* Un electricista cobra 130 $ por cada 20 M2.*/
const costoPlomM2 = a => a*7;     /* Un plomero cobra 140 $ por cada 20 M2.*/

const habitaciones = [];
const baños = [];
const cocinas = [];
const locaciones = [];

class Locación{
    constructor(tipo,cantidad,imagen){
        this.tipo = tipo;
        this.cantidad = cantidad;
        this.imagen = imagen;
    }
}

const locacion1 = new Locación("Habitación",0,"Img/habitacion.jpg");
const locacion2 = new Locación("Baño",0,"Img/baño.jpg");
const locacion3 = new Locación("Cocina",0,"Img/cocina2.jpg");

locaciones.push(locacion1);
locaciones.push(locacion2);
locaciones.push(locacion3);

class Habitación{
    constructor(nombre,M2, costoTotal,costoConstruccion,costoInstalaciónEléctrica,costoManoObraConstrucción,costoMaterialConstrucción){
        this.nombre=nombre;
        this.M2 = parseFloat(M2);
        this.tipo= 'Habitación';
        this.costoTotal = parseFloat(costoTotal);
        this.costoConstruccion = parseFloat(costoConstruccion);
        this.costoInstalaciónEléctrica = parseFloat(costoInstalaciónEléctrica);
        this.costoManoObraConstrucción = parseFloat(costoManoObraConstrucción);
        this.costoMaterialConstrucción = parseFloat(costoMaterialConstrucción);
    }
}


class Baño {
    constructor(nombre,M2, costoTotal,costoConstruccion,costoInstalaciónEléctrica,costoManoObraConstrucción,costoMaterialConstrucción,costoPlomería){
        this.nombre=nombre;
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

class Cocina {
    constructor(nombre,M2,costoTotal,costoConstruccion,costoInstalaciónEléctrica,costoManoObraConstrucción,costoMaterialConstrucción,costoPlomería){
        this.nombre=nombre;
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

ListarLocaciones();

//Menu();  

function Menu(){

    let agregarEditar = prompt('Bienvenido!! Calcule el presupuesto de su casa: \n 1). Agregar locaciones \n 2). Editar Locaciones \n 3). Filtrar Locación \n 4). Finalizar');

    switch(agregarEditar){
        case '1':
            AgregarLocacion();
            Menu();
            break;                       
        case '2':
            EditarLocacion();
            Menu();
            break;
        case '3':
            FiltrarLocacion();
            Menu();
            break;
        case '4':
            CálculoPresupuestoTotal();
            break; 
        default:
            console.log('La opción seleccionada no es válida.');
            break;
    }
}

function AgregarLocacion(){
  
    let opción= prompt('Agrega locaciones a  tu casa o construcción: \n  1). Habitación \n  2). Baño \n  3). Cocina \n ');

    switch (opción){
        case '1':
            CalculoHabitación();          
            break;                       
        case '2':
            CalculoBaño();
            break;
        case '3':
            CalculoCocina();
            break;   
        default:
            console.log('La opción seleccionada no es válida.');
            break;
    }
}

function EditarLocacion(){

    if (locaciones.length>0) {
       locaciones.forEach(locacion => {
           let op = prompt('Su casa tiene por el momento: ' + locacion.cantidad + ' ' + locacion.tipo + '/s.\nDesea modificarla ? \n 1). Si \n 2). No'); 
           switch (op){
            case '1':
                ModificarLocacion(locacion.tipo);
                break;                       
            case '2':
                break;
            default:
                console.log('La opción seleccionada no es válida.');
                break;
           }            
       });

    } else (alert("No tiene locaciones a Editar"))
}

function FiltrarLocacion(){
    let op = prompt('Seleccione como filtrar locaciones con costos :  \n 1). Mayores a ... \n 2). Menores a ... \n 3). Iguales a ...');
    switch (op){
        case '1':
            locacionesMayoresA();
            break;                       
        case '2':
            locacionesMenoresA();
            break;
        case '3':
            locacionesIgualesA();
                break;
        default:
            console.log('La opción seleccionada no es válida.');
            break;
       } 
}


function ModificarLocacion(tipo){
    switch (tipo){
        case 'Habitación':
           
            const habitacionesAMostrar = habitaciones.map((hb)=>hb.nombre);
            let habitacionesNombres = habitacionesAMostrar.join(" , ");
            let numeroHabitación = parseInt(prompt("Sa casa tiene las siguientes habitacion/es: " +habitacionesNombres+ "\n Ingrese el numero de Habitación que desea editar: ")); 
            
            if(habitacionesNombres.includes(numeroHabitación)){ModificarHabitación(numeroHabitación);}
            else{alert('La opción seleccionada no es válida.');};           
            break; 

        case 'Baño':
  
            const bañosAMostrar = baños.map((bñ)=>bñ.nombre);
            let bañosNombres = bañosAMostrar.join(" , ");
            let numeroBaño = parseInt(prompt("Sa casa tiene los siguientes baño/s: " +bañosNombres+ "\n Ingrese el numero de Baño que desea editar: ")); 
            
            if(bañosNombres.includes(numeroBaño)){ModificarBaño(numeroBaño);}
            else{alert('La opción seleccionada no es válida.');};                   
            break;

        case 'Cocina':

            const cocinasAMostrar = baños.map((bñ)=>bñ.nombre);
            let cocinasNombres = bañosAMostrar.join(" , ");
            let numeroCocina = parseInt(prompt("Sa casa tiene los siguientes cocina/s: " +cocinasNombres+ "\n Ingrese el numero de Baño que desea editar: ")); 
            
            if(cocinasNombres.includes(numeroCocina)){ ModificarCocina(numeroCocina);}
            else{alert('La opción seleccionada no es válida.');}; 

            break
    }
    

}

function ModificarHabitación(numeroHabitación){
    eliminaEdita = prompt("Desea Eliminar o Editar la habitación n°: "+numeroHabitación + "\n 1) Eliminar. \n 2) Editar. ")
    switch (eliminaEdita){
        case '1':
            EliminarHabitación(numeroHabitación);
            break;                       
        case '2':
            EditarHabitación(numeroHabitación);
            break;
        default:
            console.log('La opción seleccionada no es válida.');
            break;
    }
}

function ModificarBaño(numeroBaño){
    eliminaEdita = prompt("Desea Eliminar o Editar el Baño n°: "+numeroBaño + "\n 1) Eliminar. \n 2) Editar. ")
    switch (eliminaEdita){
        case '1':
            EliminarBaño(numeroBaño);
            break;                       
        case '2':
            EditarBaño(numeroBaño);
            break;
        default:
            console.log('La opción seleccionada no es válida.');
            break;
    }
}

function ModificarCocina(numeroCocina){
    eliminaEdita = prompt("Desea Eliminar o Editar la Cocina n°: "+numeroCocina + "\n 1) Eliminar. \n 2) Editar. ")
    switch (eliminaEdita){
        case '1':
            EliminarCocina(numeroCocina);
            break;                       
        case '2':
            EditarCocina(numeroCocina);
            break;
        default:
            console.log('La opción seleccionada no es válida.');
            break;
    }
}

function EliminarHabitación(numeroHabitación) {
    console.log("********* Habitacion a Eliminar n°: " +numeroHabitación)
    let  habitacionAEliminar = habitaciones.find((hb) => hb.nombre == numeroHabitación);
    habitaciones.splice(habitaciones.indexOf(habitacionAEliminar),1);
    alert("Usted ha eliminado la Habitación n°: " + habitacionAEliminar.nombre);
    console.log('Actualmente tiene ésta/s habitacion/es y costo/s: ');     
}

function EliminarBaño(numeroBaño) {
    console.log("******** Baño a Eliminar n°: " +numeroBaño)
    let  bañoAEliminar = baños.find((hb) => hb.nombre == numeroBaño);
    baños.splice(baños.indexOf(bañoAEliminar),1);
    alert("Usted ha eliminado el Baño n°: " + bañoAEliminar.nombre);
    console.log('Actualmente tiene ésto/s baño/s y costo/s: ');
}

function EliminarCocina(numeroCocina) {
    console.log("******* Cocina a Eliminar n°: " +numeroCocina)
    let  cocinaAEliminar = cocinas.find((hb) => hb.nombre == numeroCocina);
    cocinas.splice(cocinas.indexOf(cocinaAEliminar),1);
    alert("Usted ha eliminado la Cocina n°: " + cocinaAEliminar.nombre);
    console.log('Actualmente tiene ésta/s cocina/s y costo/s: ');
}

/** Costos de Presupuesto Total */
function  CálculoPresupuestoTotal(){
    var costoTotal = 0; /*costo total de la construcción*/
    const locaciones = habitaciones.concat(baños).concat(cocinas);
    console.log('*** Calculo presupuesto Total:')
    for (const locacion of locaciones) {
        costoTotal += locacion.costoTotal;
    }
    console.log('*** El Costo Total de Presupuesto es de: ' +costoTotal.toFixed(2)+ ' $');

    ListarLocacionesTotales();
}

function EditarHabitación(numeroHabitación){
    console.log("Numero de Habitacion a Editar es " +numeroHabitación)
    let  habitacionAEditar = habitaciones.find((hb) => hb.nombre == numeroHabitación);
    nuevaM2 = prompt("La Habitación que desea editar tiene actualmente: " +habitacionAEditar.M2+ " m2 \nIngrese una nueva cantidad de m2: ");
    habitacionAEditar.M2 = nuevaM2;
    habitacionAEditar.costoTotal = parseFloat(costoHabitación(habitacionAEditar).toFixed(2));
    alert("Ahora la Habitación n°: " + habitacionAEditar.nombre+ " tiene : " + nuevaM2+ " m2 \n y  tiene un costo total de: " +habitacionAEditar.costoTotal.toFixed(2)+ " $");   
    LocacionActualizada(habitacionAEditar);
}

function EditarBaño(numeroBaño){
    console.log("Numero de Baño a Editar es " +numeroBaño)
    let  bañoAEditar = baños.find((hb) => hb.nombre == numeroBaño);
    nuevaM2 = prompt("El Baño que desea editar tiene actualmente: " +bañoAEditar.M2+ " m2 \nIngrese una nueva cantidad de m2: ");
    bañoAEditar.M2 = nuevaM2;
    bañoAEditar.costoTotal = parseFloat(costoBaño(bañoAEditar).toFixed(2));
    alert("Ahora el Baño n°: " + bañoAEditar.nombre+ " tiene : " + nuevaM2+ " m2 \n y  tiene un costo total de: " +bañoAEditar.costoTotal+ " $");      
    LocacionActualizada(bañoAEditar);    
}

function EditarCocina(numeroCocina){
    console.log("Número de Cocina a Editar es " +numeroCocina)
    let  cocinaAEditar = cocinas.find((hb) => hb.nombre == numeroCocina);
    nuevaM2 = prompt("La cocina que desea editar tiene actualmente: " +cocinaAEditar.M2+ " m2 \nIngrese una nueva cantidad de m2: ");
    cocinaEditar.M2 = nuevaM2;
    cocinaAEditar.costoTotal = parseFloat(costoCocina(cocinaAEditar).toFixed(2));
    alert("Ahora la cocina n°: " + cocinaAEditar.nombre+ " tiene : " + nuevaM2+ " m2 \n y  tiene un costo total de: " +cocinaAEditar.costoTotal+ " $");    
    LocacionActualizada(cocinaAEditar);
}

function LocacionActualizada(locacion){
    console.log('Nuevos Costos para ' +locacion.tipo+ ' n°:' +locacion.nombre);
    console.log('Costo de material de construcción es de:' + locacion.costoMaterialConstrucción.toFixed(2)+ ' $');
    console.log('Costo de mano de obra de Construcción para es de:' +locacion.costoManoObraConstrucción.toFixed(2)+ ' $');
    console.log('Costo de Total de Instalación Eléctrica es de:' +locacion.costoInstalaciónEléctrica.toFixed(2)+ ' $');
    console.log('Costo Total de construcción es de:' +locacion.costoTotal.toFixed(2) + ' $');
}

var habitacionesCant = 0;


function CalculoHabitación(locacion){

    var nuevaHabitacion = new Habitación();     
    habitaciones.push(nuevaHabitacion);
    nuevaHabitacion.nombre = habitaciones.indexOf(nuevaHabitacion);  

    const locacionesContenedor = document.querySelector(".locacionesRoot");
    locacionesContenedor.innerHTML = "";
  
    locacionesContenedor.innerHTML = `
    <h2>Habitacion: ${nuevaHabitacion.nombre}</h2>
    <img src="${locacion.imagen}" alt="${locacion.nombre}">`
  
    const divHabitación = document.createElement("div");
    divHabitación.classList.add("habitacion");

    divHabitación.innerHTML =`
    <h3>Cantidad de M2: <input type="text" id='m2'/><h3>`;

    locacionesContenedor.appendChild(divHabitación);

    const M2Input = document.getElementById('m2')

    calcularCostoLocación(M2Input,divHabitación,nuevaHabitacion);


}

function calcularCostoLocación(M2Input,divLocacion,nuevaLocacion){

    M2Input.addEventListener("keypress", function(event)
    {
      if(event.keyCode === 13){
      nuevaLocacion.M2 = M2Input.value; 
      nuevaLocacion.costoTotal = parseFloat(costoHabitación(nuevaLocacion).toFixed(2));
      divLocacion.innerHTML = "";

      divLocacion.innerHTML += `
           <h2>CostoTotal: ${nuevaLocacion.costoTotal.toFixed(2)}</h2>`;

      crearBotonVolver();
      crearBotonEditar(nuevaLocacion);
      }
        
    });      
}


function crearBotonVolver(){
    const botonVolver = document.createElement("button");
    botonVolver.classList.add("boton-volver");
    botonVolver.innerText = "Volver a Menú";
        botonVolver.addEventListener("click",() =>{
        ListarLocaciones();
        } 
        )
    document.querySelector(".locacionesRoot").appendChild(botonVolver);
}


function crearBotonEditar(locacion){
    const botonEditar = document.createElement("button");
    botonEditar.classList.add("boton-editar");
    botonEditar.innerText = "Editar";
    botonEditar.addEventListener("click",() =>{
        EditarLocacionB(locacion);
        } 
        )
    document.querySelector(".locacionesRoot").appendChild(botonEditar);
}

function EditarLocacionB(locacion){

    let  superLocacion = locaciones.find((lo) => lo.tipo == locacion.tipo);

    if(superLocacion.tipo == "Habitación"){

    console.log("Numero de Habitacion a Editar es " +locacion.nombre)
    let  habitacionAEditar = habitaciones.find((hb) => hb.nombre == locacion.nombre);
    

    const locacionesContenedor = document.querySelector(".locacionesRoot");
    locacionesContenedor.innerHTML = "";
  
    locacionesContenedor.innerHTML = `
    <h2>Habitacion: ${habitacionAEditar.nombre}</h2>
    <img src="${superLocacion.imagen}" alt="${habitacionAEditar.nombre}">`
  
    const divHabitación = document.createElement("div");
    divHabitación.classList.add("habitacion");

    divHabitación.innerHTML =`
    <h3>Cantidad de M2: <input type="text" id='m2'/><h3>`;

    locacionesContenedor.appendChild(divHabitación);

    const M2Input = document.getElementById('m2')

    calcularCostoLocación(M2Input,divHabitación,habitacionAEditar);
    }else 
    
    if(superLocacion.tipo == "Baño"){

    console.log("Numero de Baño a Editar es " +locacion.nombre)
    let  bañoAEditar = baños.find((bñ) => bñ.nombre == locacion.nombre);

    const locacionesContenedor = document.querySelector(".locacionesRoot");
    locacionesContenedor.innerHTML = "";
    
    locacionesContenedor.innerHTML = `
    <h2>Baño: ${bañoAEditar.nombre}</h2>
    <img src="${superLocacion.imagen}" alt="${bañoAEditar.nombre}">`
    
    const divBaño = document.createElement("div");
    divBaño.classList.add("baño");

    divBaño.innerHTML =`
    <h3>Cantidad de M2: <input type="text" id='m2'/><h3>`;

    locacionesContenedor.appendChild(divBaño);

    const M2Input = document.getElementById('m2')

    calcularCostoLocación(M2Input,divBaño,bañoAEditar);


    }

    if(superLocacion.tipo == "Cocina"){

    console.log("Numero de Cocina a Editar es " +locacion.nombre)
    let  cocinaAEditar = baños.find((bñ) => bñ.nombre == locacion.nombre);

    const locacionesContenedor = document.querySelector(".locacionesRoot");
    locacionesContenedor.innerHTML = "";
    
    locacionesContenedor.innerHTML = `
    <h2>Cocina: ${cocinaAEditar.nombre}</h2>
    <img src="${superLocacion.imagen}" alt="${cocinaAEditar.nombre}">`
    
    const divBaño = document.createElement("div");
    divBaño.classList.add("baño");

    divBaño.innerHTML =`
    <h3>Cantidad de M2: <input type="text" id='m2'/><h3>`;

    locacionesContenedor.appendChild(divBaño);

    const M2Input = document.getElementById('m2')

    calcularCostoLocación(M2Input,divBaño,cocinaAEditar);


    }
    


}


function CalculoBaño(locacion){

    var nuevoBaño = new Baño();

    baños.push(nuevoBaño);
    nuevoBaño.nombre = baños.indexOf(nuevoBaño);
    
    const locacionesContenedor = document.querySelector(".locacionesRoot");
    locacionesContenedor.innerHTML = "";
  
    locacionesContenedor.innerHTML = `
    <h2>Baño: ${nuevoBaño.nombre}</h2>
    <img src="${locacion.imagen}" alt="${locacion.nombre}">`
    
    const divBaño = document.createElement("div");
    divBaño.classList.add("baño");

    divBaño.innerHTML =`
    <h3>Cantidad de M2: <input type="text" id='m2'/><h3>`;

    locacionesContenedor.appendChild(divBaño);
    const M2Input = document.getElementById('m2')
    
    calcularCostoLocación(M2Input,divBaño,nuevoBaño);
    
}

function CalculoCocina(locacion){

    var nuevaCocina = new Cocina();

    cocinas.push(nuevaCocina);
    nuevaCocina.nombre = cocinas.indexOf(nuevaCocina);
    
    const locacionesContenedor = document.querySelector(".locacionesRoot");
    locacionesContenedor.innerHTML = "";
  
    locacionesContenedor.innerHTML = `
    <h2>Cocina: ${nuevaCocina.nombre}</h2>
    <img src="${locacion.imagen}" alt="${locacion.nombre}">`
    
    const divCocina = document.createElement("div");
    divCocina.classList.add("cocina");

    divCocina.innerHTML =`
    <h3>Cantidad de M2: <input type="text" id='m2'/><h3>`;

    locacionesContenedor.appendChild(divCocina);
    const M2Input = document.getElementById('m2')
    
    calcularCostoLocación(M2Input,divCocina,nuevaCocina);

    
}

/** Locaciones Mayores a : */

function locacionesMayoresA(){

    let cantidad = prompt('Filtrar locaciones con costos mayor a: $');
    console.log('****** Locaciones filtradas:');
   
    if (habitaciones.some((hb)=> hb.costoTotal >= cantidad)){

        const habitFiltradas = habitaciones.filter((hb)=>hb.costoTotal >= cantidad);
        if(habitFiltradas.length>0){console.log('Las Habitaciones filtradas son: ');}

        for (hf of habitFiltradas) {
            console.log('Habitación n°:' +hf.nombre+ ' con costo de construcción es de:' + hf.costoTotal.toFixed(2)+ ' $');
        }
    }else{
        console.log('No existen habitaciones mayores a: ' +cantidad+ '$');
    }

    if (baños.some((bñ)=> bñ.costoTotal >= cantidad)){

        const bañosFiltrados = baños.filter((bñ)=>bñ.costoTotal >= cantidad);
        if(bañosFiltrados.length>0){console.log('Los Baños filtrados son: ');}

        for (bñ of bañosFiltrados) {
            console.log('Baño n°:' +bñ.nombre+ ' con costo de construcción es de:' + bñ.costoTotal.toFixed(2)+ ' $');
        }
    }else{
        console.log('No existen Baños mayores a: ' +cantidad+ '$');
    }

    if (cocinas.some((co)=> co.costoTotal >= cantidad)){

        const cocinasFiltradas = cocinas.filter((co)=>co.costoTotal >= cantidad);
        if(cocinasFiltradas.length>0){console.log('Las Cocinas filtradas son: ');}

        for (co of cocinasFiltradas) {
            console.log('Cocina n°:' +co.nombre+ ' con costo de construcción es de:' + co.costoTotal.toFixed(2)+ ' $');
        }
    }else{
        console.log('No existen Cocinas mayores a: ' +cantidad+ '$');
    }
}

/** Locaciones Menores a : */

function locacionesMenoresA(){

    let cantidad = prompt('Filtrar locaciones con costos menores a: $');
    console.log('****** Locaciones filtradas:');

    if (habitaciones.some((hb)=> hb.costoTotal <= cantidad)){

        const habitFiltradas = habitaciones.filter((hb)=>hb.costoTotal <= cantidad);
        if(habitFiltradas.length>0){console.log('Las Habitaciones filtradas son: ');}

        for (hf of habitFiltradas) {
            console.log('Habitación n°:' +hf.nombre+ ' con costo de construcción es de:' + hf.costoTotal.toFixed(2)+ ' $');
        }
    }else{
        console.log('No existen habitaciones menores a: ' +cantidad+ '$');
    }

    if (baños.some((bñ)=> bñ.costoTotal <= cantidad)){

        const bañosFiltrados = baños.filter((bñ)=>bñ.costoTotal <= cantidad);
        if(bañosFiltrados.length>0){console.log('Los Baños filtrados son: ');}

        for (bñ of bañosFiltrados) {
            console.log('Baño n°:' +bñ.nombre+ ' con costo de construcción es de:' + bñ.costoTotal.toFixed(2)+ ' $');
        }
    }else{
        console.log('No existen Baños menores a: ' +cantidad+ '$');
    }

    if (cocinas.some((co)=> co.costoTotal <= cantidad)){

        const cocinasFiltradas = cocinas.filter((co)=>co.costoTotal <= cantidad);
        if(cocinasFiltradas.length>0){console.log('Las Cocinas filtradas son: ');}

        for (co of cocinasFiltradas) {
            console.log('Cocina n°:' +co.nombre+ ' con costo de construcción es de:' + co.costoTotal.toFixed(2)+ ' $');
        }
    }else{
        console.log('No existen Cocinas menores a: ' +cantidad+ '$');
    }
}

/** Locaciones Iguales a : */

function locacionesIgualesA(){

    let cantidad = prompt('Filtrar locaciones con costos igual a: $');
    console.log('****** Locaciones filtradas:');

    if (habitaciones.some((hb)=> hb.costoTotal == cantidad)){        

        const habitFiltradas = habitaciones.filter((hb)=>hb.costoTotal == cantidad);
        if(habitFiltradas.length>0){console.log('Las Habitaciones filtradas son: ');}

        for (hf of habitFiltradas) {
            console.log('Habitación n°:' +hf.nombre+ ' con costo de construcción es de:' + hf.costoTotal.toFixed(2)+ ' $');
        }
    }else{
        console.log('No existen habitaciones iguales a: ' +cantidad+ '$');
    }

    if (baños.some((bñ)=> bñ.costoTotal == cantidad)){
        const bañosFiltrados = baños.filter((bñ)=>bñ.costoTotal == cantidad);
        if(bañosFiltrados.length>0){console.log('Los Baños filtrados son: ');}
        for (bñ of bañosFiltrados) {
            console.log('Baño n°:' +bñ.nombre+ ' con costo de construcción es de:' + bñ.costoTotal.toFixed(2)+ ' $');
        }
    }else{
        console.log('No existen Baños iguales a: ' +cantidad+ '$');
    }

    if (cocinas.some((co)=> co.costoTotal == cantidad)){

        const cocinasFiltradas = cocinas.filter((co)=>co.costoTotal == cantidad);
        if(cocinasFiltradas.length>0){console.log('Las Cocinas filtradas son: ');}

        for (co of cocinasFiltradas) {
            console.log('Cocina n°:' +co.nombre+ ' con costo de construcción es de:' + co.costoTotal.toFixed(2)+ ' $');
        }
    }else{
        console.log('No existen Cocinas iguales a: ' +cantidad+ '$');
    }
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



function ListarLocaciones(){

    const locacionesContenedor = document.querySelector(".locacionesRoot");
    locacionesContenedor.innerHTML ="";

    for (const locacion of locaciones) {
        
        if(locacion.tipo == 'Habitación'){
            
        const divHabitación = document.createElement("div");
        divHabitación.classList.add("habitacion");   

        divHabitación.innerHTML = `<h2>Habitaciones:</h2>
        <img src="${locacion.imagen}" alt="${locacion.nombre}"><br>`;

        const botonAgregar = document.createElement("button");
        botonAgregar.classList.add("boton-agregar");
        botonAgregar.innerText = "Agregar";
       
        botonAgregar.addEventListener("click", () => {
         CalculoHabitación(locacion);
        })

        divHabitación.appendChild(botonAgregar);
        locacionesContenedor.appendChild(divHabitación);
        }

       
        if(locacion.tipo == 'Baño'){
        
        const divBaño = document.createElement("div");
        divBaño.classList.add("baño");     
        divBaño.innerHTML = `<h2>Baños:</h2>
        <img src="${locacion.imagen}" alt="${locacion.nombre}"><br>`;

        const botonAgregar = document.createElement("button");
        botonAgregar.classList.add("boton-agregar");
        botonAgregar.innerText = "Agregar";
       
        botonAgregar.addEventListener("click", () => {
         CalculoBaño(locacion);
        })

        divBaño.appendChild(botonAgregar);
        locacionesContenedor.appendChild(divBaño);

        }
    
        if(locacion.tipo == 'Cocina'){

        const divCocina = document.createElement("div");
        divCocina.classList.add("cocina");
        divCocina.innerHTML = `<h2>Cocinas:</h2>
        <img src="${locacion.imagen}" alt="${locacion.nombre}"><br>`;

        const botonAgregar = document.createElement("button");
        botonAgregar.classList.add("boton-agregar");
        botonAgregar.innerText = "Agregar";
       
        botonAgregar.addEventListener("click", () => {
         CalculoCocina(locacion);
        })

        divCocina.appendChild(botonAgregar);
        locacionesContenedor.appendChild(divCocina);

        }
    }

    
}

function ListarLocacionesTotales(){
    console.log('***** Costos de Locación/es:');

    for (const locacion of locaciones) {
        if(locacion.tipo == 'Habitación'){
            
        var habitacionesCont = document.getElementById("habitacionesRoot");
     /*   habitacionesCont.innerHTML = `<h2>Habitaciones de tu Casa:</h2>
        <img src="${locacion.imagen}" alt="${locacion.nombre}">`;*/
        habitacionesCont.innerHTML = `<h2>Habitaciones de tu Casa:</h2>`;
        var divHabitación = document.createElement("div");
        divHabitación.classList.add("habitacion");

            for (const habitacion of habitaciones){
           
                divHabitación.innerHTML += `
                <img src="${habitacion.imagen}">
                <li> Habitación: ${habitacion.nombre}: <strong>${habitacion.M2}</strong> m2 </li>`
      
            }

        habitacionesCont.appendChild(divHabitación);

        }

        if(locacion.tipo == 'Baño'){
        var bañosCont = document.getElementById("baños");
        bañosCont.innerHTML = `<h2>Baños de tu Casa:</h2>`;
        const divBaño = document.createElement("div");
        divBaño.classList.add("baño");

            for (const baño of baños){

                divBaño.innerHTML += `
                <li> Baño: ${baño.nombre}: <strong>${baño.M2}</strong> m2 </li>`               

            }

        bañosCont.appendChild(divBaño);

        }

        if(locacion.tipo == 'Cocina'){

        var cocinasCont = document.getElementById("cocinas");
        cocinasCont.innerHTML = `<h2>Cocinas de tu Casa:</h2>`;
        const divCocina = document.createElement("div");
        divCocina.classList.add("cocina");

            for (const cocina of cocinas){
            
                divCocina.innerHTML += `
                <li> Cocina: ${cocina.nombre}: <strong>${cocina.M2}</strong> m2 </li>`
       
            }

        cocinasCont.appendChild(divCocina);

        }
    }

    const locacionesLista = document.getElementsByTagName('li');
  
    for (let i = 0; i < locacionesLista.length; i++) {
        locacionesLista[i].className = 'azul';
        
    }

    
}

function ListarHabitacionesCargadas(habitDesde,habitHasta){
    console.log('***** Costos de Habitacion/es:');
    const habitacionesCargadas = habitaciones.slice(habitDesde,habitHasta)

    for (const habitacion of habitacionesCargadas){
       
        console.log('Costos para ' +habitacion.tipo+ ' n° '+ habitaciones.indexOf(habitacion)+ ': ');
        console.log('Costo de material de construcción es de:' + habitacion.costoMaterialConstrucción.toFixed(2)+ ' $');
        console.log('Costo de mano de obra de Construcción para es de:' +habitacion.costoManoObraConstrucción.toFixed(2)+ ' $');
        console.log('Costo de Total de Instalación Eléctrica es de:' +habitacion.costoInstalaciónEléctrica.toFixed(2)+ ' $');
        console.log('Costo Total de construcción es de:' +habitacion.costoTotal.toFixed(2) + ' $');
    }
}
    


function ListarBaños(bañosDesde,bañosHasta){
    console.log('***** Costos de Baño/s:');
    const bañosCargados = baños.slice(bañosDesde,bañosHasta)
  
    for (const baño of bañosCargados){
       
        console.log('Costos para ' +baño.tipo+ ' n° '+ baños.indexOf(baño)+ ': ');
        console.log('Costo de material de construcción es de:' + baño.costoMaterialConstrucción.toFixed(2)+ ' $');
        console.log('Costo de mano de obra de Construcción para es de:' +baño.costoManoObraConstrucción.toFixed(2)+ ' $');
        console.log('Costo de Total de Instalación Eléctrica es de:' +baño.costoInstalaciónEléctrica.toFixed(2)+ ' $');
        console.log('Costo Total de construcción es de:' +baño.costoTotal.toFixed(2) + ' $');
    }
}

function ListarCocinas(cocinasDesde,cocinasHasta){
    console.log('***** Costos de Cocina/s:');
    const cocinasCargadas = cocinas.slice(cocinasDesde,cocinasHasta)

    for (const cocina of cocinasCargadas){
       
        console.log('Costos para ' +cocina.tipo+ ' n° '+ cocinas.indexOf(cocina)+ ': ');
        console.log('Costo de material de construcción es de:' + cocina.costoMaterialConstrucción.toFixed(2)+ ' $');
        console.log('Costo de mano de obra de Construcción para es de:' +cocina.costoManoObraConstrucción.toFixed(2)+ ' $');
        console.log('Costo de Total de Instalación Eléctrica es de:' +cocina.costoInstalaciónEléctrica.toFixed(2)+ ' $');
        console.log('Costo Total de construcción es de:' +cocina.costoTotal.toFixed(2) + ' $');
    }
}

