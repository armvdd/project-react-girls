export const getMedicaments = async () => {
  const response = await fetch("/api/medicaments");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};
