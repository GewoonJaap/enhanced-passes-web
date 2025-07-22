<script lang="ts">
	import { goto } from '$app/navigation';
	import { HomeRoute } from '$lib/const/routes';
	import { onMount } from 'svelte';
	import { setupLocale } from '$lib/locale/i18';
	import { _ } from 'svelte-i18n';
	import { ANDROID_APP_LINK } from '$lib/const/routes';
	import { Smartphone, Shield, Zap, QrCode, Music } from 'lucide-svelte';

	setupLocale();

	// Function to generate a future date for the Coldplay example
	function getFutureColdplayDate(): string {
		const now = new Date();
		// Add 3-6 months to current date to ensure it's always in the future
		const futureDate = new Date(now.getFullYear(), now.getMonth() + 4, 15);

		// If the calculated date is in the past, add a year
		if (futureDate <= now) {
			futureDate.setFullYear(futureDate.getFullYear() + 1);
		}

		// Format as "15 Jun 2025" style
		const options: Intl.DateTimeFormatOptions = {
			day: '2-digit',
			month: 'short',
			year: 'numeric'
		};
		return futureDate.toLocaleDateString('en-GB', options);
	}

	onMount(async () => {
		await import('@lottiefiles/lottie-player');
	});
</script>

<section class="mobile-app-promotion-section">
	<div class="section-content">
		<div class="mobile-app-promotion-inner">
			<div class="icon-wrapper smartphone-icon-wrapper">
				<Smartphone size={40} class="icon" color="white" />
			</div>
			<h2 class="section-title">{$_('ANDROID_APP_SECTION_TITLE')}</h2>
			<p class="section-description">
				{$_('ANDROID_APP_DESCRIPTION_1')}
			</p>
			<p class="section-description">
				{$_('ANDROID_APP_DESCRIPTION_2')}
			</p>
			<a href={ANDROID_APP_LINK} target="_blank" rel="noopener noreferrer" class="download-button">
				{$_('DOWNLOAD_APP_BUTTON')}
			</a>
		</div>
	</div>
</section>

