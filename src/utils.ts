type Endpoints = 'unit' | 'food'

/**
 * A wrapper around fetch to make requests to the Tandoor Recipes API.
 * It automatically adds the Bearer token and base URL from environment variables.
 */
export async function tandoorFetch<T extends Endpoints>(
	endpoint: T,
	options?: RequestInit,
): Promise<T extends 'unit' ? UnitResponse : T extends 'food' ? FoodResponse : never> {
	const BASE_URL = process.env.TANDOOR_URL
	const BEARER_TOKEN = process.env.TANDOOR_BEARER_TOKEN

	if (!BASE_URL) {
		throw new Error('TANDOOR_URL is not set in environment variables')
	}

	if (!BEARER_TOKEN) {
		throw new Error('TANDOOR_BEARER_TOKEN is not set in environment variables')
	}

	const url = `${BASE_URL}/api/${endpoint}/`

	const response = await fetch(url, {
		...options,
		headers: {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${BEARER_TOKEN}`,
			...(options?.headers || {}),
		},
	})

	if (!response.ok) {
		const errorText = await response.text()
		throw new Error(`Error fetching ${url}: ${response.status} ${response.statusText} - ${errorText}`)
	}

	return response.json()
}

export interface UnitResponse {
	count: number
	next: string | null
	previous: string | null
	results: Array<{
		id: number
		name: string
		plural_name: string
		description: string
		base_unit: string
		open_data_slug: string
	}>
	timestamp: string
}

export interface FoodResponse {
	count: number
	next: string | null
	previous: string | null
	results: Array<{
		id: number
		name: string
		plural_name: string
		description: string
		shopping: string
		recipe: {
			id: number
			name: string
			url: string
		}
		url: string
		properties: Array<{
			id: number
			property_amount: number
			property_type: {
				id: number
				name: string
				unit: string
				description: string
				order: number
				open_data_slug: string
				fdc_id: number
			}
		}>
		properties_food_amount: number
		properties_food_unit: {
			id: number
			name: string
			plural_name: string
			description: string
			base_unit: string
			open_data_slug: string
		}
		fdc_id: number
		food_onhand: boolean
		supermarket_category: {
			id: number
			name: string
			description: string
			open_data_slug: string
		}
		parent: number
		numchild: number
		inherit_fields: Array<{
			id: number
			name: string
			field: string
		}>
		full_name: string
		ignore_shopping: boolean
		substitute: Array<{
			id: number
			name: string
			plural_name: string
		}>
		substitute_siblings: boolean
		substitute_children: boolean
		substitute_onhand: boolean
		child_inherit_fields: Array<{
			id: number
			name: string
			field: string
		}>
		open_data_slug: string
	}>
	timestamp: string
}
