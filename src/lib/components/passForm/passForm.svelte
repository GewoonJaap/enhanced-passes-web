<script lang="ts">
	import { createPass, getTicketTypesFromAPI } from '$lib/api/enhancedPassesBackend';
	import type { BarcodeAPIRequest } from '$lib/typeDef/apiRequests';
	import WalletButtonImage from '$lib/images/wallet-button.png';
	import { onMount } from 'svelte';
	import { setupLocale } from '$lib/locale/i18';
	import { _ } from 'svelte-i18n';

	setupLocale();

	let ticketTypes: string[] = ['boardingpass'];
	let apiReady = false;
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
		apiReady = true;
	});

	function formatTypeName(typeName: string): string {
		return typeName
			.split('_')
			.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
			.join(' ');
	}
</script>

{#if apiReady}
	<div class="passFormContent">
		<div class="passFormHeader">
			<h1 class="defaultFont">{isLoading ? $_('CREATING_PASS') : $_('CREATE_A_NEW_PASS')}</h1>
		</div>
		<div class="errorField">
			{#if error}
				<p class="defaultFont error">
					<span class="bold">{$_('SOMETHING_WENT_WRONG')}:</span>
					{error}
				</p>
			{/if}
		</div>
		<form on:submit|preventDefault={generatePass} method="POST" class="passForm">
			<div class="formInput">
				<label class="defaultFont" for="barcodeData">{$_('BARCODE_DATA')}</label>
				<input
					type="text"
					name="barcodeData"
					placeholder={$_('BARCODE_DATA_HERE')}
					class="defaultFont"
				/>
			</div>
			<div class="formInput">
				<label class="defaultFont" for="ticketType">{$_('TICKET_TYPE')}</label>
				<select name="ticketType">
					{#each ticketTypes as ticketType}
						<option value={ticketType}>{formatTypeName(ticketType.toLocaleLowerCase())}</option>
					{/each}
				</select>
			</div>
			<button type="submit" class={`defaultFont submitBtn ${isLoading ? 'loading' : ''}`}>
				<div class="buttonContent">
					<span>{isLoading ? $_('CREATING_PASS') : $_('CREATE_PASS')}</span>
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
				<p>{$_('CLICK_BUTTON_TO_ADD_LAST_GENERATED_PASS')}</p>
				<a target="_blank" class="walletButton" href={lastPassUrl}
					><img
						class="walletButtonImage"
						src={WalletButtonImage}
						alt={$_('GOOGLE_WALLET_BUTTON_ALT')}
					/></a
				>
			</div>
		{/if}
	</div>
{:else}
	<div class="apiLoading">
		<h1 class="defaultFont">{$_('WAITING_FOR_HAMSTERS')}</h1>
		<lottie-player
			src="https://assets2.lottiefiles.com/packages/lf20_jk2naj.json"
			background="transparent"
			speed="1"
			style="width: 300px;"
			loop
			autoplay
		/>
	</div>
{/if}

<style>
	.walletButtonImage {
		height: 3rem;
		margin-left: 0.5em;
	}
	.apiLoading {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		margin-top: 2em;
	}

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
		width: 100%;
	}
	.formInput label {
		font-size: 1rem;
		font-weight: 700;
		color: #000;
		margin-bottom: 0.5em;
		font-family: 'Lato', sans-serif;
		border-bottom: #000 1px solid;
	}
	.formInput select,
	.formInput input {
		width: 100%;
		padding: 0.5em 0;
		font-size: 1rem;
		font-weight: 700;
		color: #000;
		font-family: 'Lato', sans-serif;
		background-color: transparent;
		border: none;
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
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-align: center;
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

	.walletButton {
		display: flex;
		align-items: center;
		justify-content: center;
		margin-top: 1em;
	}
</style>
