<script lang="ts">
	import { onMount } from 'svelte';

	let contactId: HTMLElement | null;
	let eMailId: HTMLElement | null;

	const contactContent = '+91 8700088011';
	const eMailContent = 'varundudeja96@gmail.com';

	const contactBtnClick = () => {
		const contactId = document.getElementById('contactId');

		if (!contactId) return;

		if (contactId.innerHTML === contactContent) {
			contactId.innerHTML = 'Contact Number';
			contactId.style.backgroundColor = '#ddd';
		} else {
			contactId.style.backgroundColor = '#ffe8d6';
			contactId.innerHTML = contactContent;
		}
	};
	const eMailBtnClick = () => {
		const eMailId = document.getElementById('eMailId');

		if (!eMailId) return;

		if (eMailId.innerHTML === eMailContent) {
			eMailId.innerHTML = 'eMail';
			eMailId.style.backgroundColor = '#ddd';
		} else {
			eMailId.innerHTML = eMailContent;
			eMailId.style.backgroundColor = '#ffe8d6';
		}
	};
</script>

<div class="alertDiv">
	<div class="alerDivContents contactNumber">
		<button on:click={contactBtnClick}>
			<p class="contactContent pContact" id="contactId">Contact Number</p>
		</button>
	</div>
	<div class="alerDivContents eMail">
		<button on:click={eMailBtnClick}>
			<p class="contactContent pMail" id="eMailId">eMail</p>
		</button>
	</div>
</div>

<style>
	.contactContent {
		margin: 0.5rem 0;
	}
	.alertDiv {
		padding-bottom: 5px;

		display: flex;
	}
	p {
		background-color: #ddd;
		padding: 5px 10px;
		border-radius: 5px;
		box-shadow: var(--boxShadows);
		transition: all 0.3s ease-in-out;
	}
	.alerDivContents {
		width: 100%;
	}
	button {
		width: 100%;
		border-radius: 0;
		background-color: transparent;
	}
</style>
