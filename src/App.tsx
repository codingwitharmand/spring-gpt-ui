import { useEffect, useRef } from "react";
import { ChatComposer } from "./components/ChatComposer";
import { ChatHeader } from "./components/ChatHeader";
import { EmptyState } from "./components/EmptyState";
import { MessageList } from "./components/MessageList";
import { Sidebar } from "./components/Sidebar";
import { useChat } from "./hooks/useChat";

function App() {
  const {
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
  } = useChat();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const messagesContainerRef = useRef<HTMLElement>(null);
  const hasConversation = messages.length > 1;

  useEffect(() => {
    const container = messagesContainerRef.current;

    if (!container) {
      return;
    }

    container.scrollTo({
      top: container.scrollHeight,
      behavior: "smooth"
    });
  }, [isSubmitting, messages]);

  return (
    <div className="h-screen overflow-hidden bg-[#f3f4f1] text-ink">
      <div className="flex h-full">
        <Sidebar chatId={chatId} onReset={resetChat} />

        <main className="flex min-w-0 flex-1 flex-col bg-[#ffffff]">
          <ChatHeader onReset={resetChat} />

          <section ref={messagesContainerRef} className="min-h-0 flex-1 overflow-y-auto">
            <div className="mx-auto flex min-h-full w-full max-w-4xl flex-col px-4 sm:px-6">
              {hasConversation ? (
                <MessageList messages={messages} />
              ) : (
                <EmptyState onSuggestionClick={setDraft} />
              )}
            </div>
          </section>

          <ChatComposer
            draft={draft}
            error={error}
            fileInputRef={fileInputRef}
            isSubmitting={isSubmitting}
            onDraftChange={setDraft}
            onFileSelection={(files) => setSelectedFiles(files ? Array.from(files) : [])}
            onSubmitMessage={() => sendMessage(draft)}
            selectedFiles={selectedFiles}
          />
        </main>
      </div>
    </div>
  );
}

export default App;
