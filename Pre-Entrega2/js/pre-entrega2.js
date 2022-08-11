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
var contLocaciones = 0

class Locación{
    constructor(tipo,cantidad,imagen){
        this.tipo = tipo;
        this.cantidad = cantidad;
        this.imagen = imagen;
    }
}

const locacion1 = new Locación("Habitación",0,"Img/habitacion2.jpg");
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


mostrarStorageLocaciones();

ListarLocaciones();

CalcularPresupuesto();

function CalcularPresupuesto(){
    let presupuesto = document.getElementById("presup")

    presupuesto.addEventListener("click", () => {
        CálculoPresupuestoTotal();
       })
    
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

    costoTotal > 0 ? ListarLocacionesTotales(): alert("Aun no tiene locaciones cargadas")

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
         VerificarStorage(locacion.tipo);
         CalculoHabitación(locacion);
        })

        const botonListar = document.createElement("button");
        botonListar.classList.add("boton-listar");
        botonListar.innerText = "Listar";
       
        botonListar.addEventListener("click", () => {
         Listar(locacion);
        })


        divHabitación.appendChild(botonAgregar);
        divHabitación.appendChild(botonListar);
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
         VerificarStorage(locacion.tipo);
         CalculoBaño(locacion);
        })

        const botonListar = document.createElement("button");
        botonListar.classList.add("boton-listar");
        botonListar.innerText = "Listar";
       
        botonListar.addEventListener("click", () => {
         Listar(locacion);
        })


        divBaño.appendChild(botonAgregar);
        divBaño.appendChild(botonListar);
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
         VerificarStorage(locacion.tipo);
         CalculoCocina(locacion);
        })

        const botonListar = document.createElement("button");
        botonListar.classList.add("boton-listar");
        botonListar.innerText = "Listar";
       
        botonListar.addEventListener("click", () => {
         Listar(locacion);
        })


        divCocina.appendChild(botonAgregar);
        divCocina.appendChild(botonListar);
        locacionesContenedor.appendChild(divCocina);

        }
    }

    
}

function VerificarStorage(locacionTipo){
    var tipo;
    const habitacionesJson = localStorage.getItem('Habitaciones')
    const bañosJson = localStorage.getItem('Baños')
    const cocinasJson = localStorage.getItem('Cocinas')

    
    console.log("Verificar Storage"+(habitacionesJson === null))

    if (locacionTipo == "Habitación" && !(habitacionesJson === null) && habitaciones.length == 0){
    const ArrayHabitacionesJson = JSON.parse(habitacionesJson)

    let respuesta;
    ArrayHabitacionesJson.length > 0 &&  (respuesta = confirm("Ya tiene Habitaciones cargadas. Desea Continuar con su Camión?"))
    console.log(+respuesta);
    tipo = 'Habitación';
    VerStorage(respuesta, tipo);
    }

    if (locacionTipo == "Baño" &&!(bañosJson === null) && baños.length == 0){
        const ArrayBañosJson = JSON.parse(bañosJson)
        console.log(+ ArrayBañosJson)
        let respuesta;
        ArrayBañosJson.length > 0 &&  (respuesta = confirm("Ya tiene Baños cargados. Desea Continuar con su Camión?"))
        console.log(+respuesta);
        tipo = 'Baño';
        VerStorage(respuesta, tipo);
    }

    if (locacionTipo == "Cocina" && !(cocinasJson === null) && cocinas.length == 0){
        const ArrayCocinasJson = JSON.parse(cocinasJson)
        console.log(+ ArrayCocinasJson)
        let respuesta;
        ArrayCocinasJson.length > 0 &&  (respuesta = confirm("Ya tiene Cocinas cargados. Desea Continuar con su Camión?"))
        console.log(+respuesta);
        tipo = 'Cocina';
        VerStorage(respuesta, tipo);
    }
    

}

