<script lang="ts">
	let donationAmount = 0;

	function handleDonate() {
		console.log('Donation amount:', donationAmount);
	}
</script>

<h1>Donate</h1>

<p>Select an amount to donate:</p>
<div>
	<label>
		<input type="radio" bind:group={donationAmount} value="10" />
		$10
	</label>
</div>
<div>
	<label>
		<input type="radio" bind:group={donationAmount} value="20" />
		$20
	</label>
</div>
<div>
	<label>
		<input type="radio" bind:group={donationAmount} value="50" />
		$50
	</label>
</div>

<button on:click={handleDonate}>Donate</button>

<style>
	main {
		max-width: 400px;
		margin: 0 auto;
		padding: 20px;
		font-family: Arial, sans-serif;
	}

	h1 {
		text-align: center;
	}

	div {
		margin-bottom: 10px;
	}

	button {
		display: block;
		margin: 20px auto;
		padding: 10px 20px;
		font-size: 16px;
	}
</style>
