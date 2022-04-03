import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClienteComponent } from './clientes/cliente.component';
import { FormClienteComponent } from './clientes/form-cliente.component';
import { FacturaComponent } from './factura/factura.component';
import { FormFacturaComponent } from './factura/form-factura.component';
import { ProductoComponent } from './producto/producto.component';
import { FormProductoComponent } from './producto/form-producto.component';
import { DetalleComponent } from './detalle/detalle.component';
import { FormDetalleComponent } from './detalle/form-detalle.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

const routes:Routes=[
  { path:'', redirectTo:'/clientes', pathMatch:'full'},
  { path:'clientes', component:ClienteComponent},
  { path:'clientes/form', component:FormClienteComponent},
  { path:'clientes/form/:id_cliente', component:FormClienteComponent},
  { path:'', redirectTo:'/factura', pathMatch:'full'},
  { path:'factura', component:FacturaComponent},
  { path:'factura/form', component:FormFacturaComponent},
  { path:'factura/form/:num_factura', component:FormFacturaComponent},
  { path:'', redirectTo:'/producto', pathMatch:'full'},
  { path:'producto', component:ProductoComponent},
  { path:'producto/form', component:FormProductoComponent},
  { path:'producto/form/:id_producto', component:FormProductoComponent},
  { path:'detalle', component:DetalleComponent},
  { path:'detalle/form', component:FormDetalleComponent},
  { path:'detalle/form/:id_detalle', component:FormDetalleComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ClienteComponent,
    FormClienteComponent,
    FacturaComponent,
    FormFacturaComponent,
    ProductoComponent,
    FormProductoComponent,
    FormDetalleComponent,
    DetalleComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
