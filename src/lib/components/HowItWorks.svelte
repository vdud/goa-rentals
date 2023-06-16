<script lang="ts">
	const goToSelectionProcss = () => {
		document.getElementById('selectionTopHeader')!.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
	};
</script>

<h2 class="headerMain">How it Works?</h2>
<br />
<div class="hiwCommon selectLocation">
	<div class="hiwText">
		<h2 class="textStyle textStyle2">Select Location</h2>
		<p class="textStyle textStyle2 pTextStyle">Choose your preferred location and select your desired vehicle.</p>
	</div>
</div>

<div class="hiwCommon choosePickupAndDropOffTime hiwCommon2">
	<div class="hiwText">
		<h2 class="textStyle">Choose Pickup and Drop-off Time</h2>
		<p class="textStyle pTextStyle">Select your preferred pickup and drop-off time and date.</p>
	</div>
</div>

<div class="hiwCommon selectVehicle">
	<div class="hiwText">
		<h2 class="textStyle textStyle2">Select Vehicle</h2>
		<p class="textStyle textStyle2 pTextStyle">Choose your preferred vehicle from our extensive fleet.</p>
	</div>
</div>

<div class="hiwCommon rideYourHeartsOut hiwCommon2">
	<div class="hiwText">
		<h2 class="textStyle">Ride Your Heart's Out</h2>
		<p class="textStyle pTextStyle">Enjoy your ride and explore the beauty of Goa.</p>
	</div>
</div>
<br />

<div class="goToSelectionProcess">
	<button class="goToSelectionProcessBtn" on:click={goToSelectionProcss}>
		<h2>🛵 Go to Selection Process 💨</h2>
	</button>
</div>
<br />
<br />
<br />

<style>
	.goToSelectionProcess {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.goToSelectionProcessBtn {
		background-color: var(--secondary);
		box-shadow: var(--boxShadows);
		border: none;
		border-radius: 5px;
		padding: 10px;
		transition: 0.3s;
	}
	.goToSelectionProcessBtn:hover {
		box-shadow: var(--boxShadows);
		background-color: #000;
	}

	.goToSelectionProcessBtn > h2 {
		text-align: center;
		color: #fff;
		text-shadow: var(--boxShadows);
	}
	.pTextStyle {
		color: #444;
		opacity: 0.8;
		font-weight: 100;
	}
	.textStyle {
		width: 90%;
	}
	.textStyle2 {
		text-align: end;
	}
	.hiwText {
		width: 70%;
		height: 100%;
		background-color: yellow;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.hiwCommon {
		height: 200px;
		overflow: hidden;
		position: relative;
		background-color: red;

		display: flex;
		justify-content: start;
		align-items: center;
	}
	.hiwCommon2 {
		justify-content: end;
	}
	.headerMain {
		text-align: center;
	}
</style>