function VerStorage(respuesta,tipo){

    if (respuesta == '1' && tipo == 'Habitación'){
        console.log('carritoo');
        const habitacionesJson = localStorage.getItem('Habitaciones')
        const habitacionesObject = JSON.parse(habitacionesJson)
        console.log(habitacionesObject)
        console.log(habitacionesJson)
   
        for (const hj of habitacionesObject) {
            habitaciones.push(hj);       
        }
    } else if (respuesta == '0'){
        localStorage.clear()
        limpiarCamioncito()
    }


    if (respuesta == '1' && tipo == 'Baño'){
        console.log('carritoo');
        const bañosJson = localStorage.getItem('Baños')
        const bañosObject = JSON.parse(bañosJson)
        console.log(bañosObject)
        console.log(bañosJson)
   
 
        for (const bñ of bañosObject) {
            baños.push(bñ);           
        }

    }


    if (respuesta == '1' && tipo == 'Cocina'){
        console.log('carritoo');
        const cocinasJson = localStorage.getItem('Cocinas')
        const cocinasObject = JSON.parse(cocinasJson)
        console.log(cocinasObject)
        console.log(cocinasJson)
   
 
        for (const co of cocinasObject) {
            cocinas.push(co);           
        }

    }
    

}

function limpiarCamioncito(){
    const carrito = document.querySelector(".btn_menu")
    carrito.innerHTML = `<i class="fa-solid fa-truck"></i>`
}



function pintarCamioncito (contLocacionesJson){  
    const carrito = document.querySelector(".btn_menu")
    carrito.innerHTML += `
    <span class="cart_menu_num"  class="badge rounded-circle">${contLocacionesJson}</span>`
}


function CalculoHabitación(locacion){

    var nuevaHabitacion = new Habitación();     
    habitaciones.push(nuevaHabitacion);
    locacion.cantidad ++
    nuevaHabitacion.nombre = habitaciones.indexOf(nuevaHabitacion);  

    const locacionesContenedor = document.querySelector(".locacionesRoot");
    locacionesContenedor.innerHTML = "";
  
    locacionesContenedor.innerHTML = `
    <h2>Habitacion: ${nuevaHabitacion.nombre}</h2>
    <img src="${locacion.imagen}" alt="${locacion.nombre}">`
  
    const divHabitación = document.createElement("div");
    divHabitación.classList.add("habitacion");

    divHabitación.innerHTML =`
    <h3>Ingrese la cantidad de metros cuadrados para la Hab n° ${nuevaHabitacion.nombre}: <input type="number" class="input"  min="1" pattern="^[0-9]+"  id='m2'/>m2<h3><br>`;

    locacionesContenedor.appendChild(divHabitación);

    const M2Input = document.getElementById('m2')

    calcularCostoLocación(M2Input,divHabitación,nuevaHabitacion);
    crearBotonVolver(divHabitación);  

}


function CalculoBaño(locacion){

    var nuevoBaño = new Baño();

    baños.push(nuevoBaño);
    locacion.cantidad ++
    nuevoBaño.nombre = baños.indexOf(nuevoBaño);
    
    const locacionesContenedor = document.querySelector(".locacionesRoot");
    locacionesContenedor.innerHTML = "";
  
    locacionesContenedor.innerHTML = `
    <h2>Baño: ${nuevoBaño.nombre}</h2>
    <img src="${locacion.imagen}" alt="${locacion.nombre}">`
    
    const divBaño = document.createElement("div");
    divBaño.classList.add("baño");

    divBaño.innerHTML =`
    <h3>Ingrese la cantidad de metros cuadrados para el Baño n°${nuevoBaño.nombre} : <input type="text" min="1" pattern="^[0-9]+" id='m2'/>m2<h3>`;

    locacionesContenedor.appendChild(divBaño);
    const M2Input = document.getElementById('m2')
    
    calcularCostoLocación(M2Input,divBaño,nuevoBaño);

    sincronizarStorage();
    
}

