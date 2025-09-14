import { Mastra } from '@mastra/core/mastra'
import { LibSQLStore } from '@mastra/libsql'
import { PinoLogger } from '@mastra/loggers'
import { recipeAgent } from './agents/recipe-agent'
import 'dotenv/config'

export const mastra = new Mastra({
	workflows: { },
	agents: { recipeAgent },
	storage: new LibSQLStore({
		url: ':memory:',
	}),
	logger: new PinoLogger({
		name: 'Mastra',
		level: 'info',
	}),
})
