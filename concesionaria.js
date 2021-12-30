/* requerir módulo autos */
let autos = require("./Untitled-1")

// etapa 1 : requerir objeto y crear objeto literal "consecionaria" que traiga todos los autos
const concesionaria = {
    /* completar */
   autos: autos,
   // a partir de aca etapa 2
   buscarAuto: function(patente){
       for (let i = 0; i < autos.length ; i++){
           if (autos[i].patente === patente){
               return autos[i]
           }
       }
           return null
   },
   // a partir de aca etapa 3
   venderAuto: function(patente){
      let auto = this.buscarAuto(patente);
      if (auto != null){
          auto.vendido = true
      }
      return auto
      // sin este ultimo return no cambia a true

   },
   // a partir de aca funcionalidades extra
   autosParaLaVenta : function(){
       let autosFiltrados = this.autos.filter(function(auto){
        return auto.vendido == false;
       })
       return autosFiltrados
   },
   // a partir de aca "otras funcionalidades extra"
   autosNuevos : function(){
       let autosParaVender = this.autosParaLaVenta();
       let autos0k = autosParaVender.filter(function(auto){
        return auto.km < 100
        })
        return autos0k
   },
   // a partir de aca empieza "mas funcionalidades"
   listaDeVentas : function(){
       let listado = [];

       this.autos.forEach(function(auto){
           if(auto.vendido){
               listado.push(auto.precio)
           }
       })
       return listado
   },
   // total de ventas
   totalDeVentas : function(){
       let listado = this.listaDeVentas();
       if (listado.length !== 0){
           let total = listado.reduce(function(acum, valor){
               return acum + valor              
           }, 0)
           return total

       }
       return 0
   }
}

   /* puede comprar "agregando funcionalidades"
   puedeComprar : function(persona, auto){
       return persona.capacidadDePagoTotal >= auto.precio && persona.capacidadDePagoEnCuotas >= (auto.precio / auto.cuotas)
   },
   // autos que puede comprar
   autosQuePuedeComprar : function(persona){
       let autosParaVender = this.autosParaLaVenta();
       let autosFiltrados = autosParaVender.filter(function(auto){
           return consecionaria.puedeComprar(persona, auto)
       })
       return autosFiltrados
   }
};

// otra forma de hacerlo usando el metodo FIND. el find siempre itera sobre lo mismo hasta encontrar y devuelve lo que pedimos.
// si no encuentra devuelve undefined

/*
let autoEncontrado = this.autos.find(function(auto){
return auto.patente == patente
})

if(autoEncontrado){
    return autoEncontrado
}
return null
*/


// esto para ver la patente del primer objeto literal
//console.log(concesionaria.autos[0].patente)

// viendo si sirve la funcion
//console.log(concesionaria.buscarAuto("JJK116"))
//console.log(concesionaria.venderAuto("JJK116"))
console.log(concesionaria.autosParaLaVenta())
console.log(concesionaria.autosNuevos())
//console.log(concesionaria.listaDeVentas())
//console.log(concesionaria.totalDeVentas())