function CalculoCocina(locacion){

    var nuevaCocina = new Cocina();

    cocinas.push(nuevaCocina);
    locacion.cantidad ++
    nuevaCocina.nombre = cocinas.indexOf(nuevaCocina);
    
    const locacionesContenedor = document.querySelector(".locacionesRoot");
    locacionesContenedor.innerHTML = "";
  
    locacionesContenedor.innerHTML = `
    <h2>Cocina: ${nuevaCocina.nombre}</h2>
    <img src="${locacion.imagen}" alt="${locacion.nombre}">`
    
    const divCocina = document.createElement("div");
    divCocina.classList.add("cocina");

    divCocina.innerHTML =`
    <h3>Ingrese la cantidad de metros cuadrados para la Cocina n°: <input type="text" pattern="^[0-9]+" id='m2'/>m2<h3>`;

    locacionesContenedor.appendChild(divCocina);
    const M2Input = document.getElementById('m2')
    
    calcularCostoLocación(M2Input,divCocina,nuevaCocina);
    sincronizarStorage();

    
}


function sincronizarStorage(tipo){
    localStorage.setItem('Habitaciones',JSON.stringify(habitaciones));
    console.log(localStorage.getItem('Habitaciones'));
    localStorage.setItem('Baños',JSON.stringify(baños));
    localStorage.setItem('Cocinas',JSON.stringify(cocinas));

    if (localStorage.getItem("contLocaciones") === null) {
        var contLocaciones = 0
        localStorage.setItem('contLocaciones', contLocaciones)
      }
    console.log("Sincronizando Storage")
    mostrarStorage(tipo);
}

function mostrarStorage(tipo){

    if (tipo== "Habitación"){
        console.log("Mostrando Storage")
    const habitacionesJson = localStorage.getItem('Habitaciones')

    console.log( "Muestro las habitaciones que tengo"+habitacionesJson)

    console.log(JSON.parse(habitacionesJson));
    const obhab = JSON.parse(habitacionesJson)
    
    if(!(obhab===null)){
    console.log(JSON.parse(habitacionesJson))

        if (habitaciones.length == 0){
            const contLocacionesJson = localStorage.getItem('contLocaciones')   
            pintarCamioncito(contLocacionesJson);

        } else {
            let contadorL = parseInt(localStorage.getItem('contLocaciones'))
            contadorL++
            console.log("ContadorL ", +contadorL)
            localStorage.setItem('contLocaciones', contadorL)
            const contLocacionesJson = localStorage.getItem('contLocaciones')
        
            pintarCamioncito(contLocacionesJson);
        }
   
   }

    else {
        //localStorage.clear()
    }

    }


    if (tipo== "Baño"){
        console.log("Mostrando Storage")

    const bañosJson = localStorage.getItem('Baños')

    const obbañ = JSON.parse(bañosJson)
    
    if(!(obbañ===null)){
    console.log(JSON.parse(bañosJson))

        if (baños.length == 0){
            const contLocacionesJson = localStorage.getItem('contLocaciones')   
            pintarCamioncito(contLocacionesJson);

        } else {
            let contadorL = parseInt(localStorage.getItem('contLocaciones'))
            contadorL++
            console.log("ContadorL ", +contadorL)
            localStorage.setItem('contLocaciones', contadorL)
            const contLocacionesJson = localStorage.getItem('contLocaciones')
        
            pintarCamioncito(contLocacionesJson);
        }
   
   }

    else {
        //localStorage.clear()
    }

    }
    
    

    if (tipo== "Cocina"){
        console.log("Mostrando Storage")

    const cocinasJson = localStorage.getItem('Cocinas')

    const obcoc = JSON.parse(cocinasJson)
    
    if(!(obcoc===null)){
    console.log(JSON.parse(cocinasJson))

        if (cocinas.length == 0){
            const contLocacionesJson = localStorage.getItem('contLocaciones')   
            pintarCamioncito(contLocacionesJson);

        } else {
            let contadorL = parseInt(localStorage.getItem('contLocaciones'))
            contadorL++
            console.log("ContadorL ", +contadorL)
            localStorage.setItem('contLocaciones', contadorL)
            const contLocacionesJson = localStorage.getItem('contLocaciones')
        
            pintarCamioncito(contLocacionesJson);
        }
   
   }

    else {
        //localStorage.clear()
    }

    }

}


