# Agent Development Guide

## Build & Development Commands
- `pnpm dev` - Start Mastra dev server
- `pnpm build` - Build the project
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint on all files
- `pnpm lint:fix` - Auto-fix linting issues
- No test commands configured - add tests as needed

## Code Style Guidelines
- **Language**: TypeScript with strict mode enabled
- **Module System**: ES modules (type: "module")
- **Formatting**: Tabs for indentation, single quotes, no semicolons
- **Linting**: Uses @antfu/eslint-config with formatters enabled
- **Imports**: Use named imports from packages, relative paths for local files
- **Naming**: camelCase for variables/functions, PascalCase for types/classes
- **Types**: Leverage TypeScript's strict typing, avoid `any`
- **Async**: Use async/await over promises
- **Error Handling**: Use try/catch blocks, log errors appropriately
- **File Structure**: Keep agents in src/mastra/agents/, tools in src/mastra/tools/

## Project Context
- Framework: Mastra for agent orchestration
- AI Provider: OpenAI via @ai-sdk/openai
- Node Version: >=20.9.0
- Package Manager: pnpm@10.15.0