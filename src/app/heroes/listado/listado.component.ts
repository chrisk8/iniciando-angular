import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
  heroes: string[] = [ 'Dr Strange', 'Spiderman', 'Thor', 'Black Widow' ];
  heroeBorrado: string = '';

  borrarHeroe(): void{
    // console.log('Borrando..');
    //El metodo pop() elimina el ultimo elemento del arreglo
    //El metodo shift() elimina el primer elemento de un arreglo
    this.heroeBorrado = this.heroes.pop() || '';
  }
}
