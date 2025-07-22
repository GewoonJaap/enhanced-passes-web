<script lang="ts">
	import { _ } from 'svelte-i18n';
	import PassForm from '$lib/components/passForm/passForm.svelte';
	import WalletInfo from '$lib/components/homepage/walletInfo.svelte';
	import SEO from '$lib/components/SEO/index.svelte';
	import { CREATOR_GITHUB_LINK, SUGGEST_PASS_TYPE_LINK } from '$lib/const/routes';
</script>

<SEO
	title="Enhanced Passes"
	description="Easily create and share (boarding) passes for Google Wallet. Make your digital pass in 5 minutes - no code needed!"
	slug=""
	keywords="boarding pass, digital wallet, google wallet, apple wallet, passes, tickets, qr code, travel, digital passes, mobile wallet"
/>

<div class="page-container">
	<!-- Navigation -->
	<nav class="navbar">
		<div class="navbar-content">
			<div class="navbar-brand">
				<div class="logo-wrapper">
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
						class="lucide lucide-smartphone logo-icon"
						><rect width="14" height="20" x="5" y="2" rx="2" ry="2" /><path d="M12 18h.01" /></svg
					>
				</div>
				<span class="brand-text"> Enhanced Passes </span>
			</div>
			<div class="navbar-actions" />
		</div>
	</nav>

	<!-- Hero Section -->
	<section class="hero-section">
		<div class="hero-content">
			<span class="hero-badge"> 🎫 Maak je digitale pas in 5 minuten </span>
			<h1 class="hero-title">Enhanced Passes</h1>
			<p class="hero-subtitle">Maak je boardingpas binnen 5 minuten. Geen code nodig!</p>

			<!-- Main Pass Creator Card -->
			<PassForm />
		</div>
	</section>

	<!-- How it works -->
	<section class="how-it-works-section">
		<div class="section-content">
			<div class="section-header">
				<h2 class="section-title">Hoe werkt het?</h2>
				<p class="section-subtitle">In 3 eenvoudige stappen naar je digitale pas</p>
			</div>

			<div class="grid-container">
				<div class="grid-item">
					<div class="icon-wrapper blue">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="32"
							height="32"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="lucide lucide-qr-code icon"
							><rect width="4" height="4" x="2" y="2" /><rect
								width="4"
								height="4"
								x="16"
								y="2"
							/><rect width="4" height="4" x="2" y="16" /><path
								d="M21 16h-3a2 2 0 0 0-2 2v3"
							/><path d="M21 21v.01" /><path d="M12 7v3a2 2 0 0 1-2 2H7" /><path
								d="M3 12h.01"
							/><path d="M12 3h.01" /><path d="M12 12h.01" /><path d="M16 6v.01" /><path
								d="M18 6v.01"
							/><path d="M18 3v.01" /><path d="M6 18v.01" /><path d="M6 21v.01" /><path
								d="M3 18v.01"
							/><path d="M7 12v.01" /><path d="M12 17v.01" /><path d="M17 12v.01" /><path
								d="M17 17v.01"
							/><path d="M17 21v.01" /><path d="M21 12v.01" /></svg
						>
					</div>
					<h3 class="item-title">1. Voer barcode in</h3>
					<p class="item-description">
						Scan of typ de barcode/QR code van je papieren ticket of boarding pass
					</p>
				</div>

				<div class="grid-item">
					<div class="icon-wrapper purple">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="32"
							height="32"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="lucide lucide-zap icon"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg
						>
					</div>
					<h3 class="item-title">2. Automatische generatie</h3>
					<p class="item-description">
						Onze technologie maakt automatisch een mooie digitale pas voor je
					</p>
				</div>

				<div class="grid-item">
					<div class="icon-wrapper green">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="32"
							height="32"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="lucide lucide-download icon"
							><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline
								points="7 10 12 15 17 10"
							/><line x1="12" x2="12" y1="15" y2="3" /></svg
						>
					</div>
					<h3 class="item-title">3. Toevoegen aan wallet</h3>
					<p class="item-description">
						Download direct naar Apple Wallet of Google Wallet - altijd bij de hand!
					</p>
				</div>
			</div>
		</div>
	</section>

	<!-- Mobile App Promotion and Benefits Section will be handled by WalletInfo component -->
	<WalletInfo />

	<!-- Footer -->
	<footer class="footer">
		<div class="footer-content">
			<div class="footer-brand">
				<div class="logo-wrapper">
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
						class="lucide lucide-smartphone logo-icon"
						><rect width="14" height="20" x="5" y="2" rx="2" ry="2" /><path d="M12 18h.01" /></svg
					>
				</div>
				<span class="brand-text">Enhanced Passes</span>
			</div>

			<p class="footer-text">© 2025 - Enhanced Passes</p>
			<p class="footer-text small">
				Gemaakt met ❤️ door{' '}
				<a href={CREATOR_GITHUB_LINK} target="_blank" rel="noopener noreferrer" class="footer-link">
					Jaap
				</a>
			</p>
			<p class="footer-text extra-small">
				<a href={SUGGEST_PASS_TYPE_LINK} class="footer-link">
					Een nieuwe collectieve voorstelling
				</a>
			</p>
		</div>
	</footer>
