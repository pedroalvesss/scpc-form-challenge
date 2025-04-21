import { z } from "zod";

export const formSchema = z.object({
  diretoria: z.string().min(1, "Campo obrigatório"),
  areaConhecimento: z.string().min(1, "Campo obrigatório"),
  tipo: z.string().min(1, "Campo obrigatório"),
  modalidade: z.string().min(1, "Campo obrigatório"),
  tituloEvento: z.string().min(1, "Campo obrigatório"),
  cargaHorariaEstimada: z.string().min(1, "Campo obrigatório"),
  nomeInstituicao: z.string().min(1, "Campo obrigatório"),
  inicioCurso: z.date({ required_error: "Selecione uma data de início" }),
  finalCurso: z.date({ required_error: "Selecione uma data de fim" }),
  dataExpedido: z.date({ required_error: "Selecione a data de expedição" }),
  certificado: z.instanceof(File, { message: "Envie um arquivo válido" }),
});

export type FormData = z.infer<typeof formSchema>;
