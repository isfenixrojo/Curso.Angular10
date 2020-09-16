import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'contacto',
    templateUrl: './contacto.component.html',
    //styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {

    public titulo = "Pagina de contacto de la web";
    public parametro;

    constructor(
        private _route: ActivatedRoute,
        private _router: Router
    ) { }

    ngOnInit() {
        this._route.params.forEach((params: Params) => {
            this.parametro = params['par']
            console.log(params);
        });
    }

    redirigir() {
        this._router.navigate(['/contacto', 'github.com/isfenixrojo']);
    }
    redirigir2() {
        this._router.navigate(['/home']);
    }
}
