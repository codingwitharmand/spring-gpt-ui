# Spring GPT UI

A modern, responsive web interface for Spring GPT, built with React, Vite, and Tailwind CSS. This application provides a seamless chat experience with streaming support, markdown rendering, and file upload capabilities.

## Features

- **Streaming Chat Interface**: Real-time response streaming using NDJSON.
- **Markdown Support**: Rich text rendering including code blocks with syntax highlighting.
- **File Uploads**: Support for sending files along with chat queries.
- **Responsive Design**: Optimized for both desktop and mobile devices.
- **Dark/Light Mode**: Styled with a clean, modern aesthetic.
- **Spring Framework Expertise**: Pre-configured suggestions for common Spring Framework topics.

## Tech Stack

- **Framework**: [React 18](https://reactjs.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Markdown**: [react-markdown](https://github.com/remarkjs/react-markdown)
- **Language**: [TypeScript](https://www.typescriptlang.org/)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/codingwitharmand/spring-gpt-ui.git
   cd spring-gpt-ui
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure environment variables:
   Create a `.env` file in the root directory (you can use `.env.example` as a template):
   ```env
   VITE_API_URL=http://your-spring-gpt-backend-url
   ```

### Running the Application

- **Development Mode**:
  ```bash
  npm run dev
  ```
  The app will be available at `http://localhost:5173`.

- **Build for Production**:
  ```bash
  npm run build
  ```

- **Preview Production Build**:
  ```bash
  npm run preview
  ```

## Project Structure

- `src/components`: UI components (Sidebar, MessageList, CodeBlock, etc.)
- `src/hooks`: Custom React hooks (e.g., `useChat` for state management)
- `src/lib`: Utility functions and stream consumption logic
- `src/constants`: Configuration and static data
- `src/types`: TypeScript interfaces and types

## License

No license.