function mostrarStorageLocaciones(){
    const habitacionesJson = localStorage.getItem('Habitaciones')
    const bañosJson = localStorage.getItem('Baños')


    const obhab = JSON.parse(habitacionesJson)
    const obbañ = JSON.parse(bañosJson)

    if((!(obhab===null)) || (!(obbañ===null)) ){
        console.log(JSON.parse(bañosJson))
    
            if (baños.length == 0 && habitaciones.length == 0){
                const contLocacionesJson = localStorage.getItem('contLocaciones')   
                pintarCamioncito(contLocacionesJson);
    
            } else {
                let contadorL = parseInt(localStorage.getItem('contLocaciones'))
                contadorL++
                console.log("ContadorL ", +contadorL)
                localStorage.setItem('contLocaciones', contadorL)
                const contLocacionesJson = localStorage.getItem('contLocaciones')
            
                pintarCamioncito(contLocacionesJson);
            }      
       }

}


function pintarCamioncito (contLocacionesJson){   
    const carrito = document.querySelector(".btn_menu")
    carrito.innerHTML += `
    <span class="cart_menu_num"  class="badge rounded-circle">${contLocacionesJson}</span>`
}

function Listar(locacion){ 

    const locacionesContenedor = document.querySelector(".locacionesRoot");
    locacionesContenedor.innerHTML = "";
  
    if (locacion.tipo == "Habitación"){
        locacionesContenedor.innerHTML = `
    <h2>Habitaciones: </h2>
    <img src="${locacion.imagen}" alt="${locacion.nombre}">`

    const divHabitaciones = document.createElement("div");
    divHabitaciones.classList.add("ListaHabitaciones");
    divHabitaciones.innerHTML = "";
    locacionesContenedor.appendChild(divHabitaciones);
   
        for (const habitacion of habitaciones){

            const divHabitación = document.createElement("div");
            divHabitación.classList.add("habitacion");

            const botonHabitacion = document.createElement("button");
            botonHabitacion.classList.add("btn_dormitorio");
            botonHabitacion.innerHTML = `<i class="fa-solid fa-bed"></i>
            <h5 class="leter">Hab.${habitacion.nombre}</h5>`;

            botonHabitacion.addEventListener("click", () => {
                DetalleLocación(locacionesContenedor,habitacion,locacion);
            })
        
            divHabitación.appendChild(botonHabitacion); 
            divHabitaciones.appendChild(divHabitación);       
        }

    }

    if (locacion.tipo == "Baño"){
        locacionesContenedor.innerHTML = `
    <h2>Baños: </h2>
    <img src="${locacion.imagen}" alt="${locacion.nombre}">`

    const divBaños = document.createElement("div");
    divBaños.classList.add("ListaBaños");
    divBaños.innerHTML = "";
    locacionesContenedor.appendChild(divBaños);
   
        for (const baño of baños){

            const divBaño = document.createElement("div");
            divBaño.classList.add("baños");

            const botonBaño = document.createElement("button");
            botonBaño.classList.add("btn_dormitorio");
            botonBaño.innerHTML = `<i class="fa-solid fa-bath"></i>
            <h5 class="leter">Baño.${baño.nombre}</h5>`;

            botonBaño.addEventListener("click", () => {
                DetalleLocación(locacionesContenedor,baño,locacion);
            })
  
            divBaño.appendChild(botonBaño);     
            divBaños.appendChild(divBaño);    
        }

    }

    if (locacion.tipo == "Cocina"){
        locacionesContenedor.innerHTML = `
    <h2>Cocinas: </h2>
    <img src="${locacion.imagen}" alt="${locacion.nombre}">`

    const divCocinas = document.createElement("div");
    divCocinas.classList.add("ListaCocinas");
    divCocinas.innerHTML = "";
    locacionesContenedor.appendChild(divCocinas);
   
        for (const cocina of cocinas){

            const divCocina = document.createElement("div");
            divCocina.classList.add("cocinas");

            const botonCocina = document.createElement("button");
            botonCocina.classList.add("btn_dormitorio");
            botonCocina.innerHTML = `<i class="fa-solid fa-kitchen-set"></i>
            <h5 class="leter">Cocina.${cocina.nombre}</h5>`;

            botonCocina.addEventListener("click", () => {
                DetalleLocación(locacionesContenedor,cocina,locacion);
            })
  
            divCocina.appendChild(botonCocina);     
            divCocinas.appendChild(divCocina);    
        }

    }

    crearBotonVolver(locacionesContenedor);

}

