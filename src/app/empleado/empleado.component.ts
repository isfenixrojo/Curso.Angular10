import { Component } from '@angular/core';
import { Empleado } from './empleado';

@Component({
    selector: 'empleado',
    templateUrl: './empleado.component.html'
})

export class EmpleadoComponent {
    public componente_empleado = 'Lista de Empleados';
    public empleado: Empleado;
    public trabajadores: Array<Empleado>;
    public trabajadorExterno: boolean;

    constructor() {
        this.empleado = new Empleado("Israel Hernandez", 29, "Desarrollador", false);
        this.trabajadores = [
            new Empleado("Simon Moon Moon", 6, "Trainig", true),
            new Empleado("Pelusa Pelu", 6, "Trainig", true),
            new Empleado("Evaristo Maclovio", 30, "Vendedor", false),
            new Empleado("Florentina Villa", 26, "RR.HH", false)
        ];
        this.trabajadorExterno = true;
    }

    ngOnInit() {
        console.log(this.empleado);
        console.log(this.trabajadores);
    }

    cambiarExterno(valor) {
        this.trabajadorExterno = valor;
    }
}