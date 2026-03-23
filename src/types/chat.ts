export type Message = {
  id: string;
  role: "assistant" | "user";
  content: string;
};

export type ChatStreamEvent = {
  chatId: string;
  answer: string;
};
