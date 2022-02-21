import { Component } from "@angular/core";


@Component({
    selector: 'app-heroe',
    templateUrl: './heroe.component.html',
})
export class HeroeComponent {
    nombre: string = 'Dr Strange';
    edad: number = 38;

    //En una clase se pueden definir getters y setters
    get nombreCapitalizado(): string {
        return this.nombre.toUpperCase();
    }

    obtenerNombre():string{
        return ` ${ this.nombre } - ${ this.edad } `
    }

    cambiarNombre(): void {
        this.nombre = 'Spiderman'
    }

    cambiarEdad(): void{
        this.edad = 30;
    }

}