<script lang="ts">
	import { bookingId } from '$lib/stores/bookingStore';

	const sendAllData = async () => {
		const Name = (document.querySelector('input[name="Name"]') as HTMLInputElement).value;
		const Email = (document.querySelector('input[name="Email"]') as HTMLInputElement).value;
		const PhoneNumber = (document.querySelector('input[name="PhoneNumber"]') as HTMLInputElement).value;

		const submitBtn = document.getElementById('submitBtn') as HTMLButtonElement;

		if (Name === '' || Email === '' || PhoneNumber === '') {
			alert('Please fill all the fields');
			return;
		}
		if (Email.indexOf('@') === -1) {
			alert('Please enter a valid email');
			return;
		}

		// if lessthan 10 and not number
		if (PhoneNumber.length !== 10 || isNaN(Number(PhoneNumber))) {
			alert('Please enter a valid phone number');
			return;
		}

		const allData = {
			Name,
			Email,
			PhoneNumber
		};

		const response = await fetch('/api/add-page-two-data', {
			method: 'post',
			body: JSON.stringify({
				$bookingId,
				allData
			}),
			headers: { 'Content-Type': 'application/json' }
		});
		const res = await response.json();

		console.log('res', res);

		if (res.success) {
			$bookingId = {};
			window.location.href = '/booking-success';
		}
	};
</script>

<div class="inputContent input1">
	<input class="selectionInput" name="Name" type="text" placeholder="Enter Your Name" />
</div>
<div class="inputContent input2">
	<input class="selectionInput" name="Email" type="email" placeholder="Enter Your eMail" />
</div>
<div class="inputContent input3">
	<input class="selectionInput" name="PhoneNumber" type="tel" placeholder="Enter Your Phone Number" />
</div>
<div class="Btn">
	<button id="submitBtn" on:click={sendAllData} class="selectionInput">Submit</button>
</div>

<style>
	.PageTwo {
		color: #000;

		width: 100%;
		height: 100%;

		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.selectionInput {
		margin: 0;
		padding: 12px 15px;
		width: fit-content;
		margin-left: 20px;
		border: none;
		border-radius: 5px;
		width: 100%;

		margin: 7px 0;

		color: #fff;
		background-color: #0009;
		box-shadow: var(--boxShadows), var(--boxInsetShadows);

		font-weight: 500;
	}
	.selectionInput::placeholder {
		color: #fff;
		text-transform: uppercase;
	}

	.inputContent {
		width: 60%;
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
