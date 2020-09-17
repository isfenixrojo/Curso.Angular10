import { Component, OnInit } from '@angular/core';
import { RopaService } from '../services/ropa.service'

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [RopaService]
})
export class HomeComponent implements OnInit {

  public titulo = "Pagina principal - Home"
  public listadoRopa: Array<string>;
  public prendaAGuardar: string;

  constructor(
    private _ropaSevice: RopaService
  ) { }

  ngOnInit() {
    this.listadoRopa = this._ropaSevice.getRopa();
    console.log(this.listadoRopa);
  }
  guardarPrenda() {
    this._ropaSevice.addRopa(this.prendaAGuardar);
    this.prendaAGuardar = null;
  }
  eliminarPrenda(index: number) {
    this._ropaSevice.deleteRopa(index);
  }
}
