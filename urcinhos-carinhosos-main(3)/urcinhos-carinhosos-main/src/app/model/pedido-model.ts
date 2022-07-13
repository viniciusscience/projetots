import { ProdutoModel } from './produto-model';


export interface PedidoModel {
 id:string;
 idFarmaceutico:number;
 nomeFarmaceutico?:string;
 idCliente:number;
 nomeCliente?:string;
 produtos?: Array<ProdutoModel>;
 valor?:number;
 valorPago?:number;
 troco?:number;
 dataEmissao:Date;
 status:string;
 dataPagamento?:Date;
}
