/*Este pequeño calcula el IMC (índice de mas muscular) y brinda información acerca del mismo para las n cantidad de personas que 
quiera el usuario*/

let n = prompt('Ingrese la cantidad de personas que desee para obtener su  IMC');

for (let i=1; i<=n; i++) {

    let Peso = parseFloat(prompt('Ingrese el Peso en kilogramos de la persona ' +i));
    let Altura = parseFloat(prompt('Ingrese la altura en metros de la persona ' +i));

    let IMC = (parseFloat(Peso/(Altura**2))).toFixed(1);  /*Calculo de IMC*/
   
    if (IMC <= 18.5) {

        console.log('La Persona ' +i+ ' tiene un IMC de: ' +IMC+ '  y se encuentra bajo de peso');

    } else if (IMC <= 24.9) {

        console.log('La Persona ' +i+ ' tiene un IMC de: ' +IMC+ ' y se encuentra en peso normal');

    } else if (IMC >= 25 && IMC <= 29.9) {

        console.log('La Persona ' +i+ ' tiene un IMC de: ' +IMC+ ' y se encuentra en sobrepeso');

    } else if (IMC >= 30) {

        console.log('La Persona ' +i+ ' tiene un IMC de: ' +IMC+ ' y se encuentra en estado de Obesidad');

    } 

}