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

MostrarCostosFijos();

VerCamion();


function MostrarCostosFijos(){
    let costosFijos = document.getElementById("cfijos")
    costosFijos.addEventListener("click", () => {
        CostosFijos();
       })
   
}

function CostosFijos(){

    fetch( 'data/costosManoDeObra.json' )
    .then( res => res.json())
    .then( data => {
        console.log(data);
        costoManoObra(data);          
    })   
    
    function costoManoObra(costos){
        const locacionesContenedor = document.querySelector(".locacionesRoot");
        locacionesContenedor.innerHTML = "";

        costos.forEach(c => {
            const costo = document.createElement('li')
            costo.innerHTML = "";
            costo.innerHTML +=`
            Costo de ${c.nombreRecurso} : ${c.costo20M2}$.`
            locacionesContenedor.appendChild(costo)    
            
        });            
    }
   
}

function VerCamion(){
    let camion = document.querySelector(".btn_menu")

    camion.addEventListener("click", () => {
        MostrarCamion();
       })
    
}

function costoTotalLocacion(locacionArray){

    let costoTotalLocacion =  0;

    locacionArray.forEach(loArray => {
        costoTotalLocacion += loArray.costoTotal
    });
     
    return costoTotalLocacion;

}

function MostrarCamion(){

    const habitacionesJson = localStorage.getItem('Habitaciones')
    const bañosJson = localStorage.getItem('Baños')
    const cocinasJson = localStorage.getItem('Cocinas')
    const locacionesJson = localStorage.getItem('Locaciones')

    const ArrayHabitacionesStorage = JSON.parse(habitacionesJson)
    const ArrayBañosStorage = JSON.parse(bañosJson)
    const ArrayCocinasStorage = JSON.parse(cocinasJson)
    const ArrayLocacionesStorage = JSON.parse(locacionesJson)


    Swal.fire({
        title: 'Tiene cargados en su Camión!',
        text: 'Modal with a custom image.',
        html: '<i class="fa-solid fa-bed"></i>  '+
              '  Habitaciones: ' +ArrayHabitacionesStorage.length+ ' unid.' + ' Costo: ' +costoTotalLocacion(ArrayHabitacionesStorage)+ ' $  <br>'+
              '<i class="fa-solid fa-bath"></i>'+
              '  Baños: ' +ArrayBañosStorage.length + ' Con un de costo de: ' +costoTotalLocacion(ArrayBañosStorage)+ ' $<br> '+
              '<i class="fa-solid fa-kitchen-set"></i>'+ 
              '  Cocinas: ' + ArrayCocinasStorage.length + ' Con un de costo de: ' +costoTotalLocacion(ArrayCocinasStorage)+ ' $',
        imageUrl: 'Img/casa1.jpg',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Seguir cargando',
        denyButtonText: `Limpiar Camión`,
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire('A continuar cargando locaciones!', '', 'success')
                respuesta = '1';

                for (const lo of ArrayLocacionesStorage) {
                    const locAactualizar = locaciones.find((loc) => (loc.tipo == lo.tipo)); 
                    console.log("Loc a actualizar", locAactualizar);
                    locAactualizar.cantidad = lo.cantidad      
                }

                if (habitaciones.length == '0'){
                    for (const hj of ArrayHabitacionesStorage) {
                        habitaciones.push(hj);       
                    } 
                }
                
                if (baños.length == '0') {
                    for (const bñ of ArrayBañosStorage) {
                        baños.push(bñ);           
                    }
                }
                
                if(cocinas.length == '0'){
                    for (const co of ArrayCocinasStorage) {
                        cocinas.push(co);           
                    }
            
                }
               
            } else if (result.isDenied) {
                Swal.fire('Vaciando camión..', '', 'info')
                localStorage.clear();
                limpiarCamioncito();
                habitaciones.splice(0, habitaciones.length);
                baños.splice(0, baños.length);
                cocinas.splice(0, cocinas.length);
                ListarLocaciones();
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                console.log("entre al cancel")
  //            ListarLocacionesTotales()
            }
        }
    )
}


function CalcularPresupuesto(){
    let presupuesto = document.getElementById("presup")

    presupuesto.addEventListener("click", () => {
        CálculoPresupuestoTotal();
       })
    
}

function CalcularPresupuesto(){
    let presupuesto = document.getElementById("presup")

    presupuesto.addEventListener("click", () => {
        CálculoPresupuestoTotal();
       })
    
}

