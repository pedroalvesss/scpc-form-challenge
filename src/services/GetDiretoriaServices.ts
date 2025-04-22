export const GetDiretorias = async () => {
  const response = await fetch(
    "https://homol.services.defensoria.pa.def.br/api-folgas/v1/diretoria",
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
        "Content-Type": "application/json",
      },
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch diretorias");
  }

  const data = await response.json();
  return data;
};
