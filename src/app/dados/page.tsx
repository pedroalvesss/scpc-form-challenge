"use client";

import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function Dados() {
  const [eventos, setEventos] = useState<any[]>([]); // ← AQUI você declara "eventos"

  useEffect(() => {
    const dadosSalvos = localStorage.getItem("dadosForm");
    if (dadosSalvos) {
      setEventos(JSON.parse(dadosSalvos)); // ← e aqui você atualiza
    }
  }, []);

  if (!eventos.length)
    return <p className="text-center mt-10">Nenhum dado disponível.</p>;

  return (
    <div className="flex h-screen justify-center items-center px-4">
      <div className="text-white rounded-md bg-discord p-6 shadow-md w-full max-w-7xl overflow-auto">
        <h1 className="text-2xl font-bold mb-4">Eventos Registrados</h1>
        <Table>
          <TableHeader className="text-white">
            <TableRow>
              <TableHead>#</TableHead>
              <TableHead>Diretoria</TableHead>
              <TableHead>Área do Conhecimento</TableHead>
              <TableHead>Tipo</TableHead>
              <TableHead>Modalidade</TableHead>
              <TableHead>Título</TableHead>
              <TableHead>Carga Horária</TableHead>
              <TableHead>Instituição</TableHead>
              <TableHead>Início</TableHead>
              <TableHead>Fim</TableHead>
              <TableHead>Expedição</TableHead>
              <TableHead>Certificado</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {eventos.map((evento, index) => (
              <TableRow key={index}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{evento.diretoria || "—"}</TableCell>
                <TableCell>{evento.areaConhecimento}</TableCell>
                <TableCell>{evento.tipo}</TableCell>
                <TableCell>{evento.modalidade}</TableCell>
                <TableCell>{evento.tituloEvento}</TableCell>
                <TableCell>{evento.cargaHorariaEstimada}</TableCell>
                <TableCell>{evento.nomeInstituicao}</TableCell>
                <TableCell>
                  {new Date(evento.inicioCurso).toLocaleDateString()}
                </TableCell>
                <TableCell>
                  {new Date(evento.finalCurso).toLocaleDateString()}
                </TableCell>
                <TableCell>
                  {new Date(evento.dataExpedido).toLocaleDateString()}
                </TableCell>
                <TableCell>
                  {evento.certificado?.name || "Não enviado"}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
