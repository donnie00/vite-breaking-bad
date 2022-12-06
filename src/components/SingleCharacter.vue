<template>
	<div class="col">
		<div class="card h-100">
			<img :src="character.imageUrl" class="card-img-top" alt="..." />
			<div class="card-body">
				<h5 class="card-title">
					{{ character.fullName }}
				</h5>
				<p class="card-text">{{ character.title }}</p>
				<p>{{ character.family }}</p>
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