function DetalleLocación(locacionesContenedor, tipoLocacion, locacion){
    locacionesContenedor.innerHTML = "";

    if (locacion.tipo = "Habitación"){
        locacionesContenedor.innerHTML = `
    <h2>Detalle de costos para la Habitación n°: ${tipoLocacion.nombre} </h2>
    <img src="${locacion.imagen}" alt="${locacion.nombre}">`

    const divHabitacionDetalle = document.createElement("div");
    divHabitacionDetalle.classList.add("HabitacionDetalle");
    divHabitacionDetalle.innerHTML = "";

    divHabitacionDetalle.innerHTML +=`
        Cantidad de M2: ${tipoLocacion.M2} m2. <br> 
        Costo de material de construcción: ${tipoLocacion.costoMaterialConstrucción.toFixed(2)} $.<br> 
        Costo de mano de obra de Construcción: ${tipoLocacion.costoManoObraConstrucción} $.<br> 
        Costo de Total de Instalación Eléctrica: ${tipoLocacion.costoInstalaciónEléctrica.toFixed(2)} $.<br> 
        Costo Total de construcción: ${tipoLocacion.costoTotal.toFixed(2)} $.</p>`;
        
    locacionesContenedor.appendChild(divHabitacionDetalle);

    crearBotonVolver(divHabitacionDetalle);
    crearBotonEditar(tipoLocacion,divHabitacionDetalle);
    crearBotonEliminar(tipoLocacion,divHabitacionDetalle);

    }
    
    if (locacion.tipo = "Baño"){
        locacionesContenedor.innerHTML = `
    <h2>Detalle de costos para el Baño n°: ${tipoLocacion.nombre} </h2>
    <img src="${locacion.imagen}" alt="${locacion.nombre}">`

    const divBañoDetalle = document.createElement("div");
    divBañoDetalle.classList.add("BañoDetalle");
    divBañoDetalle.innerHTML = "";

    divBañoDetalle.innerHTML +=`
        Cantidad de M2: ${tipoLocacion.M2} m2. <br> 
        Costo de material de construcción: ${tipoLocacion.costoMaterialConstrucción.toFixed(2)} $.<br> 
        Costo de mano de obra de Construcción: ${tipoLocacion.costoManoObraConstrucción} $.<br> 
        Costo de Total de Instalación Eléctrica: ${tipoLocacion.costoInstalaciónEléctrica.toFixed(2)} $.<br> 
        Costo Total de construcción: ${tipoLocacion.costoTotal.toFixed(2)} $.</p>`;
        
    locacionesContenedor.appendChild(divBañoDetalle);

    crearBotonVolver(divBañoDetalle);
    crearBotonEditar(tipoLocacion,divBañoDetalle);
    crearBotonEliminar(tipoLocacion,divBañoDetalle);

    }

    if (locacion.tipo = "Cocina"){
        locacionesContenedor.innerHTML = `
    <h2>Detalle de costos para la  Cocina n°: ${tipoLocacion.nombre} </h2>
    <img src="${locacion.imagen}" alt="${locacion.nombre}">`

    const divCocinaDetalle = document.createElement("div");
    divCocinaDetalle.classList.add("CocinaDetalle");
    divCocinaDetalle.innerHTML = "";

    divCocinaDetalle.innerHTML +=`
        Cantidad de M2: ${tipoLocacion.M2} m2. <br> 
        Costo de material de construcción: ${tipoLocacion.costoMaterialConstrucción.toFixed(2)} $.<br> 
        Costo de mano de obra de Construcción: ${tipoLocacion.costoManoObraConstrucción} $.<br> 
        Costo de Total de Instalación Eléctrica: ${tipoLocacion.costoInstalaciónEléctrica.toFixed(2)} $.<br> 
        Costo Total de construcción: ${tipoLocacion.costoTotal.toFixed(2)} $.</p>`;
        
    locacionesContenedor.appendChild(divCocinaDetalle);

    crearBotonVolver(divCocinaDetalle);
    crearBotonEditar(tipoLocacion,divCocinaDetalle);
    crearBotonEliminar(tipoLocacion,divCocinaDetalle);

    }

}


