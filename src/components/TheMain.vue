<template>
	<main class="py-3">
		<div class="bg-secondary p-3 rounded-3">
			<CharactersList v-cloak />
		</div>
	</main>
</template>
<script>
import CharactersList from './CharactersList.vue';
export default {
	components: {CharactersList},
};
</script>
<style lang="scss">
[v-cloak] {
	display: none;
}
</style>
