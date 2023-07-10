export interface TicketTypesAPIResponse {
	ticketTypes: string[];
}

export interface barcodeAPIResponse {
	cardUrl: string;
	jwt: string;
	message?: string;
}