function calcularCostoLocación(M2Input,divLocacion,nuevaLocacion){

    M2Input.addEventListener("keypress", function(event)
    {
      if(event.keyCode === 13){
      nuevaLocacion.M2 = M2Input.value; 

      if(nuevaLocacion.tipo === "Habitación"){nuevaLocacion.costoTotal = parseFloat(costoHabitación(nuevaLocacion).toFixed(2))}
      if(nuevaLocacion.tipo === "Baño"){nuevaLocacion.costoTotal = parseFloat(costoBaño(nuevaLocacion).toFixed(2))}
      if(nuevaLocacion.tipo === "Cocina"){nuevaLocacion.costoTotal = parseFloat(costoCocina(nuevaLocacion).toFixed(2))}
      divLocacion.innerHTML = "";

      divLocacion.innerHTML += `
            <h2>CostoTotal: ${nuevaLocacion.costoTotal.toFixed(2)}$</h2>
            <h3>Detalle:</h3>
            <h3>costo de material de construcción: ${nuevaLocacion.costoMaterialConstrucción.toFixed(2)}$</h3>
            <h3>costo de mano de obra de construcción: ${nuevaLocacion.costoManoObraConstrucción.toFixed(2)}$</h3>
            <h3>costo de Instalación Eléctrica: ${nuevaLocacion.costoInstalaciónEléctrica.toFixed(2)}$</h3>
            <h3>costo Total de construcción es de: ${nuevaLocacion.costoTotal.toFixed(2)}$</h3>`;

      if(typeof nuevaLocacion.costoPlomería !== 'undefined'){
            divLocacion.innerHTML += `
            <h3>costo  de plomería: ${nuevaLocacion.costoPlomería.toFixed(2)}$</h3>`;
      }

      crearBotonVolver(divLocacion);
      crearBotonEditar(nuevaLocacion,divLocacion);
      sincronizarStorage(nuevaLocacion.tipo);
      }
        
    });      
}



function ReCalcularCostoLocación(M2Input,divLocacion,nuevaLocacion){

    M2Input.addEventListener("keypress", function(event)
    {
      if(event.keyCode === 13){
      nuevaLocacion.M2 = M2Input.value; 

      if(nuevaLocacion.tipo === "Habitación"){nuevaLocacion.costoTotal = parseFloat(costoHabitación(nuevaLocacion).toFixed(2))}
      if(nuevaLocacion.tipo === "Baño"){nuevaLocacion.costoTotal = parseFloat(costoBaño(nuevaLocacion).toFixed(2))}
      if(nuevaLocacion.tipo === "Cocina"){nuevaLocacion.costoTotal = parseFloat(costoCocina(nuevaLocacion).toFixed(2))}
      divLocacion.innerHTML = "";

      divLocacion.innerHTML += `
            <h2>CostoTotal: ${nuevaLocacion.costoTotal.toFixed(2)}$</h2>
            <h3>Detalle:</h3>
            <h3>costo de material de construcción: ${nuevaLocacion.costoMaterialConstrucción.toFixed(2)}$</h3>
            <h3>costo de mano de obra de construcción: ${nuevaLocacion.costoManoObraConstrucción.toFixed(2)}$</h3>
            <h3>costo de Instalación Eléctrica: ${nuevaLocacion.costoInstalaciónEléctrica.toFixed(2)}$</h3>
            <h3>costo Total de construcción es de: ${nuevaLocacion.costoTotal.toFixed(2)}$</h3>`;

      if(typeof nuevaLocacion.costoPlomería !== 'undefined'){
            divLocacion.innerHTML += `
            <h3>costo  de plomería: ${nuevaLocacion.costoPlomería.toFixed(2)}$</h3>`;
      }

      crearBotonVolver(divLocacion);
      crearBotonEditar(nuevaLocacion,divLocacion);
      ActualizarStorage(nuevaLocacion.tipo);
      }
        
    });      
}

