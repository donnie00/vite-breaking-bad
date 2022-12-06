<template>
	<div class="loader text-center text-light">
		<h2 class="fw-bold">Sto estraendo i personaggi...</h2>
		<img src="/rick-and-morty-icon.png" alt="" />
	</div>
</template>
<script>
export default {};
</script>
<style lang="scss">
.loader {
	height: 100vh;

	img {
		animation-name: loading;
		animation-timing-function: linear;
		animation-duration: 1s;
		animation-iteration-count: infinite;
		animation-direction: alternate;
	}
}

@keyframes loading {
	0% {
		scale: 1.1;
	}

	100% {
		scale: 1;
	}
}
</style>
