import { useState } from "react";
import { apiBaseUrl, initialMessages } from "../constants/chat";
import { consumeNdjsonStream } from "../lib/chatStream";
import type { ChatStreamEvent, Message } from "../types/chat";

const mergeAssistantChunk = (message: Message, nextChunk: string): Message => {
  const nextContent =
    nextChunk.startsWith(message.content) || message.content.length === 0
      ? nextChunk
      : `${message.content}${nextChunk}`;

  return { ...message, content: nextContent };
};

export function useChat() {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [draft, setDraft] = useState("");
  const [chatId, setChatId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const updateAssistantMessage = (messageId: string, event: ChatStreamEvent) => {
    setChatId(event.uuid);
    setMessages((current) =>
      current.map((message) =>
        message.id === messageId ? mergeAssistantChunk(message, event.response) : message
      )
    );
  };

  const sendMessage = async (question: string) => {
    const trimmedQuestion = question.trim();

    if (!trimmedQuestion || isSubmitting) {
      return;
    }

    const assistantMessageId = crypto.randomUUID();
    const nextMessages: Message[] = [
      { id: crypto.randomUUID(), role: "user", content: trimmedQuestion },
      { id: assistantMessageId, role: "assistant", content: "" }
    ];

    setError(null);
    setDraft("");
    setIsSubmitting(true);
    setMessages((current) => [...current, ...nextMessages]);

    const formData = new FormData();
    formData.append("question", trimmedQuestion);

    if (chatId) {
      formData.append("chatId", chatId);
    }

    selectedFiles.forEach((file) => formData.append("files", file));

    try {
      const response = await fetch(`${apiBaseUrl}/chat`, { method: "POST", body: formData });

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      setSelectedFiles([]);
      await consumeNdjsonStream(response, (event) => updateAssistantMessage(assistantMessageId, event));
    } catch (requestError) {
      setMessages((current) => {
        const assistantMessage = current.find((message) => message.id === assistantMessageId);
        return assistantMessage?.content
          ? current
          : current.filter((message) => message.id !== assistantMessageId);
      });
      setError(
        requestError instanceof Error
          ? requestError.message
          : "Something went wrong while contacting Spring GPT."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetChat = () => {
    if (isSubmitting) {
      return;
    }

    setMessages(initialMessages);
    setChatId(null);
    setDraft("");
    setError(null);
    setSelectedFiles([]);
  };

  return {
    chatId,
    draft,
    error,
    isSubmitting,
    messages,
    resetChat,
    selectedFiles,
    sendMessage,
    setDraft,
    setSelectedFiles
  };
}
