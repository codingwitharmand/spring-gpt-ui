import { AssistantMarkdown } from "./AssistantMarkdown";
import type { Message } from "../types/chat";

type MessageListProps = {
  messages: Message[];
};

function TypingDots() {
  return (
    <div className="flex items-center gap-2 py-1">
      {[0, 1, 2].map((dot) => (
        <span
          key={dot}
          className="h-2.5 w-2.5 rounded-full bg-black/55 animate-pulseDots"
          style={{ animationDelay: `${dot * 120}ms` }}
        />
      ))}
    </div>
  );
}

export function MessageList({ messages }: Readonly<MessageListProps>) {
  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col gap-6 py-6">
      {messages.map((message, index) => (
        <article
          key={message.id}
          className={`animate-rise ${message.role === "user" ? "ml-auto max-w-[80%]" : "w-full"}`}
        >
          <div className="mb-2 text-xs font-medium uppercase tracking-[0.18em] text-black/35">
            {message.role === "user" ? "You" : index === 0 ? "Spring GPT" : "Assistant"}
          </div>
          <div
            className={`rounded-3xl px-5 py-4 text-[15px] leading-7 ${
              message.role === "user"
                ? "bg-[#171717] text-white"
                : "border border-black/10 bg-[#f7f7f5] text-black/85"
            }`}
          >
            {message.role === "assistant" && message.content.length > 0 ? (
              <AssistantMarkdown content={message.content} />
            ) : message.role === "assistant" ? (
              <TypingDots />
            ) : (
              <p className="whitespace-pre-wrap">{message.content}</p>
            )}
          </div>
        </article>
      ))}
    </div>
  );
}
