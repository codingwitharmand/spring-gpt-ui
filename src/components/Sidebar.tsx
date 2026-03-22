import { springTopics } from "../constants/chat";

type SidebarProps = {
  chatId: string | null;
  onReset: () => void;
};

export function Sidebar({ chatId, onReset }: SidebarProps) {
  return (
    <aside className="hidden h-full w-72 flex-col bg-[#171717] p-3 text-white md:flex">
      <button
        type="button"
        onClick={onReset}
        className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-left transition hover:bg-white/10"
      >
        <div>
          <p className="text-sm font-medium">New chat</p>
          <p className="mt-1 text-xs text-white/55">Start a fresh Spring GPT session</p>
        </div>
        <span className="text-lg leading-none text-white/70">+</span>
      </button>

      <div className="mt-5 rounded-3xl border border-white/10 bg-white/5 p-5">
        <p className="text-[11px] uppercase tracking-[0.24em] text-white/45">Spring GPT</p>
        <h1 className="mt-3 text-2xl font-semibold leading-tight">
          Spring help with a cleaner chat layout
        </h1>
        <p className="mt-3 text-sm leading-6 text-white/65">
          Ask architecture questions, compare modules, or unpack annotations and runtime behavior
          without leaving the conversation.
        </p>
      </div>

      <div className="mt-4 space-y-2">
        {springTopics.map((topic) => (
          <div
            key={topic}
            className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/75"
          >
            {topic}
          </div>
        ))}
      </div>

      <div className="mt-auto rounded-3xl border border-white/10 bg-black/40 p-4">
        <p className="text-[11px] uppercase tracking-[0.24em] text-white/40">Session</p>
        <p className="mt-3 break-all font-mono text-xs leading-5 text-white/70">
          {chatId ?? "Created after the first backend reply"}
        </p>
      </div>
    </aside>
  );
}
