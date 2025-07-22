<script lang="ts">
	import { createPass, getTicketTypesFromAPI } from '$lib/api/enhancedPassesBackend';
	import type { BarcodeAPIRequest } from '$lib/typeDef/apiRequests';
	import WalletButtonImage from '$lib/images/wallet-button.png';
	import { onMount } from 'svelte';
	import { setupLocale } from '$lib/locale/i18';
	import { _ } from 'svelte-i18n';
	import Select from 'svelte-select';
	import type { SvelteSelectType } from '$lib/typeDef/svelteSelectType';
	import { SUGGEST_PASS_TYPE_LINK } from '$lib/const/routes';

	setupLocale();

	let ticketTypes: string[] = ['boardingpass'];
	let ticketTypesSelectable: SvelteSelectType[] = [];
	let apiReady = false;
	let isLoading = false;
	let error = '';
	let lastPassUrl = '';
	let selectedTicketType: SvelteSelectType = { value: 'boardingpass', label: 'Boardingpass' };
	let barcodeDataInput: string = '';

	async function generatePass() {
		if (isLoading) return;
		isLoading = true;
		error = '';
		const requestData = {
			barcodeData: barcodeDataInput,
			barcodeType: selectedTicketType.value
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
		//sort alphabetically
		ticketTypes.sort((a, b) => a.localeCompare(b));
		ticketTypesSelectable = mapTicketTypesToSveleteSelect();
		apiReady = true;
	});

	function formatTypeName(typeName: string): string {
		return typeName
			.split('_')
			.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
			.join(' ');
	}

	function mapTicketTypesToSveleteSelect(): { value: string; label: string }[] {
		return ticketTypes.map((ticketType) => {
			return {
				value: ticketType,
				label: formatTypeName(ticketType.toLocaleLowerCase())
			};
		});
	}
</script>

