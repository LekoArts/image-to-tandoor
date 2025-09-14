import { createTool } from '@mastra/core/tools'
import { z } from 'zod'
import { tandoorFetch } from '../../utils'

async function getUnits() {
	const response = await tandoorFetch('unit')

	return response.results.map(unit => unit.name)
}

export const unitTool = createTool({
	id: 'unitTool',
	description: 'Get all available units for ingredients from Tandoor Recipes',
	inputSchema: z.object({}),
	outputSchema: z.array(z.string()),
	execute: async () => getUnits(),
})
