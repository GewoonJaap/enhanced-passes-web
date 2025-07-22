<script lang="ts">
	import { setupLocale } from '$lib/locale/i18';
	import { onMount } from 'svelte';
	import { locale } from 'svelte-i18n';
	import { browser } from '$app/environment';

	// Initialize i18n
	setupLocale();

	// Load saved locale from localStorage on mount
	onMount(() => {
		if (browser) {
			const savedLocale = localStorage.getItem('locale');
			if (savedLocale && (savedLocale === 'en' || savedLocale === 'nl')) {
				locale.set(savedLocale);
			}
		}
	});

	// Save locale changes to localStorage
	$: if (browser && $locale) {
		localStorage.setItem('locale', $locale);
	}
</script>

<slot />