function ActualizarStorage(){
    localStorage.setItem('Habitaciones',JSON.stringify(habitaciones));
    localStorage.setItem('Baños',JSON.stringify(baños));
    localStorage.setItem('Cocinas',JSON.stringify(cocinas));
}


function crearBotonVolver(divLocacion){
    const botonVolver = document.createElement("button");
    botonVolver.classList.add("boton-volver");
    botonVolver.innerHTML =`<i class="fa-solid fa-house-chimney"></i>`;
        botonVolver.addEventListener("click",() =>{
        ListarLocaciones();
        } 
        )
        divLocacion.appendChild(botonVolver);
}


function crearBotonEditar(locacion,divLocacion){
    const botonEditar = document.createElement("button");
    botonEditar.classList.add("boton-editar");
    botonEditar.innerHTML =`<i class="fa-solid fa-pen"></i>`;
    botonEditar.addEventListener("click",() =>{
        EditarLocacion(locacion);
        } 
    )
    divLocacion.appendChild(botonEditar);
}

function crearBotonEliminar(locacion,divLocacion){
    const botonEliminar = document.createElement("button");
    botonEliminar.classList.add("boton-eliminar");
    botonEliminar.innerHTML =`<i class="fa-solid fa-trash"></i>`;
    botonEliminar.addEventListener("click",() =>{
        EliminarLocacion(locacion);
        } 
        )
        divLocacion.appendChild(botonEliminar);
}

function EliminarLocacion(locacion){

    let  superLocacion = locaciones.find((lo) => lo.tipo == locacion.tipo);

    if(superLocacion.tipo == "Habitación"){

        console.log("Numero de Habitacion a Eliminar es " +locacion.nombre)
        let  habitacionAEliminar = habitaciones.find((hb) => hb.nombre == locacion.nombre);
        
    
        const locacionesContenedor = document.querySelector(".locacionesRoot");
        locacionesContenedor.innerHTML = "";


        let respuestaEliminar = confirm("Esta seguro que desea eliminar la Habitación n°: " +habitacionAEliminar.nombre + "?")

        respuestaEliminar && Eliminado(habitacionAEliminar)

        ListarLocaciones();

        ActualizarCamioncito();
        
        }else 
        
        if(superLocacion.tipo == "Baño"){
     
        console.log("Numero de Baño a Eliminar es " +locacion.nombre)
        let  bañoAEliminar = baños.find((bñ) => bñ.nombre == locacion.nombre);
        
        const locacionesContenedor = document.querySelector(".locacionesRoot");
        locacionesContenedor.innerHTML = "";


        let respuestaEliminar = confirm("Esta seguro que desea eliminar el Baño n°: " +bañoAEliminar.nombre + "?")

        respuestaEliminar && Eliminado(bañoAEliminar)

        respuestaEliminar && ActualizarCamioncito();

        ListarLocaciones();

        
    
        }
    
        if(superLocacion.tipo == "Cocina"){
    
        console.log("Numero de Cocina a Eliminar es " +locacion.nombre)
        let  cocinaAEliminar = cocinas.find((co) => co.nombre == locacion.nombre);
    
        const locacionesContenedor = document.querySelector(".locacionesRoot");
        locacionesContenedor.innerHTML = "";
        
        let respuestaEliminar = confirm("Esta seguro que desea eliminar la Cocina n°: " +cocinaAEliminar.nombre + "?")

        respuestaEliminar && Eliminado(cocinaAEliminar)

        respuestaEliminar && ActualizarCamioncito();

        ListarLocaciones();
    
        }

}

function Eliminado(locacionAEliminar){
    if (locacionAEliminar.tipo =="Habitación"){
        habitaciones.splice(habitaciones.indexOf(locacionAEliminar),1);
        alert("Usted ha eliminado la Habitación n°: " + locacionAEliminar.nombre);
    }

    if (locacionAEliminar.tipo =="Baño"){
        baños.splice(baños.indexOf(locacionAEliminar),1);
        alert("Usted ha eliminado el Baño n°: " + locacionAEliminar.nombre);
    }

    if (locacionAEliminar.tipo =="Cocina"){
        cocinas.splice(cocinas.indexOf(locacionAEliminar),1);
        alert("Usted ha eliminado la Cocina n°: " + locacionAEliminar.nombre);
    }
    

}

