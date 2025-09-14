import { createTool } from '@mastra/core/tools'
import { z } from 'zod'
import { tandoorFetch } from '../../utils'

async function getFoods() {
	const response = await tandoorFetch('food')

	return response.results.map(food => food.name)
}

export const foodTool = createTool({
	id: 'foodTool',
	description: 'Get all available foods from Tandoor Recipes',
	inputSchema: z.object({}),
	outputSchema: z.array(z.string()),
	execute: async () => getFoods(),
})
