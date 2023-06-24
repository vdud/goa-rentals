<script lang="ts">
	import { loadStripe } from '@stripe/stripe-js';
	import { Elements } from 'svelte-stripe';
	import { onMount } from 'svelte';

	// import { PUBLIC_STRIPE_KEY } from '$env/static/public';
	let stripe: any = null;

	onMount(async () => {
		stripe = await loadStripe(import.meta.env.PUBLIC_STRIPE_KEY);
	});
</script>

{#if stripe}
	<Elements {stripe}>
		<!-- this is where your Stripe components go -->
	</Elements>
{/if}
