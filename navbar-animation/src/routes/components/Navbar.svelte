<script lang="ts">
	import { page } from '$app/stores';
	$: currentPage = $page.url.pathname;

	let barWidth: number;
	let barTranslate: number;

	let linksWrapper: HTMLElement;
	let currentLink: HTMLElement;

	const LINKS = [
		{ name: 'Acceuil', href: '/' },
		{ name: 'Collaborateurs', href: '/equipe' },
		{ name: 'Contact', href: '/contact' },
		{ name: 'Rejoindre', href: '/rejoindre' }
	];

	$: {
		if (currentLink) {
			barWidth = currentLink.clientWidth;
			barTranslate = currentLink.offsetLeft;
		}
	}
</script>

<nav>
	<a class="logo-link" href="/">
		<img src="/svelte-francophone-logo.png" alt="logo" />
		<h1>
			<span>SVELTE</span> SOCIETY <br /> FRANCOPHONE
		</h1>
	</a>

	<div class="relative">
		<!-- Top Bar -->
		<span
			class="bar top-bar"
			style="width: {barWidth}px; translate: {barTranslate}px;"
			aria-hidden="true"
		/>

		<!-- Bottom Bar -->
		<span
			class="bar bottom-bar"
			style="width: {barWidth}px; translate: {barTranslate}px;"
			aria-hidden="true"
		/>

		<!-- Links -->
		<div class="links-wrapper" bind:this={linksWrapper}>
			{#each LINKS as link}
				{#if link.href === currentPage}
					<a
						class:active={currentPage === link.href}
						href={link.href}
						bind:this={currentLink}
						aria-current={currentPage === link.href ? 'page' : undefined}>{link.name}</a
					>
				{:else}
					<a href={link.href}>{link.name}</a>
				{/if}
			{/each}
		</div>
	</div>
</nav>

<style>
	nav {
		display: flex;
		width: 100vw;
		background-color: #eaebf4;
		color: #30395c;
		font-weight: 700;
		text-transform: uppercase;
		justify-content: space-between;
		align-items: center;
		padding: 0 2rem;
	}

	.logo-link {
		display: flex;
		align-items: center;
		text-decoration: none;
		color: #30395c;
	}

	.logo-link img {
		height: 4rem;
		padding: 0.25rem;
	}

	h1 {
		font-size: 1.25rem;
		text-align: center;
	}

	h1 span {
		color: #ff3c00;
	}

	[aria-current='page'] {
		color: #ff3c00;
	}

	.relative {
		position: relative;
	}

	.links-wrapper a {
		padding: 0.25rem;
	}

	.links-wrapper a:hover {
		color: #ff3c00;
	}

	.bar {
		height: 0.25rem;
		background-color: #ff3c00;
		position: absolute;
		transition: all ease-in-out;
	}

	.top-bar {
		top: -0.4rem;
		transition-duration: 300ms;
	}

	.bottom-bar {
		bottom: -0.25rem;
		transition-duration: 200ms;
	}
</style>
