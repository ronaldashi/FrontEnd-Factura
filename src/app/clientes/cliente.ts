import { Factura } from "../factura/factura";

export class Cliente {

    id_cliente: number;
    nombre: string;
    apellidos: string;
    telefono: number;
    fecha_nacimiento: number;
    email: string;

    detalles?: Factura[];




}