function MostrarCostosFijos(){
    let costosFijos = document.getElementById("cfijos")
    costosFijos.addEventListener("click", () => {
        CostosFijos();
       })
   
}

function CostosFijos(){

    fetch( 'data/costosManoDeObra.json' )
    .then( res => res.json())
    .then( data => {
        console.log(data);
        costoManoObra(data);          
    })   
    
    function costoManoObra(costos){
        const locacionesContenedor = document.querySelector(".locacionesRoot");
        locacionesContenedor.innerHTML = "";

        costos.forEach(c => {
            const costo = document.createElement('li')
            costo.innerHTML = "";
            costo.innerHTML +=`
            Costo de ${c.nombreRecurso} : ${c.costo20M2}$.`
            locacionesContenedor.appendChild(costo)    
            
        });            
    }
   
}


/** Costos de Presupuesto Total */
function  CálculoPresupuestoTotal(){
   const cantLocaciones = localStorage.getItem('contLocaciones')
   if (cantLocaciones > 0  && habitaciones.length == '0' && baños.length == '0' && cocinas.length == '0') {
    Swal.fire({
        icon: 'info',
        title: 'Confirmar Camión de Carga',
        text: 'Usted tiene una carga previa de locaciones. Por favor ir a camión de carga.'
    })
   } else {
    costoTotalDeLocaciones() > 0 ? ListarLocacionesTotales(): alert("Aun no tiene locaciones cargadas")
   }   
}

function ListarLocaciones(){

    const locacionesContenedor = document.querySelector(".locacionesRoot");
    locacionesContenedor.innerHTML ="";

    const habitacionesJson = localStorage.getItem('Habitaciones')
    const bañosJson = localStorage.getItem('Baños')
    const cocinasJson = localStorage.getItem('Cocinas')

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
         if (!(habitacionesJson === null) && habitaciones.length == 0 && !JSON.parse(habitacionesJson).length == 0){
            VerificarStorage(locacion);     
         } else {
            CalculoHabitación(locacion) 
        }           
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
            if (!(bañosJson === null) && baños.length == 0 && !JSON.parse(bañosJson).length == 0){
                VerificarStorage(locacion);     
             } else {CalculoBaño(locacion)}    
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
            if (!(cocinasJson === null) && cocinas.length == 0 && !JSON.parse(cocinasJson).length == 0 ){
                VerificarStorage(locacion);     
             } else { CalculoCocina(locacion);}    
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

function VerificarStorage(locacion){

    const habitacionesJson = localStorage.getItem('Habitaciones')
    const bañosJson = localStorage.getItem('Baños')
    const cocinasJson = localStorage.getItem('Cocinas')

    const ArrayHabitacionesStorage = JSON.parse(habitacionesJson)
    const ArrayBañosStorage = JSON.parse(bañosJson)
    const ArrayCocinasStorage = JSON.parse(cocinasJson)

    if (locacion.tipo == "Habitación" && !(habitacionesJson === null) && habitaciones.length == 0){
    const ArrayHabitacionesJson = JSON.parse(habitacionesJson)

    let respuesta;

    ArrayHabitacionesJson.length > 0 &&  
    
     (Swal.fire({
        title: 'Ya tiene Habitaciones cargadas.',
        html:`Tiene cargados: 
        <ul>
        <li>${ArrayHabitacionesStorage.length} habitaciones</li>
        <li>${ArrayBañosStorage.length} baños</li>
        <li>${ArrayCocinasStorage.length} cocinas</li>
        </ul>`,
        showDenyButton: true,
        confirmButtonText: 'Continuar cargando..',
        denyButtonText: `Volver a cargar mi Camión`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          Swal.fire('Cargar mas habitaciones!', '', 'success')
          respuesta = '1';
          VerStorage(respuesta, locacion);
        } else if (result.isDenied) {
          respuesta = '0';
          Swal.fire('Cargar Habitación a nuevo camión', '', 'info')
          VerStorage(respuesta, locacion);
        }
      })) 

    } 

    if (locacion.tipo == "Baño" && !(bañosJson === null) && baños.length == 0){
        const ArrayBañosJson = JSON.parse(bañosJson)
        let respuesta;
        ArrayBañosJson.length > 0 &&  
        
        (Swal.fire({
            title: 'Ya tiene Baños cargados.',
            showDenyButton: true,
            confirmButtonText: 'Continuar cargando..!',
            denyButtonText: `No, volver a cargar mi Camión`,
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire('Cargar mas baños!', '', 'success')
              respuesta = '1';
              VerStorage(respuesta, locacion);
            } else if (result.isDenied) {
              respuesta = '0';
              Swal.fire('Cargar Baño a nuevo camión', '', 'info')
              VerStorage(respuesta, locacion);
            }
          })) 

    } 

    if (locacion.tipo == "Cocina" && !(cocinasJson === null) && cocinas.length == 0){
        const ArrayCocinasJson = JSON.parse(cocinasJson)
        let respuesta;
        ArrayCocinasJson.length > 0 && 
        
        (Swal.fire({
            title: 'Ya tiene Cocinas cargados.. Desea Continuar con su Camión?',
            showDenyButton: true,
            confirmButtonText: 'OK!',
            denyButtonText: `No, volver a cargar mi Camión`,
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
              Swal.fire('Cargar mas cocinas a tu casa!', '', 'success')
              respuesta = '1';
              VerStorage(respuesta, locacion);
            } else if (result.isDenied) {
              respuesta = '0';
              Swal.fire('Cargar Cocina a nuevo camión', '', 'info')
              tipo = 'Cocina';
              VerStorage(respuesta, locacion);
            }
          })) 
    }

}

