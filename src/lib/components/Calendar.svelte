<script lang="ts">
	// flatpicker
	import flatpickr from 'flatpickr';
	import { onMount } from 'svelte';

	let dateFrom = new Date();
	let dateTo = new Date();

	onMount(() => {
		flatpickr('#datetime', {
			enableTime: true,
			dateFormat: 'Y-m-d H:i',
			minDate: 'today',
			maxDate: new Date().fp_incr(14)
		});
	});
</script>

<input type="text" name="datetime" id="datetime" bind:value={$dateFrom} placeholder="Choose Date and Time" />
