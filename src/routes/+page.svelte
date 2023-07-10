<script lang="ts">
	import SEO from '$lib/components/SEO/index.svelte';
	import Footer from '$lib/components/footer/footer.svelte';
	import WalletInfo from '$lib/components/homepage/walletInfo.svelte';
	import PassForm from '$lib/components/passForm/passForm.svelte';
	import { onMount } from 'svelte';
	const SEOTags = {
		metadescription:
			'Easily create (boarding)passes for Google Pay. No coding required. Create your pass in 5 minutes.',
		slug: '',
		title: ' Issuance - Create your Google Pay pass in 5 minutes'
	};
	onMount(async () => {
		await import('@lottiefiles/lottie-player');
	});
</script>

<SEO {...SEOTags} />
<div class="content">
	<div class="header">
		<h1>Enhanced Passes</h1>
		<span class="callToAction"
			>Create your (boarding)passes within 5 minutes. No coding required!</span
		>
		<lottie-player
			class="passLottie"
			autoplay={true}
			loop
			mode="normal"
			src="https://assets2.lottiefiles.com/packages/lf20_SNWfcuANoy.json"
			speed="0.25"
		/>
	</div>
	<hr />
	<PassForm />
	<WalletInfo />
</div>
<div class="footerComponent">
	<Footer />
</div>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		/* min-height: 100vh; */
		background-color: white;
	}
	.header {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		background-color: white;
	}

	.header span {
		font-size: 1.5rem;
		font-weight: 500;
		color: #000;
		margin: 0.5rem 0;
	}

	.header h1 {
		font-size: 3rem;
		font-weight: 900 !important;
		color: #000;
		margin: 0.5rem 0;
		margin-bottom: 0.5em !important;
	}

	.callToAction {
		font-size: 2rem !important;
		font-weight: 700;
		color: rgb(24, 24, 24);
		margin-bottom: 2em !important;
	}
	.passLottie {
		height: 150px;
	}
	hr {
		width: 25%;
		border: 1px solid #000;
		margin-top: 5em;
	}
</style>
