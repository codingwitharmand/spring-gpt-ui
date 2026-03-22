export type Message = {
  id: string;
  role: "assistant" | "user";
  content: string;
};

export type ChatStreamEvent = {
  uuid: string;
  response: string;
};