function VerStorage(respuesta,locacion){

    const habitacionesJson = localStorage.getItem('Habitaciones')
    const habitacionesObject = JSON.parse(habitacionesJson)
    const bañosJson = localStorage.getItem('Baños')
    const bañosObject = JSON.parse(bañosJson)
    const cocinasJson = localStorage.getItem('Cocinas')
    const cocinasObject = JSON.parse(cocinasJson)
    const locacionesJson = localStorage.getItem('Locaciones')
    const locacionesObject = JSON.parse(locacionesJson)



    if (respuesta == '1'){  
        for (const lo of locacionesObject) {
             const locAactualizar = locaciones.find((loc) => (loc.tipo == lo.tipo)); 
             console.log("Loc a actualizar", locAactualizar);
             locAactualizar.cantidad = lo.cantidad      
         }

        for (const hj of habitacionesObject) {
            habitaciones.push(hj);       
        }

        for (const bñ of bañosObject) {
            baños.push(bñ);           
        }

        for (const co of cocinasObject) {
            cocinas.push(co);           
        }

    
        if (locacion.tipo == 'Habitación'){
            CalculoHabitación(locacion);
        }

        if (locacion.tipo == 'Baño'){
            CalculoBaño(locacion);
        }

        if (locacion.tipo == 'Cocina'){
            CalculoCocina(locacion);
        }
        
    } else if (respuesta == '0'){
            localStorage.clear()
            limpiarCamioncito()

        if (locacion.tipo == 'Habitación'){
            CalculoHabitación(locacion);
        }

        if (locacion.tipo == 'Baño'){
            CalculoBaño(locacion);
        }

        if (locacion.tipo == 'Cocina'){
            CalculoCocina(locacion);
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
    <h2>Habitación: ${nuevaHabitacion.nombre}</h2>
    <img src="${locacion.imagen}" alt="${locacion.nombre}">`
  
    const divHabitación = document.createElement("div");
    divHabitación.classList.add("habitacion");

    divHabitación.innerHTML =`
    <h3>Ingrese la cantidad de metros cuadrados para la Hab n° ${nuevaHabitacion.nombre}: <input type="number" class="input"  min="1" pattern="^[0-9]+"  id='m2'/>m2<h3><br>`;

    locacionesContenedor.appendChild(divHabitación);

    const M2Input = document.getElementById('m2')

    calcularCostoLocación(M2Input,divHabitación,nuevaHabitacion);
    crearBotonVolver(divHabitación);  
    
    console.log("Que tengo en locaciones al calcular Habitacion", localStorage.getItem('Locaciones'));

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
    <h3>Ingrese la cantidad de metros cuadrados para el Baño n°${nuevoBaño.nombre} : <input type="number" class="input"  min="1" pattern="^[0-9]+" id='m2'/>m2<h3>`;

    locacionesContenedor.appendChild(divBaño);
    const M2Input = document.getElementById('m2')
    
    calcularCostoLocación(M2Input,divBaño,nuevoBaño);
    crearBotonVolver(divBaño);  
    
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
    <h3>Ingrese la cantidad de metros cuadrados para la Cocina n°: <input type="number" class="input" min="1" pattern="^[0-9]+" id='m2'/>m2<h3>`;

    locacionesContenedor.appendChild(divCocina);
    const M2Input = document.getElementById('m2')
    
    calcularCostoLocación(M2Input,divCocina,nuevaCocina);
    crearBotonVolver(divCocina);    
}


function sincronizarStorage(tipo){
   
    console.log("Que tengo en locaciones al mostrar Habitacion", localStorage.getItem('Locaciones'));
    localStorage.setItem('Habitaciones',JSON.stringify(habitaciones));
    console.log("Que tengo en locaciones al sincronizar", localStorage.getItem('Locaciones'));
    localStorage.setItem('Baños',JSON.stringify(baños));
    localStorage.setItem('Cocinas',JSON.stringify(cocinas));
    localStorage.setItem('Locaciones',JSON.stringify(locaciones));

    console.log("Que tengo en locaciones al mostrar2 Habitacion", localStorage.getItem('Locaciones'));

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

    const bañosJson = localStorage.getItem('Baños')

    const obbañ = JSON.parse(bañosJson)
    
    if(!(obbañ===null)){

        if (baños.length == 0){
            const contLocacionesJson = localStorage.getItem('contLocaciones')   
            pintarCamioncito(contLocacionesJson);

        } else {
            let contadorL = parseInt(localStorage.getItem('contLocaciones'))
            contadorL++
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

    const cocinasJson = localStorage.getItem('Cocinas')

    const obcoc = JSON.parse(cocinasJson)
    
    if(!(obcoc===null)){

        if (cocinas.length == 0){
            const contLocacionesJson = localStorage.getItem('contLocaciones')   
            pintarCamioncito(contLocacionesJson);

        } else {
            let contadorL = parseInt(localStorage.getItem('contLocaciones'))
            contadorL++
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
    
            if (baños.length == 0 && habitaciones.length == 0){
                const contLocacionesJson = localStorage.getItem('contLocaciones')   
                pintarCamioncito(contLocacionesJson);
    
            } else {
                let contadorL = parseInt(localStorage.getItem('contLocaciones'))
                contadorL++
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

function DetalleLocación(locacionesContenedor,tipoLocacion, locacion){

    locacionesContenedor.innerHTML = "";

    if (locacion.tipo == "Habitación"){
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
    
    if (locacion.tipo == "Baño"){
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

    if (locacion.tipo == "Cocina"){
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
      
      console.log("Que tengo en locaciones al calcular Costo Locacion", localStorage.getItem('Locaciones'));
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
      
        let  habitacionAEliminar = habitaciones.find((hb) => hb.nombre == locacion.nombre);
           
        const locacionesContenedor = document.querySelector(".locacionesRoot");
        locacionesContenedor.innerHTML = "";

        let respuestaEliminar = confirm("Esta seguro que desea eliminar la Habitación n°: " +habitacionAEliminar.nombre + "?")

        respuestaEliminar && Eliminado(habitacionAEliminar)

        EliminarLocacionStorage(habitacionAEliminar);

        ListarLocaciones();

        ActualizarCamioncito();
        
        }else 
        
        if(superLocacion.tipo == "Baño"){

        let  bañoAEliminar = baños.find((bñ) => bñ.nombre == locacion.nombre);
        
        const locacionesContenedor = document.querySelector(".locacionesRoot");
        locacionesContenedor.innerHTML = "";


        let respuestaEliminar = confirm("Esta seguro que desea eliminar el Baño n°: " +bañoAEliminar.nombre + "?")

        respuestaEliminar && Eliminado(bañoAEliminar)

        EliminarLocacionStorage(bañoAEliminar);

        ActualizarCamioncito();

        ListarLocaciones();

        
    
        }
    
        if(superLocacion.tipo == "Cocina"){
    
        let  cocinaAEliminar = cocinas.find((co) => co.nombre == locacion.nombre);
    
        const locacionesContenedor = document.querySelector(".locacionesRoot");
        locacionesContenedor.innerHTML = "";
        
        let respuestaEliminar = confirm("Esta seguro que desea eliminar la Cocina n°: " +cocinaAEliminar.nombre + "?")

        respuestaEliminar && Eliminado(cocinaAEliminar)

        EliminarLocacionStorage(cocinaAEliminar);

        ActualizarCamioncito();

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

function EliminarLocacionStorage(locacionStorageAEliminar){
    const habitacionesJson = localStorage.getItem('Habitaciones')
    const habitacionesObject = JSON.parse(habitacionesJson)
    const bañosJson = localStorage.getItem('Baños')
    const bañosObject = JSON.parse(bañosJson)
    const cocinasJson = localStorage.getItem('Cocinas')
    const cocinasObject = JSON.parse(cocinasJson)
    const locacionesJson = localStorage.getItem('Locaciones')
    const locacionesObject = JSON.parse(locacionesJson)

    for (const locObj of locacionesObject) {
        if (locObj.tipo == locacionStorageAEliminar.tipo){
            locObj.cantidad --   
        }
        
    }

    let locacionesArrayJson = JSON.stringify(locacionesObject);
    localStorage.setItem('Locaciones',locacionesArrayJson);

    if (locacionStorageAEliminar.tipo =="Habitación"){      
        let habitacionObjectIndex = habitacionesObject.findIndex(ho => ho.nombre == locacionStorageAEliminar.nombre)
        habitacionesObject.splice(habitacionObjectIndex,1);
        let habitacionesArrayJson = JSON.stringify(habitacionesObject);
        localStorage.setItem('Habitaciones',habitacionesArrayJson);

       

       
    }

    if (locacionStorageAEliminar.tipo =="Baño"){
        let bañosObjectIndex = bañosObject.findIndex(bo => bo.nombre == locacionStorageAEliminar.nombre)
        bañosObject.splice(bañosObjectIndex,1);
        let habitacionesArrayJson = JSON.stringify(bañosObject);
        localStorage.setItem('Baños',habitacionesArrayJson);
    }

    if (locacionStorageAEliminar.tipo =="Cocina"){
        let cocinaObjectIndex = cocinasObject.findIndex(co => co.nombre == locacionStorageAEliminar.nombre)
        cocinasObject.splice(cocinaObjectIndex,1);
        let cocinasArrayJson = JSON.stringify(cocinasObject);
        localStorage.setItem('Cocinas',cocinasArrayJson);
    } 

}

function ActualizarCamioncito(){
    let contadorL = parseInt(localStorage.getItem('contLocaciones'))
    contadorL--
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

    var Presupuesto = document.createElement("div");
    Presupuesto.classList.add("Presupuesto");

    var tablaPresupuesto = document.createElement("table");
    tablaPresupuesto.classList.add("tablaPresupuesto");

    var thead = document.createElement("thead");

    var tr = document.createElement("tr");

    tr.innerHTML += `
    <th>Locacion</th>
    <th>Metros 2</th>
    <th>Costo Total</th>`

    thead.appendChild(tr);
    tablaPresupuesto.appendChild(thead);

    var tbody = document.createElement("tbody");
    

    for (const locacion of locaciones) {
        if(locacion.tipo == 'Habitación' && locacion.cantidad > 0){

            for (const habitacion of habitaciones){

                var tr1 = document.createElement("tr");
                tr1.innerHTML += `
                <td>Hab.${habitacion.nombre}</td>
                <td>${habitacion.M2}</td>
                <td>${habitacion.costoTotal} $</td>`
                tbody.appendChild(tr1);
      
            }

        }
;

       if(locacion.tipo == 'Baño' && locacion.cantidad > 0 ){

        for (const baño of baños){

            var tr1 = document.createElement("tr");
            tr1.innerHTML += `
            <td>Baño.${baño.nombre}</td>
            <td>${baño.M2}</td>
            <td>${baño.costoTotal} $</td>`
            tbody.appendChild(tr1);
  
        }

        }

        if(locacion.tipo == 'Cocina' && locacion.cantidad > 0){

            for (const cocina of cocinas){

                var tr1 = document.createElement("tr");
                tr1.innerHTML += `
                <td>Cocina.${cocina.nombre}</td>
                <td>${cocina.M2}</td>
                <td>${cocina.costoTotal} $</td>`
                tbody.appendChild(tr1);
      
            }

        }
    }

    var tfoot = document.createElement("tfoot");
    tfoot.innerHTML += `
    <tr>
    <th>Costo Total</th>
    <th></th>
    <th>${costoTotalDeLocaciones()} $</th><tr>`
  
    tablaPresupuesto.appendChild(tbody);
    tablaPresupuesto.appendChild(tfoot);

    Presupuesto.appendChild(tablaPresupuesto);

    locacionesContenedor.appendChild(Presupuesto);
    
    crearBotonVolver(Presupuesto);
   
}

function costoTotalDeLocaciones(){

    var costoTotal = 0; /*costo total de la construcción*/
    const locaciones = habitaciones.concat(baños).concat(cocinas);
    console.log('*** Calculo presupuesto Total:')
    for (const locacion of locaciones) {
        costoTotal += locacion.costoTotal;
    }
    console.log('*** El Costo Total de Presupuesto es de: ' +costoTotal.toFixed(2)+ ' $');
   
    return costoTotal;

}