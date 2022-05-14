import qs from "qs";

export const getMedicalFacilities = async () => {
  const query = qs.stringify(
    {
      pagination: {
        page: 1,
        pageSize: 70,
      },
    },
    {
      encodeValuesOnly: true,
    }
  );
  const response = await fetch(`/api/zdravotnicka-zarizenis?${query}`);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};
