import { Cliente } from '../domain/cliente';
import { Farmaceutico } from '../domain/farmaceutico';
import { Produto } from '../domain/produto';

export interface Pedido {
  id: string;
  farmaceutico: Farmaceutico;
  cliente: Cliente;
  produtos: Produto[];
  valor: number;
  valorPago: number;
  troco: number;
  dataEmissao: Date;
  dataPagamento: Date;
  dataCancelamento: Date;
  status: string;
}