function ActualizarCamioncito(){
    let contadorL = parseInt(localStorage.getItem('contLocaciones'))
    contadorL--
    console.log("ContadorL ", +contadorL)
    localStorage.setItem('contLocaciones', contadorL)
    const contLocacionesJson = localStorage.getItem('contLocaciones')

    pintarCamioncito(contLocacionesJson);
}

function EditarLocacion(locacion){

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

    ReCalcularCostoLocación(M2Input,divHabitación,habitacionAEditar);
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

    ReCalcularCostoLocación(M2Input,divBaño,bañoAEditar);


    }

    if(superLocacion.tipo == "Cocina"){

    console.log("Numero de Cocina a Editar es " +locacion.nombre)
    let  cocinaAEditar = cocinas.find((co) => co.nombre == locacion.nombre);

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
    ReCalcularCostoLocación(M2Input,divBaño,cocinaAEditar);

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


function ListarLocacionesTotales(){
    console.log('***** Costos de Locación/es:');
    const locacionesContenedor = document.querySelector(".locacionesRoot");
    locacionesContenedor.innerHTML = "";

    for (const locacion of locaciones) {
        if(locacion.tipo == 'Habitación' && locacion.cantidad > 0){
             
        locacionesContenedor.innerHTML += `<h2>Habitaciones:</h2>`;

        var divHabitación = document.createElement("div");
        divHabitación.classList.add("habitacion");

            for (const habitacion of habitaciones){

           
                divHabitación.innerHTML += `
                <i class="fa-solid fa-bed"></i>
                <h5 class="leter">Hab.${habitacion.nombre}</h5>
                <h3> Habitación: ${habitacion.nombre} de <strong>${habitacion.M2}</strong> m2 tiene un costo de ${habitacion.costoTotal.toFixed(2)} $</h3>`
      
            }

            locacionesContenedor.appendChild(divHabitación);

        }

        if(locacion.tipo == 'Baño' && locacion.cantidad > 0 ){

        locacionesContenedor.innerHTML += `<h2>Baños:</h2>`;
        const divBaño = document.createElement("div");
        divBaño.classList.add("baño");

            for (const baño of baños){

                divBaño.innerHTML += `
                <i class="fa-solid fa-bed"></i>
                <h5 class="leter">Baño.${baño.nombre}</h5>
                <h3> Baño: ${baño.nombre} de <strong>${baño.M2}</strong> m2 tiene un costo de ${baño.costoTotal.toFixed(2)} $</h3>`              

            }

            locacionesContenedor.appendChild(divBaño);

        }

        if(locacion.tipo == 'Cocina' && locacion.cantidad > 0){

        var cocinasCont = document.getElementById("cocinas");
        cocinasCont.innerHTML = `<h2>Cocinas de tu Casa:</h2>`;
        const divCocina = document.createElement("div");
        divCocina.classList.add("cocina");

            for (const cocina of cocinas){
            
                divCocina.innerHTML += `
                <i class="fa-solid fa-bed"></i>
                <h5 class="leter">Cocina.${cocina.nombre}</h5>
                <h3> Cocina: ${cocina.nombre} de <strong>${cocina.M2}</strong> m2 tiene un costo de ${cocina.costoTotal.toFixed(2)} $</h3>`     
       
            }

            locacionesContenedor.appendChild(divCocina);

        }
    }

    var costoTotal = 0; 
    
    const locacionesT = habitaciones.concat(baños).concat(cocinas);

    for (const locacion of locacionesT) {
        costoTotal += locacion.costoTotal;
    }

    console.log("nuevocostototal", +costoTotal);

    locacionesContenedor.innerHTML +=`
    <h1> Es Costo total de construccion para sus locaciones es de: ${costoTotal} $</h1>`

    
}

