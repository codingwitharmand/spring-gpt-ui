type ChatHeaderProps = {
  onReset: () => void;
};

export function ChatHeader({ onReset }: Readonly<ChatHeaderProps>) {
  return (
    <header className="flex h-14 items-center justify-between border-b border-black/8 px-4 sm:px-6">
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={onReset}
          className="rounded-xl border border-black/10 px-3 py-1.5 text-xs font-medium text-black/70 transition hover:bg-black/5 md:hidden"
        >
          New chat
        </button>
        <div>
          <p className="text-sm font-semibold text-black/85">Spring GPT</p>
          <p className="text-xs text-black/45">Understand the Spring Java ecosystem better</p>
        </div>
      </div>

      <div className="hidden rounded-full border border-black/10 bg-black/[0.03] px-3 py-1 text-xs text-black/55 sm:block">
        POST /chat
      </div>
    </header>
  );
}
