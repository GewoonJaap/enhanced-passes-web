<script lang="ts">
	import { locale } from 'svelte-i18n';
	import { browser } from '$app/environment';

	function switchLanguage(newLocale: string) {
		if (browser) {
			locale.set(newLocale);
			localStorage.setItem('locale', newLocale);
		}
	}

	$: currentLocale = $locale || 'en';
</script>

<div class="language-switcher">
	<button
		class="lang-button"
		class:active={currentLocale === 'en'}
		on:click={() => switchLanguage('en')}
		aria-label="Switch to English"
	>
		🇺🇸 EN
	</button>
	<button
		class="lang-button"
		class:active={currentLocale === 'nl'}
		on:click={() => switchLanguage('nl')}
		aria-label="Switch to Dutch"
	>
		🇳🇱 NL
	</button>
</div>

<style>
	.language-switcher {
		display: flex;
		gap: 0.5rem;
		align-items: center;
	}

	.lang-button {
		padding: 0.5rem 0.75rem;
		border: 1px solid #d1d5db;
		border-radius: 0.375rem;
		background-color: white;
		color: #374151;
		font-size: 0.875rem;
		font-weight: 500;
		cursor: pointer;
		transition: all 0.2s ease;
		display: flex;
		align-items: center;
		gap: 0.25rem;
	}

	.lang-button:hover {
		background-color: #f9fafb;
		border-color: #9ca3af;
	}

	.lang-button.active {
		background: linear-gradient(to right, #2563eb, #9333ea);
		color: white;
		border-color: transparent;
	}

	.lang-button.active:hover {
		background: linear-gradient(to right, #1d4ed8, #7e22ce);
	}
</style>
