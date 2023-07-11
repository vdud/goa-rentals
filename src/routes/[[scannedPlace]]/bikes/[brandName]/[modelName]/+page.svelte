<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
	const vehicleData = JSON.parse(data.body.vehicleData);
	let average: Number;
	average = new Number(vehicleData.average);

	// const Mileage = new Decimal128(vehicleData.average);
	// console.log('Mileage', Mileage);
</script>
