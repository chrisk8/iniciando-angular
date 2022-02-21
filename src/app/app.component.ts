//importacion del decorador Component
import { Component } from '@angular/core';


//Decorador Component con sus propiedades
//Requiere un argumento y debe ser un objeto
//El obejto debe tener por lo menos 2 argumentos
@Component({
  //Argumento 1
  selector: 'app-root', //NOMBRE DEL COMPONENTE
  templateUrl: './app.component.html',  // Indica el Path del archivo HTML correspondiente a este componente
  // template: '<span>Christian</span>',  //Este template indica lo que se quiere mostrar en la vista e ignora el archivo HTML independiente, se puede declarar como string ('') o con backtics para strings multi linea para colocar mas de 1 linea de codigo(``)
})



export class AppComponent {

}
