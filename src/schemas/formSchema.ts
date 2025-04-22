import { z } from "zod";

export const formSchema = z
  .object({
    diretoria: z.string().min(1, "Campo obrigatório").optional(),
    areaConhecimento: z.string().min(1, "Campo obrigatório").optional(),
    tipo: z.string().min(1, "Campo obrigatório").optional(),
    modalidade: z.string().min(1, "Campo obrigatório").optional(),
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
