export const getChatbot = async () => {
  const response = await fetch(`/api/chatbot`);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  const data = await response.json();

  return data.data.attributes.chatbot;
};

export const getChatbot2 = async () => {
  const response = await fetch(`/api/chatbot2`);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  const data = await response.json();

  return data.data.attributes.chatbot2;
};
