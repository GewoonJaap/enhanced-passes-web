import type { TicketTypesAPIResponse } from '$lib/typeDef/apiResponses';
export async function getTicketTypesFromAPI(): Promise<TicketTypesAPIResponse> {
	const response = await fetch('https://enchanced-passes-api.mrproper.dev/ticket-types');
	const data = await response.json();
	return data;
}
