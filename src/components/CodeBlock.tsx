import { useState } from "react";

type CodeBlockProps = {
  code: string;
  className?: string;
};

export function CodeBlock({ code, className }: Readonly<CodeBlockProps>) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="markdown-pre">
      <button type="button" onClick={handleCopy} className="copy-code-button">
        {copied ? "Copied" : "Copy code"}
      </button>
      <pre className="m-0">
        <code className={`block font-mono text-sm leading-6 text-white ${className ?? ""}`.trim()}>
          {code}
        </code>
      </pre>
    </div>
  );
}
