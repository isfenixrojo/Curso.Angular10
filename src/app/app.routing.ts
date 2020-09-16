import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Importa componentes
import { EmpleadoComponent } from './empleado/empleado.component';
import { FrutaComponent } from './fruta/fruta.component';
import { HomeComponent } from './home/home.component';
import { ContactoComponent } from './contacto/contacto.component';

const appRoutes: Routes = [
    { path: '', component: EmpleadoComponent },
    { path: 'empleado', component: EmpleadoComponent },
    { path: 'fruta', component: FrutaComponent },
    { path: 'pagina-principal', component: HomeComponent },
    { path: 'contacto', component: ContactoComponent },
    { path: '**', component: EmpleadoComponent }
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);
