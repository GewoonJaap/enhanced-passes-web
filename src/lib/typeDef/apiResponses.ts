export interface TicketTypesAPIResponse {
	ticketTypes: string[];
}

export interface BarcodeAPIResponse {
	cardUrl: string;
	jwt: string;
	message?: string;
}
