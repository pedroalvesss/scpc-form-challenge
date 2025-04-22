import { z } from "zod";

export const formSchema = z
  .object({
    diretoria: z
      .string({ message: "Campo obrigatório" })
      .min(1, { message: "Campo obrigatório" }),
    areaConhecimento: z
      .string({ message: "Campo obrigatório" })
      .min(1, { message: "Campo obrigatório" }),
    tipo: z
      .string({ message: "Campo obrigatório" })
      .min(1, { message: "Campo obrigatório" }),
    modalidade: z
      .string({ message: "Campo obrigatório" })
      .min(1, { message: "Campo obrigatório" }),
    tituloEvento: z
      .string({ message: "Título do Evento não pode estar vazio" })
      .min(1, { message: "Campo obrigatório" }),
    cargaHorariaEstimada: z
      .string({ message: "Carga Horária não pode estar vazia" })
      .min(1, { message: "Campo obrigatório" }),
    nomeInstituicao: z
      .string({ message: "Nome da Instituição não pode estar vazio" })
      .min(1, { message: "Campo obrigatório" }),
    inicioCurso: z.date({ required_error: "Selecione uma data de início" }),
    finalCurso: z.date({ required_error: "Selecione uma data de fim" }),
    dataExpedido: z.date({ required_error: "Selecione a data de expedição" }),
    certificado: z
      .instanceof(File, { message: "Envie um arquivo válido" })
      .optional(),
  })
  .refine((data) => data.inicioCurso >= new Date("2024-12-25"), {
    path: ["inicioCurso"],
    message: "A data de início deve ser maior que 25/12/2024",
  })
  .refine((data) => data.finalCurso >= data.inicioCurso, {
    path: ["finalCurso"],
    message: "A data de fim deve ser maior data de início",
  })
  .refine(
    (data) =>
      data.dataExpedido >= data.finalCurso &&
      data.dataExpedido >= data.inicioCurso,
    {
      path: ["dataExpedido"],
      message: "A data de expedição deve ser válida",
    }
  );

export type FormData = z.infer<typeof formSchema>;
