<script lang="ts">
	import { createPass, getTicketTypesFromAPI } from '$lib/api/enhancedPassesBackend';
	import type { BarcodeAPIRequest } from '$lib/typeDef/apiRequests';
	import { onMount } from 'svelte';

	let ticketTypes: string[] = ['boardingpass'];
	let isLoading = false;
	let error = '';
	let lastPassUrl = '';

	async function generatePass(event: Event) {
		if (isLoading) return;
		isLoading = true;
		error = '';
		const formEl = event.target as HTMLFormElement;
		const data = new FormData(formEl);
		const barcodeData = data.get('barcodeData') as string;
		const ticketType = data.get('ticketType') as string;
		const requestData = {
			barcodeData: barcodeData,
			barcodeType: ticketType
		} as BarcodeAPIRequest;

		const barcodeResponse = await createPass(requestData);
		isLoading = false;

		if (barcodeResponse.message) {
			error = barcodeResponse.message;
			return;
		}
		window.open(barcodeResponse.cardUrl, '_blank');
		lastPassUrl = barcodeResponse.cardUrl;
	}

	onMount(async () => {
		//combine awaits
		const promiseResults = Promise.all([
			import('@lottiefiles/lottie-player'),
			getTicketTypesFromAPI()
		]);
		ticketTypes = ticketTypes.concat((await promiseResults)[1].ticketTypes);
	});
</script>

<div class="passFormContent">
	<div class="passFormHeader">
		<h1 class="defaultFont">{isLoading ? 'Creating pass...' : 'Create a new pass'}</h1>
	</div>
	<div class="errorField">
		{#if error}
			<p class="defaultFont error"><span class="bold">Something went wrong:</span> {error}</p>
		{/if}
	</div>
	<form on:submit|preventDefault={generatePass} method="POST" class="passForm">
		<div class="formInput">
			<label class="defaultFont" for="barcodeData">Barcode data</label>
			<input type="text" name="barcodeData" class="defaultFont" />
		</div>
		<div class="formInput">
			<label class="defaultFont" for="ticketType">Ticket type</label>
			<select name="ticketType">
				{#each ticketTypes as ticketType}
					<option value={ticketType}>{ticketType.toUpperCase()}</option>
				{/each}
			</select>
		</div>
		<button type="submit" class={`defaultFont submitBtn ${isLoading ? 'loading' : ''}`}>
			<div class="buttonContent">
				<span>{isLoading ? 'Creating pass' : 'Create pass'}</span>
				<lottie-player
					src="https://assets3.lottiefiles.com/packages/lf20_wfsunjgd.json"
					background="transparent"
					speed="1"
					style={`width: 2rem; height: 2rem; visibility: ${isLoading ? 'visible' : 'collapse'}`}
					loop
					autoplay
				/>
			</div>
		</button>
	</form>
	{#if lastPassUrl}
		<div class="lastPass">
			<p>Click <a target="_blank" href={lastPassUrl}>here</a> to add your last created pass.</p>
		</div>
	{/if}
</div>

<style>
	.loading {
		cursor: wait !important;
	}
	.error {
		color: red !important;
	}
	.passFormContent {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		margin-top: 2em;
	}
	.passFormHeader {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		margin-bottom: 1em;
	}
	.passFormHeader h1 {
		font-size: 2rem;
		font-weight: 700;
		color: #000;
		margin-bottom: 0.5em;
		font-family: 'Lato', sans-serif;
	}
	.formInput {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: center;
		margin-bottom: 1em;
	}
	.formInput label {
		font-size: 1rem;
		font-weight: 700;
		color: #000;
		margin-bottom: 0.5em;
		font-family: 'Lato', sans-serif;
		border-bottom: #000 1px solid;
	}
	.passForm {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		margin-top: 2em;
	}
	.submitBtn {
		margin-top: 1em;
		padding: 0.5em 1em;
		border-radius: 0.5em;
		border: none;
		background-color: rgb(0, 191, 255);
		color: black;
		font-size: 1.5rem;
		font-weight: 700;
		cursor: pointer;
	}

	.buttonContent {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.lastPass {
		margin-top: 1em;
	}
	.lastPass a {
		color: #000;
		text-decoration: underline;
	}
	.lastPass p {
		font-size: 1rem;
		font-weight: 700;
		color: #000;
		margin-bottom: 0.5em;
		font-family: 'Lato', sans-serif;
	}
</style>
