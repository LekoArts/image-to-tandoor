# image-to-tandoor

> Convert recipe images to structured JSON-LD format for Tandoor Recipes import

Upload an image of a recipe (e.g., from a cookbook page) and convert it to [`Recipe` JSON-LD](https://schema.org/recipe) format, ready for import into [Tandoor Recipes](https://tandoor.dev/).

## Features

- 📸 Converts recipe images to structured JSON-LD format
- 🔄 Integrates with Tandoor API for consistent units and ingredients
- 🌐 Built with [Mastra](https://mastra.ai/) AI agent framework
- 🏠 Runs locally via [Mastra Playground](https://mastra.ai/en/docs/server-db/local-dev-playground)
- 🇩🇪 Outputs recipes in German (configurable in [agent](./src/mastra/agents/recipe-agent.ts))

## Prerequisites

- Node.js >= 20.9.0
- OpenAI API key
- Tandoor Recipes instance (optional - see [Using without Tandoor](#using-without-tandoor))

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/LekoArts/image-to-tandoor.git
   cd image-to-tandoor
   ```

1. Install dependencies:

   ```bash
   pnpm install
   ```

1. Configure environment variables:

   ```bash
   cp .env.example .env
   ```

Edit `.env` with your credentials (see [Configuration](#configuration))

## Configuration

### Environment Variables

Create a `.env` file based on `.env.example`:

```env
OPENAI_API_KEY=your-api-key
TANDOOR_BEARER_TOKEN=your-tandoor-bearer-token
TANDOOR_URL=https://your-tandoor-instance.com
```

### Getting a Tandoor API Token

1. Log into your Tandoor instance
1. Navigate to `<your-tandoor-url>/settings/api`
1. Click "New" to create a new token
1. Select **read** scope (minimum required)
1. Copy the token to your `.env` file

## Usage

1. Start the Mastra development server:

   ```bash
   pnpm dev
   ```

1. Open the Mastra Playground in your browser (typically `http://localhost:4111`)

1. Upload a recipe image and ask the agent to convert it

1. Copy the resulting JSON-LD output

1. Import into Tandoor:
   - Go to your Tandoor instance
   - Navigate to the import section
   - Select JSON format
   - Paste the generated JSON-LD

## Using without Tandoor

While this project is designed to work with Tandoor, you can modify it for standalone use:

1. Edit `src/mastra/tools/food-tool.ts` to return a hardcoded list of ingredients
1. Edit `src/mastra/tools/unit-tool.ts` to return a hardcoded list of units
1. Remove the Tandoor API calls and environment variables

This allows the agent to work without a Tandoor instance while maintaining consistent ingredient and unit naming.

## Development

```bash
# Start development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Run linting
pnpm lint

# Fix linting issues
pnpm lint:fix
```

## How It Works

1. The agent receives a recipe image
1. It uses OpenAI's GPT-4 vision capabilities to extract recipe information
1. It fetches valid units and ingredients from your Tandoor instance
1. It converts and standardizes the recipe into JSON-LD format
1. The output follows Schema.org's Recipe type specification

## License

MIT
