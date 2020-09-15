import { Component } from '@angular/core';

@Component({
    selector:'empleado',
    templateUrl:'./empleado.component.html'
})

export class EmpleadoComponent
{
    public componente_empleado= 'Lista de Empleados';
    public listado_empleados= 'Ursula, Israel, Marco, Karla';
}