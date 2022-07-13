export interface ClienteModel {
  id: string;
  nome: string;
  aniver: string;
  cpf: string;
  email: string;
  idade?: string;
  documento?: string;
  documentoValido?: boolean;
}
