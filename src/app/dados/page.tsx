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
import { CapacitacaoServices } from "@/services";
import { Capacitacao } from "../interface/interface";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Dados() {
  const [dados, setDados] = useState<Capacitacao[]>([]);

  useEffect(() => {
    const buscaDados = async () => {
      try {
        const response = await CapacitacaoServices.GetCapacitacao();
        if (Array.isArray(response.content)) {
          setDados(response.content);
        } else {
          console.error("Erro: Dados não são um array");
        }
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    };
    buscaDados();
  }, []);

  return (
    <div className="flex h-screen justify-center items-center px-4">
      <div className="text-white rounded-md bg-discord p-6 shadow-md w-full max-w-8xl overflow-auto">
        <h1 className="text-2xl font-bold mb-4">Eventos Registrados</h1>
        <Table>
          <TableHeader className="text-white">
            <TableRow>
              <TableHead>#</TableHead>
              <TableHead>Diretoria</TableHead>
              <TableHead>Título</TableHead>
              <TableHead>Carga Horária</TableHead>
              <TableHead>Instituição</TableHead>
              <TableHead>Data de Início</TableHead>
              <TableHead>Data de Fim</TableHead>
              <TableHead>Data de Expedição</TableHead>
              <TableHead>Situação</TableHead>
              <TableHead>Certificado</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {dados.map((evento, index) => (
              <TableRow key={evento.id || index}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>
                  {evento.diretoria.nome ? String(evento.diretoria.nome) : "—"}
                </TableCell>
                <TableCell>{evento.nome}</TableCell>
                <TableCell>{evento.cargaHorariaEstimada}</TableCell>
                <TableCell>{evento.nomeInstituicao}</TableCell>
                <TableCell>
                  {evento.inicioCurso
                    ? new Date(evento.inicioCurso).toLocaleDateString()
                    : "—"}
                </TableCell>
                <TableCell>
                  {evento.finalCurso
                    ? new Date(evento.finalCurso).toLocaleDateString()
                    : "—"}
                </TableCell>
                <TableCell>
                  {evento.dataExpedido
                    ? new Date(evento.dataExpedido).toLocaleDateString()
                    : "—"}
                </TableCell>
                <TableCell>{evento.situacao}</TableCell>
                <TableCell>
                  <Link href={evento.resourceUrl} target="_blank">
                    <Button className="cursor-pointer">PDF</Button>
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
