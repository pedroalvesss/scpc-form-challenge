import { z } from "zod";

export const formSchema = z
  .object({
    diretoria: z.string().min(1, "Campo obrigatório").optional(),
    areaConhecimento: z.string().min(1, "Campo obrigatório"),
    tipo: z.string().min(1, "Campo obrigatório"),
    modalidade: z.string().min(1, "Campo obrigatório"),
    tituloEvento: z.string().min(1, "Campo obrigatório"),
    cargaHorariaEstimada: z.string().min(1, "Campo obrigatório"),
    nomeInstituicao: z.string().min(1, "Campo obrigatório"),
    inicioCurso: z.date({ required_error: "Selecione uma data de início" }),
    finalCurso: z.date({ required_error: "Selecione uma data de fim" }),
    dataExpedido: z.date({ required_error: "Selecione a data de expedição" }),
    certificado: z
      .instanceof(File, { message: "Envie um arquivo válido" })
      .optional(),
  })
  .refine((data) => data.finalCurso >= data.inicioCurso, {
    path: ["finalCurso"],
    message: "A data de fim deve ser maior ou igual à data de início",
  })
  .refine((data) => data.dataExpedido >= data.finalCurso, {
    path: ["dataExpedido"],
    message: "A data de expedição deve ser maior ou igual à data de fim",
  });

export type FormData = z.infer<typeof formSchema>;
