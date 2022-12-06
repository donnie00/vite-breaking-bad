<template>
	<div class="d-flex justify-content-between align-items-center mb-3">
		<h4 class="bg-dark text-white p-3 rounded-pill">
			You found {{ this.store.dataInfo.count }} characters
		</h4>
		<div class="pages">
			<span>&LeftArrow;</span>
			<span class="fw-bold px-4">1 - {{ this.store.dataInfo.pages }}</span>
			<span>&RightArrow;</span>
		</div>
		<CharacterFilter />
	</div>
</template>

<script>
import {store} from '../store.js';

import CharacterFilter from './CharacterFilter.vue';

export default {
	components: {CharacterFilter},

	data() {
		return {
			store,
		};
	},
};
</script>
<style lang="scss"></style>
