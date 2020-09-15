import { Component } from '@angular/core';

@Component({
    selector: 'fruta',
    templateUrl: './fruta.component.html'
})

export class FrutaComponent {
    public componente_fruta = 'Listado de Frutas';
    public listado_frutas = 'Manzana, Pera, Mango y Naranja';
    //other code example...
    public nombre: string;
    public edad: number;
    public mayorDeEdad: boolean;
    public trabajos: Array<any> = ['Carpintero', 'Albañil', 'Fontanero', 45];// El tipo any puede llevar cualquier cosa.
    comodin: any;


    //Es de buena practica hacer un constructor y declarar todas la propiedades en ella.
    constructor() {
        this.nombre = "Israel Hernandez Vazquez";
        this.edad = 30;
        this.mayorDeEdad = true;
        this.comodin = "SI";
    }

    ngOnInit() { //Es el primer metodo que se lanza cuando inicia la aplicacion de angular.
        this.cambiarEdad(28);
        this.cambiarNombre();
        alert(this.nombre + " " + this.edad);
    }
    cambiarNombre() {
        this.nombre = "Marco Hernandez Vazquez";
    }
    cambiarEdad(edad) {
        this.edad = edad;
    }
}