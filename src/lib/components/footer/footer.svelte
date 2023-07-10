<script lang="ts">
</script>

<div class="footer">
	<span>© {new Date().getFullYear()} - Enhanced Passes</span>
	<span>
		Made with <span class="emojiFont">❤️</span> by
		<a class="githubProfile" target="_blank" rel="noreferrer" href="https://github.com/GewoonJaap"
			>Jaap</a
		>
	</span>
	<span class="addNewPassType">
		<a
			href="https://github.com/GewoonJaap/enhanced-passes-web/issues/new/choose"
			target="_blank"
			rel="noreferrer"
		>
			Suggest a new pass type
		</a>
	</span>
	<span class="downloadApp">
		<a
			href="https://play.google.com/store/apps/details?id=nl.gardensnakes.enhancedpasses"
			target="_blank"
			rel="noreferrer"
		>
			Download our Android app
		</a>
	</span>
</div>

<style>
	.footer {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		background-color: white;
		margin-top: 2rem;
		flex-shrink: 0;
	}

	.footer span {
		font-size: 1.5rem;
		font-weight: 500;
		color: #000;
		margin: 0.5rem 0;
		text-align: center;
	}

	.githubProfile {
		color: #000;
		text-decoration: underline;
	}
	.addNewPassType {
		font-size: 1.25em !important;
		font-weight: 500;
		color: #000;
		margin: 0.5rem 0;
	}
	.downloadApp {
		font-size: 1.25em !important;
		font-weight: 500;
		color: #000;
		margin: 0.5rem 0;
	}
</style>
