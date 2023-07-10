import type { TicketTypesAPIResponse, BarcodeAPIResponse } from '$lib/typeDef/apiResponses';
import type { BarcodeAPIRequest } from '$lib/typeDef/apiRequests';
export async function getTicketTypesFromAPI(): Promise<TicketTypesAPIResponse> {
	const response = await fetch('https://enchanced-passes-api.mrproper.dev/ticket-types');
	const data = await response.json();
	return data;
}

export async function createPass(requestData: BarcodeAPIRequest): Promise<BarcodeAPIResponse> {
	const options = {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(requestData)
	};

	const response = await fetch(
		'https://enchanced-passes-api.mrproper.dev/boarding-pass/barcode',
		options
	);
	const data = await response.json();
	return data;
}
