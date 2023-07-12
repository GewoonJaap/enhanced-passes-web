<script lang="ts">
	import { goto } from '$app/navigation';
	import { HomeRoute } from '$lib/const/routes';
	import { onMount } from 'svelte';
	import { setupLocale } from '$lib/locale/i18';
	import { _ } from 'svelte-i18n';

	setupLocale();

	onMount(async () => {
		await import('@lottiefiles/lottie-player');
	});
</script>

<div class="walletInfo">
	<hr />
	<lottie-player
		class="walletInfoLottie"
		autoplay={true}
		loop
		mode="normal"
		src="https://assets4.lottiefiles.com/private_files/lf30_pwaprrnl.json"
		speed="0.25"
	/>
	<div class="walletInfoText">
		<h2 class="headerText">{$_('HAVE_YOUR_ALREADY_TRIED_ANDROID_APP')}</h2>
		<p1 class="defaultFont">
			<!-- TEXT 1 -->
			{$_('WALLET_INFO_TEXT_1')}
			<br />
			<!-- TEXT 2 -->
			{$_('WALLET_INFO_TEXT_2')}
		</p1>
		<p1 class="defaultFont">
			<a
				href="https://play.google.com/store/apps/details?id=nl.gardensnakes.enhancedpasses"
				target="_blank"
				rel="noreferrer">{$_('DOWNLOAD_THE_APP_IN_THE_STORE')}</a
			>
			{$_('DOWNLOAD_THE_APP_IN_THE_STORE_2')}
		</p1>
	</div>

	<hr />

	<lottie-player
		class="walletInfoLottie"
		autoplay={true}
		loop
		mode="normal"
		src="https://assets10.lottiefiles.com/private_files/lf30_Jk3ls8.json"
		speed="0.25"
	/>
	<div class="walletInfoText">
		<h2 class="headerText">
			{$_('BENEFITS_OF_IMPORTING_PASS')}
			{new Date().getFullYear()}
		</h2>
		<p1 class="defaultFont">
			<!-- TEXT 3 -->
			{$_('WALLET_INFO_TEXT_3')}
			<br />
			<!-- TEXT 4 -->
			{$_('WALLET_INFO_TEXT_4')}
			<br />
			<!-- TEXT 5 -->
			{$_('WALLET_INFO_TEXT_5')}
		</p1>
		<p1 class="defaultFont">
			<!-- TEXT 6 -->
			{$_('WALLET_INFO_TEXT_6')}
			<br />
			<!-- TEXT 7 -->
			{$_('WALLET_INFO_TEXT_7')}
		</p1>
		<p1 class="defaultFont">
			<!-- TEXT 8 -->
			{$_('WALLET_INFO_TEXT_8')}
			<br />
			<!-- TEXT 9 -->
			{$_('WALLET_INFO_TEXT_9')}
		</p1>
		<p1 class="defaultFont">
			<!-- TEXT 10 -->
			{$_('WALLET_INFO_TEXT_10')}
		</p1>
	</div>
	<hr />
</div>

<style>
	.walletInfoLottie {
		height: 300px;
	}
	hr {
		width: 25%;
		border: 1px solid #000;
		margin-top: 5em;
	}
	.walletInfo {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		background-color: white;
	}

	.walletInfoText {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		background-color: white;
		margin-top: 2rem;
		width: 50%;
		text-overflow: clip;
	}

	p1 {
		font-size: 1.25rem;
		font-weight: 500;
		color: #000;
		margin: 0.5rem 0;
		text-align: center;
	}
	.headerText {
		font-size: 2rem;
		font-weight: 900;
		color: #000;
		margin: 0.5rem 0;
		text-align: center;
	}

	@media only screen and (max-width: 810px) {
		.walletInfoText {
			width: 90%;
		}
		.walletInfoLottie {
			height: 150px;
		}
	}
</style>
