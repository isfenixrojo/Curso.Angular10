import { Component } from '@angular/core';
import { Coche } from './coche';
import { PeticionesSevice } from '../services/peticiones.service';

@Component({
    selector: 'coches',
    templateUrl: './coches.component.html',
    providers: [PeticionesSevice]
})

export class CochesComponent {

    public coche: Coche;
    public coches: Array<Coche>;
    public articulos;

    constructor(
        private _peticionesService: PeticionesSevice
    ) {
        this.coche = new Coche("", "", "");
        this.coches = [
            new Coche("Seat", "120", "Blanco"),
            new Coche("Renault", "110", "Negro")
        ];
    }

    ngOnInit() {
        this._peticionesService.getArticulos().subscribe(
            result => {
                if (result.code != 200) {
                    console.log(result);
                    this.articulos = result;
                } else {
                    this.articulos = result.data;
                }
            },
            error => {
                console.log(<any>error)
            }
        );
    }

    onSubmit() {
        this.coches.push(this.coche);
        this.coche = new Coche("", "", "");
    }
}