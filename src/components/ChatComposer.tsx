import { FormEvent, KeyboardEvent, RefObject } from "react";

type ChatComposerProps = {
  draft: string;
  error: string | null;
  fileInputRef: RefObject<HTMLInputElement>;
  isSubmitting: boolean;
  onDraftChange: (value: string) => void;
  onFileSelection: (files: FileList | null) => void;
  onSubmitMessage: () => Promise<void>;
  selectedFiles: File[];
};

export function ChatComposer({
  draft,
  error,
  fileInputRef,
  isSubmitting,
  onDraftChange,
  onFileSelection,
  onSubmitMessage,
  selectedFiles
}: Readonly<ChatComposerProps>) {
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await onSubmitMessage();
  };

  const handleKeyDown = async (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      await onSubmitMessage();
    }
  };

  return (
    <footer className="border-t border-black/8 bg-white px-4 pb-4 pt-3 sm:px-6 sm:pb-5">
      <form onSubmit={handleSubmit} className="mx-auto w-full max-w-3xl">
        {selectedFiles.length > 0 ? (
          <div className="mb-3 flex flex-wrap gap-2">
            {selectedFiles.map((file) => (
              <span
                key={`${file.name}-${file.size}`}
                className="rounded-full border border-black/10 bg-[#f7f7f5] px-3 py-1 text-xs text-black/65"
              >
                {file.name}
              </span>
            ))}
          </div>
        ) : null}

        <div className="rounded-[28px] border border-black/10 bg-[#f7f7f5] p-2 shadow-soft">
          <textarea
            value={draft}
            onChange={(event) => onDraftChange(event.target.value)}
            onKeyDown={handleKeyDown}
            rows={3}
            placeholder="Message Spring GPT"
            className="max-h-36 min-h-[72px] w-full resize-none border-0 bg-transparent px-3 py-2 text-[15px] leading-6 text-black outline-none placeholder:text-black/35"
          />

          <div className="flex items-center justify-between gap-3 border-t border-black/8 px-2 pt-2">
            <div className="flex items-center gap-2 text-xs text-black/50">
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                disabled={isSubmitting}
                className="rounded-full border border-black/10 bg-white px-3 py-2 transition hover:bg-black/5 disabled:cursor-not-allowed disabled:opacity-50"
              >
                Attach
              </button>
              <span className="hidden sm:inline">Enter to send</span>
            </div>

            <button
              type="submit"
              disabled={isSubmitting || !draft.trim()}
              className="rounded-full bg-[#171717] px-4 py-2 text-sm font-medium text-white transition hover:bg-black disabled:cursor-not-allowed disabled:bg-black/20"
            >
              {isSubmitting ? "Thinking..." : "Send"}
            </button>
          </div>
        </div>

        {error ? (
          <p className="mt-3 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
            {error}
          </p>
        ) : null}

        <input
          ref={fileInputRef}
          type="file"
          multiple
          onChange={(event) => onFileSelection(event.target.files)}
          className="hidden"
        />
      </form>
    </footer>
  );
}
