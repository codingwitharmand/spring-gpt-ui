import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { CodeBlock } from "./CodeBlock";

type AssistantMarkdownProps = {
  content: string;
};

export function AssistantMarkdown({ content }: AssistantMarkdownProps) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      className="markdown-body"
      components={{
        a: ({ node: _node, ...props }) => (
          <a
            {...props}
            target="_blank"
            rel="noreferrer"
            className="font-medium text-black underline decoration-black/30 underline-offset-4 transition hover:decoration-black"
          />
        ),
        pre: ({ node: _node, ...props }) => <>{props.children}</>,
        code: ({ className, children, ...props }) => {
          const text = String(children).replace(/\n$/, "");
          const isBlock = Boolean(className) || text.includes("\n");

          if (!isBlock) {
            return (
              <code
                {...props}
                className="rounded-md bg-black/[0.06] px-1.5 py-0.5 font-mono text-[0.9em] text-black"
              >
                {text}
              </code>
            );
          }

          return <CodeBlock code={text} className={className} />;
        }
      }}
    >
      {content}
    </ReactMarkdown>
  );
}
