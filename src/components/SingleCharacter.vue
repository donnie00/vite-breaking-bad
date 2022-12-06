<template>
	<div class="col">
		<div class="card text-center text-bg-dark h-100">
			<img :src="character.image" class="card-img-top" alt="..." />
			<div class="card-body">
				<h4 class="card-title fw-bold">
					{{ character.name }}
				</h4>
				<p class="card-text">
					{{ character.species }}, {{ character.gender }}
				</p>
			</div>
			<div class="card-footer border-secondary">
				<small class="text-muted">Status: {{ character.status }}</small>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	props: {
		character: {
			type: Object,
			required: true,
		},
	},
};
</script>
<style lang=""></style>
