<script lang="ts">
	import website from '$lib/config/website';

	const {
		author,
		ogLanguage,
		siteLanguage,
		siteShortTitle,
		siteTitle,
		description: siteDescription,
		siteUrl,
		themeColor,
		contactEmail
	} = website;

	// Props with sensible defaults
	export let title: string = siteTitle;
	export let description: string = siteDescription;
	export let slug: string = '';
	export let image: string = `${siteUrl}/android-chrome-512x512.png`;
	export let imageAlt: string = 'Enhanced Passes - Create digital passes for Google Wallet';
	export let type: string = 'website';
	export let keywords: string =
		'boarding pass, digital wallet, google wallet, apple wallet, passes, tickets, qr code, travel';
	export let noindex: boolean = false;
	export let nofollow: boolean = false;

	// Computed values
	$: pageTitle = title === siteTitle ? siteTitle : `${title} | ${siteTitle}`;
	$: canonicalUrl = slug ? `${siteUrl}/${slug}` : siteUrl;
	$: robots =
		noindex || nofollow
			? `${noindex ? 'noindex' : 'index'}, ${nofollow ? 'nofollow' : 'follow'}`
			: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1';

	// Structured data for the organization
	$: structuredData = {
		'@context': 'https://schema.org',
		'@type': 'WebApplication',
		name: siteTitle,
		description: description,
		url: siteUrl,
		applicationCategory: 'UtilityApplication',
		operatingSystem: 'Web',
		offers: {
			'@type': 'Offer',
			price: '0',
			priceCurrency: 'EUR'
		},
		creator: {
			'@type': 'Person',
			name: author
		},
		publisher: {
			'@type': 'Organization',
			name: siteTitle,
			url: siteUrl,
			contactPoint: {
				'@type': 'ContactPoint',
				email: contactEmail,
				contactType: 'customer service'
			}
		}
	};
</script>

<svelte:head>
	<!-- Basic Meta Tags -->
	<title>{pageTitle}</title>
	<meta name="description" content={description} />
	<meta name="keywords" content={keywords} />
	<meta name="robots" content={robots} />
	<meta name="theme-color" content={themeColor} />
	<meta name="color-scheme" content="light" />

	<!-- Language and Locale -->
	<meta name="language" content={siteLanguage} />

	<!-- Canonical URL -->
	<link rel="canonical" href={canonicalUrl} />

	<!-- Open Graph Meta Tags -->
	<meta property="og:type" content={type} />
	<meta property="og:title" content={pageTitle} />
	<meta property="og:description" content={description} />
	<meta property="og:url" content={canonicalUrl} />
	<meta property="og:site_name" content={siteTitle} />
	<meta property="og:locale" content={ogLanguage} />
	<meta property="og:image" content={image} />
	<meta property="og:image:alt" content={imageAlt} />
	<meta property="og:image:width" content="512" />
	<meta property="og:image:height" content="512" />
	<meta property="og:image:type" content="image/png" />

	<!-- Twitter Card Meta Tags -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={pageTitle} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={image} />
	<meta name="twitter:image:alt" content={imageAlt} />
	<meta name="twitter:site" content="@EnhancedPasses" />
	<meta name="twitter:creator" content="@GewoonJaap" />

	<!-- Additional Meta Tags for Mobile -->
	<meta name="format-detection" content="telephone=no" />
	<meta name="mobile-web-app-capable" content="yes" />
	<meta name="apple-mobile-web-app-capable" content="yes" />
	<meta name="apple-mobile-web-app-status-bar-style" content="default" />
	<meta name="apple-mobile-web-app-title" content={siteShortTitle} />

	<!-- Structured Data (JSON-LD) -->
	{@html `<script type="application/ld+json">${JSON.stringify(structuredData)}</script>`}

	<!-- Security Headers -->
	<meta name="referrer" content="strict-origin-when-cross-origin" />
</svelte:head>
