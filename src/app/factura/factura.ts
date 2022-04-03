import { Cliente } from "../clientes/cliente";

export class Factura {

    num_factura: number;
    id_cliente: number;
    fecha: number;

    detalles?: Cliente[];


}
