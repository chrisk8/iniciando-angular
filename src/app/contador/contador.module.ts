import { NgModule } from "@angular/core";
import { ContadorComponent } from "./counter/contador.component";

@NgModule({
    declarations: [
        ContadorComponent,
    ],
    exports: [
        ContadorComponent,
    ]
})
export class ContadorModule{

}