<section class="benefits-section">
	<div class="section-content">
		<div class="section-header">
			<h2 class="section-title">
				{$_('BENEFITS_SECTION_TITLE')}
				{new Date().getFullYear()}
			</h2>
		</div>

		<div class="benefits-grid">
			<div>
				<div class="benefits-list">
					<div class="benefit-item">
						<div class="icon-wrapper benefit-icon-blue">
							<Shield size={20} class="icon" color="#2563eb" />
						</div>
						<div>
							<h3 class="benefit-title">{$_('BENEFIT_1_TITLE')}</h3>
							<p class="benefit-description">
								{$_('BENEFIT_1_DESCRIPTION')}
							</p>
						</div>
					</div>

					<div class="benefit-item">
						<div class="icon-wrapper benefit-icon-purple">
							<Zap size={20} class="icon" color="#9333ea" />
						</div>
						<div>
							<h3 class="benefit-title">{$_('BENEFIT_2_TITLE')}</h3>
							<p class="benefit-description">
								{$_('BENEFIT_2_DESCRIPTION')}
							</p>
						</div>
					</div>

					<div class="benefit-item">
						<div class="icon-wrapper benefit-icon-green">
							<QrCode size={20} class="icon" color="#22c55e" />
						</div>
						<div>
							<h3 class="benefit-title">{$_('BENEFIT_3_TITLE')}</h3>
							<p class="benefit-description">
								{$_('BENEFIT_3_DESCRIPTION')}
							</p>
						</div>
					</div>
				</div>
			</div>

			<div class="example-pass-card-container">
				<div class="example-pass-card">
					<div class="example-pass-header">
						<div class="example-pass-header-content">
							<Music size={24} class="icon" color="white" />
							<span class="example-pass-type">CONCERT</span>
						</div>
						<h3 class="example-pass-title">{$_('EXAMPLE_PASS_EVENT')}</h3>
						<p class="example-pass-location">{$_('EXAMPLE_PASS_VENUE')}</p>
					</div>

					<div class="example-pass-details">
						<div class="detail-row">
							<span class="detail-label">{$_('EXAMPLE_PASS_DATE')}</span>
							<span class="detail-value">{getFutureColdplayDate()}</span>
						</div>
						<div class="detail-row">
							<span class="detail-label">{$_('EXAMPLE_PASS_TIME')}</span>
							<span class="detail-value">20:00</span>
						</div>
						<div class="detail-row">
							<span class="detail-label">{$_('EXAMPLE_PASS_SECTION')}</span>
							<span class="detail-value">A12</span>
						</div>
						<div class="detail-row">
							<span class="detail-label">{$_('EXAMPLE_PASS_ROW')}</span>
							<span class="detail-value">15</span>
						</div>
					</div>

					<div class="example-pass-barcode-section">
						<div class="example-pass-barcode-container">
							<div class="barcode-label">{$_('EXAMPLE_PASS_BARCODE')}</div>
							<div class="barcode-value">|||| ||| |||| |||</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.mobile-app-promotion-section {
		padding: 4rem 0; /* py-16 */
		background: linear-gradient(to right, #eff6ff, #f3e8ff); /* from-blue-50 to-purple-50 */
	}

	.section-content {
		max-width: 896px; /* max-w-4xl */
		margin: 0 auto;
		padding: 0 1rem; /* px-4 sm:px-6 lg:px-8 */
		text-align: center;
	}

	.mobile-app-promotion-inner {
		margin-bottom: 2rem; /* mb-8 */
	}

	.icon-wrapper {
		display: flex;
		align-items: center;
		justify-content: center;
		margin: 0 auto 1.5rem auto; /* mx-auto mb-6 */
	}

	.smartphone-icon-wrapper {
		width: 5rem; /* w-20 */
		height: 5rem; /* h-20 */
		background: linear-gradient(to right, #3b82f6, #9333ea); /* from-blue-500 to-purple-500 */
		border-radius: 1.5rem; /* rounded-3xl */
		transform: rotate(12deg);
		transition: transform 0.3s ease;
	}

	.smartphone-icon-wrapper:hover {
		transform: rotate(0deg);
	}

	.icon {
		color: white;
	}

	.section-title {
		font-size: 1.875rem; /* text-3xl */
		font-weight: bold;
		color: #1f2937; /* text-gray-900 */
		margin-bottom: 1rem; /* mb-4 */
	}

	.section-description {
		font-size: 1.125rem; /* text-lg */
		color: #4b5563; /* text-gray-600 */
		margin-bottom: 2rem; /* mb-8 */
		max-width: 48rem; /* max-w-2xl */
		margin-left: auto;
		margin-right: auto;
		line-height: 1.625; /* leading-relaxed */
	}

	.download-button {
		display: block; /* Ensure it behaves as a block element */
		text-align: center; /* Center the text */
		padding: 0.75rem 1.5rem; /* size="lg" */
		font-size: 1.125rem; /* text-lg */
		font-weight: 600; /* font-semibold */
		border-radius: 0.375rem; /* rounded-md */
		color: white;
		background: linear-gradient(to right, #2563eb, #9333ea); /* from-blue-600 to-purple-600 */
		border: none;
		cursor: pointer;
		transition: background-color 0.3s ease;
		line-height: 1.5; /* Ensure enough space between wrapped lines */
	}

	.download-button:hover {
		background: linear-gradient(
			to right,
			#1d4ed8,
			#7e22ce
		); /* hover:from-blue-700 hover:to-purple-700 */
	}

	.benefits-section {
		padding: 4rem 0; /* py-16 */
		background-color: white;
	}

	.benefits-grid {
		display: grid;
		gap: 3rem; /* gap-12 */
		align-items: center;
	}

	@media (min-width: 768px) {
		/* md */
		.benefits-grid {
			grid-template-columns: repeat(2, minmax(0, 1fr)); /* md:grid-cols-2 */
		}
	}

	.benefits-list {
		display: flex;
		flex-direction: column;
		gap: 1.5rem; /* space-y-6 */
	}

	.benefit-item {
		display: flex;
		align-items: center;
		gap: 1rem; /* space-x-4 */
	}

	.benefit-icon-blue {
		width: 2rem; /* w-8 */
		height: 2rem; /* h-8 */
		background-color: #bfdbfe; /* bg-blue-100 */
		border-radius: 0.5rem; /* rounded-lg */
		flex-shrink: 0;
	}

	.benefit-icon-purple {
		width: 2rem; /* w-8 */
		height: 2rem; /* h-8 */
		background-color: #e9d5ff; /* bg-purple-100 */
		border-radius: 0.5rem; /* rounded-lg */
		flex-shrink: 0;
	}

	.benefit-icon-green {
		width: 2rem; /* w-8 */
		height: 2rem; /* h-8 */
		background-color: #dcfce7; /* bg-green-100 */
		border-radius: 0.5rem; /* rounded-lg */
		flex-shrink: 0;
	}

	.benefit-icon-blue .icon {
		color: #2563eb; /* text-blue-600 */
	}

	.benefit-icon-purple .icon {
		color: #9333ea; /* text-purple-600 */
	}

	.benefit-icon-green .icon {
		color: #22c55e; /* text-green-600 */
	}

	.benefit-title {
		font-weight: 600; /* font-semibold */
		color: #1f2937; /* text-gray-900 */
		margin-bottom: 0.5rem; /* mb-2 */
	}

	.benefit-description {
		color: #4b5563; /* text-gray-600 */
	}

	.example-pass-card-container {
		text-align: center;
	}

	.example-pass-card {
		background-color: white;
		border-radius: 1rem; /* rounded-2xl */
		box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1); /* shadow-xl */
		padding: 1.5rem; /* p-6 */
		max-width: 24rem; /* max-w-sm */
		margin: 0 auto;
		transform: scale(1);
		transition: transform 0.3s ease;
	}

	.example-pass-card:hover {
		transform: scale(1.05);
	}

	.example-pass-header {
		background: linear-gradient(to right, #9333ea, #ec4899); /* from-purple-500 to-pink-500 */
		border-radius: 0.5rem; /* rounded-lg */
		padding: 1.5rem; /* p-6 */
		color: white;
		margin-bottom: 1rem; /* mb-4 */
	}

	.example-pass-header-content {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 1rem; /* mb-4 */
	}

	.example-pass-type {
		font-size: 0.875rem; /* text-sm */
		font-weight: 500; /* font-medium */
	}

	.example-pass-title {
		font-size: 1.125rem; /* text-lg */
		font-weight: bold;
		margin-bottom: 0.25rem; /* mb-1 */
	}

	.example-pass-location {
		font-size: 0.875rem; /* text-sm */
		opacity: 0.9;
	}

	.example-pass-details {
		display: flex;
		flex-direction: column;
		gap: 0.75rem; /* space-y-3 */
		text-align: left;
	}

	.detail-row {
		display: flex;
		justify-content: space-between;
	}

	.detail-label {
		color: #4b5563; /* text-gray-600 */
	}

	.detail-value {
		font-weight: 500; /* font-medium */
	}

	.example-pass-barcode-section {
		margin-top: 1.5rem; /* mt-6 */
		padding-top: 1rem; /* pt-4 */
		border-top: 1px solid #e5e7eb; /* border-t border-gray-200 */
	}

	.example-pass-barcode-container {
		background-color: #f3f4f6; /* bg-gray-100 */
		border-radius: 0.5rem; /* rounded-lg */
		padding: 0.75rem; /* p-3 */
		margin-bottom: 0.75rem; /* mb-3 */
	}

	.barcode-label {
		font-size: 0.75rem; /* text-xs */
		color: #4b5563; /* text-gray-600 */
		margin-bottom: 0.25rem; /* mb-1 */
	}

	a {
		text-decoration: none;
	}

	.barcode-value {
		font-family: monospace; /* font-mono */
		font-size: 0.875rem; /* text-sm */
	}
</style>