</div>

<style>
	.page-container {
		min-height: 100vh;
		background: linear-gradient(
			to bottom right,
			#eff6ff,
			#ffffff,
			#f3e8ff
		); /* from-blue-50 via-white to-purple-50 */
	}

	/* Navigation */
	.navbar {
		border-bottom: 1px solid #e5e7eb; /* border-b */
		background-color: rgba(255, 255, 255, 0.8); /* bg-white/80 */
		backdrop-filter: blur(8px); /* backdrop-blur-md */
		position: sticky;
		top: 0;
		z-index: 50;
	}

	.navbar-content {
		max-width: 1280px; /* max-w-6xl */
		margin-left: auto;
		margin-right: auto;
		padding-left: 1rem; /* px-4 */
		padding-right: 1rem; /* px-4 */
		height: 4rem; /* h-16 */
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.navbar-brand {
		display: flex;
		align-items: center;
		gap: 0.5rem; /* space-x-2 */
	}

	.logo-wrapper {
		width: 2rem; /* w-8 */
		height: 2rem; /* h-8 */
		background: linear-gradient(
			to right,
			#2563eb,
			#9333ea
		); /* bg-gradient-to-r from-blue-600 to-purple-600 */
		border-radius: 0.5rem; /* rounded-lg */
		display: flex;
		align-items: center;
		justify-content: center;
		transform: rotate(45deg);
	}

	.logo-icon {
		color: white;
		transform: rotate(-45deg);
	}

	.brand-text {
		font-size: 1.25rem; /* text-xl */
		font-weight: bold;
		background: linear-gradient(
			to right,
			#2563eb,
			#9333ea
		); /* bg-gradient-to-r from-blue-600 to-purple-600 */
		-webkit-background-clip: text;
		background-clip: text;
		color: transparent;
	}

	.navbar-actions {
		display: flex;
		align-items: center;
		gap: 1rem; /* space-x-4 */
	}

	.nav-button {
		padding: 0.5rem 1rem; /* px-4 py-2 */
		font-size: 0.875rem; /* text-sm */
		font-weight: 500; /* font-medium */
		border-radius: 0.375rem; /* rounded-md */
		border: 1px solid #d1d5db; /* border border-gray-300 */
		background-color: white;
		color: #374151; /* text-gray-700 */
		box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05); /* shadow-sm */
		cursor: pointer;
	}

	.nav-button:hover {
		background-color: #f9fafb; /* hover:bg-gray-50 */
	}

	/* Hero Section */
	.hero-section {
		position: relative;
		overflow: hidden;
		padding-top: 4rem; /* py-16 */
		padding-bottom: 4rem; /* py-16 */
	}

	.hero-content {
		max-width: 896px; /* max-w-4xl */
		margin-left: auto;
		margin-right: auto;
		padding-left: 1rem; /* px-4 */
		padding-right: 1rem; /* px-4 */
		text-align: center;
	}

	.hero-badge {
		display: inline-flex;
		align-items: center;
		padding-left: 0.75rem; /* px-3 */
		padding-right: 0.75rem; /* px-3 */
		padding-top: 0.125rem; /* py-0.5 */
		padding-bottom: 0.125rem; /* py-0.5 */
		border-radius: 9999px; /* rounded-full */
		font-size: 0.875rem; /* text-sm */
		font-weight: 500; /* font-medium */
		background: linear-gradient(
			to right,
			#e0f2fe,
			#f3e8ff
		); /* bg-gradient-to-r from-blue-100 to-purple-100 */
		color: #1d4ed8; /* text-blue-700 */
		border: 1px solid #bfdbfe; /* border-blue-200 */
		margin-bottom: 1.5rem; /* mb-6 */
	}

	.hero-title {
		font-size: 2.25rem; /* text-4xl */
		line-height: 2.5rem; /* leading-tight */
		font-weight: bold;
		color: #1f2937; /* text-gray-900 */
		margin-bottom: 1rem; /* mb-4 */
	}

	@media (min-width: 768px) {
		/* md */
		.hero-title {
			font-size: 3rem; /* md:text-5xl */
		}
	}

	.hero-subtitle {
		font-size: 1.25rem; /* text-xl */
		color: #4b5563; /* text-gray-600 */
		margin-bottom: 3rem; /* mb-12 */
		max-width: 48rem; /* max-w-2xl */
		margin-left: auto;
		margin-right: auto;
	}

	/* How it works */
	.how-it-works-section {
		padding-top: 4rem; /* py-16 */
		padding-bottom: 4rem; /* py-16 */
		background-color: white;
	}

	.section-content {
		max-width: 1280px; /* max-w-6xl */
		margin-left: auto;
		margin-right: auto;
		padding-left: 1rem; /* px-4 */
		padding-right: 1rem; /* px-4 */
	}

	.section-header {
		text-align: center;
		margin-bottom: 3rem; /* mb-12 */
	}

	.section-title {
		font-size: 1.875rem; /* text-3xl */
		font-weight: bold;
		color: #1f2937; /* text-gray-900 */
		margin-bottom: 1rem; /* mb-4 */
	}

	.section-subtitle {
		font-size: 1.125rem; /* text-lg */
		color: #4b5563; /* text-gray-600 */
	}

	.grid-container {
		display: grid;
		gap: 2rem; /* gap-8 */
	}

	@media (min-width: 768px) {
		/* md */
		.grid-container {
			grid-template-columns: repeat(3, minmax(0, 1fr)); /* md:grid-cols-3 */
		}
	}

	.grid-item {
		text-align: center;
	}

	.icon-wrapper {
		width: 4rem; /* w-16 */
		height: 4rem; /* h-16 */
		border-radius: 1rem; /* rounded-2xl */
		display: flex;
		align-items: center;
		justify-content: center;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 1.5rem; /* mb-6 */
	}

	.icon-wrapper.blue {
		background: linear-gradient(to right, #3b82f6, #2563eb); /* from-blue-500 to-blue-600 */
	}

	.icon-wrapper.purple {
		background: linear-gradient(to right, #9333ea, #7c3aed); /* from-purple-500 to-purple-600 */
	}

	.icon-wrapper.green {
		background: linear-gradient(to right, #22c55e, #16a34a); /* from-green-500 to-green-600 */
	}

	.icon {
		color: white;
	}

	.item-title {
		font-size: 1.25rem; /* text-xl */
		font-weight: 600; /* font-semibold */
		margin-bottom: 0.75rem; /* mb-3 */
	}

	.item-description {
		color: #4b5563; /* text-gray-600 */
		line-height: 1.625; /* leading-relaxed */
	}

	/* Footer */
	.footer {
		background-color: #1f2937; /* bg-gray-900 */
		color: white;
		padding-top: 2rem; /* py-8 */
		padding-bottom: 2rem; /* py-8 */
	}

	.footer-content {
		max-width: 1280px; /* max-w-6xl */
		margin-left: auto;
		margin-right: auto;
		padding-left: 1rem; /* px-4 */
		padding-right: 1rem; /* px-4 */
		text-align: center;
	}

	.footer-brand {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.5rem; /* space-x-2 */
		margin-bottom: 1rem; /* mb-4 */
	}

	.footer-brand .logo-wrapper {
		transform: rotate(45deg);
	}

	.footer-brand .logo-icon {
		transform: rotate(-45deg);
	}

	.footer-brand .brand-text {
		font-size: 1.25rem; /* text-xl */
		font-weight: bold;
		color: white;
		background: none; /* Override gradient for footer */
		-webkit-background-clip: unset;
		background-clip: unset;
	}

	.footer-text {
		color: #9ca3af; /* text-gray-400 */
		margin-bottom: 1rem; /* mb-4 */
	}

	.footer-text.small {
		font-size: 0.875rem; /* text-sm */
	}

	.footer-text.extra-small {
		font-size: 0.75rem; /* text-xs */
		margin-top: 0.5rem; /* mt-2 */
	}

	a {
		text-decoration: none;
	}

	.footer-link {
		color: #60a5fa; /* text-blue-400 */
		transition-property: color;
		transition-duration: 150ms;
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
	}

	.footer-link:hover {
		color: #93c5fd; /* hover:text-blue-300 */
	}
</style>
