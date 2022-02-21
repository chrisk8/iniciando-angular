import { Component } from "@angular/core";

@Component({
    selector: 'app-Contador',
    template: `
        
        <!-- Con llaves dobles dentro de un codigo HTML se pueden indicar expresiones de JavaScrypt o mostrar codigo que es propio de una clase -->
        <h1> {{ title }} </h1>
        <h3>La base es: <strong> {{ base }} </strong></h3>


        <!-- Los parentesis INDICAN UN EVENTO 
        Es recomendable no colocar demasiada logica en los templates HTML
        -->
        <button (click)=" acumular( base ) "> + {{ base }} </button>
        <span>{{ numero }}</span>
        <button (click)=" acumular( -base ) "> - {{ base }} </button>
    
    `
})

export class ContadorComponent {
    title: string = 'Contador'; //Titulo que se le dio a la aplicacion al crearla con ng new
    //Propiedades para el contador
    numero: number = 10;
    base: number = 5;

    //Metodos para el contador
    // sumar() {
    //   this.numero += 1;
    // }
    // restar() {
    //   this.numero -= 1;
    // }

    //Optimizar metodos anteriores
    acumular(valor: number) {
        this.numero += valor;
    }
}