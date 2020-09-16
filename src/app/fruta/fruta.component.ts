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
        this.cambiarEdad(6);
        this.cambiarNombre();
        //alert(this.nombre + " " + this.edad);

        //Variables y alcances
        var uno = 8;
        var dos = 15;
        if (uno === 8) {
            let uno = 3;
            var dos = 88;
            console.log("Dentro del If " + uno + " " + dos);
        }
        console.log("Fuera del If " + uno + " " + dos);
    }
    cambiarNombre() {
        this.nombre = "Simon Moon Moon";
    }
    cambiarEdad(edad) {
        this.edad = edad;
    }
}