import { suggestions } from "../constants/chat";

type EmptyStateProps = {
  onSuggestionClick: (prompt: string) => void;
};

export function EmptyState({ onSuggestionClick }: Readonly<EmptyStateProps>) {
  return (
    <div className="flex flex-1 flex-col items-center justify-center py-8">
      <div className="w-full max-w-3xl text-center">
        <p className="text-sm font-medium text-black/45">Spring GPT</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-black sm:text-4xl">
          What do you want to understand about Spring?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-black/55 sm:text-base">
          Ask about Boot, dependency injection, data access, Security, MVC, WebFlux, or testing.
          The UI stays in one screen and the chat thread carries the backend `chatId` forward
          automatically.
        </p>

        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          {suggestions.map((prompt) => (
            <button
              key={prompt}
              type="button"
              onClick={() => onSuggestionClick(prompt)}
              className="rounded-2xl border border-black/10 bg-[#f7f7f5] px-4 py-4 text-left text-sm leading-6 text-black/75 transition hover:border-black/20 hover:bg-[#f1f1ee]"
            >
              {prompt}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
