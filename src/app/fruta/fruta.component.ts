import { Component } from '@angular/core';

@Component({
    selector:'fruta',
    templateUrl:'./fruta.component.html'
})

export class FrutaComponent
{
    public componente_fruta= 'Listado de Frutas';
    public listado_frutas= 'Manzana, Pera, Mango y Naranja';
    public nombre:string = "Israel Hernandez Vazquez";
}