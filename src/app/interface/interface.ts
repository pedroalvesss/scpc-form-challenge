export interface Capacitacao {
  id: number;
  nome: string;
  cargaHorariaEstimada: number;
  nomeInstituicao: string;
  inicioCurso: Date;
  finalCurso: Date;
  dataExpedido: Date;
  situacao: string;
  servidor: Servidor;
  diretoria: Diretoria;
  resourceUrl: string;
}

export interface Servidor {
  id: number;
  nome: string;
}

export interface Diretoria {
  id: number;
  nome: string;
}
