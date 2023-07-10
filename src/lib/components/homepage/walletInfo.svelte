<script lang="ts">
	import { goto } from '$app/navigation';
	import { HomeRoute } from '$lib/const/routes';
	import { onMount } from 'svelte';
	onMount(async () => {
		await import('@lottiefiles/lottie-player');
	});
</script>

<div class="proxyInfo">
	<hr />
	<lottie-player
		class="proxyInfoLottie"
		autoplay={true}
		loop
		mode="normal"
		src="https://assets10.lottiefiles.com/private_files/lf30_Jk3ls8.json"
		speed="0.25"
	/>
	<div class="proxyInfoText">
		<h2 class="headerText">
			The benefits of import your passes into Google Wallet in {new Date().getFullYear()}
		</h2>
		<p1 class="defaultFont">
			Enhanced Passes, your ultimate solution for hassle-free ticket management!
			<br />
			In today's fast-paced world, having a convenient and secure way to store your boarding passes and
			event tickets is more crucial than ever.
			<br />That's where Enhanced Passes comes to the rescue, empowering you to import and organize
			your tickets seamlessly into your Google Wallet using a simple barcode.
		</p1>
		<p1 class="defaultFont"
			>Why hassle with carrying paper tickets or searching through emails to find your passes when
			you can have everything conveniently stored in one secure location?
			<br />
			Enhanced Passes streamlines the process by allowing you to effortlessly import your boarding passes
			and event tickets directly into your Google Wallet with just a scan of the barcode. It's quick,
			efficient, and eliminates the need for cluttered physical or digital files.
		</p1>
		<p1 class="defaultFont">
			Security is paramount when it comes to storing your tickets, and Enhanced Passes understands
			this concern.
			<br />
			Rest assured that our website employs the latest encryption technology to safeguard your data.
			Your privacy is our top priority, and we take every precaution to ensure that your information
			remains confidential and protected.
		</p1>
		<p1 class="defaultFont">
			Enhanced Passes is your reliable companion for stress-free ticket management. Say goodbye to
			the inconvenience of paper tickets and scattered digital files. Embrace the future with the
			convenience and security of Google Wallet integration
		</p1>
	</div>
	<hr />
</div>

<style>
	.proxyInfoLottie {
		height: 300px;
	}
	hr {
		width: 25%;
		border: 1px solid #000;
		margin-top: 5em;
	}
	.proxyInfo {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		background-color: white;
	}

	.proxyInfoText {
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
	}

	@media only screen and (max-width: 810px) {
		.proxyInfoText {
			width: 90%;
		}
		.proxyInfoLottie {
			height: 150px;
		}
	}
</style>
