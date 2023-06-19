<script lang="ts">
	import { fade } from 'svelte/transition';
	import { MailIcon } from '@rgossiaux/svelte-heroicons/outline';

	let email = '';
	let error = '';
	let success = '';

	async function subscribe() {
		const response = await fetch('/api/subscribe', {
			method: 'post',
			body: JSON.stringify(email),
			headers: { 'Content-Type': 'application/json' }
		});
		const subscribe = await response.json();

		if (subscribe.error) {
			success = '';
			error = subscribe.error;
		}

		if (subscribe.success) {
			error = '';
			success = subscribe.success;
		}
	}
</script>

<br />
<br />
<br />
<br />
<h2 class="headerMailingList">Subscribe to our mailing list ✉️</h2>
<br />
<form class="formClass" on:submit|preventDefault={subscribe}>
	<label for="email" class="sr-only">Enter your email</label>
	<input bind:value={email} type="email" id="email" name="email" placeholder="bro@letsgo.com" />
	<button type="submit">
		<span class="sub">Subscribe</span>
	</button>
</form>

<br />
<br />

<div class="message">
	{#if error}
		<span in:fade class="error">{error}</span>
	{/if}

	{#if success}
		<span in:fade class="success">{success}</span>
	{/if}
</div>

<style>
	.headerMailingList {
		text-align: center;
	}
	.sub {
		background-color: var(--primaryTheme);
		padding: 1rem;
		border-radius: 10px;
	}
	form {
		display: flex;
		justify-content: center;
		height: 48px;
		margin: 0 10%;
		border: 1px solid var(--clr-input-border);
		box-shadow: var(--shadow-sm);

		border-radius: 10px;
	}

	input {
		width: 100%;
		padding: 1rem;
		background-color: #fff;
		border-radius: 20px 0 0 20px;
		box-shadow: var(--boxInsetShadows);
		flex: 1;
		border: none;
		font-weight: 800;
	}

	input::placeholder {
		color: var(--white);
		font-weight: 400;
	}

	button {
		border-radius: 0 20px 20px 0;

		padding: 2px;
		color: var(--clr-input-txt);
		background-color: #bbb;
		font-weight: 700;
	}

	.message {
		margin-bottom: var(--spacing-16);
		font-weight: 700;
	}

	.message .error {
		color: hsl(9 100% 64%);
	}

	.message .success {
		color: var(--clr-primary);
	}

	@media (min-width: 860px) {
		button {
			display: flex;
			align-items: center;
			gap: var(--spacing-4);
		}

		button :global(svg) {
			display: block;
		}
	}
</style>
