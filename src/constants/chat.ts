import type { Message } from "../types/chat";

export const apiBaseUrl = import.meta.env.VITE_API_URL?.replace(/\/$/, "") ?? "";

export const suggestions = [
  "Explain Spring Boot auto-configuration with a concrete example",
  "Compare Spring MVC and WebFlux for a new API",
  "Help me understand dependency injection and bean scopes",
  "Show a clean Spring Data JPA repository structure"
];

export const springTopics = ["Boot", "Security", "Data", "MVC", "WebFlux", "Testing"];

export const initialMessages: Message[] = [
  {
    id: crypto.randomUUID(),
    role: "assistant",
    content:
      "I’m Spring GPT. Ask about Spring Boot, Framework, Security, Data, MVC, WebFlux, testing, or architecture and I’ll help break it down clearly."
  }
];
