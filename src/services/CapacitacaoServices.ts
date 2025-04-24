export const GetCapacitacao = async () => {
  const response = await fetch(
    "https://homol.services.defensoria.pa.def.br/api-folgas/v1/capacitacao",
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
        "Content-Type": "application/json",
      },
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch capacitacao");
  }

  const data = await response.json();
  return data;
};

export const PostCapacitacao = async (payload: FormData) => {
  const response = await fetch(
    "https://homol.services.defensoria.pa.def.br/api-folgas/v1/capacitacao",
    {
      method: "POST",
      body: payload,
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
        "Content-Type": "multipart/form-data",
      },
    }
  );

  if (!response.ok) {
    throw new Error("Falha ao cadastrar nova capacitação");
  }

  const data = await response.json();
  return data;
};
