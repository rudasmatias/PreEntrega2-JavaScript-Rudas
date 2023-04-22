//Bienvenida al usuario
//Vamos a utilizar en esta 1era pre entrega , alert para mostrar información, y prompt para recibir datos (en forma de strings)
//Como es el nombre de una variable utilizo el fomrato lowerCamelCase

function retornoPrincipal() {
  let confirmacionString = prompt(
    "Desea volver al menú principal?\nPara SI: presione 1\nPara NO: presione 0"
  );
  //El 0 o 1 en el prompt lo toma como bolean
  if (confirmacionString == true) {
    return main();
  } else {
    return mostarMenu(5);
  }
}

function comprar() {
  let valorDestinoJujuy = 200;
  let valorDestinoMendoza = 400;
  let valorDestinoTierraDelFuego = 600;
  let ctdadPasajeros = 0;

  function destinoElegido() {
    var destino = prompt(
      "Tenemos 3 destinos posibles!!\nJujuy\nMendoza\nTierra Del Fuego\nEscribe el destino al que quieres ir: "
    );
    if (destino === "Jujuy" || destino === "jujuy" || destino === "JUJUY") {
      alert("El precio por persona es de $" + valorDestinoJujuy);
      return valorDestinoJujuy;
    } else if (
      destino === "Mendoza" ||
      destino === "mendoza" ||
      destino === "MENDOZA"
    ) {
      alert("El precio por persona es de $" + valorDestinoMendoza);
      return valorDestinoMendoza;
    } else if (
      destino === "Tierra Del Fuego" ||
      destino === "tierra del fuego" ||
      destino === "TIERRA DEL FUEGO" ||
      destino === "Tierra del Fuego"
    ) {
      alert("El precio por persona es de $" + valorDestinoTierraDelFuego);
      return valorDestinoTierraDelFuego;
    } else {
      alert(
        "Lo siento, no es un destino disponible.\nIngrese el destino nuevamente: "
      );
      return destinoElegido();
    }
  }

  let suDestino = destinoElegido();
  let ctdadPasajerosString = prompt(
    "Ahora indique cuantos pasajeros quieren viajar:"
  );

  ctdadPasajeros = Number(ctdadPasajerosString);
  let totalViaje = ctdadPasajeros * suDestino;
  return totalViaje;
}

function consultarPrecios() {
  alert(
    "Los destinos disponibles son:\nJujuy: $200 por persona\nMendoza: $400 por persona\nTierra Del Fuego: $600 por persona"
  );
  retornoPrincipal();
}

function mostrarPromociones() {
  alert("No hay promociones por el momento");
  /*   let confirmacionString = prompt(
    "Desea volver al menú principal?\nPara SI: presione 1\nPara NO: presione 0"
  );
  //El 0 o 1 en el prompt lo toma como bolean
  if (confirmacionString == true) {
    return main();
  } else {
    return mostarMenu(5);
  } */
  retornoPrincipal();
}

function mostrarComprasRealizadas() {
  alert("No es posible mostrar los datos"); //Más adelante cuando vea arrays, la idea es guardar objetos del tipo nombre, destino, gasto tota en arrays.
  retornoPrincipal();
}

function mostarMenu(numMenu) {
  switch (numMenu) {
    case 1:
      alert("A continuación accederemos a realizar la compra");
      var suCompra = comprar();
      alert(
        "El total del pedido para la cantidad de pasajeros indicada es de: $" +
          suCompra +
          ".\nMuchas gracias por su compra."
      );
      retornoPrincipal();
      break;
    case 2:
      alert("A continuación accederemos a consultar los precios");
      consultarPrecios();
      break;
    case 3:
      alert("A continuación accederemos a mostrar las promociones disponibles");
      mostrarPromociones();
      break;
    case 4:
      alert("A continuación accederemos a mostrar las compras realizadas");
      mostrarComprasRealizadas();
      break;
    case 5:
      alert(
        "Muchas gracias por utilizar el sistema de compras de pasajes de Viaje Bien, vuelva pronto."
      );
      break;
    default:
      alert("Ese número no es una opción. Ingrese una opción nuevamente");
      var menu = prompt(
        "¿Que desea realizar?\n1-Comprar Pasajes\n2-Consultar precio\n3-Ver promociones\n4-Consultar compras realizadas\n5-Salir"
      );
      var numMenu = Number(menu);
      alert("Has elegido la opción: " + numMenu);
      mostarMenu(numMenu);
  }
}

function main() {
  alert("Bienvenido a la plataforma ViajeBien!!");
  var menu = prompt(
    "¿Que desea realizar?\n1-Comprar Pasajes\n2-Consultar precio\n3-Ver promociones\n4-Consultar compras realizadas\n5-Salir"
  );
  var numMenu = Number(menu);
  alert("Has elegido la opción: " + numMenu);
  mostarMenu(numMenu);
}

//Para ejecutar el programa llamo a la funcion padre con los parámetros necesarios
main();
