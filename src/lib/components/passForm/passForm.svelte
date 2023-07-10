<script lang="ts">
	import { getTicketTypesFromAPI } from '$lib/api/enhancedPassesBackend';
	import { onMount } from 'svelte';
	function createPass(event: Event) {
		const formEl = event.target as HTMLFormElement;
		const data = new FormData(formEl);
		console.log(data.get('todo'));
	}

	let ticketTypes: string[] = ['boardingpass'];

	onMount(async () => {
		const ticketTypesData = await getTicketTypesFromAPI();
		ticketTypes = ticketTypes.concat(ticketTypesData.ticketTypes);
	});
</script>

<div class="passFormContent">
	<div class="passFormHeader">
		<h1 class="defaultFont">Create a pass</h1>
	</div>
	<form on:submit|preventDefault={createPass} method="POST" class="passForm">
		<div class="formInput">
			<label class="defaultFont" for="barcodeData">Barcode data</label>
			<input type="text" name="barcodeData" class="defaultFont" />
		</div>
		<div class="formInput">
			<label class="defaultFont" for="ticketType">Ticket type</label>
			<select name="ticketType">
				{#each ticketTypes as ticketType}
					<option value={ticketType}>{ticketType}</option>
				{/each}
			</select>
		</div>
		<button type="submit" class="defaultFont submitBtn">Create pass</button>
	</form>
</div>

<style>
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
		background-color: #000;
		color: #fff;
		font-size: 1.5rem;
		font-weight: 700;
		cursor: pointer;
	}
</style>
