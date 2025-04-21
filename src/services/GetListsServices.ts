export const GetModalidade = async () => {
  const response = await fetch(
    "https://homol.services.defensoria.pa.def.br/api-folgas/v1/capacitacao-modalidade/list",
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
        "Content-Type": "application/json",
      },
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch modalidade");
  }

  const data = await response.json();
  return data;
};

export const GetTipoCapacitacao = async () => {
  const response = await fetch(
    "https://homol.services.defensoria.pa.def.br/api-folgas/v1/capacitacao-tipo/list",
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
        "Content-Type": "application/json",
      },
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch tipo");
  }

  const data = await response.json();
  return data;
};

export const GetAreaConhecimento = async () => {
  const response = await fetch(
    "https://homol.services.defensoria.pa.def.br/api-folgas/v1/capacitacao-area-conhecimento/list",
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
        "Content-Type": "application/json",
      },
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch areaConhecimento");
  }

  const data = await response.json();
  return data;
};
