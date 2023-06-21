<script lang="ts">
	import { bookingId } from '$lib/stores/bookingStore';

	import type { PageData } from './$types';

	export let data: PageData;

	const copyToClip = () => {
		navigator.clipboard.writeText(data.body.trackingId);
		alert('Copied to clipboard');
	};
	$bookingId = data.body.trackingId;
</script>

<div class="bookingSuccessFul">
	<h1>Yey</h1>
	<h2>Booking Successful</h2>
	<br />
	<p>Tracking ID: <button class="copyBtn" on:click={copyToClip}>{data.body.trackingId} 📋</button></p>
	<br />
	<p>We will contact you!</p>
</div>

<style>
	.copyBtn {
		background-color: #999;
		border-radius: 3px;
		padding: 4px 10px;
		box-shadow: var(--boxInsetShadows);
	}
	.bookingSuccessFul {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 300px;
	}
</style>
