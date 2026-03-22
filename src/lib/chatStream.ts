import type { ChatStreamEvent } from "../types/chat";

const parseStreamLine = (line: string): ChatStreamEvent | null => {
  if (!line.trim()) {
    return null;
  }

  return JSON.parse(line) as ChatStreamEvent;
};

export async function consumeNdjsonStream(
  response: Response,
  onEvent: (event: ChatStreamEvent) => void
) {
  if (!response.body) {
    onEvent((await response.json()) as ChatStreamEvent);
    return;
  }

  const reader = response.body.getReader();
  const decoder = new TextDecoder();
  let buffer = "";

  while (true) {
    const { done, value } = await reader.read();

    if (done) {
      break;
    }

    buffer += decoder.decode(value, { stream: true });
    const lines = buffer.split("\n");
    buffer = lines.pop() ?? "";

    lines.forEach((line) => {
      const event = parseStreamLine(line);

      if (event) {
        onEvent(event);
      }
    });
  }

  buffer += decoder.decode();
  const trailingEvent = parseStreamLine(buffer);

  if (trailingEvent) {
    onEvent(trailingEvent);
  }
}
