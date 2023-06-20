<script lang="ts">
	import { fade } from 'svelte/transition';
	import { MailIcon } from '@rgossiaux/svelte-heroicons/outline';

	let email = '';
	let error = '';
	let success = '';

	async function subscribe() {
		if (!email) {
			error = 'Please enter an email';
			return;
		}
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

<div class="message">
	{#if error}
		<span in:fade class="error">{error}</span>
	{/if}

	{#if success}
		<span in:fade class="success">{success}</span>
	{/if}
</div>

<br />
<br />

<style>
	.headerMailingList {
		text-align: center;
	}
	.sub {
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
		transition: 0.3s;
	}
	button:hover {
		background-color: #fff;
		box-shadow: var(--boxShadows);
	}

	.message {
		margin-bottom: var(--spacing-16);
		font-weight: 700;

		text-align: center;
		padding: 0.5rem 1rem;

		padding-top: 1rem;
	}

	.message .error {
		color: var(--red);
		padding: 0.2rem 0.6rem;
		border-radius: 0.3rem;

		box-shadow: var(--boxShadows);
	}

	.message .success {
		color: green;
		padding: 0.2rem 0.6rem;
		border-radius: 0.3rem;
		box-shadow: var(--boxShadows);
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