{#if apiReady}
	<div class="pass-form-card">
		<div class="pass-form-header">
			<h1 class="pass-form-title">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="20"
					height="20"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="lucide lucide-qr-code icon"
					><rect width="4" height="4" x="2" y="2" /><rect width="4" height="4" x="16" y="2" /><rect
						width="4"
						height="4"
						x="2"
						y="16"
					/><path d="M21 16h-3a2 2 0 0 0-2 2v3" /><path d="M21 21v.01" /><path
						d="M12 7v3a2 2 0 0 1-2 2H7"
					/><path d="M3 12h.01" /><path d="M12 3h.01" /><path d="M12 12h.01" /><path
						d="M16 6v.01"
					/><path d="M18 6v.01" /><path d="M18 3v.01" /><path d="M6 18v.01" /><path
						d="M6 21v.01"
					/><path d="M3 18v.01" /><path d="M7 12v.01" /><path d="M12 17v.01" /><path
						d="M17 12v.01"
					/><path d="M17 17v.01" /><path d="M17 21v.01" /><path d="M21 12v.01" /></svg
				>
				<span>{$_('CREATE_A_NEW_PASS')}</span>
			</h1>
		</div>
		<div class="pass-form-content">
			<div class="error-field">
				{#if error}
					<p class="error-message">
						<span class="bold">{$_('SOMETHING_WENT_WRONG')}:</span>
						{error}
					</p>
				{/if}
			</div>
			<div class="form-group">
				<label for="passType" class="form-label">{$_('PASS_TYPE')}</label>
				<Select
					items={ticketTypesSelectable}
					searchable={true}
					bind:value={selectedTicketType}
					class="form-select"
				/>
				<p class="form-hint">
					<a href={SUGGEST_PASS_TYPE_LINK} target="_blank" rel="noopener noreferrer"
						>{$_('SUGGEST_PASS_TYPE_LINK')}</a
					>
				</p>
			</div>

			<div class="form-group">
				<label for="barcodeData" class="form-label">{$_('BARCODE_QR_DATA')} *</label>
				<input
					type="text"
					name="barcodeData"
					placeholder={$_('BARCODE_QR_PLACEHOLDER')}
					class="form-input"
					bind:value={barcodeDataInput}
				/>
				<p class="form-hint">{$_('BARCODE_QR_HINT')}</p>
			</div>

			<button on:click={generatePass} disabled={isLoading} class="submit-button">
				{#if isLoading}
					<div class="loading-content">
						<div class="spinner" />
						<span>{$_('CREATING_PASS_MESSAGE')}</span>
					</div>
				{:else}
					<div class="button-content">
						{$_('CREATE_PASS')}
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="20"
							height="20"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="lucide lucide-arrow-right arrow-icon"
							><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg
						>
					</div>
				{/if}
			</button>

			{#if isLoading}
				<div class="generating-message">
					{$_('GENERATING_MESSAGE')}
				</div>
			{/if}

			{#if lastPassUrl}
				<div class="last-pass-info">
					<p>{$_('CLICK_BUTTON_TO_ADD_LAST_GENERATED_PASS')}</p>
					<a target="_blank" class="wallet-button" href={lastPassUrl}
						><img
							class="wallet-button-image"
							src={WalletButtonImage}
							alt={$_('GOOGLE_WALLET_BUTTON_ALT')}
						/></a
					>
				</div>
			{/if}
		</div>
	</div>
{:else}
	<div class="api-loading">
		<h1 class="api-loading-title">{$_('WAITING_FOR_HAMSTERS')}</h1>
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
	.pass-form-card {
		max-width: 512px; /* max-w-lg */
		margin-left: auto;
		margin-right: auto;
		box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1); /* shadow-2xl */
		border: 0;
		border-radius: 0.5rem; /* rounded-lg */
	}

	.pass-form-header {
		background: linear-gradient(
			to right,
			#2563eb,
			#9333ea
		); /* bg-gradient-to-r from-blue-600 to-purple-600 */
		color: white;
		border-top-left-radius: 0.5rem; /* rounded-t-lg */
		border-top-right-radius: 0.5rem; /* rounded-t-lg */
		padding: 1rem; /* p-4 */
	}

	.pass-form-title {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.5rem; /* space-x-2 */
		font-size: 1.25rem; /* text-xl */
		font-weight: bold;
	}

	.pass-form-content {
		padding: 2rem; /* p-8 */
		display: flex;
		flex-direction: column;
		gap: 1.5rem; /* space-y-6 */
	}

	.error-field {
		margin-bottom: 1rem;
	}

	.error-message {
		color: #ef4444; /* text-red-500 */
		font-size: 0.875rem; /* text-sm */
	}

	.bold {
		font-weight: bold;
	}

	.form-group {
		display: flex;
		flex-direction: column;
	}

	.form-label {
		font-size: 0.875rem; /* text-sm */
		font-weight: 500; /* font-medium */
		color: #374151; /* text-gray-700 */
		margin-bottom: 0.5rem; /* mb-2 */
		display: block;
	}

	.form-input,
	.form-select {
		width: 100%;
		padding: 0.5rem; /* p-2 */
		border: 1px solid #d1d5db; /* border border-gray-300 */
		border-radius: 0.375rem; /* rounded-md */
		font-size: 0.875rem; /* text-sm */
	}

	.form-input {
		font-family: monospace; /* font-mono */
	}

	.form-hint {
		font-size: 0.75rem; /* text-xs */
		color: #6b7280; /* text-gray-500 */
		margin-top: 0.25rem; /* mt-1 */
	}

	.submit-button {
		width: 100%;
		background: linear-gradient(
			to right,
			#2563eb,
			#9333ea
		); /* bg-gradient-to-r from-blue-600 to-purple-600 */
		color: white;
		height: 3rem; /* h-12 */
		font-size: 1.125rem; /* text-lg */
		font-weight: 600; /* font-semibold */
		border-radius: 0.375rem; /* rounded-md */
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		border: none;
		transition: background-color 0.3s ease;
	}

	.submit-button:hover {
		background: linear-gradient(
			to right,
			#1d4ed8,
			#7e22ce
		); /* hover:from-blue-700 hover:to-purple-700 */
	}

	.submit-button:disabled {
		opacity: 0.7;
		cursor: not-allowed;
	}

	.loading-content {
		display: flex;
		align-items: center;
		gap: 0.5rem; /* space-x-2 */
	}

	.spinner {
		width: 1rem; /* w-4 */
		height: 1rem; /* h-4 */
		border: 2px solid white;
		border-top-color: transparent;
		border-radius: 50%;
		animation: spin 1s linear infinite;
	}

	@keyframes spin {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}

	.button-content {
		display: flex;
		align-items: center;
	}

	.arrow-icon {
		margin-left: 0.5rem; /* ml-2 */
		width: 1.25rem; /* w-5 */
		height: 1.25rem; /* h-5 */
	}

	.generating-message {
		text-align: center;
		font-size: 0.875rem; /* text-sm */
		color: #4b5563; /* text-gray-600 */
	}

	.last-pass-info {
		margin-top: 1rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-align: center;
	}

	.last-pass-info p {
		font-size: 1rem;
		font-weight: 400; /* Changed from 700 (bold) to 400 (normal) */
		color: #4b5563; /* Changed from #000 (black) to a softer gray */
		margin-bottom: 0.5em;
	}

	a {
		text-decoration: none;
	}

	.wallet-button {
		display: flex;
		align-items: center;
		justify-content: center;
		margin-top: 1rem;
	}

	.wallet-button-image {
		height: 3rem;
	}

	.api-loading {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		margin-top: 2rem;
	}

	.api-loading-title {
		font-size: 1.5rem; /* text-2xl */
		font-weight: bold;
		color: #1f2937; /* text-gray-900 */
	}

	.icon {
		color: currentColor; /* Ensure icons inherit color */
	}
</style>
